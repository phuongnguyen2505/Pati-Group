import React, { useRef, useState, useEffect } from 'react'
import { PRODUCT_DATA } from '@/data/product'
import { FaPlay, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Button from '../common/Button'

export default function StoriesSection() {
    const { totalCustomers, title, items } = PRODUCT_DATA.stories
    const { ratingImage, policy } = PRODUCT_DATA
    const scrollRef = useRef(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    const sliderWidthPercent = items.length > 0 ? 100 / items.length : 100;
    const moveFactor = (100 - sliderWidthPercent) / 100;

    const [playingVideoId, setPlayingVideoId] = useState(null)
    const videoRefs = useRef({})

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const maxScroll = scrollWidth - clientWidth;
            const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
            setScrollProgress(progress);
        }
    }

    const scroll = (direction) => {
        if (scrollRef.current) {
            const firstItem = scrollRef.current.children[0];
            if (!firstItem) return;
            const itemWidth = firstItem.clientWidth + 16;
            const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', handleScroll);
            return () => el.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handlePlayVideo = (id) => {
        setPlayingVideoId(id);
        setTimeout(() => {
            const videoEl = videoRefs.current[id];
            if (videoEl) {
                videoEl.currentTime = 0;
                videoEl.play();
            }
        }, 0);
    };

    const handleStopVideo = () => {
        setPlayingVideoId(null);
    };

    return (
        <section className="w-full bg-[#f3eee0] py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-10">
                    <div className="flex flex-col justify-center items-center gap-2 mb-3 text-xs md:text-sm font-medium">
                        <span className="font-bold flex items-center gap-1">
                            <FaStar className="text-[#00B67A]" /> Trustpilot
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="w-[100px]">
                                <img src={ratingImage} alt="" />
                            </div>
                            <span>{totalCustomers}</span>
                        </div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                        {title}
                    </h2>
                </div>
                <div className="relative group">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 w-[80%] md:w-[40%] lg:w-[calc(25%-12px)] aspect-[9/16] relative rounded-lg overflow-hidden snap-start bg-black shadow-md group/video"
                            >
                                {playingVideoId === item.id ? (
                                    <video
                                        ref={el => videoRefs.current[item.id] = el}
                                        src={item.videoUrl}
                                        className="w-full h-full object-cover cursor-pointer"
                                        autoPlay
                                        playsInline
                                        onClick={() => handleStopVideo(item.id)}
                                        onEnded={() => handleStopVideo(item.id)}
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full relative cursor-pointer"
                                        onClick={() => handlePlayVideo(item.id)}
                                    >
                                        <img
                                            src={item.thumbnail}
                                            alt=""
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-105"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/video:bg-black/20 transition-colors">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-transform">
                                                <FaPlay className="ml-1 text-black text-sm" />
                                            </div>
                                        </div>
                                        {item.caption && (
                                            <div className="absolute bottom-10 left-0 w-full text-center px-4">
                                                <span className="text-white font-bold text-lg drop-shadow-md leading-tight">
                                                    {item.caption}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between mt-2 max-w-full mx-auto px-4 md:px-0">
                        <div className="flex-grow h-[5px] bg-gray-200 relative mr-8 overflow-hidden rounded-full">
                            <div
                                className="absolute top-0 h-full bg-[#008753] transition-all duration-100 ease-out rounded-full"
                                style={{
                                    width: `${sliderWidthPercent}%`,
                                    left: `${scrollProgress * moveFactor}%`
                                }}
                            ></div>
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                            <button
                                onClick={() => scroll('left')}
                                className="w-8 h-8 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#008753] hover:bg-gray-50 transition-colors"
                                aria-label="Previous slide"
                            >
                                <FaChevronLeft size={10} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-8 h-8 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#008753] hover:bg-gray-50 transition-colors"
                                aria-label="Next slide"
                            >
                                <FaChevronRight size={10} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 space-y-4">
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
