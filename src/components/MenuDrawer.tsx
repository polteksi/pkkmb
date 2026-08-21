import React from 'react';
import { TabType } from '../types';

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
    { id: 'jadwal', label: 'Jadwal 5 Hari', icon: 'calendar_month', desc: 'Susunan lengkap rundown & sesi' },
    { id: 'kelompok', label: 'Daftar Kelompok', icon: 'groups', desc: 'Mentor, ruangan & data anggota' },
    { id: 'lokasi', label: 'Denah & Venue', icon: 'map', desc: 'Peta fasilitas kampus & titik kumpul' },
    { id: 'faq', label: 'Tanya Jawab (FAQ)', icon: 'help', desc: 'Tata tertib, atribut & tanya jawab' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex bg-slate-900/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-xs sm:max-w-sm h-full flex flex-col justify-between overflow-y-auto shadow-2xl animate-in slide-in-from-left duration-250 border-r border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="bg-gradient-to-br from-[#5b0617] via-[#7a1f2b] to-[#002a5b] text-white p-5 sm:p-6 shrink-0 relative overflow-hidden">
          {/* Subtle blueprint grid overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
          
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  ORVOKS
                </span>
                <span className="bg-[#b02a3e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                  2026
                </span>
              </div>
              <p className="text-xs text-[#ffdada] font-medium leading-snug">
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

          <div className="mt-3 bg-black/25 backdrop-blur-xs p-2.5 rounded-xl text-[11px] text-white/90 border border-white/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-[#ffdada]">flag</span>
            <span className="font-medium italic">"Bangun Fondasi, Wujudkan Karya!"</span>
          </div>
        </div>

        {/* Navigation links */}
        <div className="p-4 sm:p-5 flex flex-col gap-4 flex-1">
          <div>
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 px-2">
              Menu Utama
            </span>
            <div className="flex flex-col gap-1">
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
                        ? 'bg-[#5b0617]/10 dark:bg-[#ff8595]/15 text-[#5b0617] dark:text-[#ff8595] font-bold border border-[#5b0617]/20 dark:border-[#ff8595]/30 shadow-xs'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800 font-semibold border border-transparent'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive 
                        ? 'bg-[#5b0617] dark:bg-[#7a1f2b] text-white shadow-xs' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-[#5b0617]/10 dark:group-hover:bg-[#ff8595]/20 group-hover:text-[#5b0617] dark:group-hover:text-[#ff8595]'
                    }`}>
                      <span className="material-symbols-outlined text-[20px]">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="text-sm block">{item.label}</span>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500 font-normal leading-none block mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-6 bg-[#5b0617] dark:bg-[#ff8595] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-center text-[11px] text-slate-400 dark:text-slate-500 font-medium">
          &copy; 2026 Panitia ORVOKS Politeknik Semen Indonesia
        </div>
      </div>
    </div>
  );
};
