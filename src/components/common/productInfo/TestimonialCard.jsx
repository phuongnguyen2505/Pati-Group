import { PRODUCT_DATA } from '@/data/product'
import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

export default function TestimonialCard() {
    const { ratingImage } = PRODUCT_DATA

    return (
        <div className="bg-[#FFFDE7] grid p-2 lg:p-4 font-mono rounded-xl mt-2 border border-[#FFF59D]">
            <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?u=margaret" alt="User" className="w-12 h-12 lg:w-[72px] lg:h-[72px] rounded-full border-2 border-white shadow-sm" />
                <div>
                    <p className="text-base text-foreground flex items-center gap-1 mb-1">
                        Margaret Ellison | FL <span className="text-[#1f8602] flex items-center gap-0.5 text-sm"><FiCheckCircle size={10} /> Verified Customer</span>
                    </p>
                    <div className="w-[100px] mb-2">
                        <img src={ratingImage} alt="" />
                    </div>
                </div>
            </div>
            <span className='font-medium text-base mb-2'>Even my husband noticed... the spark came back.</span>
            <p className="text-base text-gray-800 italic leading-relaxed">
                After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I’ve been present. Even my marriage feels renewed, not just in how I look but in how I feel. It’s hard to explain, but once you try it you’ll get it. I’d recommend this to my closest friends without question.
            </p>
        </div>
    )
}
