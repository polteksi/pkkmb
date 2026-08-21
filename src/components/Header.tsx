import React from 'react';

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
    <header className="fixed top-0 left-0 w-full z-40 h-16 campus-glass border-b border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors duration-300">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        
        {/* Left: Hamburger Navigation Trigger */}
        <div className="flex items-center gap-3">
          <button 
            id="btn-nav-menu"
            onClick={onOpenMenu}
            aria-label="Buka Menu Navigasi"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[#5b0617] dark:text-[#ff8595] hover:bg-[#5b0617]/10 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer border border-slate-200/60 dark:border-slate-700/60"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          
          {activeTabTitle && (
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-500 dark:text-slate-400 border-l border-slate-200 dark:border-slate-700 pl-3">
              {activeTabTitle}
            </span>
          )}
        </div>

        {/* Center: Brand Identity */}
        <div 
          onClick={onOpenMenu}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <span className="font-display text-[22px] sm:text-[24px] font-black text-[#5b0617] dark:text-white tracking-tight group-hover:opacity-90 transition-opacity">
            ORVOKS
          </span>
          <span className="bg-gradient-to-r from-[#5b0617] to-[#b02a3e] dark:from-[#b02a3e] dark:to-[#ff6473] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs tracking-wider font-headline">
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer active:scale-95 shadow-2xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-amber-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform duration-300">
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
