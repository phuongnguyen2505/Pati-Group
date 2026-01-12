import React, { useState, useMemo } from 'react'
import { PRODUCT_DATA } from '@/data/product'
import { FaStar, FaRegStar, FaStarHalfAlt, FaUserCircle, FaChevronLeft, FaChevronRight, FaChevronDown, FaTimes } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

const StarRating = ({ rating, size = "text-sm", color = "text-rose-300" }) => {
    return (
        <div className={`flex gap-0.5 ${color}`}>
            {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`${size} ${i < rating ? 'opacity-100' : 'opacity-20 text-gray-300'}`} />
            ))}
        </div>
    )
}

export default function ReviewsSection() {
    const { title, subtitle, trustpilotScore, summary, items, diamondImages } = PRODUCT_DATA.reviewsSection

    const [currentPage, setCurrentPage] = useState(1)
    const [sortOption, setSortOption] = useState('newest')
    const [ratingFilter, setRatingFilter] = useState(null)
    const itemsPerPage = 5

    const filteredAndSortedReviews = useMemo(() => {
        let result = [...items];

        if (ratingFilter !== null) {
            result = result.filter(item => item.rating === ratingFilter);
        }

        switch (sortOption) {
            case 'highest':
                return result.sort((a, b) => b.rating - a.rating);
            case 'lowest':
                return result.sort((a, b) => a.rating - b.rating);
            case 'newest':
            default:
                return result.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    }, [items, sortOption, ratingFilter]);

    const totalPages = Math.ceil(filteredAndSortedReviews.length / itemsPerPage);
    const currentReviews = filteredAndSortedReviews.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            document.getElementById('reviews-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleRatingClick = (stars) => {
        if (ratingFilter === stars) {
            setRatingFilter(null);
        } else {
            setRatingFilter(stars);
        }
        setCurrentPage(1);
    };

    return (
        <section className="w-full bg-white py-16 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center max-w-3xl mb-12 mx-auto">
                    <div className="flex justify-center items-center gap-2 mb-3 text-sm font-medium">
                        {trustpilotScore} <FaStar className="text-[#00B67A]" /> <span className="font-bold">Trustpilot</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-3">{title}</h2>
                    <p className="text-[15px]">{subtitle}</p>
                </div>
                <h2 className="max-w-5xl flex justify-center mx-auto font-serif text-xl md:text-2xl mb-6">
                    Customer Reviews
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mb-8 border-b border-gray-100 pb-8">
                    <div className="text-center">
                        <div className="flex justify-center gap-1 text-rose-300 mb-2">
                            {[...Array(4)].map((_, i) => <FaStar key={i} className="text-xl" />)}
                            <FaStarHalfAlt className="text-xl" />
                        </div>
                        <div className="text-2xl font-bold mb-1">{summary.average} out of 5</div>
                        <p className="text-sm">Based on {summary.totalReviews} reviews</p>
                    </div>
                    <div className="w-full max-w-xs space-y-1.5">
                        {summary.distribution.map((row, i) => {
                            const isSelected = ratingFilter === row.stars;
                            const isDimmed = ratingFilter !== null && !isSelected;
                            return (
                                <div
                                    key={i}
                                    onClick={() => handleRatingClick(row.stars)}
                                    className={`flex items-center gap-3 text-xs cursor-pointer transition-opacity duration-200 group ${isDimmed ? 'opacity-30 hover:opacity-100' : 'opacity-100'
                                        }`}
                                    title={`Show only ${row.stars} star reviews`}
                                >
                                    <div className="flex text-rose-300 w-16 justify-end gap-0.5 group-hover:text-rose-400 transition-colors">
                                        {[...Array(5)].map((_, starIndex) => {
                                            return starIndex < row.stars ? (
                                                <FaStar key={starIndex} className="text-xs" />
                                            ) : (
                                                <FaRegStar key={starIndex} className="text-xs" />
                                            );
                                        })}
                                    </div>
                                    <div className="flex-grow h-4 bg-gray-100 rounded-sm overflow-hidden relative group-hover:bg-gray-200 transition-colors">
                                        <div
                                            className={`absolute top-0 left-0 h-full transition-colors duration-300 ${isSelected ? 'bg-rose-500' : 'bg-rose-300 group-hover:bg-rose-400'
                                                }`}
                                            style={{ width: `${row.percent}%` }}
                                        ></div>
                                    </div>
                                    <span className="w-6 text-right font-medium text-gray-500 group-hover:text-gray-800">
                                        {row.count}
                                    </span>
                                </div>
                            )
                        })}
                        {ratingFilter !== null && (
                            <div
                                onClick={() => setRatingFilter(null)}
                                className="text-center text-xs text-rose-500 font-medium mt-2 cursor-pointer hover:underline flex items-center justify-center gap-1"
                            >
                                <FaTimes /> Clear filter
                            </div>
                        )}
                    </div>
                    <div>
                        <button className="bg-rose-400 hover:bg-rose-500 transition-colors text-white font-bold py-3 px-8 rounded shadow-sm text-sm uppercase tracking-wide">
                            Write a review
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center w-20 mb-8 mx-auto">
                    <img src={diamondImages} alt="" />
                    <p className="font-mono font-bold text-xs text-[#4686cf]">100.0</p>
                </div>
                <div id="reviews-anchor" className="space-y-10 min-h-[500px]">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-400">
                                Showing {filteredAndSortedReviews.length} Reviews
                            </p>
                            {ratingFilter && (
                                <span className="text-xs bg-rose-50 text-rose-500 px-2 py-0.5 rounded-full border border-rose-100 font-medium">
                                    {ratingFilter} Stars Only
                                </span>
                            )}
                        </div>
                        <div className="relative">
                            <select
                                value={sortOption}
                                onChange={(e) => {
                                    setSortOption(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="text-sm text-rose-400 font-medium bg-transparent border-none outline-none cursor-pointer appearance-none pr-6"
                            >
                                <option value="newest">Most Recent</option>
                                <option value="highest">Highest Rating</option>
                                <option value="lowest">Lowest Rating</option>
                            </select>
                            <FaChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-rose-300 text-xs pointer-events-none" />
                        </div>
                    </div>
                    {currentReviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <div className="flex justify-between items-start mb-3">
                                <StarRating rating={review.rating} />
                                <span className="text-xs font-mono text-gray-400">{review.date}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                        <FaUserCircle className="text-xl text-gray-400" />
                                    </div>
                                    {review.isVerified && (
                                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                                            <FiCheck className="text-white bg-rose-400 rounded-full p-[2px] w-3 h-3" />
                                        </div>
                                    )}
                                </div>
                                <span className="text-sm font-medium text-rose-300">{review.author}</span>
                                {review.isVerified && (
                                    <span className="text-[10px] bg-rose-300 text-white px-1.5 py-0.5 rounded ml-1 font-medium">
                                        Verified
                                    </span>
                                )}
                            </div>
                            <p className="text-[15px] leading-relaxed text-gray-700">{review.content}</p>
                        </div>
                    ))}
                    {currentReviews.length === 0 && (
                        <div className="text-center py-10">
                            <p className="text-gray-400 mb-2">No reviews match your filter.</p>
                            <button
                                onClick={() => setRatingFilter(null)}
                                className="text-rose-400 font-medium hover:underline text-sm"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12 text-sm font-medium select-none text-gray-500">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                        >
                            <FaChevronLeft className="w-3 h-3" />
                        </button>
                        {[...Array(totalPages)].map((_, i) => {
                            const pageNum = i + 1;
                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => handlePageChange(pageNum)}
                                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${currentPage === pageNum
                                        ? 'bg-black text-white font-bold shadow-md'
                                        : 'hover:bg-gray-100 hover:text-black'
                                        }`}
                                >
                                    {pageNum}
                                </button>
                            )
                        })}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                        >
                            <FaChevronRight className="w-3 h-3" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
