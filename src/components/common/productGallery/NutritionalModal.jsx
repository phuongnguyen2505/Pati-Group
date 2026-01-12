import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { PRODUCT_DATA } from '@/data/product'

export default function NutritionalModal({ open, onClose }) {
    const { images } = PRODUCT_DATA.nutritionalModal

    const [isVisible, setIsVisible] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        if (open) {
            setShouldRender(true)
            setTimeout(() => setIsVisible(true), 10)
        } else {
            setIsVisible(false)
            setTimeout(() => setShouldRender(false), 200)
        }
    }, [open])

    if (!shouldRender) return null

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm transition-all duration-200 ${isVisible ? 'bg-black/40 opacity-100' : 'bg-black/0 opacity-0'
                }`}
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-[450px] rounded-xl bg-white p-6 shadow-2xl transition-all duration-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-rose-300 text-rose-500 hover:bg-rose-50 transition-colors"
                >
                    <span className="text-2xl leading-none pt-0.5">×</span>
                </button>
                <h2 className="mb-5 text-center font-serif text-xl lg:text-2xl">
                    Nutritional Information
                </h2>
                <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                        loading="lazy"
                        src={images}
                        alt="Supplement Facts"
                        className="h-auto w-full object-contain"
                    />
                </div>
                <Button
                    text="Try Lymphatic Drainage Risk-Free"
                    className="text-sm"
                />
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-[11px] text-gray-600">
                    <BenefitItem text="Made & produced in the USA" />
                    <BenefitItem text="100% Natural Ingredients" />
                    <BenefitItem text="60-Day Money-Back Guarantee" />
                    <BenefitItem text="Free Shipping" />
                </div>
            </div>
        </div>
    )
}

function BenefitItem({ text }) {
    return (
        <div className="flex items-center gap-1.5">
            <div className="flex h-4 w-4 items-center justify-center rounded-full border border-rose-500 text-rose-500">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <span>{text}</span>
        </div>
    )
}
