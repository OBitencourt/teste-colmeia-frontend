import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

const ProductCard = () => {
    return (
        <div className="flex justify-around flex-wrap wrap-normal bg-amber-50 rounded-2xl border-amber-200 border">
            <div className="flex flex-col gap-3 p-3">
                <div className="bg-zinc-50 w-full rounded-2xl">
                    <Image 
                        src="/product-2.png"
                        width={250}
                        height={200}
                        alt="product-1"
                        style={{
                            height: 'auto'
                        }}
                    />
                </div>

                <div className="flex justify-between">
                    <Badge>
                        Primor
                    </Badge>
                    <div>
                        4.7/5
                    </div>
                </div>
                <h3 className="text-lg font-semibold">
                    Cremes da Primor
                </h3>
                <span className="text-2xl text-black font-bold">
                    $3,600
                </span>
                <div className="flex justify-between gap-1">
                    <Button className="w-2/3" size="lg">
                        Comprar
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                    >
                        <ShoppingCart />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard