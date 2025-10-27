"use client"

import Image from "next/image"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { ShoppingCart } from "lucide-react"
import { Input } from "../ui/input"
import { Sheet, SheetTrigger } from "../ui/sheet"
import Cart from "../cart/Cart"
import { useAppSelector } from "@/store"
import Link from "next/link"
import { useState, useEffect } from "react"
import AvatarPopover from "./AvatarPopover"


const Header = () => {

    const items = useAppSelector(store => store.cart.items)
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
        const parsed = JSON.parse(user);
        setUserEmail(parsed.email);
        }
    }, []);

    return (
        <header className="w-full bg-amber-400 h-20 flex justify-between items-center px-24">
            <Link href="/catalog">
                <Image 
                    src="/hive-logo.svg"
                    width={50}
                    height={50}
                    alt="hive-logo"
                />
            </Link>
            <div>
                <Input
                    className="bg-zinc-100 w-[450px] border border-zinc-400 p-5"
                    placeholder="Pesquise algo para comprar na colméia"
                >
                
                </Input>
            </div>

            <div className="flex gap-4 items-center">
                <AvatarPopover />
                <Sheet>
                    <SheetTrigger>

                        <div className="p-3 rounded-xl hover:bg-amber-300 transition relative">
                            
                            <div className="bg-black px-2 py-0.5 rounded-full text-white text-sm absolute top-0 -right-2">
                                {items.length}
                            </div>
                            <ShoppingCart />
                        </div>
                    </SheetTrigger>
                    <Cart />
                </Sheet>
            </div>
        </header>
    )
}


export default Header