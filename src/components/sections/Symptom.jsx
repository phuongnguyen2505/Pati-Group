import React, { useState, useEffect } from 'react'
import { PRODUCT_DATA } from '@/data/product'
import ArrowBottom from '../common/ArrowBottom'

export default function SymptomsSection() {
    const { subtitle, items, conclusion, cause } = PRODUCT_DATA.symptomsSection
    const { arrowBottom } = PRODUCT_DATA
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <section className="w-full bg-white pt-16 px-4 lg:px-[50px] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-[800px] mx-auto mb-12">
                    <h2 className="font-lora text-2xl md:text-[32px] font-normal text-gray-900 leading-tight mb-4">
                        Why Your <span className="text-[#008753]">Bloating, Brain Fog & Swollen Legs</span> Are Actually Connected
                    </h2>
                    <p className="font-mono text-[13px] md:text-lg">
                        {subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 relative">
                    {items.map((item, index) => (
                        <div key={index} className="flex lg:flex-col lg:gap-2 h-full group">
                            <div className="w-full aspect-square lg:aspect-auto min-h-[150px] overflow-hidden rounded-l-xl lg:rounded-b-none lg:rounded-t-xl">
                                <img
                                    src={item.image}
                                    alt={`Symptom ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="bg-[#f7f7f7] aspect-square lg:aspect-auto w-full min-h-[150px] rounded-r-xl lg:rounded-t-none rounded-b-none lg:rounded-b-xl lg:p-5 flex-grow flex items-center">
                                <p className="font-mono font-medium text-base leading-relaxed text-center w-full">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative max-w-4xl mx-auto mt-8 lg:mt-0">
                    <img
                        src={isMobile ? conclusion.imageMobile : conclusion.image}
                        alt={conclusion.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <ArrowBottom arrowBottom={arrowBottom} />
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-[800px] mx-auto mb-12">
                    <h2 className="font-lora text-2xl md:text-[32px] font-normal text-gray-900 leading-tight mb-4">
                        The Connection <span className="text-[#008753]">You've Been Missing</span>
                    </h2>
                </div>
                <div className="relative max-w-4xl mx-auto mt-8 lg:mt-0">
                    <img
                        src={isMobile ? cause.imageMobile : cause.image}
                        alt={cause.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <ArrowBottom arrowBottom={arrowBottom} />
            </div>
        </section >
    )
}
