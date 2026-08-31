import React, { useState } from 'react';
import { HERO_IMAGE_URL, DAYS_DATA, PERLENGKAPAN_ITEMS } from '../data/orientationData';
import { DaySchedule, TabType } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface HomeTabProps {
  currentDay: DaySchedule;
  onSelectDay: (dayNumber: number) => void;
  onNavigateTab: (tab: TabType) => void;
  onOpenScheduleModal: (day: DaySchedule) => void;
  onSearchStudent: (query: string) => void;
}

const PREVIEW_COUNT = 4;

export const HomeTab: React.FC<HomeTabProps> = ({
  currentDay,
  onSelectDay,
  onNavigateTab,
  onOpenScheduleModal,
  onSearchStudent,
}) => {
  const remainingDays = DAYS_DATA.length - currentDay.dayNumber;
  const [showPerlengkapanModal, setShowPerlengkapanModal] = useState(false);

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-6">
      
      {/* Top Asymmetric Grid: Hero + Live Stepper & Search (Left) & Today's Highlights (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column (lg:col-span-7): Hero + Status & Day Stepper + Search CTA */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Hero Section */}
          <section className="campus-card bg-white dark:bg-[#1B1638] p-6 sm:p-7 relative overflow-hidden border border-[#5B2BBE]/12 dark:border-[#D63BBE]/20 shadow-xs">
            
            {/* Minimal Geometric Sparkle Accents in background */}
            <div className="absolute top-4 right-6 opacity-20 pointer-events-none">
              <BrandDecoration type="sparkle" size={24} color="#F2B632" />
            </div>

            <div className="flex flex-col gap-3 relative z-10">
              
              {/* Event Badge */}
              <div className="inline-flex items-center gap-2 bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] font-bold text-xs px-3.5 py-1.5 rounded-full w-max border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35">
                <BrandDecoration type="sparkle" size={13} color="#5B2BBE" />
                <span>PKKMB Politeknik Semen Indonesia 2026</span>
              </div>

              {/* Bold Editorial Headline */}
              <h1 className="font-display text-[28px] sm:text-[36px] font-black text-[#22202A] dark:text-white leading-[1.12] tracking-tight">
                Bangun Fondasi,<br />
                <span className="text-[#5B2BBE] dark:text-[#C39BFF]">
                  Wujudkan Karya!
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#6B6874] dark:text-[#A39EB8] font-medium leading-relaxed max-w-lg">
                5 Hari untuk Memulai Perjalananmu di Dunia Vokasi Terapan
              </p>

              {/* Hero Banner Showcase */}
              <div className="mt-2 rounded-2xl overflow-hidden relative h-44 sm:h-52 w-full border border-[#5B2BBE]/15 dark:border-[#D63BBE]/25 shadow-inner group">
                <img
                  src={HERO_IMAGE_URL}
                  alt="Orientasi Vokasional 2026 - Politeknik Semen Indonesia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </section>

          {/* Live Status & Day Stepper */}
          <section className="campus-card bg-white dark:bg-[#1B1638] p-6 relative overflow-hidden border border-[#5B2BBE]/10 dark:border-[#D63BBE]/20 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#FAF9F6] dark:border-[#251F4A]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]">event_available</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-xl font-bold text-[#22202A] dark:text-white">
                      {currentDay.theme}
                    </h2>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#2F9672]/15 text-[#2F9672] dark:text-[#4ADE80] border border-[#2F9672]/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F9672] dark:bg-[#4ADE80] animate-ping" />
                      LIVE
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-[#5B2BBE] dark:text-[#C39BFF] uppercase tracking-wider font-display">
                    SESI KE-{currentDay.dayNumber} DARI {DAYS_DATA.length}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-[#FAF9F6] dark:bg-[#251F4A] text-[#6B6874] dark:text-[#A39EB8] font-bold text-xs border border-[#5B2BBE]/10 dark:border-transparent">
                  {remainingDays > 0 ? `${remainingDays} sesi lagi` : 'Hari Terakhir!'}
                </span>
              </div>
            </div>

            {/* Interactive Day Stepper Timeline */}
            <div className="py-4">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-bold text-[#6B6874] dark:text-[#A39EB8] uppercase tracking-wider block">
                  Pilih Hari Orientasi:
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 sm:gap-2">
                {DAYS_DATA.map((d) => {
                  const isActive = currentDay.dayNumber === d.dayNumber;
                  const isPast = d.dayNumber < currentDay.dayNumber;
                  return (
                    <button
                      key={d.dayNumber}
                      onClick={() => onSelectDay(d.dayNumber)}
                      className={`p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                        isActive
                          ? 'bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white border-[#5B2BBE] dark:border-[#D63BBE] shadow-md scale-102 font-bold ring-2 ring-[#5B2BBE]/25 dark:ring-[#D63BBE]/35'
                          : isPast
                          ? 'bg-[#FAF9F6] dark:bg-[#251F4A] text-[#22202A] dark:text-[#F3F2F8] border-[#5B2BBE]/12 dark:border-[#D63BBE]/15 hover:bg-[#EFE9FF]/60 dark:hover:bg-[#322B60] font-semibold'
                          : 'bg-white dark:bg-[#1B1638] text-[#6B6874] dark:text-[#A39EB8] border-slate-200 dark:border-[#251F4A] hover:bg-[#FAF9F6] dark:hover:bg-[#251F4A]/80 font-medium'
                      }`}
                    >
                      <span className={`text-[9px] uppercase font-bold tracking-wider ${isActive ? 'text-[#FDE8FA]' : 'text-[#6B6874] dark:text-[#A39EB8]'}`}>
                        H-{d.dayNumber}
                      </span>
                      <span className="text-[10px] font-bold line-clamp-1">
                        {d.dayName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Animated Progress Gauge */}
            <div className="pt-2 flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#6B6874] dark:text-[#A39EB8]">Progress Orientasi</span>
                <span className="font-bold text-[#5B2BBE] dark:text-[#C39BFF]">{currentDay.progressPercent}%</span>
              </div>
              <div className="w-full h-2.5 bg-[#FAF9F6] dark:bg-[#251F4A] rounded-full overflow-hidden p-0.5 border border-[#5B2BBE]/10 dark:border-transparent">
                <div
                  className="h-full bg-[#5B2BBE] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${currentDay.progressPercent}%` }}
                />
              </div>
            </div>
          </section>

          {/* Cari Kelompokmu Button Card */}
          <button
            onClick={() => onSearchStudent('')}
            className="campus-card campus-card-hover bg-white dark:bg-[#1B1638] p-4 sm:p-5 border border-[#5B2BBE]/12 dark:border-[#D63BBE]/20 shadow-xs flex items-center justify-between gap-4 cursor-pointer text-left w-full group relative overflow-hidden"
          >
            <div className="flex items-center gap-3.5 relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0 group-hover:bg-[#5B2BBE] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[24px]">person_search</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-sm sm:text-base text-[#22202A] dark:text-white leading-snug">
                  Cari Kelompokmu
                </h3>
                <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium mt-0.5">
                  Klik untuk mencari nama lengkap, NIM, prodi, atau kelompok mahasiswa
                </p>
              </div>
            </div>
            
            <div className="bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white px-4 py-2 rounded-xl text-xs font-bold shrink-0 flex items-center gap-1.5 group-hover:bg-[#43208F] dark:group-hover:bg-[#7D3BD6] transition-colors shadow-xs relative z-10">
              <span>Buka Pencarian</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </button>

        </div>

        {/* Right Column (lg:col-span-5): Quick Action & Info Cards Grid */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Card 1: Agenda Hari Ini */}
          <div className="campus-card campus-card-hover bg-white dark:bg-[#1B1638] p-5 border border-[#5B2BBE]/12 dark:border-[#D63BBE]/20 flex flex-col justify-between gap-3 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#251F4A] pb-2.5">
              <div className="flex items-center gap-2 text-[#D63BBE] dark:text-[#FF85EA]">
                <BrandDecoration type="sparkle" size={16} color="#D63BBE" />
                <span className="font-bold text-xs uppercase tracking-wider font-display">
                  Agenda {currentDay.dayName}
                </span>
              </div>
              <span className="text-[10px] bg-[#FDE8FA] dark:bg-[#D63BBE]/25 text-[#D63BBE] dark:text-[#FF85EA] font-bold px-2.5 py-0.5 rounded-full border border-[#D63BBE]/20 dark:border-[#D63BBE]/35">
                {currentDay.kegiatan.length} Kegiatan
              </span>
            </div>

            <div>
              <h3 className="font-display font-bold text-[15px] text-[#22202A] dark:text-white leading-snug">
                {currentDay.theme}
              </h3>
              <p className="text-xs text-[#5B2BBE] dark:text-[#C39BFF] mt-1 font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                {currentDay.jamSesi}
              </p>
            </div>

            <button
              id="btn-see-schedule"
              onClick={() => onOpenScheduleModal(currentDay)}
              className="w-full bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 hover:bg-[#5B2BBE]/15 dark:hover:bg-[#5B2BBE]/40 text-[#5B2BBE] dark:text-[#C39BFF] font-bold text-xs py-2.5 rounded-xl border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
            >
              <span>Lihat Jadwal Lengkap</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* Card 2: Perlengkapan PKKMB (Poin A — preview + modal in-page) */}
          <div className="campus-card bg-white dark:bg-[#1B1638] p-5 border border-[#5B2BBE]/12 dark:border-[#D63BBE]/20 flex flex-col gap-3 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#251F4A] pb-2.5">
              <div className="flex items-center gap-1.5 text-[#5B2BBE] dark:text-[#C39BFF]">
                <span className="material-symbols-outlined text-[20px]">backpack</span>
                <span className="font-bold text-xs uppercase tracking-wider font-display">
                  Perlengkapan PKKMB
                </span>
              </div>
              <span className="text-[10px] bg-[#FAF9F6] dark:bg-[#251F4A] text-[#6B6874] dark:text-[#A39EB8] font-bold px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-[#322B60]">
                {PERLENGKAPAN_ITEMS.length} Item
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {PERLENGKAPAN_ITEMS.slice(0, PREVIEW_COUNT).map((item) => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-xl border border-[#5B2BBE]/8 dark:border-[#251F4A] bg-[#FAF9F6]/80 dark:bg-[#251F4A]/50 flex items-start gap-2.5"
                >
                  <div className="w-5 h-5 rounded-md bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[13px]">check_circle</span>
                  </div>
                  <div className="flex-1 flex items-center gap-1.5 flex-wrap">
                    <p className="text-xs font-semibold text-[#22202A] dark:text-[#F3F2F8] leading-snug">
                      {item.text}
                    </p>
                    {item.mandatory && (
                      <span className="text-[9px] bg-[#F06C7D]/15 text-[#F06C7D] dark:text-[#FF8595] font-bold px-1.5 rounded-full border border-[#F06C7D]/30 shrink-0">
                        Wajib
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              id="btn-lihat-semua-perlengkapan"
              onClick={() => setShowPerlengkapanModal(true)}
              className="w-full bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 hover:bg-[#5B2BBE]/15 dark:hover:bg-[#5B2BBE]/40 text-[#5B2BBE] dark:text-[#C39BFF] font-bold text-xs py-2.5 rounded-xl border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
            >
              <span>Lihat Semua ({PERLENGKAPAN_ITEMS.length} item)</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
          </div>

          {/* Card 3: Atribut — menuju halaman detail */}
          <div className="campus-card bg-[#FAF9F6] dark:bg-[#251F4A]/70 p-5 border border-[#5B2BBE]/12 dark:border-[#D63BBE]/20 flex flex-col justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-1.5 text-[#D63BBE] dark:text-[#FF85EA] border-b border-slate-200/60 dark:border-[#322B60] pb-2">
              <span className="material-symbols-outlined text-[18px]">checkroom</span>
              <span className="font-bold text-xs uppercase tracking-wider font-display">
                Atribut PKKMB
              </span>
            </div>

            <div>
              <h3 className="font-display font-bold text-sm text-[#22202A] dark:text-white leading-snug">
                Dresscode & Ketentuan Pakaian
              </h3>
              <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] mt-0.5 font-medium">
                Lihat detail dresscode putra & putri per hari, termasuk warna kaos prodi Day 5.
              </p>
            </div>

            <button
              id="btn-lihat-detail-atribut"
              onClick={() => onNavigateTab('atribut')}
              className="w-full bg-[#D63BBE] dark:bg-[#D63BBE] hover:bg-[#C332A8] dark:hover:bg-[#C332A8] text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-98"
            >
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              <span>Lihat Detail Atribut</span>
            </button>
          </div>

        </div>

      </div>

      {/* Perlengkapan Modal (in-page) */}
      {showPerlengkapanModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setShowPerlengkapanModal(false)}
        >
          <div
            className="bg-white dark:bg-[#1B1638] rounded-2xl max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-[#5B2BBE]/15 dark:border-[#D63BBE]/25 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#5B2BBE] text-white p-5 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] bg-white/20 text-[#FDE8FA] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-display inline-block mb-1">
                  Perlengkapan Hari-H
                </span>
                <h3 className="font-display font-black text-lg text-white leading-tight">
                  Semua {PERLENGKAPAN_ITEMS.length} Item Wajib Bawa
                </h3>
              </div>
              <button
                onClick={() => setShowPerlengkapanModal(false)}
                aria-label="Tutup Modal"
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shrink-0 ml-2"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto flex flex-col gap-2.5 flex-1">
              {PERLENGKAPAN_ITEMS.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl border border-[#5B2BBE]/8 dark:border-[#251F4A] bg-[#FAF9F6]/80 dark:bg-[#251F4A]/50 flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs font-display">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-1.5 flex-wrap">
                      <p className="text-xs sm:text-sm font-semibold text-[#22202A] dark:text-[#F3F2F8] leading-snug">
                        {item.text}
                      </p>
                      {item.mandatory && (
                        <span className="text-[9px] bg-[#F06C7D]/15 text-[#F06C7D] dark:text-[#FF8595] font-bold px-1.5 py-0.5 rounded-full border border-[#F06C7D]/30 shrink-0">
                          Wajib
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FAF9F6] dark:bg-[#151030] border-t border-[#5B2BBE]/10 dark:border-[#251F4A] flex justify-end">
              <button
                onClick={() => setShowPerlengkapanModal(false)}
                className="bg-[#5B2BBE] hover:bg-[#43208F] dark:bg-[#5B2BBE] text-white px-5 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-xs active:scale-95"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
