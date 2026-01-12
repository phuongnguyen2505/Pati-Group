import React, { useState } from 'react'
import { PRODUCT_DATA } from '@/data/product'
import { FiChevronDown } from 'react-icons/fi'
import Button from '../common/Button'

const AccordionItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-white">
            <button
                className="w-full py-5 flex items-center justify-between gap-4 text-left group"
                onClick={onClick}
            >
                <span className={`font-medium text-[15px] md:text-base transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
                    {item.question}
                </span>
                <FiChevronDown
                    className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-5' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="text-[14px] md:text-[15px] leading-relaxed whitespace-pre-line pr-4">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function FAQSection() {
    const { title, items } = PRODUCT_DATA.faq
    const { policy } = PRODUCT_DATA

    const [openIndexes, setOpenIndexes] = useState([])

    const handleToggle = (index) => {
        setOpenIndexes(prevIndexes => {
            if (prevIndexes.includes(index)) {
                return prevIndexes.filter(i => i !== index);
            } else {
                return [...prevIndexes, index];
            }
        });
    }

    return (
        <section className="w-full py-16 px-4 md:px-6">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <h2 className="font-serif text-3xl md:text-4xl text-center">
                    {title}
                </h2>
                <div className="w-full mb-12 bg-gradient-to-b from-white to-[#f3eee0] px-10 md:py-6 md:px-16 rounded-xl">
                    {items.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndexes.includes(index)}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
                <div className="w-full space-y-4 text-center">
                    <Button
                        text="Try Lymphatic Drainage Risk-Free"
                        className="w-full lg:w-fit lg:px-20 font-medium"
                    />
                    <div className="flex items-center justify-center gap-2 font-medium">
                        {policy?.[0]?.images && (
                            <img src={policy[0].images} alt="" className="w-6 h-6" />
                        )}
                        <span>60-Day Money-Back Guarantee</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
