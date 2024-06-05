import { MoveRight } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import { db } from "@/lib/db";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { ProductSuspense } from "./ProductSuspense";

export default async function PopularProducts() {
    const products = await db.product.findMany({ orderBy: { name: 'asc' }, take: 5 })
    return (
        <>
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="font-bold flex justify-center items-center sm:block flex-col text-center sm:text-start tracking-tighter relative text-3xl sm:text-5xl lg:text-6xl max-w-sm sm:max-w-4xl text-green-700">
                        Popular Products
                    </h1>
                    <h2 className="text-gray-500 mt-2 tracking-wide text-base font-medium sm:text-xl text-center sm:text-start">
                        Explore all products we offer from around the world
                    </h2>
                </div>
                <Link
                    href={"/products"}
                    className="hidden md:flex justify-center transition-all hover:translate-x-1 items-center gap-2"
                >
                    Shop the collection
                    <MoveRight />
                </Link>
            </div>
            <div className='flex gap-3 mt-10 items-center flex-wrap justify-center'>
                <Suspense
                    fallback={
                        <>
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                        </>
                    }>
                    <ProductSuspense products={products} />
                </Suspense>
            </div>
        </>
    );
}
