import React from 'react'
import { PRODUCT_DATA } from '@/data/product'
import Button from '../common/Button'

export default function ExpertAdviceSection() {
    const { date, title, quote, description, image } = PRODUCT_DATA.expertAdvice
    const { policy } = PRODUCT_DATA

    return (
        <section className="w-full py-12 md:px-6">
            <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">
                <div className="w-full h-full bg-[#f7f7f7] p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                    <span className=" text-xs font-medium uppercase tracking-wider mb-4">
                        {date}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl mb-6 leading-tight">
                        {title}
                    </h2>
                    <div className="space-y-5 text-lg font-mono leading-snug">
                        <p>{quote}</p>
                        <p>{description}</p>
                    </div>
                    <div className="mt-8 space-y-4">
                        <Button
                            text="Try Lymphatic Drainage Risk-Free"
                            className="w-full md:w-full lg:px-20 font-medium"
                        />
                        <div className="flex items-center justify-center gap-2 font-medium">
                            {policy?.[0]?.images && (
                                <img src={policy[0].images} alt="" className="w-6 h-6" />
                            )}
                            <span>60-Day Money-Back Guarantee</span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full relative order-1 lg:order-2">
                    <img
                        src={image}
                        alt="Dr. Emily Chen"
                        className="w-full h-full object-cover lg:absolute lg:inset-0"
                    />
                </div>
            </div>
        </section>
    )
}
