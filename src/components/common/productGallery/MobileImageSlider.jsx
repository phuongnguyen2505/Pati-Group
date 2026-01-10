import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function MobileImageSlider({ images, nysaleImage, onOpenModal }) {
    const extendedImages = [images[images.length - 1], ...images, images[0]]

    const [currentIndex, setCurrentIndex] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const moveSlide = (direction) => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setCurrentIndex(prev => prev + direction)
    }

    useEffect(() => {
        if (!isTransitioning) return

        const transitionEnd = () => {
            setIsTransitioning(false)
            if (currentIndex === extendedImages.length - 1) {
                setCurrentIndex(1)
            } else if (currentIndex === 0) {
                setCurrentIndex(extendedImages.length - 2)
            }
        }

        const timer = setTimeout(transitionEnd, 300)
        return () => clearTimeout(timer)
    }, [currentIndex, isTransitioning, extendedImages.length])

    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) moveSlide(1)
        if (isRightSwipe) moveSlide(-1)
    }

    let realIndex = currentIndex - 1
    if (realIndex < 0) realIndex = images.length - 1
    if (realIndex >= images.length) realIndex = 0

    const getVisibleThumbnails = () => {
        const thumbs = []
        for (let i = 1; i <= 4; i++) {
            const idx = (realIndex + i) % images.length
            thumbs.push({ image: images[idx], targetIndex: idx })
        }
        return thumbs
    }

    const visibleThumbnails = getVisibleThumbnails()

    const handleThumbnailClick = (targetRealIndex) => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setCurrentIndex(targetRealIndex + 1)
    }

    return (
        <div className="w-full select-none">
            <div
                className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#F9F9F9] border border-gray-100 shadow-sm mb-4"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="flex w-full h-full"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? 'transform 300ms ease-in-out' : 'none'
                    }}
                >
                    {extendedImages.map((img, idx) => {
                        const isFirstSlide = idx === 1 || idx === extendedImages.length - 1

                        return (
                            <div key={idx} className="relative w-full flex-shrink-0 h-full flex items-center justify-center">
                                <img
                                    src={img}
                                    alt={`Slide ${idx}`}
                                    className="w-full h-full object-cover pointer-events-none"
                                />

                                {isFirstSlide && (
                                    <>
                                        <div className="absolute bottom-4 left-0 right-0 px-4 z-20 flex justify-center pointer-events-auto">
                                            <button
                                                type="button"
                                                onClick={onOpenModal}
                                                className="w-full max-w-[90%] bg-white/90 backdrop-blur-sm text-gray-800 text-[13px] font-medium py-2.5 rounded-full shadow-lg border border-gray-200 flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95"
                                            >
                                                <img
                                                    className="w-4 h-4 object-contain opacity-70"
                                                    src="/src/assets/icons/leaves.png"
                                                    alt=""
                                                />
                                                <span className="tracking-wide">Nutritional Information</span>
                                            </button>
                                        </div>
                                        {nysaleImage && (
                                            <div className="absolute top-4 right-4 z-20 w-16 h-16 sm:w-20 sm:h-20">
                                                <img
                                                    src={nysaleImage}
                                                    alt="Sale"
                                                    className="w-full h-full object-contain animate-pulse-slow drop-shadow-md"
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>

                <button
                    onClick={() => moveSlide(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/40 backdrop-blur-sm border border-white flex items-center justify-center text-white z-20 hover:bg-white/60 transition-all active:scale-90"
                >
                    <FiChevronLeft size={20} />
                </button>

                <button
                    onClick={() => moveSlide(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/40 backdrop-blur-sm border border-white flex items-center justify-center text-white z-20 hover:bg-white/60 transition-all active:scale-90"
                >
                    <FiChevronRight size={20} />
                </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
                {visibleThumbnails.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleThumbnailClick(item.targetIndex)}
                        className="aspect-square rounded-xl overflow-hidden border border-transparent opacity-70 hover:opacity-100 cursor-pointer transition-all active:scale-95"
                    >
                        <img src={item.image} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}
