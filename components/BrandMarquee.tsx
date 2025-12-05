import React, { useState } from 'react';
import { BrandLogo } from '../types';

// Initial dummy logos
const initialLogos: BrandLogo[] = [
  { id: '1', url: 'https://picsum.photos/seed/brand1/200/100?grayscale', alt: 'Brand 1' },
  { id: '2', url: 'https://picsum.photos/seed/brand2/200/100?grayscale', alt: 'Brand 2' },
  { id: '3', url: 'https://picsum.photos/seed/brand3/200/100?grayscale', alt: 'Brand 3' },
  { id: '4', url: 'https://picsum.photos/seed/brand4/200/100?grayscale', alt: 'Brand 4' },
  { id: '5', url: 'https://picsum.photos/seed/brand5/200/100?grayscale', alt: 'Brand 5' },
  { id: '6', url: 'https://picsum.photos/seed/brand6/200/100?grayscale', alt: 'Brand 6' },
  { id: '7', url: 'https://picsum.photos/seed/brand7/200/100?grayscale', alt: 'Brand 7' },
];

const BrandMarquee: React.FC = () => {
  const [logos] = useState<BrandLogo[]>(initialLogos);

  return (
    <section className="w-full py-12 border-b border-white/5 bg-black relative group -mt-[60px] z-10">
      <div className="max-w-[1920px] mx-auto px-6">
        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

          {/* Scrolling Track */}
          <div className="flex w-max animate-marquee space-x-10 items-center">
            {/* We duplicate the array to ensure seamless looping */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="flex-shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={logo.url} 
                  alt={logo.alt} 
                  className="h-20 w-auto object-contain max-w-[200px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;