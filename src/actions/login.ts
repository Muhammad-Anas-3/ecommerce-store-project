"use server";

import { signIn } from "@/auth";

export const LoginUser = async (formData: FormData) => {
    await signIn("credentials", formData);
}


export const handleGoogleSignIn = async () => {
    await signIn('google')
}