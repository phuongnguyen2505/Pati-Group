import React from 'react'
import { PRODUCT_DATA } from '@/data/product'

export default function PoliciesSection() {
    const { policies } = PRODUCT_DATA

    return (
        <section className="w-full bg-[#f3eee0] py-8 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                    {policies.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="mb-4 text-[#008753]">
                                <img
                                    src={item.icon}
                                    alt=""
                                    className="w-10 h-10 object-contain mx-auto"
                                />
                            </div>
                            <h3 className="font-mono text-[15px] md:text-base mb-1.5 leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-[13px] md:text-base leading-tight mx-auto">
                                {item.subtext}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
