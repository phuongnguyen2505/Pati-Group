import React from 'react'
import { PRODUCT_DATA } from '@/data/product'

export default function LogoMarquee() {
    const { marqueeLogos } = PRODUCT_DATA

    const repeatedLogos = Array(6).fill(marqueeLogos).flat();

    return (
        <div className="w-full bg-cream py-6 overflow-hidden">
            <div className="text-center mb-5">
                <h3 className="font-serif text-2xl">As Seen In</h3>
            </div>
            <div className="relative w-full flex overflow-hidden mask-image-linear-gradient">
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {repeatedLogos.map((logo, index) => (
                        <div key={`a-${index}`} className="mx-8 lg:mx-12 w-24 lg:w-32 flex-shrink-0 flex items-center justify-center">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-10 w-auto object-contain opacity-80"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {repeatedLogos.map((logo, index) => (
                        <div key={`b-${index}`} className="mx-8 lg:mx-12 w-24 lg:w-32 flex-shrink-0 flex items-center justify-center">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-10 w-auto object-contain opacity-80"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
