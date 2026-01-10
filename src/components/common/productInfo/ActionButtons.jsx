import React from 'react'
import { FiRefreshCw, FiClock } from 'react-icons/fi'

export default function ActionButtons({ paymentImage, promoImage, policy }) {
    return (
        <div className="space-y-3 grid gap-2">
            <button className="w-full bg-primary text-white py-4 rounded text-[15px] font-bold tracking-widest hover:bg-black transition-transform active:scale-[0.99] shadow-xl shadow-black/10 flex items-center justify-center gap-2">
                ADD TO CART
            </button>
            <div className="flex justify-center items-center gap-2 lg:gap-6 text-xs lg:text-base">
                <span className="flex items-center gap-1"><FiRefreshCw /> Refills Ship Every 12 Week</span>
                <span className="border border-black h-full"></span>
                <span className="flex items-center gap-1"><FiClock /> Stop or Cancel Anytime</span>
            </div>
            <div className="flex justify-center">
                <img loading='lazy' src={paymentImage} alt="Payment methods" />
            </div>
            <div className="flex justify-center">
                <img loading='lazy' className='w-full' src={promoImage} alt="Promo" />
            </div>
            {policy.map((item) => (
                <div className="flex items-center gap-2">
                    <img loading='lazy' className='w-7 h-7' src={item.images} alt="Policy" />
                    <p className=''>{item.text}</p>
                </div>
            ))}
        </div>
    )
}
