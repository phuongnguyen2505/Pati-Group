import React from 'react'

export default function MainProductImage({ nysaleImage, mainImage, onOpenModal }) {
    return (
        <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border group shadow-sm bg-gray-100">
            {nysaleImage && (
                <img
                    src={nysaleImage}
                    alt="New Year Sale"
                    className="absolute top-3 right-3 sm:top-5 sm:right-5 w-16 sm:w-32 lg:max-w-[120px] object-contain z-10 animate-pulse-slow drop-shadow-md"
                />
            )}
            {mainImage && (
                <img
                    src={mainImage}
                    alt="Main Product"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            )}
            <button
                type="button"
                onClick={onOpenModal}
                className="absolute max-w-[280px] sm:max-w-72 font-sans tracking-wider font-light bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-white/85 text-[12px] sm:text-[14px] px-4 sm:px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-white transition-all border border-black z-20"
            >
                <img
                    className="w-5 sm:w-6"
                    src="/src/assets/icons/leaves.png"
                    alt=""
                />
                Nutritional Information
            </button>
        </div>
    )
}
