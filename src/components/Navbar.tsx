import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import NavbarSheet from "./NavbarSheet";
import { auth } from "@/auth";
import UserMenu from "./UserMenu";
import NavigationMenuComponent from "./NavigationMenuComponent";
import { Button } from "./ui/button";

export default async function Navbar() {
    const session = await auth();
    const user = session?.user;
    return (
        <header className="sticky top-0 w-full opacity-[98%] bg-white py-3 z-50 border-b-[1px] border-gray-400">
            <nav className="sm:container mx-1  flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="logo font-bold flex gap-2 items-center text-xl"
                    >
                        <ShoppingCart size={40} />
                        <span>Ecommerce Store</span>
                    </Link>
                    <NavigationMenuComponent />
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6">
                        <Link href={'/cart'} className="cart">
                            <button className="p-2 bg-secondary rounded-full">
                                <ShoppingCart size={20} />
                            </button>
                        </Link>
                        {session?.user ? (
                            <UserMenu user={user} />
                        ) : (
                            <div className="signIn">
                                <Link href="/register">
                                    <Button variant={"secondary"}>Register</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="flex md:hidden">
                        {user ? <UserMenu user={user} /> : <NavbarSheet user={user} />}
                    </div>
                </div>
            </nav>
        </header>
    );
}
