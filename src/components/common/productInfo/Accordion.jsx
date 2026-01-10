import { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

export default function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`mb-3 rounded-2xl border transition-colors duration-300 ${
                isOpen ? 'border-[#008753] bg-white' : 'border-gray-200 bg-white'
            }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-5 py-4 flex items-center justify-between text-left group"
            >
                <span className="text-[15px] font-medium text-gray-800">
                    {title}
                </span>
                
                <span className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-[#F2F0E9] text-[#008753] rotate-90' : 'bg-[#F2F0E9] text-[#008753] rotate-0'
                }`}>
                    {isOpen ? (
                        <FiX size={14} className="stroke-[3px]" /> 
                    ) : (
                        <FiPlus size={14} className="stroke-[3px]" />
                    )}
                </span>
            </button>
            <div 
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0 text-[14px] text-gray-700 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
