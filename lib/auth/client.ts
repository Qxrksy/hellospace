"use client";
import { signIn as _signIn, signOut as _signOut } from "next-auth/react";

export const clientSignIn = (email: string, password: string) =>
	_signIn("credentials", { email, password, callbackUrl: "/home" });

export const clientSignOut = () => _signOut({ callbackUrl: "/" });



