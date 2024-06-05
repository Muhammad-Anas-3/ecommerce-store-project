import { Cable, Footprints, MoveRight, Shirt } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FeaturedCategories() {
    return (
        <>
            <div className='flex justify-between items-end'>
                <div>
                    <h1 className='font-bold flex justify-center items-center sm:block flex-col text-center sm:text-start tracking-tighter relative text-3xl sm:text-5xl lg:text-6xl max-w-sm sm:max-w-4xl text-green-700'>Featured Categories</h1>
                    <h2 className='text-gray-500 mt-2 tracking-wide text-base font-medium sm:text-xl text-center sm:text-start'>Explore all products we offer from around the world</h2>
                </div>
                <Link href={'/products'} className='hidden md:flex justify-center transition-all hover:translate-x-1 items-center gap-2'>
                    Shop the collection
                    <MoveRight />
                </Link>
            </div>
            <div className="category flex justify-center items-center mt-4 flex-wrap md:flex-nowrap gap-4">
                <Link href={'/products/shoes'} className='p-4 hover:shadow-xl rounded-xl border-[1px] text-green-800 flex gap-3 flex-col border-gray-400 w-full h-full bg-transparent hover:bg-green-800 hover:text-white'>
                    <Footprints />
                    <h1 className='text-3xl font-bold'>Shoes</h1>
                </Link>
                <Link href={'/products/clothes'} className='p-4 hover:shadow-xl rounded-xl border-[1px] text-green-800 flex gap-3 flex-col border-gray-400 w-full h-full bg-transparent hover:bg-green-800 hover:text-white'>
                    <Shirt />
                    <h1 className='text-3xl font-bold'>Clothes</h1>
                </Link>
                <Link href={'/products/electronics'} className='p-4 hover:shadow-xl rounded-xl border-[1px] text-green-800 flex gap-3 flex-col border-gray-400 w-full h-full bg-transparent hover:bg-green-800 hover:text-white'>
                    <Cable />
                    <h1 className='text-3xl font-bold'>Electronics</h1>
                </Link>
            </div>
        </>
    )
}
