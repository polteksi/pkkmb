import React from 'react';
import { TabType } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface FooterProps {
  onNavigateTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="bg-white dark:bg-[#1B1638] border-t border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 mt-auto py-10 px-4 sm:px-6 lg:px-8 w-full transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Brand & Address */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 select-none">
            <BrandDecoration type="sparkle" size={16} color="#5B2BBE" />
            <span className="font-display text-[20px] font-black text-[#5B2BBE] dark:text-white tracking-tight">
              ORVOKS
            </span>
            <span className="bg-[#5B2BBE] text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full font-display">
              2026
            </span>
          </div>
          <p className="text-xs font-bold text-[#22202A] dark:text-[#F3F2F8] leading-snug">
            PKKMB Politeknik Semen Indonesia 2026
          </p>
          <div className="text-xs text-[#6B6874] dark:text-[#A39EB8] flex flex-col gap-1 leading-relaxed">
            <span className="font-bold text-[#22202A] dark:text-[#F3F2F8]">Alamat Kampus:</span>
            <p>Jl. Kartini No.25 C, Kesemen, Sukorame, Kec. Gresik, Kabupaten Gresik, Jawa Timur 61111</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase text-[#6B6874] dark:text-[#A39EB8] tracking-wider font-display">
            Link Cepat
          </h4>
          <div className="flex flex-col gap-2 text-xs font-semibold text-[#22202A] dark:text-[#F3F2F8]">
            <button
              onClick={() => onNavigateTab('beranda')}
              className="hover:text-[#5B2BBE] dark:hover:text-[#C39BFF] hover:underline text-left w-max transition-colors cursor-pointer"
            >
              Beranda Utama
            </button>
            <button
              onClick={() => onNavigateTab('jadwal')}
              className="hover:text-[#5B2BBE] dark:hover:text-[#C39BFF] hover:underline text-left w-max transition-colors cursor-pointer"
            >
              Jadwal 7 Hari
            </button>
            <button
              onClick={() => onNavigateTab('kelompok')}
              className="hover:text-[#5B2BBE] dark:hover:text-[#C39BFF] hover:underline text-left w-max transition-colors cursor-pointer"
            >
              Daftar Kelompok
            </button>
            <button
              onClick={() => onNavigateTab('atribut')}
              className="hover:text-[#5B2BBE] dark:hover:text-[#C39BFF] hover:underline text-left w-max transition-colors cursor-pointer"
            >
              Atribut PKKMB
            </button>
            <button
              onClick={() => onNavigateTab('guidebook')}
              className="hover:text-[#5B2BBE] dark:hover:text-[#C39BFF] hover:underline text-left w-max transition-colors cursor-pointer"
            >
              Guidebook (PDF)
            </button>
            <button
              onClick={() => onNavigateTab('faq')}
              className="hover:text-[#5B2BBE] dark:hover:text-[#C39BFF] hover:underline text-left w-max transition-colors cursor-pointer"
            >
              Tanya Jawab (FAQ)
            </button>
          </div>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold uppercase text-[#6B6874] dark:text-[#A39EB8] tracking-wider font-display">
            Hubungi Kami
          </h4>
          <div className="text-xs text-[#6B6874] dark:text-[#A39EB8] flex flex-col gap-2">
            <a
              href="https://wa.me/6281213399217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-[#22202A] dark:text-[#F3F2F8] hover:text-[#5B2BBE] dark:hover:text-[#C39BFF] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#2F9672]">call</span>
              <span> +62 812-1339-9217 (WhatsApp)</span>
            </a>
            <a
              href="mailto:pkkmb.polteksi@gmail.com"
              className="flex items-center gap-2 font-semibold text-[#22202A] dark:text-[#F3F2F8] hover:text-[#5B2BBE] dark:hover:text-[#C39BFF] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#4256A6] dark:text-[#A5B8FF]">mail</span>
              <span>pkkmb.polteksi@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-slate-100 dark:border-[#251F4A]">
            <span className="text-[10px] font-bold text-[#6B6874] dark:text-[#A39EB8] uppercase tracking-wider font-display">
              Ikuti Kami
            </span>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/pkkmb.polteksi?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FAF9F6] dark:bg-[#251F4A] hover:bg-[#EFE9FF] dark:hover:bg-[#322B60] text-[#22202A] dark:text-[#F3F2F8] border border-[#5B2BBE]/15 dark:border-[#322B60] px-3.5 py-1.5 rounded-xl text-[11px] font-bold shadow-2xs hover:border-[#5B2BBE]/30 transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[15px] text-[#5B2BBE] dark:text-[#C39BFF]">photo_camera</span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-slate-100 dark:border-[#251F4A] flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
        <span className="text-[11px] text-[#6B6874] dark:text-[#A39EB8] font-medium">
          &copy; 2026 Panitia PKKMB Politeknik Semen Indonesia. All rights reserved.
        </span>
        <span className="text-[10px] text-[#5B2BBE] dark:text-[#C39BFF] font-bold uppercase tracking-wider font-display">
          Motto: "Pondasi Kemandirian, Kokoh Berintegritas"
        </span>
      </div>
    </footer>
  );
};
