import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active == true
  );
  return availableProducts;
};

export const POST = async (req: NextRequest) => {
  const { products } = await req.json();
  const data: Product[] = products;

  let activeProducts = await getActiveProducts();
  try {
    for (const product of data) {
      const Products = activeProducts?.filter(
        (product: any) =>
          product?.name?.toLowerCase() !== product?.name?.toLowerCase()
      );
      if (Products.length < 1) {
        const newproduct = await stripe.products.create({
          name: product.name,
          description: product.description,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "USD",
          },
        });
      }
    }
  } catch (error) {
    console.log("error in route product", error);
  }

  activeProducts = await getActiveProducts();
  let stripeItems: any = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) =>
        prod?.name?.toLowerCase() === product?.name?.toLowerCase()
    );


    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: 1,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });


  return NextResponse.json({ url: session.url });
};
