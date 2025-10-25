import CatalogBanner from "@/components/catalogBanner/CatalogBanner";
import ProductCard from "@/components/productCard/ProductCard";
import { Separator } from "@/components/ui/separator";

export default function Catalog () {
    
    return (
        <div>
            <CatalogBanner />
            
            <div className="flex flex-col w-full p-16">

                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-black text-bold">Promoções do Dia</h2>
                    <span className="text-lg font-medium underline hover:text-zinc-500 cursor-pointer transition">Ver mais</span>
                </div>

                <Separator 
                    className="w-10 my-6"
                />

                <div className="flex flex-wrap wrap-normal w-full gap-6">


                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                    
                </div>
            </div>
        </div>
    )
}