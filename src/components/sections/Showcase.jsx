import React from 'react'
import { PRODUCT_DATA } from '@/data/product'
import Button from '../common/Button'
import { FaStar } from 'react-icons/fa'

export default function ShowcaseSection() {
    const { trustText, title, description, showcaseImage } = PRODUCT_DATA.showcase
    const { policy, ratingImage } = PRODUCT_DATA

    return (
        <section className="w-full bg-[#f3eee0]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="w-full flex flex-col justify-center gap-4 px-6 py-12 md:px-16 md:py-20 lg:pr-20">
                    <div className="flex items-center flex-col-reverse lg:flex-row gap-2 mb-3 md:text-xs font-medium lg:justify-start justify-center">
                        <div className="flex items-center gap-2">
                            <div className="w-[80px]">
                                <img src={ratingImage} alt="" />
                            </div>
                            <span>{trustText}</span>
                        </div>
                        <span className="font-bold text-xs lg:text-base flex items-center gap-1">
                            <FaStar className="text-[#00B67A]" /> Trustpilot
                        </span>
                    </div>
                    <h2 className="font-lora text-2xl font-normal md:text-[32px] leading-[1.2] text-center lg:text-left">
                        {title}
                    </h2>
                    <div className="space-y-5 text-sm md:text-base leading-relaxed text-center lg:text-left">
                        {description.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                    <div className="w-full mb-8 lg:hidden block">
                        <img
                            src={showcaseImage}
                            alt="Customer Results Before and After"
                            className="w-full h-auto object-contain rounded-xl shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-4">
                        <Button
                            text="Try Lymphatic Drainage Risk-Free"
                            className="w-full lg:w-fit lg:px-20 font-medium"
                        />
                        <div className="flex items-center justify-center gap-3">
                            {policy?.[0]?.images && (
                                <img
                                    src={policy[0].images}
                                    alt="Guarantee"
                                    className="w-8 h-8 object-contain"
                                />
                            )}
                            <span className="text-[14px] text-gray-700 font-medium">
                                60-Day Money-Back Guarantee
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full p-4 lg:py-12 lg:pr-12 hidden lg:block">
                    <img
                        src={showcaseImage}
                        alt="Customer Results Before and After"
                        className="w-full h-auto object-contain rounded-xl shadow-sm"
                    />
                </div>
            </div>
        </section>
    )
}
