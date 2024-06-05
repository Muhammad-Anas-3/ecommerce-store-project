"use client";

import useCart from "@/Hooks/useCart";
import { Button } from "./ui/button";
import { MouseEventHandler } from "react";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    product: Product;
}

export default function AddToCartBTN({ product }: ProductCardProps) {
    const cart = useCart();

    const existingCartProduct = cart.items.filter(
        (item) => item.id === product.id
    );
    console.log(existingCartProduct)

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        cart.addItem(product);
    };

    const router = useRouter()

    return (
        <>
            {existingCartProduct.length > 0 ? (
                <Button onClick={() => router.push('/cart')}>View In Cart</Button>
            ) : (
                <Button onClick={onAddToCart}>Add To Cart</Button>
            )}
        </>
    );
}
