"use client"

import { Separator } from "../ui/separator"
import { SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet"
import CartItem from "./CartItem"
import { Button } from "../ui/button"
import { useAppSelector } from "@/store"
import Link from "next/link"

// Faz useSelector dos itens e mostra

const Cart = () => {

    const items = useAppSelector(store => store.cart.items)

    const totalPrice = items.reduce((acc, item) => {
        return acc + item.product.price * item.quantity
    }, 0)

    return (
        <>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Carrinho
                    </SheetTitle>
                    <SheetDescription>
                        Esse é o seu carrinho
                    </SheetDescription>

                    <Separator />
                </SheetHeader>

                <div className="flex flex-col p-4">
                    {
                        items.map(item => (
                            <CartItem 
                                key={item.product.id}
                                item={item}
                            />
                        ))
                    }

                </div>

                <SheetFooter>
                    <h2 className="text-lg text-black font-semibold">
                        Preço Total: ${totalPrice}
                    </h2>
                    <Button
                        className="bg-amber-400 hover:bg-amber-500 cursor-pointer"
                    >
                        Concluir Compra
                    </Button>

                    <Link
                        className="w-full"
                        href="/cart"
                    >
                        <Button
                            className="cursor-pointer w-full"
                        >
                            Ir para seu carrinho
                        </Button>
                    </Link>
                </SheetFooter>
            </SheetContent>
        </>
    )
}


export default Cart