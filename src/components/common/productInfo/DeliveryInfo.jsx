import React from 'react'
import { FiTruck } from 'react-icons/fi'

export default function DeliveryInfo() {
    return (
        <div className="flex items-center gap-2 text-xs lg:text-[13px] sm:text-sm text-black font-normal">
            <FiTruck size={22} className="text-black flex-shrink-0 stroke-[1.5]" />
            <span>
                Delivered on
                <span className="bg-[#008753] text-white font-bold mx-1 px-2 py-0.5 rounded">
                    Wednesday, 14 January
                </span>
                with Express Shipping
            </span>
        </div>
    )
}
