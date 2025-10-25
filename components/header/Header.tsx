import Image from "next/image"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { ShoppingCart } from "lucide-react"
import { Input } from "../ui/input"
import { Sheet, SheetTrigger } from "../ui/sheet"
import Cart from "../cart/Cart"


const Header = () => {

    return (
        <header className="w-full bg-amber-400 h-20 flex justify-between items-center px-24">
            <Image 
                src="/hive-logo.svg"
                width={50}
                height={50}
                alt="hive-logo"
            />
            <div>
                <Input
                    className="bg-zinc-100 w-[450px] border border-zinc-400 p-5"
                    placeholder="Pesquise algo para comprar na colméia"
                >
                
                </Input>
            </div>

            <div className="flex gap-6">
                <Avatar className="size-14 bg-zinc-50">
                    <AvatarFallback>
                        AB
                    </AvatarFallback>
                </Avatar>

                <Sheet>
                    <SheetTrigger>

                        <div className="p-4 bg-zinc-100 rounded-xl border border-transparent hover:border-zinc-300 hover:bg-zinc-50 transition">
                            <ShoppingCart />
                        </div>
                    </SheetTrigger>
                    <Cart />
                </Sheet>
            </div>
        </header>
    )
}


export default Header