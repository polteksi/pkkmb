import React, { useState } from 'react';
import { DAYS_DATA } from '../data/orientationData';
import { DaySchedule } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface ScheduleTabProps {
  initialDayNumber?: number;
}

export const ScheduleTab: React.FC<ScheduleTabProps> = ({
  initialDayNumber = 1,
}) => {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(initialDayNumber);

  const selectedDay: DaySchedule =
    DAYS_DATA.find((d) => d.dayNumber === selectedDayNum) || DAYS_DATA[0];

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">
      
      {/* Header Banner */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-6 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex flex-col gap-4 relative overflow-hidden">
        
        {/* Subtle minimal geometric accent */}
        <div className="absolute top-4 right-6 opacity-20 pointer-events-none">
          <BrandDecoration type="sparkle" size={24} color="#5B2BBE" />
        </div>

        <div>
          <div className="flex items-center gap-2 text-[#5B2BBE] dark:text-[#C39BFF] mb-1">
            <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-[#22202A] dark:text-white tracking-tight">
              Jadwal Rangkaian PKKMB
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B6874] dark:text-[#A39EB8] font-medium">
            Susunan agenda ORVOKS POLTEKSI 2026 — Pra-PKKMB hingga Penutupan.
          </p>
        </div>

        {/* Day selection tabs — Tanggal + Hari */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 pt-2 border-t border-[#FAF9F6] dark:border-[#251F4A]">
          {DAYS_DATA.map((day) => {
            const isSelected = selectedDayNum === day.dayNumber;
            return (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDayNum(day.dayNumber)}
                className={`flex flex-col items-center py-2 px-1 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white border-[#5B2BBE] dark:border-[#C39BFF] shadow-sm font-bold ring-2 ring-[#5B2BBE]/25 dark:ring-[#C39BFF]/35'
                    : 'bg-white dark:bg-[#1B1638] text-[#6B6874] dark:text-[#A39EB8] border-slate-200 dark:border-[#251F4A] hover:bg-[#FAF9F6] dark:hover:bg-[#251F4A]/70'
                }`}
              >
                <span className={`text-[11px] font-extrabold tracking-tight font-display ${isSelected ? 'text-white' : 'text-[#22202A] dark:text-[#F3F2F8]'}`}>
                  {day.shortDate}
                </span>
                <span className={`text-[10px] font-semibold ${isSelected ? 'text-[#EFE9FF]' : 'text-[#6B6874] dark:text-[#A39EB8]'}`}>
                  {day.dayName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Overview */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-5 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] text-[11px] font-bold px-3 py-0.5 rounded-full border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35 inline-block mb-1 font-display">
              {selectedDay.date} ({selectedDay.dayName}) · {selectedDay.phase}
            </span>
            <h3 className="font-display font-bold text-lg text-[#22202A] dark:text-white">
              {selectedDay.theme}
            </h3>
          </div>
          {/* Jam Sesi Badge */}
          <div className="flex items-center gap-2 bg-[#5B2BBE]/8 dark:bg-[#5B2BBE]/20 border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35 px-4 py-2.5 rounded-xl self-start sm:self-auto shrink-0">
            <span className="material-symbols-outlined text-[18px] text-[#5B2BBE] dark:text-[#C39BFF]">schedule</span>
            <div>
              <p className="text-[9px] font-bold text-[#6B6874] dark:text-[#A39EB8] uppercase tracking-wider">Rentang Waktu</p>
              <p className="text-sm font-black text-[#5B2BBE] dark:text-[#C39BFF] font-display">{selectedDay.jamSesi}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Session Header + Kegiatan List */}
      <div className="flex flex-col gap-3">
        {/* Jam Sesi as Section Header */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-[#5B2BBE]/20 to-transparent dark:from-[#5B2BBE]/30" />
          <span className="flex items-center gap-2 bg-[#5B2BBE] text-white text-xs font-bold px-4 py-1.5 rounded-full font-display shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-[15px]">schedule</span>
            {selectedDay.jamSesi}
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-[#5B2BBE]/20 to-transparent dark:from-[#5B2BBE]/30" />
        </div>

        {/* Kegiatan Cards */}
        {selectedDay.kegiatan.map((kegiatan, idx) => (
          <div
            key={idx}
            className="campus-card campus-card-hover bg-white dark:bg-[#1B1638] p-4 sm:p-5 border border-[#5B2BBE]/10 dark:border-[#5B2BBE]/25 shadow-xs flex items-center gap-4 transition-all"
          >
            {/* Numbering Badge */}
            <div className="w-9 h-9 rounded-xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0 font-display font-black text-sm border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30">
              {idx + 1}
            </div>
            {/* Activity Name */}
            <h4 className="font-display font-bold text-sm sm:text-base text-[#22202A] dark:text-white leading-snug flex-1">
              {kegiatan}
            </h4>
            {/* Visual accent */}
            <div className="w-1.5 h-8 rounded-full bg-[#5B2BBE] opacity-40 dark:opacity-60 shrink-0" />
          </div>
        ))}

        {/* Summary Footer */}
        <div className="campus-card bg-[#FAF9F6] dark:bg-[#251F4A]/60 border border-dashed border-[#5B2BBE]/20 dark:border-[#5B2BBE]/30 p-4 rounded-2xl flex items-center justify-center gap-2 text-center">
          <span className="material-symbols-outlined text-[18px] text-[#5B2BBE] dark:text-[#C39BFF]">info</span>
          <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium">
            <strong className="text-[#22202A] dark:text-white">{selectedDay.kegiatan.length} kegiatan</strong> dalam rentang {selectedDay.jamSesi}
          </p>
        </div>
      </div>

    </div>
  );
};
