import populationIcon from '@/assets/icons/population.png';
import ecologyIcon from '@/assets/icons/ecology.png';
import bloodIcon from '@/assets/icons/blood.png';
import smileIcon from '@/assets/icons/smile.png';
import thighIcon from '@/assets/icons/thigh.png';
import blood2Icon from '@/assets/icons/blood-2.png';
import ratingStar from '@/assets/icons/rating.png';

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
};