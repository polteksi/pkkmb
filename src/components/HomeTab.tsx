import React from 'react';
import { HERO_IMAGE_URL, DAYS_DATA } from '../data/orientationData';
import { DaySchedule, TabType } from '../types';

interface HomeTabProps {
  currentDay: DaySchedule;
  onSelectDay: (dayNumber: number) => void;
  onNavigateTab: (tab: TabType) => void;
  onOpenScheduleModal: (day: DaySchedule) => void;
  onOpenLocationModal: (locationName: string) => void;
  onSearchStudent: (query: string) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  currentDay,
  onSelectDay,
  onOpenScheduleModal,
  onOpenLocationModal,
  onSearchStudent,
}) => {
  const remainingDays = 5 - currentDay.dayNumber;

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-6">
      
      {/* Top Asymmetric Grid: Hero + Live Stepper & Search (Left) & Today's Highlights (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column (lg:col-span-7): Hero + Status & Day Stepper + Search CTA */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Hero Section */}
          <section className="campus-card bg-gradient-to-br from-white via-slate-50/50 to-red-50/20 dark:from-slate-900 dark:via-slate-900/90 dark:to-red-950/25 p-6 sm:p-7 relative overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xs">
            {/* Subtle blueprint decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 dark:opacity-10 bg-[radial-gradient(#5b0617_1px,transparent_1px)] dark:bg-[radial-gradient(#ff6473_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none rounded-full" />
            
            <div className="flex flex-col gap-3 relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#b02a3e]/10 dark:bg-[#b02a3e]/20 text-[#b02a3e] dark:text-[#ff8595] font-bold text-xs px-3 py-1 rounded-full w-max border border-[#b02a3e]/20 dark:border-[#b02a3e]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b02a3e] dark:bg-[#ff6473] animate-pulse" />
                PKKMB Politeknik Semen Indonesia 2026
              </div>

              <h1 className="font-display text-[28px] sm:text-[36px] font-black text-slate-900 dark:text-white leading-[1.12] tracking-tight">
                Bangun Fondasi,<br />
                <span className="bg-gradient-to-r from-[#5b0617] via-[#b02a3e] to-[#002a5b] dark:from-[#ff8595] dark:via-[#ff6473] dark:to-[#aac7ff] bg-clip-text text-transparent">
                  Wujudkan Karya!
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-lg">
                5 Hari untuk Memulai Perjalananmu di Dunia Vokasi
              </p>

              {/* Hero Banner Showcase */}
              <div className="mt-2 rounded-2xl overflow-hidden bg-slate-900 relative h-44 sm:h-52 w-full border border-slate-200/60 dark:border-slate-800 shadow-inner group">
                <img
                  src={HERO_IMAGE_URL}
                  alt="Orientasi Vokasional 2026 - Ilustrasi Konstruksi Kampus"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 right-3 campus-glass dark:bg-slate-900/90 dark:border-slate-700 px-3 py-1 rounded-full text-[11px] font-bold text-[#5b0617] dark:text-[#ffdada] shadow-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">architecture</span>
                  ORVOKS EXPO & PRAKTIK
                </div>
              </div>
            </div>
          </section>

          {/* Live Status & Day Stepper */}
          <section className="campus-card bg-white dark:bg-slate-900 p-6 relative overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#002a5b]/10 dark:bg-[#002a5b]/40 text-[#002a5b] dark:text-[#aac7ff] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]">event_available</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      {currentDay.dayName}
                    </h2>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      LIVE
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-[#5b0617] dark:text-[#ff8595] uppercase tracking-wider font-headline">
                    HARI KE-{currentDay.dayNumber} DARI 5
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs border border-transparent dark:border-slate-700">
                  {remainingDays > 0 ? `${remainingDays} hari lagi` : 'Hari Terakhir!'}
                </span>
              </div>
            </div>

            {/* Interactive Day Stepper Timeline */}
            <div className="py-4">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2.5">
                Pilih Hari Orientasi:
              </span>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {DAYS_DATA.map((d) => {
                  const isActive = currentDay.dayNumber === d.dayNumber;
                  const isPast = d.dayNumber < currentDay.dayNumber;
                  return (
                    <button
                      key={d.dayNumber}
                      onClick={() => onSelectDay(d.dayNumber)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                        isActive
                          ? 'bg-[#5b0617] dark:bg-[#7a1f2b] text-white border-[#5b0617] dark:border-[#ff6473] shadow-sm scale-102 font-bold ring-2 ring-[#5b0617]/20 dark:ring-[#ff6473]/30'
                          : isPast
                          ? 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold'
                          : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-medium'
                      }`}
                    >
                      <span className={`text-[10px] uppercase font-bold tracking-wider ${isActive ? 'text-[#ffdada]' : 'text-slate-400 dark:text-slate-500'}`}>
                        H-{d.dayNumber}
                      </span>
                      <span className="text-xs font-bold line-clamp-1">
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
                <span className="font-semibold text-slate-500 dark:text-slate-400">Progress Orientasi</span>
                <span className="font-bold text-[#5b0617] dark:text-[#ff8595]">{currentDay.progressPercent}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-[#5b0617] to-[#b02a3e] dark:from-[#b02a3e] dark:to-[#ff6473] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${currentDay.progressPercent}%` }}
                />
              </div>
            </div>
          </section>

          {/* Cari Kelompokmu Button Card */}
          <button
            onClick={() => onSearchStudent('')}
            className="campus-card campus-card-hover bg-white dark:bg-slate-900 p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center justify-between gap-4 cursor-pointer text-left w-full group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#5b0617]/10 dark:bg-[#5b0617]/30 text-[#5b0617] dark:text-[#ff8595] flex items-center justify-center shrink-0 group-hover:bg-[#5b0617] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[24px]">person_search</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                  Cari Kelompokmu
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Klik untuk mencari nama lengkap, NIM, prodi, atau kelompok mahasiswa
                </p>
              </div>
            </div>
            
            <div className="bg-[#5b0617] dark:bg-[#7a1f2b] text-white px-4 py-2 rounded-xl text-xs font-bold shrink-0 flex items-center gap-1.5 group-hover:bg-[#7a1f2b] dark:group-hover:bg-[#b02a3e] transition-colors shadow-xs">
              <span>Buka Pencarian</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </button>

        </div>

        {/* Right Column (lg:col-span-5): Quick Action & Info Cards Grid */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Card 1: Agenda Hari Ini */}
          <div className="campus-card campus-card-hover bg-white dark:bg-slate-900 p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <div className="flex items-center gap-2 text-[#b02a3e] dark:text-[#ff8595]">
                <span className="material-symbols-outlined text-[20px]">event</span>
                <span className="font-bold text-xs uppercase tracking-wider">
                  Agenda {currentDay.dayName}
                </span>
              </div>
              <span className="text-[10px] bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-bold px-2 py-0.5 rounded-full border border-red-200 dark:border-red-900">
                {currentDay.sessions.length} Sesi
              </span>
            </div>

            <div>
              <h3 className="font-display font-bold text-[16px] text-slate-900 dark:text-white leading-snug">
                {currentDay.theme}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                {currentDay.primaryLocation}
              </p>
            </div>

            <button
              id="btn-see-schedule"
              onClick={() => onOpenScheduleModal(currentDay)}
              className="w-full bg-[#5b0617]/10 dark:bg-[#5b0617]/25 hover:bg-[#5b0617]/15 dark:hover:bg-[#5b0617]/40 text-[#5b0617] dark:text-[#ff8595] font-bold text-xs py-2.5 rounded-xl border border-[#5b0617]/20 dark:border-[#5b0617]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
            >
              <span>Lihat Jadwal Lengkap</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* Card 2: Atribut Hari Ini (Informational Only) */}
          <div className="campus-card bg-white dark:bg-slate-900 p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-3 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <div className="flex items-center gap-1.5 text-[#5b0617] dark:text-[#ff8595]">
                <span className="material-symbols-outlined text-[20px]">checkroom</span>
                <span className="font-bold text-xs uppercase tracking-wider">
                  Atribut {currentDay.dayName}
                </span>
              </div>
              <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                Ketentuan Wajib
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {currentDay.attributes.map((attr) => (
                <div
                  key={attr.id}
                  className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-start gap-3 transition-all"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#5b0617]/10 dark:bg-[#5b0617]/30 text-[#5b0617] dark:text-[#ff8595] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[15px]">
                      check_circle
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {attr.name}
                      </p>
                      {attr.mandatory && (
                        <span className="text-[9px] bg-red-100 dark:bg-red-950/70 text-red-700 dark:text-red-300 font-bold px-1.5 py-0.2 rounded-full border border-red-200 dark:border-red-900">
                          Wajib
                        </span>
                      )}
                    </div>
                    {attr.note && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{attr.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Lokasi Utama Hari Ini */}
          <div className="campus-card bg-slate-50/70 dark:bg-slate-900/90 p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 border-b border-slate-200/60 dark:border-slate-800 pb-2">
              <span className="material-symbols-outlined text-[18px]">pin_drop</span>
              <span className="font-bold text-xs uppercase tracking-wider">
                Lokasi Utama Hari Ini
              </span>
            </div>

            <div>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white leading-snug">
                {currentDay.primaryLocation}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                Gedung Utama (Gedung A) Lt. 3 Politeknik Semen Indonesia
              </p>
            </div>

            <button
              id="btn-see-location"
              onClick={() => onOpenLocationModal(currentDay.primaryLocation)}
              className="w-full bg-[#002a5b] dark:bg-[#00387a] hover:bg-[#00387a] dark:hover:bg-[#004b9e] text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-98"
            >
              <span className="material-symbols-outlined text-[16px]">directions</span>
              <span>Lihat Lokasi & Petunjuk Arah</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
