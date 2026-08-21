import React, { useState } from 'react';
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
  onNavigateTab,
  onOpenScheduleModal,
  onOpenLocationModal,
  onSearchStudent,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [attributesChecked, setAttributesChecked] = useState<Record<string, boolean>>({
    'att-2-1': true,
    'att-2-2': true,
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchStudent(searchQuery.trim());
    }
  };

  const toggleAttribute = (id: string) => {
    setAttributesChecked(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const remainingDays = 5 - currentDay.dayNumber;

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Hero Section */}
      <section className="flex flex-col gap-2 mb-1 relative z-10">
        <div className="inline-block bg-[#b02a3e] text-white font-bold text-xs sm:text-sm px-3 py-1 border-2 border-[#191c1d] neu-shadow w-max rounded-sm mb-1 transform -rotate-2 select-none">
          PKKMB Politeknik Semen Indonesia 2026
        </div>

        <h1 
          className="font-display text-[32px] sm:text-[40px] font-black text-[#5b0617] leading-[1.08] uppercase tracking-tighter"
          style={{ textShadow: '2px 2px 0px #191c1d' }}
        >
          Bangun Fondasi,<br />Wujudkan Karya!
        </h1>

        <p className="text-[15px] sm:text-[17px] text-[#564242] max-w-md mt-1 bg-[#f8f9fa] p-2 border-2 border-[#191c1d] neu-shadow rounded-sm inline-block font-semibold">
          5 Hari untuk Memulai Perjalananmu di Dunia Vokasi
        </p>

        {/* Hero Illustration Banner */}
        <div className="mt-3 border-2 border-[#191c1d] neu-shadow rounded-lg overflow-hidden bg-[#f8f9fa] relative h-48 sm:h-56 w-full">
          <img
            src={HERO_IMAGE_URL}
            alt="Orientasi Vokasional 2026 - Ilustrasi Konstruksi Kampus"
            className="w-full h-full object-cover mix-blend-multiply opacity-95"
            referrerPolicy="no-referrer"
          />
          {/* Subtle ghost block */}
          <div className="absolute inset-0 bg-[#5b0617] opacity-5 pointer-events-none" />
          
          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 border border-[#191c1d] rounded text-[11px] font-bold text-[#5b0617]">
            ORVOKS EXPO & PRAKTIK
          </div>
        </div>
      </section>

      {/* Status Card */}
      <section className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-4 sm:p-5 flex flex-col gap-3 relative overflow-hidden z-10">
        {/* LIVE Badge */}
        <div className="absolute -top-1 -right-1 bg-[#002a5b] text-white font-bold text-xs px-3 py-1 border-2 border-[#191c1d] neu-shadow transform rotate-3 select-none flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          LIVE
        </div>

        <div className="flex justify-between items-end border-b-2 border-[#191c1d] pb-3">
          <div>
            <h2 className="font-display text-[22px] font-bold text-[#191c1d]">
              {currentDay.dayName}
            </h2>
            <p className="text-[13px] font-bold text-[#5b0617] tracking-widest uppercase mt-0.5 font-headline">
              HARI KE-{currentDay.dayNumber} DARI 5
            </p>
          </div>
          <div className="text-right">
            <span className="text-[13px] font-bold text-[#564242]">
              {remainingDays > 0 ? `${remainingDays} hari lagi` : 'Hari Terakhir!'}
            </span>
          </div>
        </div>

        {/* Day Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {DAYS_DATA.map((d) => (
            <button
              key={d.dayNumber}
              onClick={() => onSelectDay(d.dayNumber)}
              className={`px-2.5 py-1 text-xs font-bold rounded border-2 transition-all shrink-0 ${
                currentDay.dayNumber === d.dayNumber
                  ? 'bg-[#5b0617] text-white border-[#191c1d] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-[#191c1d] border-[#191c1d] hover:bg-[#e7e8e9]'
              }`}
            >
              H-{d.dayNumber}: {d.dayName}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-[#564242]">Progress Orientasi</span>
            <span className="font-bold text-[#5b0617]">{currentDay.progressPercent}%</span>
          </div>
          <div className="w-full h-4 bg-[#e7e8e9] border-2 border-[#191c1d] rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-[#5b0617] border-r-2 border-[#191c1d] rounded-full transition-all duration-500"
              style={{ width: `${currentDay.progressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-[#edeeef] p-4 border-2 border-[#191c1d] neu-shadow rounded-lg flex flex-col gap-2 z-10">
        <label htmlFor="search-input" className="font-bold text-sm text-[#191c1d]">
          Cari Kelompokmu
        </label>
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Masukkan nama lengkap kamu..."
            className="flex-1 bg-[#f8f9fa] border-2 border-[#191c1d] p-2.5 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#5b0617] focus:border-[#5b0617] placeholder:text-[#897172] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-medium"
          />
          <button
            type="submit"
            id="btn-search-group"
            className="bg-[#5b0617] text-white border-2 border-[#191c1d] neu-shadow neu-button-active px-4 rounded-md flex items-center justify-center transition-transform hover:bg-[#7a1f2b]"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
        </form>
      </section>

      {/* Quick Info Cards Grid */}
      <section className="grid grid-cols-2 gap-3.5 z-10">
        {/* Card 1: Jadwal */}
        <div className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-4 flex flex-col justify-between hover:bg-white transition-colors h-full">
          <div className="flex flex-col gap-1 mb-3">
            <div className="flex items-center gap-1.5 text-[#b02a3e] mb-0.5">
              <span className="material-symbols-outlined text-[20px]">event</span>
              <span className="font-bold text-xs uppercase tracking-wider">
                {currentDay.dayName}
              </span>
            </div>
            <h3 className="font-display font-bold text-[17px] text-[#191c1d] leading-tight">
              {currentDay.theme}
            </h3>
          </div>
          <button
            id="btn-see-schedule"
            onClick={() => onOpenScheduleModal(currentDay)}
            className="w-full bg-[#e1e3e4] border-2 border-[#191c1d] text-[#191c1d] font-bold text-xs py-2 rounded-md hover:bg-[#d9dadb] neu-shadow neu-button-active transition-all"
          >
            Lihat Jadwal
          </button>
        </div>

        {/* Card 2: Kelompok Saya */}
        <div 
          onClick={() => onNavigateTab('kelompok')}
          className="bg-[#002a5b] text-white border-2 border-[#191c1d] neu-shadow rounded-lg p-4 flex flex-col justify-between h-full cursor-pointer hover:bg-[#00387a] transition-colors"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#aac7ff] mb-0.5">
              <span className="material-symbols-outlined text-[20px]">groups_2</span>
              <span className="font-bold text-xs uppercase tracking-wider">
                Kelompok Saya
              </span>
            </div>
            <h3 className="font-display font-bold text-[18px] leading-tight text-white">
              Kelompok Beton
            </h3>
            <p className="text-xs text-[#aac7ff] font-semibold mt-1">
              15 anggota terdaftar
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-white/90 border-t border-white/20 pt-2">
            <span>Kak Dimas P.</span>
            <span className="underline">Detail &rarr;</span>
          </div>
        </div>

        {/* Card 3: Atribut Hari Ini */}
        <div className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-4 flex flex-col col-span-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-[#5b0617]">
              <span className="material-symbols-outlined text-[20px]">checkroom</span>
              <span className="font-bold text-xs uppercase tracking-wider">
                Atribut Hari Ini
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#897172]">
              Ketuk untuk centang
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {currentDay.attributes.slice(0, 2).map((attr) => {
              const isChecked = attributesChecked[attr.id] ?? attr.checked;
              return (
                <div
                  key={attr.id}
                  onClick={() => toggleAttribute(attr.id)}
                  className={`border-2 border-[#191c1d] p-2.5 rounded-md flex items-start gap-3 cursor-pointer transition-all ${
                    isChecked ? 'bg-[#f3f4f5]' : 'bg-white'
                  }`}
                >
                  <div
                    className={`w-6 h-6 border-2 border-[#191c1d] rounded-sm flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isChecked ? 'bg-[#b02a3e]' : 'bg-white'
                    }`}
                  >
                    {isChecked && (
                      <span
                        className="material-symbols-outlined text-[16px] text-white"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-semibold ${isChecked ? 'text-[#191c1d]' : 'text-[#564242]'}`}>
                      {attr.name}
                    </p>
                    {attr.note && (
                      <p className="text-[11px] text-[#897172] mt-0.5">{attr.note}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 4: Lokasi */}
        <div className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-4 flex flex-col justify-between col-span-2">
          <div className="flex flex-col gap-1 mb-3">
            <div className="flex items-center gap-1.5 text-[#564242] mb-0.5">
              <span className="material-symbols-outlined text-[20px]">pin_drop</span>
              <span className="font-bold text-xs uppercase tracking-wider">
                Lokasi Utama Hari Ini
              </span>
            </div>
            <h3 className="font-display font-bold text-[18px] text-[#191c1d] leading-tight">
              {currentDay.primaryLocation}
            </h3>
            <p className="text-xs text-[#564242]">
              Gedung Utama (Gedung A) Lt. 3 Politeknik Semen Indonesia
            </p>
          </div>
          <button
            id="btn-see-location"
            onClick={() => onOpenLocationModal(currentDay.primaryLocation)}
            className="w-full bg-[#5b0617] text-white border-2 border-[#191c1d] font-bold text-xs py-2 rounded-md hover:bg-[#7a1f2b] neu-shadow neu-button-active transition-all"
          >
            Lihat Lokasi & Petunjuk Arah
          </button>
        </div>
      </section>
    </div>
  );
};
