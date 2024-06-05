import Image from "next/image";
import React from "react";
import image from "../../../../../../public/image.webp";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import AddToCartBTN from "@/components/AddToCartBTN";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await db.product.findUnique({ where: { id: params.id } });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              src={product?.images || image}
              alt="Product Image"
              width={400}
              height={400}
              className="border-[1px] border-gray-200 rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
            <Card className="border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold">
                  {product?.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-bold">Price:</span>{" "}${product?.price}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  <span className="font-bold">Category:</span>{" "}
                  {product?.category}
                </p>
                <p className="text-md text-gray-600 mb-8">
                  <span className="font-bold">Description:</span>{" "}
                  {product?.description}
                </p>
                {product && <AddToCartBTN product={product} />}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
