import React from 'react'

export default function Button({ text, className }) {
    return (
        <button className={`w-full rounded bg-black py-4 tracking-wide text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] ${className}`}>
            {text}
        </button>
    )
}
