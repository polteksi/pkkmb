import React from 'react';
import { DaySchedule } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface ScheduleModalProps {
  day: DaySchedule | null;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  day,
  onClose,
}) => {
  if (!day) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xs transition-opacity duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-[#1B1638] rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header - ORVOKS Deep Purple Gradient */}
        <div className="bg-[#5B2BBE] text-white p-5 flex items-start justify-between relative overflow-hidden shrink-0">
          <div className="relative z-10">
            <span className="text-[10px] bg-white/20 text-[#EFE9FF] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-display inline-flex items-center gap-1">
              <BrandDecoration type="sparkle" size={12} color="#F2B632" />
              SESI KE-{day.dayNumber} — {day.dayName}
            </span>
            <h3 className="font-display font-black text-lg sm:text-xl text-white mt-1 leading-tight">
              {day.theme}
            </h3>
            <p className="text-[11px] text-[#EFE9FF] mt-0.5 font-medium">{day.date}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup Modal"
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shrink-0 ml-2 relative z-10"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex flex-col gap-4 flex-1">

          {/* Jam Sesi Badge */}
          <div className="bg-[#5B2BBE]/8 dark:bg-[#5B2BBE]/20 border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35 p-3.5 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined text-[22px] text-[#5B2BBE] dark:text-[#C39BFF]">schedule</span>
            <div>
              <p className="text-[10px] font-bold text-[#6B6874] dark:text-[#A39EB8] uppercase tracking-wider">Rentang Waktu Sesi</p>
              <p className="text-base font-black text-[#5B2BBE] dark:text-[#C39BFF] font-display">{day.jamSesi}</p>
            </div>
          </div>

          <h4 className="font-display font-bold text-sm text-[#22202A] dark:text-white flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#5B2BBE] dark:text-[#C39BFF]">format_list_bulleted</span>
            Daftar Kegiatan ({day.kegiatan.length} item)
          </h4>

          <div className="flex flex-col gap-2">
            {day.kegiatan.map((kegiatan, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#251F4A]/60 border border-[#5B2BBE]/10 dark:border-[#322B60] p-3.5 rounded-xl shadow-xs flex items-center gap-3 hover:border-[#5B2BBE]/30 dark:hover:border-[#5B2BBE]/50 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0 font-display font-black text-xs border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30">
                  {idx + 1}
                </div>
                <h5 className="font-bold text-xs sm:text-sm text-[#22202A] dark:text-white leading-snug flex-1">
                  {kegiatan}
                </h5>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF9F6] dark:bg-[#151030] border-t border-[#5B2BBE]/10 dark:border-[#251F4A] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="bg-[#5B2BBE] hover:bg-[#43208F] dark:bg-[#5B2BBE] text-white px-5 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-xs active:scale-95"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
