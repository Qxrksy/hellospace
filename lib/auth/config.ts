import { compare } from "bcrypt";
import { db } from "@/lib/db";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
	session: { strategy: "jwt" },
	providers: [
		Credentials({
			name: "Email & Password",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials): Promise<User | null> {
				try {
					const email = credentials?.email?.toLowerCase().trim();
					const password = credentials?.password ?? "";

					if (!email || !password) {
						return null;
					}

					const user = await db.users.findUnique({ where: { email } });
					if (!user || !user.passwordHash) {
						return null;
					}

					const ok = await compare(password, user.passwordHash);
					if (!ok) {
						return null;
					}

					return {
						id: user.id,
						email: user.email,
						name: user.name ?? undefined,
						image: user.image ?? undefined,
						onboardedAt: user.onboardedAt?.toISOString() ?? null
					} as User;
				} catch (error) {
					console.error("Auth error:", error);
					return null;
				}
			}
		}),
		// TODO: Add OAuth providers later
	],
	pages: {
		signIn: "/login"
	},
	callbacks: {
		async jwt({ token, user, trigger }) {
			if (user) {
				token.id = user.id;
				token.onboardedAt = (user as any).onboardedAt;
			}

			// Refresh onboarding status on update trigger
			if (trigger === "update") {
				const dbUser = await db.users.findUnique({
					where: { email: token.email as string },
					select: { onboardedAt: true }
				});
				if (dbUser) {
					token.onboardedAt = dbUser.onboardedAt?.toISOString() ?? null;
				}
			}

			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id as string;
				(session.user as any).onboardedAt = token.onboardedAt;
			}
			return session;
		}
	}
};

export const authOptions = authConfig;
