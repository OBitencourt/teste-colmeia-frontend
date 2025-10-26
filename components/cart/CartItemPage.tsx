import { Star, Trash2 } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { useAppDispatch } from "@/store"
import { updateQuantity, removeFromCart } from "@/store/slices/cart"

interface Product {
  id: string
  name: string
  image: string
  description: string
  brand: string
  rating: number
  price: number
}

interface CartItem {
  product: Product
  quantity: number
}

// Componente para exibir o item no carrinho
interface CartItemProps {
  item: CartItem
}


const CartItem = ({ item }: CartItemProps) => {
    const dispatch = useAppDispatch()

    const {
        id,
        name,
        image,
        description,
        brand,
        rating,
        price,
    } = item.product

    const quantity = item.quantity

    const handleQuantity = (action: string) => {
        if (action === '-') {
            dispatch(updateQuantity({
                id: id,
                signal:  "-"
            }))
        } else if (action === '+') {
            dispatch(updateQuantity({
                id: id,
                signal:  "+"
            }))
        }
    }

    return (
        <div className="flex gap-4 border bg-white border-zinc-200 rounded-md px-4 py-4">
            <div className="bg-zinc-100 rounded-sm flex justify-center items-center">
                <Image 
                    src={image}
                    width={100}
                    height={100}
                    alt="product"
                    style={{
                        height: "auto"
                    }}
                />
            </div>

            <div className="flex flex-col">
                <span className="text-sm text-zinc-400">{brand}</span>
                <h3 className="font-medium w-130 block truncate mb-1">
                    {name}
                </h3>

                <p className="mb-2 text-sm w-130 block truncate">
                    {description}
                </p>

                <div className="flex items-center text-sm gap-2">
                    <Star className="w-5 text-amber-400" />
                    {rating}/5
                </div>

                <div className="mt-2 text-lg font-medium tracking-wider">
                    ${price}
                </div>
            </div>

            <div className="ml-8 relative">
                <Button onClick={() => dispatch(removeFromCart(id))} size="icon-sm">
                    <Trash2 />
                </Button>
                <div className="flex items-center gap-4 self-end absolute bottom-0 right-1">
                    <span 
                        className="bg-amber-300 rounded-full px-2.5 hover:bg-amber-200 font-semibold cursor-pointer transition py-0.5"
                        onClick={() => handleQuantity("-")}
                    >
                        -
                    </span>

                    <h2>{quantity}</h2>

                    <span 
                        className="bg-amber-300 font-semibold rounded-full px-2.5  hover:bg-amber-200 cursor-pointer transition py-0.5"
                        onClick={() => handleQuantity("+")}
                    >
                        +
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartItem