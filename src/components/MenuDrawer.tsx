import React from 'react';
import { TabType } from '../types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: TabType) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-[#f8f9fa] border-r-2 border-[#191c1d] shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] w-4/5 max-w-xs h-full flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="bg-[#5b0617] text-white p-5 border-b-2 border-[#191c1d] flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-display font-black text-2xl tracking-tighter">
              ORVOKS
            </span>
            <button
              onClick={onClose}
              className="w-7 h-7 bg-white text-[#191c1d] rounded border-2 border-[#191c1d] flex items-center justify-center font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <p className="text-xs text-[#ffdada] font-semibold">
            PKKMB Politeknik Semen Indonesia 2026
          </p>
          <div className="bg-black/30 p-2 rounded text-[11px] text-white/90 border border-white/20">
            Motto: "Bangun Fondasi, Wujudkan Karya!"
          </div>
        </div>

        {/* Navigation links */}
        <div className="p-4 flex flex-col gap-2">
          <span className="text-[11px] font-bold text-[#897172] uppercase tracking-wider">
            Menu Utama
          </span>

          {[
            { id: 'beranda' as TabType, label: 'Beranda Utama', icon: 'home' },
            { id: 'jadwal' as TabType, label: 'Jadwal 5 Hari', icon: 'calendar_month' },
            { id: 'kelompok' as TabType, label: 'Daftar Kelompok', icon: 'groups' },
            { id: 'lokasi' as TabType, label: 'Denah & Venue', icon: 'map' },
            { id: 'faq' as TabType, label: 'Tanya Jawab (FAQ)', icon: 'help' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigateTab(item.id);
                onClose();
              }}
              className="flex items-center gap-3 p-2.5 rounded-md border-2 border-transparent hover:border-[#191c1d] hover:bg-white text-left font-bold text-xs sm:text-sm text-[#191c1d] transition-all active:translate-x-1"
            >
              <span className="material-symbols-outlined text-[20px] text-[#5b0617]">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}

          <hr className="my-2 border-[#191c1d]/20" />

          <span className="text-[11px] font-bold text-[#897172] uppercase tracking-wider">
            Layanan & Bantuan
          </span>

          <div className="bg-[#ffdada]/60 border-2 border-[#191c1d] p-3 rounded-md flex flex-col gap-1.5">
            <span className="font-bold text-xs text-[#5b0617] flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">medical_services</span>
              Posko Medis & Emergency
            </span>
            <p className="text-[11px] text-[#191c1d]">
              Ruang Kesehatan Gedung A Lt. 1 (Hotline: 0811-9988-7766)
            </p>
          </div>

          <div className="bg-white border-2 border-[#191c1d] p-3 rounded-md flex flex-col gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-bold text-xs text-[#002a5b] flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              Buku Panduan Mahasiswa
            </span>
            <p className="text-[11px] text-[#564242]">
              Unduh e-booklet panduan orientasi vokasional & etika akademik 2026.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#e7e8e9] border-t-2 border-[#191c1d] text-center text-[10px] text-[#564242] font-semibold">
          &copy; 2026 Panitia ORVOKS Politeknik Semen Indonesia
        </div>
      </div>
    </div>
  );
};
