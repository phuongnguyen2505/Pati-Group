import React from 'react'
import { PRODUCT_DATA } from '@/data/product'

export default function DrainageSystemSection() {
    const { intro, warningBox1, chartImage, illustrationImage, conclusion } = PRODUCT_DATA.drainageSystem
    const { xVector, vVector } = PRODUCT_DATA

    return (
        <section className="w-full pb-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center font-lora text-2xl md:text-[32px] font-normal leading-tight mb-4">
                    Your <span className="text-[#008753]">Hidden</span> Drainage System
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
                    <div className="space-y-6 font-mono text-base md:text-lg order-2 lg:order-1">
                        <div className="leading-relaxed space-y-2">
                            <p>
                                Your lymphatic system is your body's internal cleaning crew—a network of vessels that processes <span className="font-bold">3-4 liters of cellular waste and excess fluid every single day.</span>
                            </p>
                            <p>{intro.text[1]}</p>
                        </div>
                        <ul className="space-y-2">
                            {intro.benefits.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <img className="w-5" src={vVector} alt="" />
                                    <span className="text-[#008753] font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-[#ffe3e3] border rounded-lg p-5">
                            <p className=" font-medium mb-0">
                                {warningBox1.text}
                            </p>
                        </div>
                        <ul className="space-y-2">
                            {warningBox1.issues.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <img className="w-5" src={xVector} alt="" />
                                    <span className="text-rose-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className=" italic">
                            {warningBox1.subText}
                        </p>
                    </div>
                    <div className="w-full rounded-2xl shadow-sm overflow-hidden p-2 order-1 lg:order-2">
                        <img
                            src={chartImage}
                            alt="Lymphatic System Health Chart"
                            className="w-full h-auto object-contain rounded-xl"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="w-full rounded-2xl overflow-hidden shadow-sm border">
                        <img
                            src={illustrationImage}
                            alt="Lymphatic Vessels Illustration"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="space-y-6 font-mono text-base md:text-lg">
                        <div>
                            <h3 className="font-bold font-mono text-lg mb-2">
                                {conclusion.title}
                            </h3>
                            <p className=" leading-relaxed">
                                {conclusion.text}
                            </p>
                        </div>
                        <div className="rounded-xl p-6 space-y-4">
                            <p className="font-medium leading-relaxed">
                                {conclusion.warningBox2.text}
                            </p>
                            <ul className="space-y-2">
                                {conclusion.warningBox2.symptoms.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <img className="w-5" src={xVector} alt="" />
                                        <span className="text-rose-800 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4 leading-relaxed">
                            <p className="font-bold">
                                {conclusion.finalText[0]}
                            </p>
                            <p>
                                {conclusion.finalText[1]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
