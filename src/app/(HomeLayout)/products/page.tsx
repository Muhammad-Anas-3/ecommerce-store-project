import { ProductCardSkeleton } from '@/components/ProductCardSkeleton'
import { ProductSuspense } from '@/components/ProductSuspense'
import { db } from '@/lib/db'
import React, { Suspense } from 'react'

export default async function ProductsPage() {

    const products = await db.product.findMany()

    return (
        <div className='flex justify-center gap-4 items-center flex-wrap container'>
            <div className="flex justify-between items-end container my-5">
                <div>
                    <h1 className="font-bold flex justify-center items-center sm:block flex-col text-center sm:text-start tracking-tighter relative text-3xl sm:text-4xl max-w-sm sm:max-w-4xl text-green-700">
                        All Products
                    </h1>
                    <h2 className="text-gray-500 mt-2 tracking-wide text-base font-medium sm:text-xl text-center sm:text-start">
                        Explore all products we offer from around the world
                    </h2>
                </div>
            </div>
            <Suspense
                fallback={
                    <>
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                    </>
                }>
                <ProductSuspense products={products} />
            </Suspense>
        </div>
    )
}
