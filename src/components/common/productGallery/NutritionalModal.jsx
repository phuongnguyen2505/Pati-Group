import React from 'react'

export default function NutritionalModal({ open, onClose }) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
            <div className="relative w-full max-w-[450px] rounded-xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-rose-300 text-rose-500 hover:bg-rose-50 transition-colors"
                >
                    <span className="text-lg leading-none pt-0.5">×</span>
                </button>
                <h2 className="mb-5 text-center font-serif text-2xl text-gray-900">
                    Nutritional Information
                </h2>
                <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                        loading="lazy"
                        src="/images/products/ingredients-min.png"
                        alt="Supplement Facts"
                        className="h-auto w-full object-contain"
                    />
                </div>
                <button className="mb-6 w-full rounded bg-black py-4 text-sm font-medium uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99]">
                    Try Lymphatic Drainage Risk-Free
                </button>
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
