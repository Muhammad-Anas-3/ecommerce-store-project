"use client";

import useCart from "@/Hooks/useCart";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CartItems() {
  const cart = useCart();

  const onRemove = (itemId: string) => {
    cart.removeItem(itemId);
  };

  return (
    <ul>
      {cart.items.length === 0 ? (
        <>
          <h1 className="text-2xl">No items in cart</h1>
          <Link href={'/products'}>
            <Button className="mt-5" variant={'outline'}>

              Purchase Products
            </Button>
          </Link>
        </>
      ) : (
        cart.items.map((item) => (
          <>
            <li className="flex py-6 border-b">
              <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                  fill
                  src={item.images}
                  alt={item.name}
                  className="object-cover object-center"
                />
              </div>
              <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                  <X onClick={() => onRemove(item.id)} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div className="flex justify-between">
                    <Link
                      href={`/products/singleproduct/${item.id}`}
                      className="sm:text-lg font-semibold text-black line-clamp-2"
                    >
                      {item.name}
                    </Link>
                  </div>

                  <div className="mt-1 text-sm">
                    <p className="text-gray-500 sm:text-center capitalize">
                      {item.category}
                    </p>
                  </div>
                  {item.price}
                </div>
              </div>
            </li>
          </>
        ))
      )}
    </ul>
  );
}
