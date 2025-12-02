import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Only these routes require authentication
const PROTECTED = ["/bulletins", "/favorites", "/settings"];

// Routes that don't require onboarding check
const ONBOARDING_EXEMPT = ["/welcome", "/api", "/login", "/signup", "/_next", "/favicon.ico"];

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	// Check if this path requires authentication
	const isProtected = PROTECTED.some(p => pathname === p || pathname.startsWith(p + "/"));

	// Get authentication token
	const token = await getToken({ req, secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET });

	// For protected routes, check authentication
	if (isProtected && !token) {
		const url = req.nextUrl.clone();
		url.pathname = "/login";
		url.searchParams.set("callbackUrl", req.nextUrl.pathname);
		return NextResponse.redirect(url);
	}

	// If user is authenticated, check onboarding status
	if (token) {
		// Skip onboarding check for exempt routes
		const isExempt = ONBOARDING_EXEMPT.some(p => pathname === p || pathname.startsWith(p));

		if (!isExempt) {
			// Check if user has completed onboarding
			// Only redirect to welcome if we're certain they haven't onboarded
			// (token.onboardedAt will be explicitly null for new users)
			const onboardedAt = token.onboardedAt;

			// If onboardedAt is explicitly null (not undefined), redirect to welcome
			if (onboardedAt === null) {
				// User hasn't completed onboarding, redirect to welcome
				const url = req.nextUrl.clone();
				url.pathname = "/welcome";
				return NextResponse.redirect(url);
			}
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};


