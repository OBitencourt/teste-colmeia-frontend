"use client"

import CartItemPage from "@/components/cart/CartItemPage"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useAppSelector } from "@/store"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


export default function CartPage () {

    const items = useAppSelector(store => store.cart.items)

    const totalPrice = items.reduce((acc, item) => {
        return acc + item.product.price * item.quantity
    }, 0)

    return (
        <div className="p-16  w-[70%] m-auto mt-20">
            <h1 className="text-3xl tracking-wide font-medium mb-6">Seu carrinho</h1>

            <div className="flex gap-4 bg-amber-300  px-4 py-3 rounded-lg">
                <div className="w-2/3 flex flex-col gap-2">
                    {
                        items?.map(item => (
                            <CartItemPage
                                key={item.product.id}
                                item={item}
                            >
                            </CartItemPage>
                        ))
                    }
                </div>
                <div className="w-1/3 bg-white p-4 rounded-md flex flex-col">
                    <h2 className="text-lg text-black font-medium tracking-wide mb-4">
                        Resumo do pedido:
                    </h2>
                    <div className="flex justify-between">
                        <span className="text-zinc-600 font-medium">Subtotal:</span>
                        <span className="text-black text-lg font-semibold">${totalPrice}</span>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between mb-4">
                        <span className="text-zinc-600 text-lg font-medium">Total:</span>
                        <span className="text-black text-2xl font-semibold">${totalPrice}</span>
                    </div>
                    
                    <Link
                        className="w-full mt-auto"
                        href="/checkout"
                    >
                        <Button
                            size="lg"
                            className="w-full rounded-xl text-md py-6" 
                        >
                            Fazer Checkout
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}