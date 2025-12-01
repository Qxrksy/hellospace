import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import { db } from "@/lib/db";
import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
	adapter: PrismaAdapter(db) as any,
	session: { strategy: "jwt" },
	providers: [
		Credentials({
			name: "Email & Password",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials) {
				const email = credentials?.email?.toLowerCase().trim();
				const password = credentials?.password ?? "";
				if (!email || !password) return null;

				const user = await db.user.findUnique({ where: { email } });
				if (!user || !user.passwordHash) return null;

				const ok = await compare(password, user.passwordHash);
				if (!ok) return null;

				return { id: user.id, email: user.email, name: user.name, image: user.image } as any;
			}
		}),
		// TODO: Add OAuth providers later
	],
	pages: {
		signIn: "/login"
	},
};


