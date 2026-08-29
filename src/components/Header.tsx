import React from 'react';
import { BrandDecoration } from './BrandDecoration';

interface HeaderProps {
  onOpenMenu: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  activeTabTitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenMenu, 
  isDarkMode, 
  onToggleDarkMode, 
  activeTabTitle 
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 h-16 campus-glass border-b border-[#5B2BBE]/10 dark:border-[#D63BBE]/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        
        {/* Left: Hamburger Navigation Trigger */}
        <div className="flex items-center gap-3">
          <button 
            id="btn-nav-menu"
            onClick={onOpenMenu}
            aria-label="Buka Menu Navigasi"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[#5B2BBE] dark:text-[#C39BFF] hover:bg-[#5B2BBE]/10 dark:hover:bg-[#5B2BBE]/25 active:scale-95 transition-all cursor-pointer border border-[#5B2BBE]/15 dark:border-[#D63BBE]/25 bg-white/70 dark:bg-[#1B1638]"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          
          {activeTabTitle && (
            <div className="hidden sm:flex items-center gap-2 border-l border-[#5B2BBE]/15 dark:border-[#D63BBE]/25 pl-3">
              <span className="text-xs font-bold text-[#6B6874] dark:text-[#A39EB8]">
                {activeTabTitle}
              </span>
            </div>
          )}
        </div>

        {/* Center: Brand Identity */}
        <div 
          onClick={onOpenMenu}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <BrandDecoration type="sparkle" size={18} color="#D63BBE" className="group-hover:rotate-45 transition-transform duration-300 hidden xs:inline-block" />
          <span className="font-display text-[22px] sm:text-[24px] font-black text-[#5B2BBE] dark:text-white tracking-tight group-hover:opacity-90 transition-opacity">
            ORVOKS
          </span>
          <span className="bg-gradient-to-r from-[#5B2BBE] to-[#D63BBE] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs tracking-wider font-display">
            2026
          </span>
        </div>

        {/* Right: Dark / Light Mode Toggle Button */}
        <div className="flex items-center gap-2">
          <button 
            id="btn-theme-toggle"
            onClick={onToggleDarkMode}
            aria-label={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
            title={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer active:scale-95 shadow-2xs bg-white/90 dark:bg-[#251F4A] text-[#22202A] dark:text-[#F2B632] border-[#5B2BBE]/15 dark:border-[#D63BBE]/30 hover:bg-[#5B2BBE]/5 dark:hover:bg-[#322B60]"
          >
            <span className="material-symbols-outlined text-[19px] transition-transform duration-300">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
            <span className="hidden sm:inline">
              {isDarkMode ? 'Terang' : 'Gelap'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
