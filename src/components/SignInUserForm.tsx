'use client'

import { useForm } from "react-hook-form";
import { registerSchema, signInSchema } from "@/lib/zod";
import { z } from "zod";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LoginUser } from "@/actions/login";


export default function SignInUserForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof registerSchema>>();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof signInSchema>) => {
        startTransition(async () => {
            try {
                const formData = new FormData();
                (Object.keys(values) as (keyof typeof values)[]).forEach((key) => {
                    formData.append(key, values[key]);
                });
                const data: any = await LoginUser(formData);
                if (data?.error) {
                    setError('something went wrong');
                } else {
                    setError(undefined);
                    router.push("/");
                }
            } catch (error) {
                setError("Invalid credentials!");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full border p-2 rounded-md"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    className="w-full border p-2 rounded-md"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be more than 8 character",
                        },
                        maxLength: {
                            value: 25,
                            message: "Password must be less than 25 character",
                        },
                    })}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
            </div>
            {error && <p className="text-red-500 text-md mt-2">{error}</p>}
            <Button
                className="w-full flex items-center justify-center rounded"
                type="submit"
                disabled={isPending}
            >
                Sign in
            </Button>
        </form>
    )
}
