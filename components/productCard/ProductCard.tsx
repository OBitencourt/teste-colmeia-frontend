import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import Link from "next/link"
import { useAppDispatch } from "@/store"
import { addToCart } from "@/store/slices/cart"
import { products } from "@/mocks/products";

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
        
        <div className="flex  flex-wrap wrap-normal bg-amber-50 rounded-sm border-amber-100 border hover:scale-105 transition p-6">
            <div className="flex flex-col gap-3 ">
                

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

                <div className="flex justify-between">
                    <Badge>
                        {brand}
                    </Badge>
                    <div>
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
                <div className="flex justify-between gap-1 w-full">
                    
                    <Button className="w-2/3 cursor-pointer" size="lg">
                        Comprar
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard