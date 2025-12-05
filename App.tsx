import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import PortfolioGrid from './components/PortfolioGrid';
import SubPageLayout from './components/SubPageLayout';
import Footer from './components/Footer';
import { ProjectCategory } from './types';
import { initialProjects } from './data';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);
  
  // 核心修改：直接读取导入的数据，不使用 useState。
  // 这样只要 data.ts 更新，页面重绘时就会立即获取最新数据。
  const projects = initialProjects;

  // Helper to determine if we are in "Home" mode (All projects)
  const isHome = activeCategory === ProjectCategory.ALL;
  // Helper to determine if we are in "Contact" mode
  const isContact = activeCategory === ProjectCategory.CONTACT;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col">
      <Navbar 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />
      
      <main className="flex-1 flex flex-col w-full">
        {isHome ? (
          <>
            <Hero />
            <BrandMarquee />
            <PortfolioGrid category={ProjectCategory.ALL} projects={projects} />
          </>
        ) : isContact ? (
          <PortfolioGrid category={ProjectCategory.CONTACT} projects={projects} />
        ) : (
          <SubPageLayout category={activeCategory} projects={projects} />
        )}
      </main>

      {(isHome || isContact) && <Footer />}
    </div>
  );
};

export default App;