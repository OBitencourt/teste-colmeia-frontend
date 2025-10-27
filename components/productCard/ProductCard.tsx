import { ShoppingCart, StarIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import Link from "next/link"
import { useAppDispatch } from "@/store"
import { addToCart } from "@/store/slices/cart"
import { products } from "@/mocks/products";
import { Sheet, SheetTrigger } from "../ui/sheet"
import Cart from "../cart/Cart"

interface ProductCardType {
    id: string
    name: string
    price: number
    image: string
    brand: string
    rating: number
}

const ProductCard = ({id, name, price, image, brand, rating}: ProductCardType) => {

    const productFiltered = products.filter(product => product.id === id)
    const product = productFiltered[0]

    const dispatch = useAppDispatch()
    
    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        
        <div className="flex  flex-wrap wrap-normal rounded-sm border-amber-100 border hover:scale-105 transition p-6">
            <div className="flex flex-col gap-3 ">
                
                <Link
                    href={`/catalog/product/${id}`}
                >
                    <div className="bg-zinc-50 w-full h-50 rounded-2xl flex justify-center items-center">
                        <Image 
                            src={image}
                            width={200}
                            height={200}
                            alt="product-1"
                            style={{
                                height: 'auto',
                                maxWidth: '150px'
                            }}
                        />
                    </div>
                </Link>

                <div className="flex justify-between">
                    <Badge>
                        {brand}
                    </Badge>
                    <div className="flex gap-1 text-amber-400 font-medium items-center">
                        <StarIcon className="w-5 h-5" />
                        {rating}/5
                    </div>
                </div>
                <Link 
                    href={`/catalog/product/${id}`}
                >
                    <h3 className="text-lg font-semibold hover:text-zinc-600 block w-48 truncate">
                        {name}
                    </h3>
                    <span className="text-2xl text-black font-bold">
                        ${price}
                    </span>
                </Link>
                <Sheet>
                    <SheetTrigger>

                        <Button
                            size="lg"
                            variant="outline"
                            onClick={handleAddToCart}
                            className="flex gap-2"
                        >
                            Adicionar ao Carrinho
                            <ShoppingCart />
                        </Button>
                    </SheetTrigger>
                    <Cart />
                </Sheet>
            </div>

        </div>
    )
}

export default ProductCard