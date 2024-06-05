'use client'

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { registerSchema } from "@/lib/zod";
import { z } from "zod";
import { useState, useTransition } from "react";
import { registerUser } from "@/actions/register";
import { useRouter } from "next/navigation";

export default function RegisterUserForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof registerSchema>>();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const router = useRouter()

    const onSubmit = (values: z.infer<typeof registerSchema>) => {
        startTransition(() => {
            registerUser(values).then((data: any) => {
                if (data?.error) {
                    setError(data.error);
                } else {
                    setError(undefined);
                    router.push('/');
                }
            });
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">
                    Name:
                </label>
                <input
                    type="text"
                    id="userName"
                    className="w-full border p-2 rounded-md"
                    placeholder="Enter your Name"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>
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
            <Button
                className="w-full flex items-center justify-center rounded"
                type="submit"
                disabled={isPending}
            >
                Create Account
            </Button>
            {error && <p className="text-red-500 text-md mt-2">{error}</p>}
        </form>
    )
}
