"use server";

import { db } from "@/lib/db";
import { registerSchema } from "@/lib/zod";
import bcryptjs from "bcryptjs";
import { z } from "zod";

export const registerUser = async (values: z.infer<typeof registerSchema>) => {
    const validateFields = registerSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields value" };
    }

    const { name, email, password } = validateFields.data;

    const existingUser = await db.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        return { error: "Email already in use" };
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await db.user.create({ data: { name, email, password: hashedPassword } });

    return newUser
};
