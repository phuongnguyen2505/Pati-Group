import React, { useEffect, useState } from 'react'
import { PRODUCT_DATA } from '@/data/product'
import IngredientCard from '../common/ingredient/IngredientCard'

export default function IngredientsSystem() {
    const { description, subDescription, subDescriptionbold, items, images, imagesMobile } = PRODUCT_DATA.ingredientsSystem
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <section className="w-full bg-[#f7f2e7] py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center max-w-[800px] mx-auto mb-8">
                    <h2 className="text-center font-lora font-normal text-xl leading-snug md:text-[32px] mb-6">
                        <span className="text-[#008753]">The 8-Ingredient System </span>
                        That Restores What Hormones Once Maintained
                    </h2>
                    <p className="text-base font-mono md:text-lg mb-2">
                        {description}
                    </p>
                    <p className="text-base font-mono md:text-lg">
                        {subDescription}<span className="font-bold"> {subDescriptionbold}</span>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-xl border mb-12">
                    {items.map((item, index) => (
                        <IngredientCard key={index} item={item} />
                    ))}
                </div>
                <div className="max-w-xl mx-auto text-center shadow-sm relative">
                    <img src={isMobile ? imagesMobile : images} alt="" />
                </div>
            </div>
        </section>
    )
}
