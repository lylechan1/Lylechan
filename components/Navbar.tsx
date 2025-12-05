import React, { useState } from 'react';
import { ProjectCategory, NavItem } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
}

const navItems: NavItem[] = [
  { label: '体验设计', value: ProjectCategory.EXPERIENCE },
  { label: '视觉设计', value: ProjectCategory.VISUAL },
  { label: '品牌设计', value: ProjectCategory.BRAND },
  { label: '我的猫', value: ProjectCategory.ASSETS },
  { label: '想法笔记', value: ProjectCategory.THOUGHTS },
  { label: '联系', value: ProjectCategory.CONTACT },
];

const Navbar: React.FC<NavbarProps> = ({ activeCategory, onSelectCategory }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1920px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Name */}
        <div 
          className="font-misans text-[16px] tracking-tight text-white cursor-pointer hover:text-gray-300 transition-colors flex items-baseline gap-2"
          onClick={() => onSelectCategory(ProjectCategory.ALL)}
        >
          <span className="font-bold">LYLECHAN</span>
          <span className="font-normal">陈履安</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[2vw]">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onSelectCategory(item.value)}
              className="relative group"
            >
              <span className={`text-[16px] font-misans font-bold tracking-[1px] text-white transition-opacity duration-300`}>
                {item.label}
              </span>
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-white transform transition-transform duration-300 ${
                activeCategory === item.value ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-b border-white/10 absolute w-full left-0 top-20">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onSelectCategory(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-misans font-normal ${
                  activeCategory === item.value ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;