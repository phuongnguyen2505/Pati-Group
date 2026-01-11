import React, { useEffect, useState } from 'react'
import { PRODUCT_DATA } from '@/data/product'
import Button from '../common/Button'

export default function WhyFailedSection() {
    const { items, failedImages } = PRODUCT_DATA.whyFailedSection
    const { xVector, policy } = PRODUCT_DATA
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <section className="w-full bg-[#f7f2e7] py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center font-serif text-3xl md:text-4xl text-gray-900 mb-12">
                    Why Nothing Has <span className="text-[#008753]">Worked</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col h-full">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                                <img
                                    src={item.image}
                                    alt="Failed Method"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-white px-6 py-6 text-center border-x border-gray-100 flex flex-col flex-grow">
                                <p className="font-serif mb-6 text-lg text-gray-800 leading-snug">
                                    {item.title}
                                </p>
                                <div className="bg-[#ffe3e3] py-2 px-4 lg:px-6 rounded-lg flex-grow border-b border-x border-rose-100 text-center flex flex-col">
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <span className="text-sm tracking-wide">
                                            {item.failReason.title}
                                        </span>
                                        <img className="w-5" src={xVector} alt="" />
                                    </div>
                                    <p className="text-[14px] font-bold leading-relaxed">
                                        {item.failReason.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="max-w-5xl mx-auto text-center shadow-sm relative z-20">
                    <img src={isMobile ? failedImages.imageMobile : failedImages.image} alt="" />
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="mt-10 text-center space-y-4">
                        <Button
                            text="Try Lymphatic Drainage Risk-Free"
                            className="lg:w-fit lg:px-20 font-bold"
                        />
                        <div className="flex items-center justify-center gap-2">
                            <img src={policy[0].images} alt="" className="w-6 h-6" />
                            <span className="font-mono font-semibold text-base">{policy[0].text}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

