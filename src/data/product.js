import populationIcon from '@/assets/icons/population.png';
import ecologyIcon from '@/assets/icons/ecology.png';
import bloodIcon from '@/assets/icons/blood.png';
import smileIcon from '@/assets/icons/smile.png';
import thighIcon from '@/assets/icons/thigh.png';
import blood2Icon from '@/assets/icons/blood-2.png';
import ratingStar from '@/assets/icons/rating.png';
import arrowBottom from '@/assets/icons/arrow-b.png';
import vVector from '@/assets/icons/V.png';
import xVector from '@/assets/icons/X.png';
import leaves from '@/assets/icons/leaves.png';

export const PRODUCT_DATA = {
    title: "New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™",
    rating: 4.8,
    reviews: 2381,

    leaves: leaves,

    nutritionalModal: {
        images: "/images/products/ingredients-min.png"
    },

benefitList: [
    {
        icon: populationIcon,
        text: "Join over 93 Thousand who say - it WORKS!"
    },
    {
        icon: bloodIcon,
        text: "Restores your body's natural 24-hour lymphatic cycle"
    },
    {
        icon: thighIcon,
        text: "Helps reduce fluid retention and the appearance of puffiness and bloating"
    },
    {
        icon: smileIcon,
        text: "Helps fall asleep faster, stay asleep longer and wake up energized"
    },
    {
        icon: blood2Icon,
        text: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded"
    },
    {
        icon: ecologyIcon,
        text: "Boosts energy, mental clarity and emotional balance"
    }
],

    variants: [
        {
            id: 1,
            name: "1 Bottle",
            subtext: "1 month total | Save $27.99",
            price: 31.96,
            originalPrice: 59.95,
            badges: ["Free USA Shipping"],
            isBestSeller: false
        },
        {
            id: 2,
            name: "Buy 2 Get 1 Free",
            subtext: "3 bottles total | Save $115.93",
            price: 63.92,
            originalPrice: 179.85,
            badges: ["Free USA Shipping", "Free Anti-Bloating Protocol E-book"],
            isBestSeller: true,
        },
        {
            id: 3,
            name: "Buy 3 Get 2 Free",
            subtext: "5 bottles total | Save $203.87",
            price: 95.88,
            originalPrice: 299.75,
            badges: ["Free USA Shipping", "Free Anti-Bloating Protocol E-book", "$20 Gift Card"],
            isBestSeller: false
        }
    ],

        images: [
            "/images/products/Lymo1.png",
            "/images/products/Lymo2.png",
            "/images/products/Lymo3.png",
            "/images/products/Lymo4.png",
            "/images/products/Lymo5.png",
            "/images/products/Lymo6.png",
            "/images/products/Lymo7.png",
            "/images/products/Lymo8.png",
        ],

            ratingImage: ratingStar,

                nysaleImage: "/images/products/nysale.png",
                    nysaleImageVector: "/images/products/nysale.svg",

                        paymentImage: "/images/payment/payment-options.png",

                            modalImages: "/images/products/ingredients-min.png",

                                promoImage: "/images/payment/promo.png",

                                    policy: [
                                        {
                                            images: "/images/policies/60-days.png",
                                            text: "60-Day Money-Back Guarantee"
                                        },
                                        {
                                            images: "/images/policies/flag.png",
                                            text: "Free Shipping From USA Included"
                                        }
                                    ],

                                        ingredientsList: [
                                            {
                                                name: "Echinacea purpurea Extract",
                                                description: "Known for its anti-inflammatory properties, it may support skin health."
                                            },
                                            {
                                                name: "Dandelion Extract",
                                                description: "Traditionally used as a diuretic, it may help reduce water retention."
                                            },
                                            {
                                                name: "Burdock Powder",
                                                description: "Contains antioxidants that may promote skin clarity."
                                            },
                                            {
                                                name: "Cleavers Extract",
                                                description: "Believed to support lymphatic drainage and detoxification."
                                            },
                                            {
                                                name: "Rutin",
                                                description: "A flavonoid that may strengthen blood vessels and improve circulation."
                                            },
                                            {
                                                name: "Bromelain Powder",
                                                description: "An enzyme from pineapple that may reduce inflammation and support tissue repair."
                                            },
                                            {
                                                name: "Lemon Powder",
                                                description: "Rich in vitamin C, it may aid in collagen production and skin rejuvenation."
                                            },
                                            {
                                                name: "Kelp Extract",
                                                description: "A source of iodine and minerals that may support skin metabolism."
                                            }
                                        ],

                                            ingredientsFooter: "These natural ingredients work together to reduce puffiness, bloating, fluid retention.",

                                                otherFaqs: [
                                                    {
                                                        id: "how-it-works",
                                                        title: "How does it actually work?",
                                                        content: "Sculptique works by improving blood flow and supporting the lymphatic system, which helps to reduce fluid retention and the appearance of puffiness and bloating."
                                                    },
                                                    {
                                                        id: "shipping",
                                                        title: "Shipping and returns",
                                                        content: "All of Sculptique orders get FREE shipping straight from our USA warehouse. Orders are usually shipped out within 1-2 working days, and you should receive the order within 3-7 working days for domestic USA orders, and within 10 working days for International orders.",
                                                        content2: "We also offer a 60-day money back guarantee - if you are unsatisfied with our product, you can take advantage of our guarantee and ship back the product to us to get your return within 60 days of receiving your order."
                                                    }
                                                ],
                                                    marqueeLogos: [
                                                        {
                                                            name: "Grazia",
                                                            src: "/images/logos/grazia.svg"
                                                        },
                                                        {
                                                            name: "Vogue",
                                                            src: "/images/logos/vogue.svg"
                                                        },
                                                        {
                                                            name: "WomensHealth",
                                                            src: "/images/logos/womenshealth.svg"
                                                        }
                                                    ],

                                                        symptomsSection: {
    subtitle: "If you're experiencing more than one of these symptoms, your body is trying to tell you something:",
        items: [
            {
                image: "/images/symptoms/symptom1.png",
                text: "Your stomach is flat in the morning, but by evening you look six months pregnant."
            },
            {
                image: "/images/symptoms/symptom2.png",
                text: "Your ankles disappear into \"kankles\" by the end of the day."
            },
            {
                image: "/images/symptoms/symptom3.png",
                text: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try."
            },
            {
                image: "/images/symptoms/symptom4.png",
                text: "You feel foggy and exhausted even after a full night's sleep."
            },
            {
                image: "/images/symptoms/symptom5.png",
                text: "You wake up stiff and achy, like your body aged overnight."
            }
        ],
            conclusion: {
        image: "/images/symptoms/symptom-gr.png",
            imageMobile: "/images/symptoms/symptom-gr-mb.png",
                alt: "Conclusion illustration"
    },
    cause: {
        image: "/images/symptoms/symptom-cause.png",
            imageMobile: "/images/symptoms/symptom-cause-mb.png",
                alt: "Cause illustration"
    }
},

arrowBottom: arrowBottom,

    drainageSystem: {
    intro: {
        text: [
            "Your lymphatic system is your body's internal cleaning crew—a network of vessels that processes 3-4 liters of cellular waste and excess fluid every single day.",
            "When it's working properly, you don't even know it exists."
        ],
            benefits: [
                "Waste gets drained away",
                "Fluid stays balanced.",
                "Your body feels light and energized."
            ]
    },
    warningBox1: {
        text: "But after age 35, declining estrogen hijacks this system's ability to function.",
            issues: [
                "Vessel pumping weakens.",
                "One-way valves fail.",
                "Protein clogs form.",
                "Vessel walls become leaky."
            ],
                subText: "Instead of processing and removing waste, it backs up in your tissues."
    },
    chartImage: "/images/drainage/drainage1.png",
        illustrationImage: "/images/drainage/drainage2.png",
            conclusion: {
        title: "And it accumulates. Day after day. Week after week.",
            text: "That gallon of fluid your body should be draining every 24 hours? It's pooling in your stomach, your legs, your face—anywhere gravity and tissue structure allow it to settle.",
                warningBox2: {
            text: "The metabolic waste your cells produce overnight? It's still sitting there at noon. At dinner. While you're trying to fall asleep.",
                symptoms: [
                    "That's why you're bloated.",
                    "That's why your ankles swell.",
                    "That's why you see cellulite.",
                    "That's why you feel exhausted and foggy."
                ]
        },
        finalText: [
            "Your cells are literally sitting in their own waste—and your body can't flush it out.",
            "The longer this goes on, the worse it gets. More congestion. More inflammation. More pressure on an already compromised system."
        ]
    }
},

vVector: vVector,
    xVector: xVector,

        whyFailedSection: {
    items: [
        {
            image: "/images/failed/X1.png",
            title: "You cut out gluten, dairy, sugar. You ate clean for months.",
            failReason: {
                title: "Why it failed",
                text: "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there."
            }
        },
        {
            image: "/images/failed/X2.png",
            title: "You tried viral lymphatic drops from TikTok.",
            failReason: {
                title: "Why it failed",
                text: "They're just pricey water with trace herbs. The \"active ingredients\" are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine."
            }
        },
        {
            image: "/images/failed/X3.png",
            title: "You got lymphatic massage or bought compression socks.",
            failReason: {
                title: "Why it failed",
                text: "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own."
            }
        }
    ],

        failedImages: {
        image: "/images/failed/failed-gr.png",
            imageMobile: "/images/failed/failed-gr-mb.png",
        },
},

ingredientsSystem: {
    description: "Sculptique is the only formula that addresses ALL 6 mechanisms of lymphatic dysfunction simultaneously—not with symbolic doses, but with therapeutic amounts based on clinical research.",
        subDescription: "Not just moving fluid temporarily. Not just reducing inflammation.",
            subDescriptionbold: "Complete restoration.",
                images: "/images/ingredients/ingredients-system.png",
                    imagesMobile: "/images/ingredients/ingredients-system-mb.png",

                        items: [
                            {
                                benefit: "Reactivate Lymphatic Pumps",
                                image: "/images/ingredients/cleavers.png",
                                name: "Cleavers Extract",
                                dosage: "100mg",
                                details: "Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that \"wake up\" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance. [Study: Enhanced NK cell activity in immunosuppressed models]"
                            },
                            {
                                benefit: "Flush Excess Fluid",
                                image: "/images/ingredients/dandelion.png",
                                name: "Dandelion Extract",
                                dosage: "250mg",
                                details: "Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001). [Study: First human pilot study on diuretic effects]"
                            },
                            {
                                benefit: "Break Down Protein Clogs",
                                image: "/images/ingredients/bromelain.png",
                                name: "Bromelain Powder",
                                dosage: "100mg",
                                details: "Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating \"sludge\" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo. [Study: As effective as prescription NSAIDs for inflammation]"
                            },
                            {
                                benefit: "Strengthen Vessel Walls",
                                image: "/images/ingredients/rutin.png",
                                name: "Rutin",
                                dosage: "100mg",
                                details: "Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients. [Study: Systematic review of 1,643 participants]"
                            },
                            {
                                benefit: "Reduce Inflammation",
                                image: "/images/ingredients/burdock.png",
                                name: "Burdock Root Powder",
                                dosage: "200mg",
                                details: "Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance. [Study: 42-day trial in osteoarthritis]"
                            },
                            {
                                benefit: "Boost Immune Clearance",
                                image: "/images/ingredients/echinacea.png",
                                name: "Echinacea Purpurea Extract",
                                dosage: "500mg",
                                details: "Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections. [Study: Increased NK cell cytotoxic activity]"
                            },
                            {
                                benefit: "Support Metabolism",
                                image: "/images/ingredients/kelp.png",
                                name: "Kelp Extract",
                                dosage: "30mg",
                                details: "Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials. [Study: Dose-dependent increase in metabolic rate]"
                            },
                            {
                                benefit: "Antioxidant Protection",
                                image: "/images/ingredients/lemon.png",
                                name: "Lemon Powder",
                                dosage: "50mg",
                                details: "Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health. [Study: Triple-masked trial in 90 participants]"
                            }
                        ],
    },

reviewsSection: {
    title: "Real Women, Real Results: 93,000+ Transformations",
        subtitle: "All reviews verified from actual paying customers",
            trustpilotScore: "Excellent 4.8 out of 5",
                diamondImages: "/images/review/diamond.png",

                    summary: {
        average: 4.67,
            totalReviews: 110,
                distribution: [
                    { stars: 5, count: 84, percent: 76 },
                    { stars: 4, count: 17, percent: 15 },
                    { stars: 3, count: 8, percent: 7 },
                    { stars: 2, count: 1, percent: 1 },
                    { stars: 1, count: 0, percent: 0 },
                ]
    },

    items: [
        {
            id: 1,
            author: "Anonymous",
            isVerified: true,
            rating: 5,
            date: "12/08/2025",
            content: "Pretty sure I'm seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it's working."
        },
        {
            id: 2,
            author: "Anonymous",
            isVerified: true,
            rating: 5,
            date: "12/01/2025",
            content: "One month and I've already seen a difference!"
        },
        {
            id: 3,
            author: "Donabeth Houx",
            isVerified: true,
            rating: 5,
            date: "11/23/2025",
            content: "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It's a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!"
        },
        {
            id: 4,
            author: "Dawn Camacho",
            isVerified: true,
            rating: 5,
            date: "11/17/2025",
            content: "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy."
        },
        {
            id: 5,
            author: "Anonymous",
            isVerified: true,
            rating: 5,
            date: "11/13/2025",
            content: "I have noticed a difference on my swelling."
        },
        {
            id: 6,
            author: "Jessica A.",
            isVerified: true,
            rating: 2,
            date: "2025-11-01",
            content: "Didn't work for me."
        },
        {
            id: 7,
            author: "Amanda B.",
            isVerified: true,
            rating: 5,
            date: "2025-10-28",
            content: "Highly recommend!"
        },
        {
            id: 8,
            author: "Chris Evans",
            isVerified: true,
            rating: 4,
            date: "2025-10-25",
            content: "Solid performance."
        },
        {
            id: 9,
            author: "Lebron J",
            isVerified: true,
            rating: 3,
            date: "2025-10-25",
            content: "Could be better."
        },
        {
            id: 10,
            author: "Leo M",
            isVerified: true,
            rating: 3,
            date: "2025-10-25",
            content: "It's okay."
        },
    ]
},

policies: [
    {
        icon: "/images/policies/ship.png",
        title: "Free Shipping from USA",
        subtext: "On all orders"
    },
    {
        icon: "/images/policies/support.png",
        title: "Naturally Supports Your Body",
        subtext: "Promotes healthy immune cell functions"
    },
    {
        icon: "/images/policies/natural.png",
        title: "100% Natural Ingredients",
        subtext: "8 active, natural ingredients"
    },
    {
        icon: "/images/policies/60-min.png",
        title: "Try it Risk Free for 60 Days",
        subtext: "60-day money-back guarantee"
    }
],

    expertAdvice: {
    date: "July 4th, 2025",
        title: "Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic",
            quote: "\"Your nutrition plays a powerful role in your appearance. If your body is missing key vitamins and nutrients, it can't process fat and upkeep healthy connective tissue, which is why unprocessed fat flows up and starts pushing up against your skin, forming bumps you know as cellulite.",
                description: "SmoothSkin by Sculptique™ contains ingredients that are scientifically proven to enhance microcirculation, boost lymphatic drainage, and reduce inflammation, which restores your tissue and breaks down the fat cells in your skin.\"",
                    image: "/images/expert/greendeskt.png",
    },

stories: {
    trustScore: "Excellent 4.8 out of 5",
        totalCustomers: "93,000+ Customers Worldwide",
            title: "See The Stories of Sculptique™ Women Firsthand",
                items: [
                    {
                        id: 1,
                        thumbnail: "/images/stories/thumb1.png",
                        videoUrl: "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
                    },
                    {
                        id: 2,
                        thumbnail: "/images/stories/thumb2.png",
                        videoUrl: "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
                    },
                    {
                        id: 3,
                        thumbnail: "/images/stories/thumb3.png",
                        videoUrl: "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
                    },
                    {
                        id: 4,
                        thumbnail: "/images/stories/thumb4.png",
                        videoUrl: "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
                    },
                    {
                        id: 5,
                        thumbnail: "/images/stories/thumb5.png",
                        videoUrl: "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
                    },
                    {
                        id: 6,
                        thumbnail: "/images/stories/thumb6.png",
                        videoUrl: "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
                    },
                    {
                        id: 7,
                        thumbnail: "/images/stories/thumb7.png",
                        videoUrl: "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
                    },
                    {
                        id: 8,
                        thumbnail: "/images/stories/thumb8.png",
                        videoUrl: "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
                    },
                    {
                        id: 9,
                        thumbnail: "/images/stories/thumb9.png",
                        videoUrl: "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
                    },
                    {
                        id: 10,
                        thumbnail: "/images/stories/thumb10.png",
                        videoUrl: "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4",
                    }
                ]
},

faq: {
    title: "Frequently Asked Questions",
        items: [
            {
                question: "How is this different from lymphatic drops I saw on TikTok?",
                answer: "Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.\n\nSculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more."
            },
            {
                question: "Why didn't my diet changes work?",
                answer: "Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues."
            },
            {
                question: "How long until I see results?",
                answer: "Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time—we recommend 90 days for complete results."
            },
            {
                question: "Is this safe? Any side effects?",
                answer: "Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected—you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first."
            },
            {
                question: "Can I take this with other supplements?",
                answer: "Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first."
            },
            {
                question: "How do I use it?",
                answer: "Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent."
            },
            {
                question: "What if it doesn't work for me?",
                answer: "You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU."
            },
            {
                question: "Where is this manufactured?",
                answer: "Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants."
            },
            {
                question: "Why isn't this in stores?",
                answer: "Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable."
            },
            {
                question: "Is this vegan/gluten-free?",
                answer: "Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients."
            }
        ]
},

missionStats: {
    title: "We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get Rid Of Bloating…And Feel Like Themselves Again",
        subtitle: "Here's where we're at right now:",
            images: "/images/mission/numbdeskt.png",
                imagesMobile: "/images/mission/numbmob.png",
                    productImage: "/images/mission/bottle.png",
    },

showcase: {
    trustText: "93.000+ Customers Worldwide",
        title: "Stop Masking Symptoms. Start Restoring Root Cause.",
            description: [
                "You deserve to feel like yourself again. To wake up without puffiness. To see your ankles. To look in the mirror and recognize the vibrant woman staring back. To have energy for the people you love.",
                "You deserve a solution that actually works. Not temporary relief. Not symptom masking. Complete lymphatic restoration."
            ],
                showcaseImage: "/images/showcase/before.png",
    }
};