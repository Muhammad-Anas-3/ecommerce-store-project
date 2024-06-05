import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    images: string;
}

export default function ProductCard({
    product,
}: {
    product: ProductCardProps;
}) {


    return (
        <div className="group/card shadow-lg w-full sm:w-56 border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-4 h-full">
            <Link href={`/products/singleproduct/${product.id}`}>
                <div className="aspect-square m-3 rounded-2xl bg-gray-100 relative">
                    <Image
                        src={product.images}
                        fill
                        sizes="200"
                        alt={product.name}
                        className="aspect-square object-cover rounded-2xl"
                    />
                </div>
                <div className="px-4 space-y-3 pb-6 w-56">
                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">{product.category}</p>
                        <p
                            className="font-semibold group-hover/card:text-emerald-800 text-lg truncate"
                            title={product.name}
                        >
                            {product.name}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        {/* Price */}
                        <div className="font-semibold text-emerald-700">
                            ${product.price}
                        </div>
                        <Button>
                            See Details
                        </Button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
