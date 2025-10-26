"use client"

import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useParams } from "next/navigation";
import { products } from "@/mocks/products";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/slices/cart";

export default function ProductPage () {

    const dispatch = useAppDispatch()
    const params = useParams<{id: string}>()

    const { id } = params
    const productFiltered = products.filter(product => product.id == id)
    const product = productFiltered[0]

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        <div
            className="flex flex-col"
        >
            <main className="w-full flex p-24">
                <div className="flex flex-col gap-6 w-1/2 mr-24">
                    <div className="bg-zinc-50 w-full h-[700px] flex justify-center items-center">
                        <Image 
                            src={product.image}
                            width={500}
                            height={200}
                            alt="product-1"
                            style={{
                                height: 'auto'
                            }}
                        />
                    </div>

                    <div className="flex gap-6">
                        <div className="bg-zinc-50 w-50 h-50">

                        </div>

                        <Separator orientation="vertical" /> 

                        <div className="bg-zinc-50 w-50 h-50">

                        </div>

                        <Separator orientation="vertical" /> 

                        <div className="bg-zinc-50 w-50 h-50">

                        </div>
                    </div>
                </div>
                
                <aside className="flex flex-col w-1/2 relative">
                    <h1 className="text-3xl font-bold text-black mb-2">{product.name}</h1>
                    <span className="mb-6">Loja: <span className="underline cursor-pointer hover:text-zinc-600">{product.brand}</span></span>

                    <Separator  className="mb-6" />

                    <p className="text-lg font-normal mb-24">{product.description}</p>

                    
                    <div className="flex gap-4">
                        <span className="font-medium">+{product.sold} vendidos</span>
                        <span className="flex gap-2">
                            <Star 
                                className="text-amber-400"
                            />    
                            {product.rating}/5
                        </span>
                    </div>

                    <div className="flex flex-col w-full gap-6 absolute bottom-60">
                        <div className="flex gap-3">

                            <Button
                                size="lg"
                                className="text-lg p-8 flex-8"
                            >
                                Comprar Agora
                            </Button>
                            <Button
                                size="lg"
                                className="p-8 flex-1"
                                variant="outline"
                            >
                                <Heart  />
                            </Button>
                        </div>
                        <Button
                            size="lg"
                            variant="outline"
                            className="flex gap-4 text-lg p-8"
                            onClick={handleAddToCart}
                        >
                            Adicionar ao carrinho
                            <ShoppingCart />
                        </Button>
                    </div>
                </aside>
            </main>
        </div>
    )
}