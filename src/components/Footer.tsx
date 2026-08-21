import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  onNavigateTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto py-10 px-4 sm:px-6 lg:px-8 w-full transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Brand & Address */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 select-none">
            <span className="font-display text-[20px] font-black text-[#5b0617] dark:text-white tracking-tight">
              ORVOKS
            </span>
            <span className="bg-gradient-to-r from-[#5b0617] to-[#b02a3e] dark:from-[#b02a3e] dark:to-[#ff6473] text-white text-[9px] font-bold px-2 py-0.5 rounded-full font-headline">
              2026
            </span>
          </div>
          <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">
            PKKMB Politeknik Semen Indonesia 2026
          </p>
          <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-col gap-1 leading-relaxed">
            <span className="font-bold text-slate-700 dark:text-slate-300">Alamat Kampus:</span>
            <p>Politeknik Semen Indonesia, Gresik, Jawa Timur</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
            Link Cepat
          </h4>
          <div className="flex flex-col gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <button
              onClick={() => onNavigateTab('beranda')}
              className="hover:text-[#5b0617] dark:hover:text-[#ff8595] hover:underline text-left w-max transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <button
              onClick={() => onNavigateTab('jadwal')}
              className="hover:text-[#5b0617] dark:hover:text-[#ff8595] hover:underline text-left w-max transition-colors cursor-pointer"
            >
              Jadwal
            </button>
            <button
              onClick={() => onNavigateTab('lokasi')}
              className="hover:text-[#5b0617] dark:hover:text-[#ff8595] hover:underline text-left w-max transition-colors cursor-pointer"
            >
              Denah & Venue
            </button>
            <button
              onClick={() => onNavigateTab('faq')}
              className="hover:text-[#5b0617] dark:hover:text-[#ff8595] hover:underline text-left w-max transition-colors cursor-pointer"
            >
              FAQ (Tanya Jawab)
            </button>
          </div>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
            Hubungi Kami
          </h4>
          <div className="text-xs text-slate-600 dark:text-slate-300 flex flex-col gap-2">
            <a
              href="https://wa.me/6281199887766"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 hover:text-[#5b0617] dark:hover:text-[#ff8595] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-emerald-600 dark:text-emerald-400">call</span>
              <span>+62 811-9988-7766 (WhatsApp)</span>
            </a>
            <a
              href="mailto:panitia.pkkmb@polteksi.ac.id"
              className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 hover:text-[#5b0617] dark:hover:text-[#ff8595] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#002a5b] dark:text-[#aac7ff]">mail</span>
              <span>panitia.pkkmb@polteksi.ac.id</span>
            </a>
          </div>

          <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Ikuti Kami
            </span>
            <div className="flex gap-2">
              <a
                href="https://instagram.com/pkkmb.polteksi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 dark:bg-slate-800 hover:bg-[#ffdada]/40 dark:hover:bg-[#5b0617]/40 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl text-[11px] font-bold shadow-2xs hover:border-[#5b0617]/30 transition-all flex items-center gap-1.5"
              >
                <span>📷</span> Instagram
              </a>
              <a
                href="https://tiktok.com/@pkkmb.polteksi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 dark:bg-slate-800 hover:bg-[#ffdada]/40 dark:hover:bg-[#5b0617]/40 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl text-[11px] font-bold shadow-2xs hover:border-[#5b0617]/30 transition-all flex items-center gap-1.5"
              >
                <span>🎵</span> TikTok
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
          &copy; 2026 Panitia PKKMB Politeknik Semen Indonesia. All rights reserved.
        </span>
        <span className="text-[10px] text-[#5b0617] dark:text-[#ff8595] font-bold uppercase tracking-wider">
          Motto: "Bangun Fondasi, Wujudkan Karya!"
        </span>
      </div>
    </footer>
  );
};
