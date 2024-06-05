import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeaturedCategories from "@/components/FeaturedCategories";
import PopularProducts from "@/components/PopularProducts";
import mainsvg from "../../../public/Main.svg";
import heroImage from "../../../public/image.webp";

export default function HomePage() {
  return (
    <main>
      <Image
        src={mainsvg}
        alt="Main SVG Background"
        className="w-full absolute"
      />

      <div className="container mx-auto grid grid-cols-1 gap-6 lg:gap-0 md:grid-cols-2 items-center px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20 pb-20 sm:pb-28">
        <div className="font-bold flex flex-col items-center sm:items-start mx-auto text-center sm:text-left tracking-tighter relative text-3xl sm:text-5xl lg:text-6xl max-w-sm sm:max-w-4xl">
          <span>
            An e-commerce project built by{" "}
            <span className="text-green-700">Muhammad Anas</span>
          </span>
          <div className="text-gray-500 tracking-wide text-base font-medium sm:text-xl mt-4">
            Buy and sell skateboarding gears from independent brands and stores
            around the world with ease
          </div>
          <Button asChild>
            <Link href="/products" className="mt-6 tracking-wide">
              Buy
            </Link>
          </Button>
        </div>

        <div>
          <Image
            src={heroImage}
            alt="Hero Image"
            className="relative rounded-full"
          />
        </div>
      </div>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20 pb-20 sm:pb-28">
        <FeaturedCategories />
      </section>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20 pb-20 sm:pb-28">
        <PopularProducts />
      </section>
      <Link href={"/products"} className="btn flex justify-center mt-[-20px]">
        <Button className="rounded-full flex justify-center items-center">
          View All products
        </Button>
      </Link>
    </main>
  );
}
