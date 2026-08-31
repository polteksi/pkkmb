import React from 'react';
import { TabType } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: TabType) => void;
  activeTab?: TabType;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  activeTab = 'beranda',
}) => {
  if (!isOpen) return null;

  const navItems: { id: TabType; label: string; icon: string; desc: string }[] = [
    { id: 'beranda', label: 'Beranda Utama', icon: 'home', desc: 'Ringkasan & status orientasi harian' },
    { id: 'jadwal', label: 'Jadwal 7 Hari', icon: 'calendar_month', desc: 'Susunan lengkap rundown & sesi' },
    { id: 'kelompok', label: 'Daftar Kelompok', icon: 'groups', desc: 'Mentor, ruangan & data anggota' },
    { id: 'atribut', label: 'Atribut PKKMB', icon: 'checkroom', desc: 'Perlengkapan & dresscode per hari' },
    { id: 'guidebook', label: 'Guidebook', icon: 'menu_book', desc: 'Unduh panduan resmi format PDF' },
    { id: 'faq', label: 'Tanya Jawab (FAQ)', icon: 'help', desc: 'Tata tertib, atribut & tanya jawab' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex bg-black/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-[#1B1638] w-full max-w-xs sm:max-w-sm h-full flex flex-col justify-between overflow-y-auto shadow-2xl animate-in slide-in-from-left duration-250 border-r border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header - ORVOKS Deep Purple Gradient */}
        <div className="bg-[#5B2BBE] text-white p-5 sm:p-6 shrink-0 relative overflow-hidden">
          
          {/* Subtle geometric accent */}
          <div className="absolute top-3 right-12 opacity-15 pointer-events-none">
            <BrandDecoration type="sparkle" size={24} color="#FFFFFF" />
          </div>
          
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  ORVOKS
                </span>
                <span className="bg-white/20 backdrop-blur-xs text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs border border-white/25">
                  2026
                </span>
              </div>
              <p className="text-xs text-[#EFE9FF] font-medium leading-snug">
                PKKMB Politeknik Semen Indonesia
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Tutup Menu"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <div className="mt-3 bg-black/25 backdrop-blur-xs p-2.5 rounded-xl text-[11px] text-white/90 border border-white/15 flex items-center gap-2">
            <BrandDecoration type="sparkle" size={14} color="#F2B632" />
            <span className="font-medium italic">"Pondasi Kemandirian, Kokoh Berintegritas"</span>
          </div>
        </div>

        {/* Navigation links */}
        <div className="p-4 sm:p-5 flex flex-col gap-4 flex-1">
          <div>
            <span className="text-[11px] font-bold text-[#6B6874] dark:text-[#A39EB8] uppercase tracking-wider block mb-2 px-2 font-display">
              Menu Utama
            </span>
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigateTab(item.id);
                      onClose();
                    }}
                    className={`flex items-center gap-3.5 p-3 rounded-xl text-left transition-all cursor-pointer group ${
                      isActive
                        ? 'bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] font-bold border border-[#5B2BBE]/25 dark:border-[#5B2BBE]/40 shadow-xs'
                        : 'text-[#22202A] dark:text-[#F3F2F8] hover:bg-[#FAF9F6] dark:hover:bg-[#251F4A] font-semibold border border-transparent'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                      isActive 
                        ? 'bg-[#5B2BBE] text-white shadow-xs' 
                        : 'bg-[#FAF9F6] dark:bg-[#251F4A] text-[#6B6874] dark:text-[#A39EB8] group-hover:bg-[#5B2BBE]/10 dark:group-hover:bg-[#5B2BBE]/20 group-hover:text-[#5B2BBE] dark:group-hover:text-[#C39BFF]'
                    }`}>
                      <span className="material-symbols-outlined text-[20px]">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm block truncate font-display">{item.label}</span>
                      <span className="text-[11px] text-[#6B6874] dark:text-[#A39EB8] font-normal leading-none block mt-0.5 truncate">
                        {item.desc}
                      </span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-6 bg-[#5B2BBE] dark:bg-[#C39BFF] rounded-full shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-[#FAF9F6] dark:bg-[#151030] border-t border-[#5B2BBE]/10 dark:border-[#251F4A] text-center text-[11px] text-[#6B6874] dark:text-[#A39EB8] font-medium">
          &copy; 2026 Panitia ORVOKS Politeknik Semen Indonesia
        </div>
      </div>
    </div>
  );
};
