import React, { useState } from 'react';
import { DAYS_DATA } from '../data/orientationData';
import { DaySchedule } from '../types';

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
        return { label: 'Sidang & Apel', bg: 'bg-[#5b0617]/10 dark:bg-[#ff8595]/15 text-[#5b0617] dark:text-[#ff8595] border-[#5b0617]/20 dark:border-[#ff8595]/30', icon: 'military_tech' };
      case 'workshop':
        return { label: 'Materi & Kuliah', bg: 'bg-[#002a5b]/10 dark:bg-[#aac7ff]/15 text-[#002a5b] dark:text-[#aac7ff] border-[#002a5b]/20 dark:border-[#aac7ff]/30', icon: 'school' };
      case 'tour':
        return { label: 'Campus Tour', bg: 'bg-[#b02a3e]/10 dark:bg-[#ff6473]/15 text-[#b02a3e] dark:text-[#ff6473] border-[#b02a3e]/20 dark:border-[#ff6473]/30', icon: 'tour' };
      case 'games':
        return { label: 'Ice Breaking & Games', bg: 'bg-amber-500/10 dark:bg-amber-400/15 text-amber-700 dark:text-amber-300 border-amber-500/20 dark:border-amber-400/30', icon: 'sports_esports' };
      case 'break':
        return { label: 'Ishoma', bg: 'bg-slate-500/10 dark:bg-slate-400/15 text-slate-700 dark:text-slate-300 border-slate-500/20 dark:border-slate-400/30', icon: 'restaurant' };
      default:
        return { label: 'Sesi', bg: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700', icon: 'event' };
    }
  };

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">
      
      {/* Header Banner */}
      <div className="campus-card bg-gradient-to-r from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/90 p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#5b0617] dark:text-[#ff8595] mb-1">
            <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
              Jadwal Rangkaian PKKMB
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            Susunan agenda 5 hari Orientasi Vokasi Politeknik Semen Indonesia 2026.
          </p>
        </div>

        {/* Day selection tabs */}
        <div className="grid grid-cols-5 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          {DAYS_DATA.map((day) => {
            const isSelected = selectedDayNum === day.dayNumber;
            return (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDayNum(day.dayNumber)}
                className={`flex flex-col items-center py-2.5 px-1.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#5b0617] dark:bg-[#7a1f2b] text-white border-[#5b0617] dark:border-[#ff6473] shadow-sm font-bold scale-102 ring-2 ring-[#5b0617]/20 dark:ring-[#ff6473]/30'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? 'text-[#ffdada]' : 'text-slate-400 dark:text-slate-500'}`}>
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
      <div className="campus-card bg-white dark:bg-slate-900 p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="bg-[#b02a3e]/10 dark:bg-[#b02a3e]/25 text-[#b02a3e] dark:text-[#ff8595] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#b02a3e]/20 dark:border-[#b02a3e]/30 inline-block mb-1">
            {selectedDay.date}
          </span>
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            {selectedDay.theme}
          </h3>
        </div>
        
        <button
          onClick={() => onOpenLocationModal(selectedDay.primaryLocation)}
          className="bg-[#002a5b]/5 dark:bg-[#002a5b]/40 hover:bg-[#002a5b]/10 dark:hover:bg-[#002a5b]/60 text-[#002a5b] dark:text-[#aac7ff] border border-[#002a5b]/20 dark:border-[#002a5b]/40 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shrink-0"
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
              className="campus-card campus-card-hover bg-white dark:bg-slate-900 p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-2 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 font-headline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {sess.time} WIB
                </span>
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${badge.bg}`}
                >
                  <span className="material-symbols-outlined text-[13px]">{badge.icon}</span>
                  {badge.label}
                </span>
              </div>

              <h4 className="font-display font-bold text-base text-slate-900 dark:text-white leading-snug mt-0.5">
                {sess.title}
              </h4>

              {sess.speaker && (
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-[16px] text-[#5b0617] dark:text-[#ff8595]">person</span>
                  <span>Narasumber: <strong className="text-slate-900 dark:text-white">{sess.speaker}</strong></span>
                </div>
              )}

              <div className="pt-2 mt-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onOpenLocationModal(sess.location)}
                  className="text-xs font-semibold text-[#002a5b] dark:text-[#aac7ff] hover:text-[#5b0617] dark:hover:text-[#ff8595] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
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
