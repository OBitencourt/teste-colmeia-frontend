"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function PaymentStatusPage() {
  const [status, setStatus] = useState<"pending" | "approved" | "failed">("pending");
  const router = useRouter();
  const params = useSearchParams();
  const transactionId = params.get("id");

  useEffect(() => {
    // Simula tempo de processamento (ex: 3 segundos)

    const timer = setTimeout(() => {
      const success = Math.random() > 0.1; // 90% chance de sucesso
      setStatus(success ? "approved" : "failed");

      // Depois de 2 segundos, redireciona para a página final
      setTimeout(() => {
        if (success) router.push(`/checkout/order-success?id=${transactionId}`);
      }, 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [transactionId, router]);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      {status === "pending" && (
        <>
          <h1 className="text-2xl font-medium">Processando pagamento...</h1>
          <p className="text-zinc-500 mt-2">Aguarde alguns segundos</p>
        </>
      )}
      {status === "approved" && (
        <h1 className="text-2xl font-semibold text-green-600">Pagamento aprovado!</h1>
      )}
      {status === "failed" && (
        <h1 className="text-2xl font-semibold text-red-600">Pagamento não autorizado.</h1>
      )}
    </div>
  );
}
