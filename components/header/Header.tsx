"use client"

import Image from "next/image"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { ShoppingCart } from "lucide-react"
import { Input } from "../ui/input"
import { Sheet, SheetTrigger } from "../ui/sheet"
import Cart from "../cart/Cart"
import { useAppSelector } from "@/store"


const Header = () => {

    const items = useAppSelector(store => store.cart.items)

    return (
        <header className="w-full bg-amber-400 h-20 flex justify-between items-center px-24">
            <Image 
                src="/hive-logo.svg"
                width={50}
                height={50}
                alt="hive-logo"
            />
            <div>
                <Input
                    className="bg-zinc-100 w-[450px] border border-zinc-400 p-5"
                    placeholder="Pesquise algo para comprar na colméia"
                >
                
                </Input>
            </div>

            <div className="flex gap-4 items-center">
                <Avatar className="size-10 bg-zinc-50">
                    <AvatarFallback>
                        AB
                    </AvatarFallback>
                </Avatar>

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