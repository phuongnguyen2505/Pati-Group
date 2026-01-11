import React from 'react'
import { FiRefreshCw, FiClock } from 'react-icons/fi'
import Button from '../Button'

export default function ActionButtons({ paymentImage, promoImage, policy }) {
    return (
        <div className="space-y-3 grid gap-2">
            <Button
                text="ADD TO CART"
                className="font-bold text-base lg:text-lg"
            />
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
