import React from 'react'
import { FiTruck, FiDownload, FiGift } from 'react-icons/fi'

export default function VariantSelector({ variants, selectedId, onSelect, saleImage }) {
    return (
        <div className="flex flex-col gap-3 mt-2 bg-cream p-2.5 rounded-xl border border-[#D5D0C5]">
            {variants.map((variant) => {
                const isSelected = selectedId === variant.id
                const badgeBgColor = isSelected ? 'bg-[#008753]' : 'bg-[#6BCFA8]'
                return (
                    <div
                        key={variant.id}
                        onClick={() => onSelect(variant.id)}
                        className={`relative cursor-pointer rounded-xl border-[1px] transition-all duration-200 bg-white ${isSelected ? 'border-[#008753]' : 'border-[#6BCFA8]'
                            }`}
                    >
                        <div className="rounded-xl overflow-hidden">
                            <div className="p-3 sm:p-4 relative bg-white">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-[#008753]' : 'border-[#008753]'
                                            }`}>
                                            {isSelected && <div className="w-4 h-4 rounded-full bg-[#008753]"></div>}
                                        </div>
                                        <div>
                                            <p className="font-bold text-black text-[15px] sm:text-[16px] leading-tight">
                                                {variant.name}
                                            </p>
                                            <p className="text-[12px] text-gray-600 font-normal mt-0.5">
                                                {variant.subtext}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right flex-shrink-0 z-10">
                                        <div className="flex flex-col items-end">
                                            <span className="font-bold text-lg sm:text-xl text-black leading-tight">
                                                ${variant.price}
                                            </span>
                                            <span className="text-[12px] text-gray-400 line-through">
                                                ${variant.originalPrice}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {variant.badges.length > 0 && (
                                <div className="flex flex-col w-full border-t border-white/20">
                                    {variant.badges.map((badge, i) => {
                                        const Icon = badge.includes('Shipping') ? FiTruck : badge.includes('E-book') ? FiDownload : FiGift
                                        return (
                                            <div key={i} className={`${badgeBgColor} w-full px-3 sm:px-4 py-2 flex items-center gap-2 border-t border-white`}>
                                                <div className="w-6 flex-shrink-0 flex justify-center">
                                                    <div className="w-6 flex justify-center bg-white rounded-full p-1">
                                                        <Icon size={18} className="text-[#008753]" />
                                                    </div>
                                                </div>
                                                <span className="text-white text-[12px] sm:text-[13px] font-bold">
                                                    {badge}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                        {variant.isBestSeller && saleImage && (
                            <div className="absolute -top-10 -right-2 w-16 h-16 sm:w-20 sm:h-20 z-20">
                                <img src={saleImage} alt="Sale" className="w-full h-full object-contain" />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
