import Image from "next/image"

const CatalogBanner = () => {
    return (
        <div className="w-full bg-amber-200 h-[600px] ">
            <Image 
                src="/banner-colmeia.png"
                width={1920}
                height={600}
                alt="banner"
            />
        </div>
    )
}

export default CatalogBanner