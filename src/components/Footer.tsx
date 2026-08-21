import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  onNavigateTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="bg-[#f8f9fa] border-t-4 border-[#191c1d] mt-12 py-8 px-6 sm:px-8 w-full">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Info & Address */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1.5 select-none">
            <span className="font-display text-[18px] font-black text-[#5b0617] uppercase tracking-tighter">
              ORVOKS
            </span>
            <span className="bg-[#b02a3e] text-white text-[9px] font-bold px-1.5 py-0.5 rounded border border-[#191c1d] font-headline">
              2026
            </span>
          </div>
          <p className="text-xs font-bold text-[#191c1d] leading-snug">
            PKKMB Politeknik Semen Indonesia 2026
          </p>
          <div className="text-xs text-[#564242] flex flex-col gap-1">
            <span className="font-bold text-[#191c1d]">Alamat Kampus:</span>
            <p>Politeknik Semen Indonesia, Gresik, Jawa Timur</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-black uppercase text-[#5b0617] tracking-wider">
            Link Cepat
          </h4>
          <div className="flex flex-col gap-2 text-xs font-bold text-[#191c1d]">
            <button
              onClick={() => {
                onNavigateTab('beranda');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#5b0617] text-left hover:underline w-max transition-all cursor-pointer"
            >
              Beranda
            </button>
            <button
              onClick={() => {
                onNavigateTab('jadwal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#5b0617] text-left hover:underline w-max transition-all cursor-pointer"
            >
              Jadwal
            </button>
            <button
              onClick={() => {
                onNavigateTab('lokasi');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#5b0617] text-left hover:underline w-max transition-all cursor-pointer"
            >
              Denah & Venue
            </button>
            <button
              onClick={() => {
                onNavigateTab('faq');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#5b0617] text-left hover:underline w-max transition-all cursor-pointer"
            >
              FAQ (Tanya Jawab)
            </button>
          </div>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-black uppercase text-[#5b0617] tracking-wider">
            Hubungi Kami
          </h4>
          <div className="text-xs text-[#564242] flex flex-col gap-2">
            <a
              href="https://wa.me/6281199887766"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-bold text-[#191c1d] hover:text-[#5b0617] hover:underline"
            >
              <span className="material-symbols-outlined text-[16px] text-emerald-600 font-bold">call</span>
              +62 811-9988-7766 (WhatsApp)
            </a>
            <a
              href="mailto:panitia.pkkmb@polteksi.ac.id"
              className="flex items-center gap-1.5 font-bold text-[#191c1d] hover:text-[#5b0617] hover:underline"
            >
              <span className="material-symbols-outlined text-[16px] text-[#002a5b] font-bold">mail</span>
              panitia.pkkmb@polteksi.ac.id
            </a>
          </div>

          <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-[#191c1d]/10">
            <span className="text-[10px] font-bold text-[#897172] uppercase">Ikuti Kami</span>
            <div className="flex gap-2">
              <a
                href="https://instagram.com/pkkmb.polteksi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#ffdada] text-[#191c1d] border-2 border-[#191c1d] px-2.5 py-1.5 rounded text-[11px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1"
              >
                <span>📷</span> Instagram
              </a>
              <a
                href="https://tiktok.com/@pkkmb.polteksi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#ffdada] text-[#191c1d] border-2 border-[#191c1d] px-2.5 py-1.5 rounded text-[11px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1"
              >
                <span>🎵</span> TikTok
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-5xl mx-auto mt-8 pt-4 border-t-2 border-[#191c1d]/20 flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
        <span className="text-[10px] text-[#564242] font-semibold">
          © 2026 Panitia PKKMB Politeknik Semen Indonesia. All rights reserved.
        </span>
        <span className="text-[9px] text-[#897172] font-bold uppercase tracking-wider">
          Motto: "Bangun Fondasi, Wujudkan Karya!"
        </span>
      </div>
    </footer>
  );
};
