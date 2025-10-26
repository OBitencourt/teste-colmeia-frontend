import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function BoletoForm() {
  const fakeBoletoNumber = "34191.79001 01043.510047 91020.150008 7 12340000010000"

  return (
    <div className="flex flex-col gap-3">
      <p className="text-zinc-700">
        Clique em “Gerar Boleto” para obter o código de pagamento.
      </p>
      <Input value={fakeBoletoNumber} readOnly />
      <Button size="sm" className="w-fit">Copiar código</Button>
    </div>
  )
}
