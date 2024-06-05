"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Search, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function NavbarSheet({ user }: { user: any }) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant={"secondary"}>
            <Menu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-4 justify-center">
            <Link href={'/cart'} className="w-full bg-secondary py-2 flex items-center justify-center gap-2">
              <ShoppingCartIcon />
              Cart
            </Link>
            <Link href={"/register"} className="w-full">
              <Button className="font-bold w-full" variant={"secondary"}>
                Register
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
