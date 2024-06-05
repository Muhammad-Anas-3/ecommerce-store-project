import React from "react";
import CartItems from "@/components/CartItems";
import OrderSummary from "@/components/OrderSummary";
import { auth } from "@/auth";

export default async function ShoppingCart() {
 
  const session = await auth()
  const user = session?.user

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
        <div className="lg:col-span-7">
          <CartItems />
        </div>
        <OrderSummary user={user}/>
      </div>
    </div>
  );
}
