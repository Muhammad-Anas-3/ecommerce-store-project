"use client";

import React from "react";
import { Button } from "./ui/button";
import useCart from "@/Hooks/useCart";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function OrderSummary({ user }: { user: any }) {
  const cart = useCart();

  const totalPrice = cart.items.reduce((total, item) => {
    return (total += item.price);
  }, 0);

  const router = useRouter()

  const checkout = () => {
    if (user == undefined) {
      return router.push('/register')
    }
    axios
      .post(
        "/api/checkout",
        {
          products: cart.items,
        },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      .then((response: any) => {
        window.location.href = response.data.url
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        cart.removeAll()
      });
  };

  return (
    <div
      className="
            mt-16
            rounded-lg
            bg-gray-50
            px-4
            py-6
            sm:p-6
            lg:col-span-5
            lg:mt-0
            lg:p-8
          "
    >
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          ${totalPrice}
        </div>
        <Button
          disabled={cart.items.length === 0}
          onClick={checkout}
          className="w-full mt-6 hover:before:-translate-x-[500px]"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
