import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section id="home" className={cn('relative min-h-screen flex items-center overflow-hidden', className)}>
      <div className="absolute inset-0 -z-10">
        <img 
          src="/lovable-uploads/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png" 
          alt="Saigon Property – Bất động sản trung tâm TP.HCM" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-tight mb-6">
              Chuyên mua bán & cho thuê bất động sản khu trung tâm Sài Gòn
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-lg md:text-xl text-white/90 mb-4">
              Đội ngũ môi giới tập trung Quận 1, 3, 4, 5, Phú Nhuận — minh bạch, nhanh chóng, hiệu quả.
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Tư vấn mua bán, cho thuê căn hộ, nhà phố, shophouse.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
