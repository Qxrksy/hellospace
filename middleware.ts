import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const PUBLIC = ["/", "/home-public", "/login", "/signup", "/api/auth", "/api/signup"];

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	const isPublic = PUBLIC.some(p => pathname === p || pathname.startsWith(p + "/"));
	const isStatic = pathname.startsWith("/_next/")
		|| pathname.startsWith("/public/")
		|| pathname.startsWith("/images/")
		|| pathname === "/favicon.ico"
		|| pathname === "/logo-hellospace.svg"
		|| pathname === "/default-avatar.png";
	if (isPublic || isStatic) return NextResponse.next();

	const token = await getToken({ req, secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET });
	if (!token) {
		const url = req.nextUrl.clone();
		url.pathname = "/login";
		url.searchParams.set("callbackUrl", req.nextUrl.pathname);
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};


