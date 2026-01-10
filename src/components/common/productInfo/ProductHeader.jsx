import { PRODUCT_DATA } from '@/data/product'
import React from 'react'

export default function ProductHeader({ title, reviews, benefitList }) {
    const { ratingImage } = PRODUCT_DATA
    
    return (
        <div>
            <div className="flex items-center gap-4 mb-3">
                <div className="w-[100px]">
                    <img src={ratingImage} alt="" />
                </div>
                <span className="font-mono text-xs lg:text-base font-normal">
                    4.8/5 Excellent | Based on {reviews} Reviews
                </span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-lora font-normal leading-10 my-4">
                {title}
            </h1>
            <div className="space-y-4">
                {benefitList.map((benefit, idx) => (
                    <div key={idx} className="flex gap-3 text-base group items-center">
                        <div className="mt-0.5 w-10 lg:w-14 h-14 flex-shrink-0">
                            <img src={benefit.icon} alt="icon" className="w-full h-full object-contain" />
                        </div>
                        <p className="leading-snug font-mono">
                            {benefit.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
