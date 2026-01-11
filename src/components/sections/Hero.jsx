import LogoMarquee from '../common/Marquee';
import DrainageSystemSection from './Drainage';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import SymptomsSection from './Symptom';
import WhyFailedSection from './WhyFailed';

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
            <div className="">
                <SymptomsSection />
            </div>
            <div className="">
                <DrainageSystemSection />
            </div>
            <div className="">
                <WhyFailedSection />
            </div>
        </section>
    );
}