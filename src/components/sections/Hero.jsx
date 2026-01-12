import LogoMarquee from '../common/Marquee';
import ReviewsSection from './Reviews';
import DrainageSystemSection from './Drainage';
import IngredientsSystem from './IngredientsSystem';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import SymptomsSection from './Symptom';
import WhyFailedSection from './WhyFailed';
import PoliciesSection from './Policies';
import ExpertAdviceSection from './ExpertAdvice';
import StoriesSection from './Stories';
import FAQSection from './Faq';
import MissionStatsSection from './MissionStats';
import ShowcaseSection from './Showcase';

export default function Hero() {
    return (
        <section className="bg-white pt-8">
            <div className="px-4 lg:px-[50px] mx-auto lg:mx-20">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-16 items-start">
                    <div className="lg:col-span-6">
                        <ProductGallery />
                    </div>
                    <div className="lg:col-span-6">
                        <ProductInfo />
                    </div>
                </div>
            </div>
            <div className="w-ful mt-8 lg:col-span-12">
                <LogoMarquee />
            </div>
            <SymptomsSection />
            <DrainageSystemSection />
            <WhyFailedSection />
            <div className="mt-8">
                <IngredientsSystem />
            </div>
            <ReviewsSection />
            <PoliciesSection />
            <ExpertAdviceSection />
            <StoriesSection />
            <FAQSection />
            <MissionStatsSection />
            <ShowcaseSection />
        </section>
    );
}