"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavigationMenuComponent() {
    return (
        <div className="hidden md:flex">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col gap-2 p-2">
                            <Link href="/products/shoes" className="p-2 bg-slate-50 hover:bg-slate-100 rounded">
                                <NavigationMenuLink
                                >
                                    Shoes
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/products/clothes" className="p-2 bg-slate-50 hover:bg-slate-100 rounded">
                                <NavigationMenuLink
                                >
                                    Clothes
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/products/electronics" className="p-2 bg-slate-50 hover:bg-slate-100 rounded">
                                <NavigationMenuLink
                                >
                                    Electronics
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
