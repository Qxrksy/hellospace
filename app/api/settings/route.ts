// HS-ADD: app/api/settings/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth/config";
import { db } from "@/lib/db";

// Mark this route as dynamic
export const dynamic = 'force-dynamic';

// GET current user settings
export async function GET() {
  try {
    const session = await getServerSession(authConfig);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.users.findUnique({
      where: { id: session.user.id },
      select: { fontSize: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ fontSize: user.fontSize });
  } catch (error) {
    console.error("Settings GET error:", error);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

// POST update user settings
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authConfig);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { fontSize } = body;

    // Validate fontSize
    const validSizes = ["small", "medium", "large"];
    if (!fontSize || !validSizes.includes(fontSize)) {
      return NextResponse.json(
        { error: "Invalid font size. Must be: small, medium, or large" },
        { status: 400 }
      );
    }

    // Update user settings
    const updatedUser = await db.users.update({
      where: { id: session.user.id },
      data: { fontSize, updatedAt: new Date() },
      select: { fontSize: true },
    });

    return NextResponse.json({
      success: true,
      fontSize: updatedUser.fontSize
    });
  } catch (error) {
    console.error("Settings POST error:", error);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
