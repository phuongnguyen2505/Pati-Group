import React from 'react'

export default function ThumbnailGrid({ images, columns = 2 }) {
    const gridCols = columns === 3 ? 'grid-cols-3' : 'grid-cols-2'

    return (
        <div className={`grid ${gridCols} gap-2 sm:gap-3 lg:gap-4`}>
            {images.map((img, index) => (
                <div
                    key={index}
                    className="rounded-xl overflow-hidden bg-white shadow-sm aspect-square border-[1px] border-transparent hover:border-gray-200"
                >
                    <img
                        loading="lazy"
                        src={img}
                        alt={`Thumb ${index + 1}`}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                    />
                </div>
            ))}
        </div>
    )
}
