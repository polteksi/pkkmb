import React, { useState } from 'react';
import { DAYS_DATA } from '../data/orientationData';
import { DaySchedule } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface ScheduleTabProps {
  initialDayNumber?: number;
  onOpenLocationModal: (locationName: string) => void;
}

export const ScheduleTab: React.FC<ScheduleTabProps> = ({
  initialDayNumber = 1,
  onOpenLocationModal,
}) => {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(initialDayNumber);

  const selectedDay: DaySchedule =
    DAYS_DATA.find((d) => d.dayNumber === selectedDayNum) || DAYS_DATA[0];

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'ceremony':
        return { 
          label: 'Sidang & Apel', 
          bg: 'bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35', 
          icon: 'military_tech' 
        };
      case 'workshop':
        return { 
          label: 'Materi & Kuliah', 
          bg: 'bg-[#4256A6]/10 dark:bg-[#4256A6]/25 text-[#4256A6] dark:text-[#A5B8FF] border-[#4256A6]/20 dark:border-[#4256A6]/35', 
          icon: 'school' 
        };
      case 'tour':
        return { 
          label: 'Campus Tour', 
          bg: 'bg-[#D63BBE]/10 dark:bg-[#D63BBE]/25 text-[#D63BBE] dark:text-[#FF85EA] border-[#D63BBE]/20 dark:border-[#D63BBE]/35', 
          icon: 'tour' 
        };
      case 'games':
        return { 
          label: 'Ice Breaking & Games', 
          bg: 'bg-[#F2B632]/15 dark:bg-[#F2B632]/25 text-[#B88109] dark:text-[#FCD34D] border-[#F2B632]/30 dark:border-[#F2B632]/40', 
          icon: 'sports_esports' 
        };
      case 'break':
        return { 
          label: 'Ishoma', 
          bg: 'bg-[#2F9672]/10 dark:bg-[#2F9672]/25 text-[#2F9672] dark:text-[#4ADE80] border-[#2F9672]/20 dark:border-[#2F9672]/35', 
          icon: 'restaurant' 
        };
      default:
        return { 
          label: 'Sesi', 
          bg: 'bg-[#FAF9F6] dark:bg-[#251F4A] text-[#6B6874] dark:text-[#A39EB8] border-slate-200 dark:border-[#322B60]', 
          icon: 'event' 
        };
    }
  };

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">
      
      {/* Header Banner */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-6 border border-[#5B2BBE]/12 dark:border-[#D63BBE]/20 shadow-xs flex flex-col gap-4 relative overflow-hidden">
        
        {/* Subtle minimal geometric accent */}
        <div className="absolute top-4 right-6 opacity-20 pointer-events-none">
          <BrandDecoration type="sparkle" size={24} color="#D63BBE" />
        </div>

        <div>
          <div className="flex items-center gap-2 text-[#5B2BBE] dark:text-[#C39BFF] mb-1">
            <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-[#22202A] dark:text-white tracking-tight">
              Jadwal Rangkaian PKKMB
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B6874] dark:text-[#A39EB8] font-medium">
            Susunan agenda 5 hari Orientasi Vokasi Politeknik Semen Indonesia 2026.
          </p>
        </div>

        {/* Day selection tabs */}
        <div className="grid grid-cols-5 gap-2 pt-2 border-t border-[#FAF9F6] dark:border-[#251F4A]">
          {DAYS_DATA.map((day) => {
            const isSelected = selectedDayNum === day.dayNumber;
            return (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDayNum(day.dayNumber)}
                className={`flex flex-col items-center py-2.5 px-1.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white border-[#5B2BBE] dark:border-[#D63BBE] shadow-md font-bold scale-102 ring-2 ring-[#5B2BBE]/25 dark:ring-[#D63BBE]/35'
                    : 'bg-white dark:bg-[#1B1638] text-[#6B6874] dark:text-[#A39EB8] border-slate-200 dark:border-[#251F4A] hover:bg-[#FAF9F6] dark:hover:bg-[#251F4A]/70'
                }`}
              >
                <span className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? 'text-[#FDE8FA]' : 'text-[#6B6874] dark:text-[#A39EB8]'}`}>
                  H-{day.dayNumber}
                </span>
                <span className="text-xs sm:text-sm font-bold">
                  {day.dayName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Overview */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-5 border border-[#5B2BBE]/12 dark:border-[#D63BBE]/20 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="bg-[#D63BBE]/10 dark:bg-[#D63BBE]/25 text-[#D63BBE] dark:text-[#FF85EA] text-[11px] font-bold px-3 py-0.5 rounded-full border border-[#D63BBE]/20 dark:border-[#D63BBE]/35 inline-block mb-1">
            {selectedDay.date}
          </span>
          <h3 className="font-display font-bold text-lg text-[#22202A] dark:text-white">
            {selectedDay.theme}
          </h3>
        </div>
        
        <button
          onClick={() => onOpenLocationModal(selectedDay.primaryLocation)}
          className="bg-[#4256A6]/10 dark:bg-[#4256A6]/30 hover:bg-[#4256A6]/20 dark:hover:bg-[#4256A6]/50 text-[#4256A6] dark:text-[#A5B8FF] border border-[#4256A6]/25 dark:border-[#4256A6]/40 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shrink-0"
        >
          <span className="material-symbols-outlined text-[16px]">location_on</span>
          <span>{selectedDay.primaryLocation}</span>
        </button>
      </div>

      {/* Clean Sessions Card List */}
      <div className="flex flex-col gap-3.5">
        {selectedDay.sessions.map((sess, idx) => {
          const badge = getTypeBadge(sess.type);
          return (
            <div
              key={idx}
              className="campus-card campus-card-hover bg-white dark:bg-[#1B1638] p-5 border border-[#5B2BBE]/10 dark:border-[#D63BBE]/20 shadow-xs flex flex-col gap-2 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-xs bg-[#FAF9F6] dark:bg-[#251F4A] text-[#22202A] dark:text-[#F3F2F8] px-2.5 py-1 rounded-lg border border-[#5B2BBE]/10 dark:border-[#322B60] font-display flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-[#5B2BBE] dark:text-[#C39BFF]">schedule</span>
                  {sess.time} WIB
                </span>
                <span
                  className={`text-[11px] font-bold px-3 py-0.5 rounded-full border flex items-center gap-1 ${badge.bg}`}
                >
                  <span className="material-symbols-outlined text-[13px]">{badge.icon}</span>
                  {badge.label}
                </span>
              </div>

              <h4 className="font-display font-bold text-base text-[#22202A] dark:text-white leading-snug mt-0.5">
                {sess.title}
              </h4>

              {sess.speaker && (
                <div className="flex items-center gap-1.5 text-xs text-[#6B6874] dark:text-[#A39EB8]">
                  <span className="material-symbols-outlined text-[16px] text-[#5B2BBE] dark:text-[#C39BFF]">person</span>
                  <span>Narasumber: <strong className="text-[#22202A] dark:text-white">{sess.speaker}</strong></span>
                </div>
              )}

              <div className="pt-2 mt-1 border-t border-slate-100 dark:border-[#251F4A] flex items-center justify-between">
                <button
                  onClick={() => onOpenLocationModal(sess.location)}
                  className="text-xs font-semibold text-[#4256A6] dark:text-[#A5B8FF] hover:text-[#5B2BBE] dark:hover:text-[#C39BFF] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                  <span>{sess.location}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
