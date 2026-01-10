import { useState } from 'react'
import { PRODUCT_DATA } from '@/data/product'
import ProductHeader from '../common/productInfo/ProductHeader'
import CliniciansChoice from '../common/productInfo/CliniciansChoice'
import VariantSelector from '../common/productInfo/VariantSelector'
import DeliveryInfo from '../common/productInfo/DeliveryInfo'
import ActionButtons from '../common/productInfo/ActionButtons'
import TestimonialCard from '../common/productInfo/TestimonialCard'
import Accordion from '../common/productInfo/Accordion'


export default function ProductInfo() {
    const [selectedVariantId, setSelectedVariantId] = useState(2)
    const [showCliniciansChoice, setShowCliniciansChoice] = useState(true)

    const { title, reviews, benefitList, variants, nysaleImageVector, paymentImage, promoImage, policy, ingredientsList, ingredientsFooter, otherFaqs } = PRODUCT_DATA

    return (
        <div className="w-full flex flex-col gap-6">
            <ProductHeader
                title={title}
                reviews={reviews}
                benefitList={benefitList}
            />
            <CliniciansChoice
                show={showCliniciansChoice}
                onClose={() => setShowCliniciansChoice(false)}
            />
            <VariantSelector
                variants={variants}
                selectedId={selectedVariantId}
                onSelect={setSelectedVariantId}
                saleImage={nysaleImageVector}
            />
            <DeliveryInfo />
            <ActionButtons
                paymentImage={paymentImage}
                promoImage={promoImage}
                policy={policy}
            />
            <TestimonialCard />
            <div className="space-y-0">
                <Accordion title="Ingredients proven by science">
                    <div className="space-y-3">
                        <h4 className="font-bold font-mono text-gray-900 mb-2">Sculptique Ingredients:</h4>
                        <ul className="list-disc font-sans pl-5 space-y-2 marker:text-gray-400">
                            {ingredientsList.map((item, index) => (
                                <li key={index} className="text-[14px] text-gray-700 leading-relaxed">
                                    <span className="font-bold text-gray-900">{item.name}</span> – {item.description}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-[14px] text-gray-700 italic">
                            {ingredientsFooter}
                        </p>
                    </div>
                </Accordion>
                <div className="mb-2">
                    {otherFaqs.map((faq) => (
                        <Accordion key={faq.id} title={faq.title}>
                            <div className="text-[14px] text-gray-700 leading-relaxed space-y-4">
                                <p>{faq.content}</p>
                                {faq.content2 && <p>{faq.content2}</p>}
                            </div>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    )
}
