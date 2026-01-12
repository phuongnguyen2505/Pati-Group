import { PRODUCT_DATA } from '@/data/product';
import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export default function IngredientCard({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const { vVector } = PRODUCT_DATA;

    return (
        <div className="bg-white border border-black first:rounded-t-xl md:first:rounded-tr-none last:rounded-b-xl md:last:rounded-bl-none lg:last:rounded-bl-none lg:first:rounded-tl-xl lg:last:rounded-br-xl md:[&:nth-child(2)]:rounded-tr-xl lg:[&:nth-child(4)]:rounded-tr-xl md:[&:nth-child(7)]:rounded-bl-xl lg:[&:nth-child(5)]:rounded-bl-xl overflow-hidden transition-shadow duration-300">
            <div
                className="p-5 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-normal">
                    <img className="w-5" src={vVector} alt="" />
                    <span className="text-[#008753] text-[13px] font-medium tracking-wide">
                        {item.benefit}
                    </span>
                </div>
                <div className="flex flex-row items-center lg:flex-col gap-4">
                    <div className="h-12 aspect-square lg:h-24 lg:w-full flex items-center">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-full lg:h-full w-auto object-contain"
                        />
                    </div>
                    <div className="w-full flex items-center justify-between mt-2">
                        <h4 className="font-bold text-sm lg:text-[15px]">
                            {item.name} ({item.dosage})
                        </h4>
                        <FiChevronDown
                            className={` transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0">
                        <div className="lg:text-[14px] font-mono leading-snug tracking-wider">
                            {item.details}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
