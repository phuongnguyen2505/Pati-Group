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

export const PRODUCT_DATA = {
    title: "New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™",
    rating: 4.8,
    reviews: 2381,

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
    }
};