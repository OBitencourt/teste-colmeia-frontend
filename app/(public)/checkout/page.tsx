"use client"

import CheckoutForm from "@/components/forms/CheckoutForm"
import PaymentMethod from "@/components/paymentMethod"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useAppSelector } from "@/store"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CheckoutPage () {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

    const items = useAppSelector(store => store.cart.items)

    const totalPrice = items.reduce((acc, item) => {
        return acc + item.product.price * item.quantity
    }, 0)

    const handleConfirmPayment = () => {
        // SetTimeout para simular latência
        setIsLoading(true)

        setTimeout(() => {
            // Gera um ID de transação (para idempotência)
            const transactionId = crypto.randomUUID();
    
            //  Salva o id do pedido localmente
            localStorage.setItem("lastPaymentId", transactionId);
    
            // Redireciona para página de status com o ID
            router.push(`/checkout/payment-status?id=${transactionId}`);
        }, 3000)

    };

    return (
        <div className="p-16 w-[70%] m-auto mt-14">
            <h1 className="text-3xl tracking-wide font-medium mb-6">Concluir Compra</h1>

            <div className="flex gap-4">
                
                {/*Dados Pessoais*/}
                <div className="flex flex-col w-[60%]">
                    <h2 className="text-xl font-semibold text-zinc-800 mb-4">
                        Dados Pessoais
                    </h2>

                    <CheckoutForm/>

                    <Separator className="my-6"/>

                    <h2 className="text-xl font-semibold text-zinc-800 mb-4">
                        Forma de Pagamento
                    </h2>
                    <PaymentMethod />
                </div>

                <Separator orientation="vertical" /> 

                {/*Resumo da compra*/}
                <div className="w-[40%] flex flex-col bg-zinc-100 rounded-md py-4 px-6">
                    <h2 className="text-xl font-semibold text-zinc-800 mb-4">
                        Resumo do Pedido:
                    </h2>

                    <div className="flex flex-col gap-4">
                        {
                            items?.map(item => (
                                <div key={item.product.id} className="flex justify-between p-4 bg-white rounded-sm">
                                    <Image 
                                        src={item.product.image}
                                        width={80}
                                        height={100}
                                        alt={item.product.name}
                                        style={{
                                            height: 'auto'
                                        }}
                                    />

                                    <div className="flex flex-col">
                                        <span className="text-sm text-zinc-500">
                                            {item.product.brand}
                                        </span>
                                        <span className="text-md text-zinc-700 w-50 block truncate font-semibold">
                                            {item.product.name}
                                        </span>
                                        <span className="text-lg mt-auto text-zinc-950 font-semibold">
                                            ${item.product.price}
                                        </span>
                                    </div>

                                    <div className="flex flex-col justify-between">
                                        
                                        <span className="text-md text-zinc-950 font-semibold">
                                            x{item.quantity}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <Separator className="my-4" />

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span className="text-zinc-600">
                                Subtotal
                            </span>
                            <span className="text-zinc-950">
                                ${totalPrice}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-zinc-600">
                                Descontos
                            </span>
                            <span className="text-zinc-950">
                                $0
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-zinc-600">
                                Frete
                            </span>
                            <span className="text-amber-400 font-semibold">
                                Grátis
                            </span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                            <span className="text-zinc-800 text-lg font-medium">
                                Total
                            </span>
                            <span className="text-zinc-950 text-2xl font-semibold">
                                ${totalPrice}
                            </span>
                        </div>
                    </div>

                    <Button onClick={handleConfirmPayment} className="my-auto py-5 text-md mt-6" size="lg">
                        {
                            isLoading ? "Processando..." : "Confirmar Pagamento"
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}