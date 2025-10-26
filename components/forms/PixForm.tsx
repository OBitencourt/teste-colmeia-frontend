import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function PixForm() {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="pixKey">Chave Pix</Label>
      <Input id="pixKey" placeholder="Digite a chave Pix" />
      <p className="text-sm text-zinc-500 mt-1">
        Após confirmar, seu pagamento será processado automaticamente.
      </p>
    </div>
  )
}