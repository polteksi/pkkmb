import React from 'react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenGroups: () => void;
  activeTabTitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, onOpenGroups }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 h-16 bg-[#f8f9fa] border-b-2 border-[#191c1d] shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
      <button 
        id="btn-nav-menu"
        onClick={onOpenMenu}
        aria-label="Buka Menu Navigasi"
        className="text-[#5b0617] hover:bg-[#e7e8e9] active:translate-x-0.5 active:translate-y-0.5 transition-all p-2 rounded-md flex items-center justify-center border-2 border-transparent hover:border-[#191c1d]"
      >
        <span className="material-symbols-outlined text-[26px]">menu</span>
      </button>

      <div className="flex items-center gap-1.5 cursor-pointer select-none">
        <span className="font-display text-[22px] sm:text-[24px] font-black text-[#5b0617] uppercase tracking-tighter">
          ORVOKS
        </span>
        <span className="bg-[#b02a3e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#191c1d] font-headline">
          2026
        </span>
      </div>

      <button 
        id="btn-nav-groups"
        onClick={onOpenGroups}
        aria-label="Daftar Kelompok"
        className="text-[#5b0617] hover:bg-[#e7e8e9] active:translate-x-0.5 active:translate-y-0.5 transition-all p-2 rounded-md flex items-center justify-center border-2 border-transparent hover:border-[#191c1d]"
      >
        <span className="material-symbols-outlined text-[26px]">groups</span>
      </button>
    </header>
  );
};
