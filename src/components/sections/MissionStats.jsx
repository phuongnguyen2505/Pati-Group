import React from 'react'
import { PRODUCT_DATA } from '@/data/product'

export default function MissionStatsSection() {
    const { title, subtitle, productImage, images, imagesMobile } = PRODUCT_DATA.missionStats

    return (
        <section className="max-w-7xl py-12 px-4 md:px-14 mx-auto">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
                <div className="w-full flex flex-col justify-center text-center md:text-left gap-4">
                    <h2 className="font-lora font-normal text-3xl md:text-[32px] leading-snug">
                        {title}
                    </h2>
                    <p className="text-[18px] font-normal">
                        {subtitle}
                    </p>
                    <img
                        src={images}
                        alt="Statistics Box"
                        className="w-full h-auto object-cover hidden lg:flex"
                    />
                </div>
                <div className="w-full flex items-center justify-center">
                    <img
                        src={productImage}
                        alt="Lymphatic Drainage Bottle and Chart"
                        className="w-full object-cover"
                    />
                </div>
                <div className="flex lg:hidden">
                    <img
                        src={imagesMobile}
                        alt="Statistics Box"
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
