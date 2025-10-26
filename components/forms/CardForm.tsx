import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function CardForm() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <Label htmlFor="cardNumber" className="mb-2">Número do Cartão</Label>
        <Input id="cardNumber" placeholder="1234 5678 9123 4567" />
      </div>

      <div className="col-span-2">
        <Label htmlFor="cardName" className="mb-2">Nome no Cartão</Label>
        <Input id="cardName" placeholder="Arthur B. V. Silva" />
      </div>

      <div>
        <Label htmlFor="expiry" className="mb-2">Validade</Label>
        <Input id="expiry" placeholder="MM/AA" />
      </div>

      <div>
        <Label htmlFor="cvv" className="mb-2">CVV</Label>
        <Input id="cvv" placeholder="123" />
      </div>
    </div>
  )
}
