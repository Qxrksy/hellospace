import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { randomUUID } from "crypto";

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password validation function
function validatePassword(password: string): string | null {
	if (password.length < 8) {
		return "Password must be at least 8 characters";
	}
	if (!/[A-Z]/.test(password)) {
		return "Password must contain at least one uppercase letter";
	}
	if (!/[a-z]/.test(password)) {
		return "Password must contain at least one lowercase letter";
	}
	if (!/[0-9]/.test(password)) {
		return "Password must contain at least one number";
	}
	return null;
}

export async function POST(req: Request) {
	try {
		const { email, password, name, captchaToken } = await req.json();

		// Validate required fields
		if (!email || !password) {
			return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
		}

		// Validate captcha token
		if (!captchaToken) {
			return NextResponse.json({ error: "Captcha verification required" }, { status: 400 });
		}

		// Basic captcha token validation (in production, you'd want more sophisticated validation)
		// For now, we just check if it exists and has the expected format
		try {
			const decoded = atob(captchaToken);
			if (!decoded.startsWith('captcha-')) {
				return NextResponse.json({ error: "Invalid captcha token" }, { status: 400 });
			}
		} catch {
			return NextResponse.json({ error: "Invalid captcha token" }, { status: 400 });
		}

		// Validate email format
		if (!EMAIL_REGEX.test(email)) {
			return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
		}

		// Validate password strength
		const passwordError = validatePassword(password);
		if (passwordError) {
			return NextResponse.json({ error: passwordError }, { status: 400 });
		}

		const normalizedEmail = email.toLowerCase().trim();

		// Check if email already exists
		const existing = await db.users.findUnique({ where: { email: normalizedEmail } });
		if (existing) {
			return NextResponse.json({ error: "Email already in use" }, { status: 409 });
		}

		// Hash password
		const passwordHash = await hash(password, 12);

		// Create user
		const user = await db.users.create({
			data: {
				id: randomUUID(),
				email: normalizedEmail,
				passwordHash,
				name: name?.trim() || null,
				updatedAt: new Date(),
			},
			select: { id: true, email: true, name: true },
		});

		return NextResponse.json({ ok: true, user });
	} catch (e) {
		console.error("Signup error:", e);
		return NextResponse.json({ error: "An unexpected error occurred. Please try again." }, { status: 500 });
	}
}





