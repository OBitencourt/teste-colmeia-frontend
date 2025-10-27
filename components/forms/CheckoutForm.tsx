import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const CheckoutForm = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div>
        <div>
          <form>
            <FieldGroup className="gap-4">
              <div className="flex gap-2">

                <Field>
                    <FieldLabel htmlFor="name">Nome</FieldLabel>
                    <Input
                        id="name"
                        type="name"
                        required
                    />
                </Field>
                <Field>
                    <div className="flex items-center">
                    <FieldLabel htmlFor="surname">Sobrenome</FieldLabel>
                    </div>
                    <Input id="surname" type="surname" required />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="name">Endereço</FieldLabel>
                <Input
                    id="adress"
                    type="adress"
                    required
                    placeholder="Rua da Colméia"
                />
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Cidade
                  </FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="Osasco" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Estado
                  </FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="São Paulo" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">Código Postal</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="XXXX-XX" required />
                </Field>
              </div>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm