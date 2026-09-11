import React, { useState, useEffect } from 'react';
import { HERO_IMAGES, DAYS_DATA, PERLENGKAPAN_ITEMS } from '../data/orientationData';
import { DaySchedule, TabType } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface HomeTabProps {
  currentDay: DaySchedule;
  onSelectDay: (dayNumber: number) => void;
  onNavigateTab: (tab: TabType) => void;
  onOpenScheduleModal: (day: DaySchedule) => void;
  onOpenPerlengkapanModal: () => void;
  onSearchStudent: (query: string) => void;
}

const PREVIEW_COUNT = 4;
const PRA_ACARA_PDF = '/documents/penugasan-orvoks-pra-acara-2026.pdf';

export const HomeTab: React.FC<HomeTabProps> = ({
  currentDay,
  onSelectDay,
  onNavigateTab,
  onOpenScheduleModal,
  onOpenPerlengkapanModal,
  onSearchStudent,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bannerLoadError, setBannerLoadError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-6">
      
      {/* Top Asymmetric Grid: Hero + Live Stepper & Search (Left) & Today's Highlights (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column (lg:col-span-7): Hero + Status & Day Stepper + Search CTA */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Hero Section */}
          <section className="campus-card bg-white dark:bg-[#1B1638] p-6 sm:p-7 relative overflow-hidden border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs">
            
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
                Pondasi Kemandirian,<br />
                <span className="text-[#5B2BBE] dark:text-[#C39BFF]">
                  Kokoh Berintegritas
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#6B6874] dark:text-[#A39EB8] font-medium leading-relaxed max-w-lg">
                5 Hari untuk Memulai Perjalananmu di Dunia Vokasi Terapan
              </p>

              {/* Hero Banner Showcase */}
              <div className="mt-2 rounded-2xl overflow-hidden relative h-44 sm:h-52 w-full border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30 shadow-inner group bg-white dark:bg-[#1B1638] flex items-center justify-center">
                {!bannerLoadError ? (
                  HERO_IMAGES.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Orientasi Vokasional 2026 - Slide ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-700 ease-in-out ${
                        idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      onError={() => setBannerLoadError(true)}
                    />
                  ))
                ) : (
                  <div className="w-full h-full bg-[#5B2BBE] flex flex-col items-center justify-center text-white p-6 text-center">
                    <BrandDecoration type="sparkle" size={32} color="#F2B632" className="mb-2" />
                    <span className="font-display font-black text-xl tracking-tight">ORVOKS 2026</span>
                    <span className="text-xs text-[#EFE9FF] mt-1 font-medium">Politeknik Semen Indonesia</span>
                  </div>
                )}

                {/* Dot Indicators */}
                {!bannerLoadError && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {HERO_IMAGES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 cursor-pointer ${
                          idx === currentSlide
                            ? 'w-2.5 h-2.5 rounded-full bg-white shadow-sm scale-110'
                            : 'w-2 h-2 rounded-full bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Live Status & Day Stepper */}
          <section className="campus-card bg-white dark:bg-[#1B1638] p-6 relative overflow-hidden border border-[#5B2BBE]/10 dark:border-[#5B2BBE]/25 shadow-xs">
            <div className="flex items-center gap-3 pb-4 border-b border-[#FAF9F6] dark:border-[#251F4A]">
              <div className="w-10 h-10 rounded-xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[22px]">event_available</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-xl font-bold text-[#22202A] dark:text-white">
                    {currentDay.theme}
                  </h2>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F1F3F5] text-[#6B7280] border border-[#D1D5DB]">
                    BELUM DIMULAI
                  </span>
                </div>
                <p className="text-[11px] font-bold text-[#5B2BBE] dark:text-[#C39BFF] uppercase tracking-wider font-display">
                  {currentDay.shortDate} · {currentDay.dayName} ({currentDay.phase})
                </p>
              </div>
            </div>

            {/* Interactive Day Stepper Timeline: Tanggal + Nama Hari */}
            <div className="py-4">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-bold text-[#6B6874] dark:text-[#A39EB8] uppercase tracking-wider block font-display">
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
                          ? 'bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white border-[#5B2BBE] dark:border-[#C39BFF] shadow-sm font-bold ring-2 ring-[#5B2BBE]/25 dark:ring-[#C39BFF]/35'
                          : isPast
                          ? 'bg-[#FAF9F6] dark:bg-[#251F4A] text-[#22202A] dark:text-[#F3F2F8] border-[#5B2BBE]/12 dark:border-[#5B2BBE]/20 hover:bg-[#EFE9FF]/60 dark:hover:bg-[#322B60] font-semibold'
                          : 'bg-white dark:bg-[#1B1638] text-[#6B6874] dark:text-[#A39EB8] border-slate-200 dark:border-[#251F4A] hover:bg-[#FAF9F6] dark:hover:bg-[#251F4A]/80 font-medium'
                      }`}
                    >
                      <span className={`text-[11px] font-extrabold tracking-tight font-display ${isActive ? 'text-white' : 'text-[#22202A] dark:text-[#F3F2F8]'}`}>
                        {d.shortDate}
                      </span>
                      <span className={`text-[10px] font-semibold ${isActive ? 'text-[#EFE9FF]' : 'text-[#6B6874] dark:text-[#A39EB8]'}`}>
                        {d.dayName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Cari Kelompokmu Button Card */}
          <button
            onClick={() => onSearchStudent('')}
            className="campus-card campus-card-hover bg-white dark:bg-[#1B1638] p-4 sm:p-5 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex items-center justify-between gap-4 cursor-pointer text-left w-full group relative overflow-hidden"
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
          <div className="campus-card campus-card-hover bg-white dark:bg-[#1B1638] p-5 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 flex flex-col justify-between gap-3 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#251F4A] pb-2.5">
              <div className="flex items-center gap-2 text-[#5B2BBE] dark:text-[#C39BFF]">
                <BrandDecoration type="sparkle" size={16} color="#5B2BBE" />
                <span className="font-bold text-xs uppercase tracking-wider font-display">
                  Agenda {currentDay.dayName}
                </span>
              </div>
              <span className="text-[10px] bg-[#EFE9FF] dark:bg-[#5B2BBE]/35 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-2.5 py-0.5 rounded-full border border-[#5B2BBE]/25">
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

          {/* Card 2: Perlengkapan PKKMB */}
          <div className="campus-card bg-white dark:bg-[#1B1638] p-5 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 flex flex-col gap-3 shadow-xs">
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
                  className="p-2.5 rounded-xl border border-[#5B2BBE]/8 dark:border-[#251F4A] bg-[#FAF9F6]/80 dark:bg-[#251F4A]/50"
                >
                  <div className="flex-1 flex items-center gap-1.5 flex-wrap">
                    <p className="text-xs font-semibold text-[#22202A] dark:text-[#F3F2F8] leading-snug">
                      {item.text}
                    </p>
                    {item.mandatory ? (
                      <span className="text-[9px] bg-[#5B2BBE]/10 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-1.5 rounded-full border border-[#5B2BBE]/25 shrink-0">
                        Wajib
                      </span>
                    ) : (
                      <span className="text-[9px] bg-[#2F9672]/10 text-[#2F9672] dark:text-[#4ADE80] font-bold px-1.5 rounded-full border border-[#2F9672]/25 shrink-0">
                        Anjuran
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              id="btn-lihat-semua-perlengkapan"
              onClick={onOpenPerlengkapanModal}
              className="w-full bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 hover:bg-[#5B2BBE]/15 dark:hover:bg-[#5B2BBE]/40 text-[#5B2BBE] dark:text-[#C39BFF] font-bold text-xs py-2.5 rounded-xl border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
            >
              <span>Lihat Semua ({PERLENGKAPAN_ITEMS.length} item)</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
          </div>

          {/* Card 3: Atribut — Menuju halaman detail (Warna Ungu Utama) */}
          <div className="campus-card bg-[#FAF9F6] dark:bg-[#251F4A]/70 p-5 border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30 flex flex-col justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-1.5 text-[#5B2BBE] dark:text-[#C39BFF] border-b border-slate-200/60 dark:border-[#322B60] pb-2">
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
              className="w-full bg-[#5B2BBE] dark:bg-[#5B2BBE] hover:bg-[#43208F] dark:hover:bg-[#7D3BD6] text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-98"
            >
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              <span>Lihat Detail Atribut</span>
            </button>
          </div>

        </div>

          {/* Penugasan Pra-Acara + Pengumpulan: side-by-side on desktop, stacked on mobile */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            <div className="campus-card campus-card-hover bg-white dark:bg-[#1B1638] p-4 sm:p-5 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 flex flex-col gap-4 shadow-xs h-full min-w-0">
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-[#251F4A] pb-3">
                <div className="flex items-start gap-2 text-[#5B2BBE] dark:text-[#C39BFF] min-w-0">
                  <span className="material-symbols-outlined text-[20px] shrink-0">picture_as_pdf</span>
                  <span className="font-bold text-[11px] sm:text-xs uppercase leading-tight tracking-wide font-display">
                    Penugasan Pra-Acara
                  </span>
                </div>
                <span className="text-[9px] bg-[#EFE9FF] dark:bg-[#5B2BBE]/35 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-2.5 py-1 rounded-full border border-[#5B2BBE]/20 whitespace-nowrap shrink-0">
                  PDF
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end gap-4 flex-1">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-sm text-[#22202A] dark:text-white leading-snug">
                    Penugasan ORVOKS POLTEKSI 2026
                  </h3>
                  <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] mt-1 font-medium leading-relaxed">
                    Baca petunjuk penugasan pra-acara atau simpan PDF ke perangkatmu.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 w-full sm:w-[220px] shrink-0">
                <a
                  href={PRA_ACARA_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-11 bg-[#5B2BBE] hover:bg-[#43208F] dark:hover:bg-[#7D3BD6] text-white font-bold text-xs py-2.5 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-98 whitespace-nowrap"
                  aria-label="Lihat PDF penugasan pra-acara"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Lihat</span>
                </a>
                <a
                  href={PRA_ACARA_PDF}
                  download="PENUGASAN ORVOKS POLTEKSI 2026 (pra-acara).pdf"
                  className="w-full min-h-11 bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 hover:bg-[#5B2BBE]/15 dark:hover:bg-[#5B2BBE]/40 text-[#5B2BBE] dark:text-[#C39BFF] font-bold text-xs py-2.5 px-2 rounded-xl border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 whitespace-nowrap"
                  aria-label="Unduh PDF penugasan pra-acara"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Unduh</span>
                </a>
                </div>
              </div>
            </div>

            {/* Card 4: Pengumpulan Tugas */}
            <div className="campus-card campus-card-hover bg-white dark:bg-[#1B1638] p-4 sm:p-5 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 flex flex-col gap-4 shadow-xs h-full min-w-0">
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-[#251F4A] pb-3">
                <div className="flex items-start gap-2 text-[#5B2BBE] dark:text-[#C39BFF] min-w-0">
                  <span className="material-symbols-outlined text-[20px] shrink-0">assignment</span>
                  <span className="font-bold text-[11px] sm:text-xs uppercase leading-tight tracking-wide font-display">
                    Pengumpulan Tugas
                  </span>
                </div>
                <span className="text-[9px] bg-[#2F9672]/10 text-[#2F9672] dark:text-[#4ADE80] font-bold px-2.5 py-1 rounded-full border border-[#2F9672]/25 whitespace-nowrap shrink-0">
                  Google Form
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end gap-4 flex-1">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-sm text-[#22202A] dark:text-white leading-snug">
                    Tempat Pengumpulan Tugas PKKMB
                  </h3>
                  <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] mt-1 font-medium leading-relaxed">
                    Isi formulir dan unggah berkas tugas PKKMB melalui Google Form resmi.
                  </p>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfUqRIP_uAYehse677ygmldbhE38o0DLupajKuIWxr2oIISZQ/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto sm:min-w-[180px] min-h-11 bg-[#5B2BBE] dark:bg-[#5B2BBE] hover:bg-[#43208F] dark:hover:bg-[#7D3BD6] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-98 whitespace-nowrap shrink-0"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  <span>Buka Form</span>
                </a>
              </div>
            </div>
          </div>

        <div className="lg:col-start-8 lg:col-span-5 flex flex-col gap-4">

          {/* Card 5: Guidebook PKKMB (PDF Download) */}
          <div className="campus-card bg-white dark:bg-[#1B1638] p-5 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 flex flex-col justify-between gap-3 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#251F4A] pb-2.5">
              <div className="flex items-center gap-1.5 text-[#5B2BBE] dark:text-[#C39BFF]">
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                <span className="font-bold text-xs uppercase tracking-wider font-display">
                  Guidebook PKKMB
                </span>
              </div>
              <span className="text-[10px] bg-[#EFE9FF] dark:bg-[#5B2BBE]/35 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-2 py-0.5 rounded-full border border-[#5B2BBE]/20 font-mono">
                .PDF
              </span>
            </div>

            <div>
              <h3 className="font-display font-bold text-sm text-[#22202A] dark:text-white leading-snug">
                Buku Panduan Mahasiswa Baru
              </h3>
              <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] mt-0.5 font-medium">
                Unduh panduan resmi PKKMB POLTEKSI 2026 dalam format PDF.
              </p>
            </div>

            <button
              id="btn-buka-guidebook"
              onClick={() => onNavigateTab('guidebook')}
              className="w-full bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 hover:bg-[#5B2BBE]/15 dark:hover:bg-[#5B2BBE]/40 text-[#5B2BBE] dark:text-[#C39BFF] font-bold text-xs py-2.5 rounded-xl border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Unduh Guidebook</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

