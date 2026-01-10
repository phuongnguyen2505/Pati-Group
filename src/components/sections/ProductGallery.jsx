import { useState } from 'react'
import { PRODUCT_DATA } from '@/data/product'
import MobileImageSlider from '../common/productGallery/MobileImageSlider'
import MainProductImage from '../common/productGallery/MainProductImage'
import ThumbnailGrid from '../common/productGallery/ThumbnailGrid'
import NutritionalModal from '../common/productGallery/NutritionalModal'


export default function ProductGallery() {
    const [activeImage, setActiveImage] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const { images, nysaleImage } = PRODUCT_DATA

    const mainImage = images[activeImage]

    const getRealImages = (startIndex, count) => {
        return Array.from({ length: count }).map((_, i) => {
            const thumbIndex = activeImage + startIndex + i + 1
            const realIndex = thumbIndex % images.length
            return images[realIndex]
        })
    }

    const firstGroup = getRealImages(0, 2)
    const secondGroup = getRealImages(2, 3)
    const thirdGroup = getRealImages(5, 2)

    const mobileSliderImages = images.slice(0, -2)

    return (
        <>
            <div className="block md:hidden mb-4">
                <MobileImageSlider
                    images={mobileSliderImages}
                    nysaleImage={nysaleImage}
                    onOpenModal={() => setShowModal(true)}
                />
            </div>
            <div className="hidden md:flex w-full flex-col gap-3 sm:gap-4">
                <MainProductImage
                    nysaleImage={nysaleImage}
                    mainImage={mainImage}
                    onOpenModal={() => setShowModal(true)}
                />
                <ThumbnailGrid images={firstGroup} columns={2} />
                <ThumbnailGrid images={secondGroup} columns={3} />
                <ThumbnailGrid images={thirdGroup} columns={2} />
            </div>
            <NutritionalModal
                open={showModal}
                onClose={() => setShowModal(false)}
            />
        </>
    )
}