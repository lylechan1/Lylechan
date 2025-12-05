import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-6 py-24 md:py-32 border-b border-white/5">
      <div className="flex flex-col justify-center h-full space-y-8 max-w-5xl">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-10 font-misans">
            Clarity in Chaos.<br />
            Function in Form.
          </h1>
        </div>

        <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-misans font-normal">
          <p>
            我相信设计不仅仅是视觉的表现，更是思维的延伸。在复杂的数字生态中，寻找最简洁有效的解决方案，
            同时赋予产品独特的品牌性格与情感连接。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;