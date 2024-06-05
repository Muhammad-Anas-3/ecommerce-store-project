import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import { db } from "./lib/db";
import bcrypt from "bcryptjs";
import { ZodError } from "zod";
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(credentials);
          const user = await db.user.findUnique({ where: { email } });

          if (!user) {
            return null
          }
          if (user.password && await bcrypt.compare(password, user.password)) {
            return user;
          } else {
            return null
          }
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Validation error:", error);
            return null;
          }
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl
    }
  }
});