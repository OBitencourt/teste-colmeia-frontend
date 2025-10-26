"use client";
import { useAppDispatch } from "@/store";
import { clearCart } from "@/store/slices/cart";
import Link from "next/link";
import { useEffect } from "react";

export default function OrderSuccess() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearCart())
  }, [])
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-3xl font-semibold text-green-600 mb-4">Compra concluída com sucesso!</h1>
      <p className="text-zinc-600 mb-6">Seu pedido foi recebido e está sendo processado.</p>
      <Link href="/catalog" className="text-amber-500 font-medium hover:underline">
        Voltar para o catálogo
      </Link>
    </div>
  );
}
