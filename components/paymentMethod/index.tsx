import { useState } from "react"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { PixForm } from "../forms/PixForm"
import { BoletoForm } from "../forms/BoletoForm"
import { CardForm } from "../forms/CardForm"


const PaymentMethod = () => {
    const [method, setMethod] = useState("pix")

    return (
        <div>
            <div className="flex flex-col gap-4">
                <RadioGroup value={method} onValueChange={setMethod}>
                    <div className="flex items-center space-x-2 p-3 bg-zinc-50 rounded-md">
                        <RadioGroupItem id="pix" value="pix" checked={method === "pix"} onChange={() => setMethod("pix")} />
                        <Label htmlFor="pix">Pix</Label>
                    </div>

                    <div className="flex items-center space-x-2 p-3 bg-zinc-50 rounded-md">
                        <RadioGroupItem id="cartao" value="cartao" checked={method === "cartao"} onChange={() => setMethod("cartao")} />
                        <Label htmlFor="cartao">Cartão</Label>
                    </div>

                    <div className="flex items-center space-x-2 p-3 bg-zinc-50 rounded-md">
                        <RadioGroupItem id="boleto" value="boleto" checked={method === "boleto"} onChange={() => setMethod("boleto")} />
                        <Label htmlFor="boleto">Boleto</Label>
                    </div>
                </RadioGroup>

                <div className="mt-6">
                    {method === "pix" && <PixForm />}
                    {method === "cartao" && <CardForm />}
                    {method === "boleto" && <BoletoForm />}
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod