import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";

export async function POST(req: Request) {
	try {
		const { email, password, name } = await req.json();
		if (!email || !password) {
			return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
		}
		const existing = await db.user.findUnique({ where: { email: (email as string).toLowerCase() } });
		if (existing) {
			return NextResponse.json({ error: "Email already in use" }, { status: 409 });
		}
		const passwordHash = await hash(password, 12);
		const user = await db.user.create({
			data: {
				email: (email as string).toLowerCase(),
				passwordHash,
				name: name ?? null,
			},
			select: { id: true, email: true },
		});
		return NextResponse.json({ ok: true, user });
	} catch (e) {
		return NextResponse.json({ error: "Signup failed" }, { status: 500 });
	}
}




