import React from 'react';
import { DaySchedule } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface ScheduleModalProps {
  day: DaySchedule | null;
  onClose: () => void;
  onOpenLocation: (location: string) => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  day,
  onClose,
  onOpenLocation,
}) => {
  if (!day) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-[#1B1638] rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-[#5B2BBE]/15 dark:border-[#D63BBE]/25 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header - ORVOKS Deep Purple Gradient */}
        <div className="bg-[#5B2BBE] text-white p-5 flex items-start justify-between relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[10px] bg-white/20 text-[#FDE8FA] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-display inline-flex items-center gap-1">
              <BrandDecoration type="sparkle" size={12} color="#F2B632" />
              HARI KE-{day.dayNumber} ({day.dayName})
            </span>
            <h3 className="font-display font-black text-lg sm:text-xl text-white mt-1 leading-tight">
              {day.theme}
            </h3>
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
          
          {/* Primary Location Card */}
          <div className="bg-[#FAF9F6] dark:bg-[#251F4A] p-4 rounded-xl border border-[#5B2BBE]/10 dark:border-[#322B60] flex items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold text-[#6B6874] dark:text-[#A39EB8] block uppercase tracking-wider font-display">
                Lokasi Pusat:
              </span>
              <span className="font-display font-bold text-[#22202A] dark:text-white text-sm">
                {day.primaryLocation}
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenLocation(day.primaryLocation);
              }}
              className="bg-[#4256A6] dark:bg-[#4256A6] hover:bg-[#34468C] dark:hover:bg-[#5268C0] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1 active:scale-95"
            >
              <span className="material-symbols-outlined text-[14px]">map</span>
              <span>Lihat Rute</span>
            </button>
          </div>

          <h4 className="font-display font-bold text-sm text-[#22202A] dark:text-white flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#5B2BBE] dark:text-[#C39BFF]">format_list_bulleted</span>
            Rundown Acara Lengkap ({day.sessions.length} Sesi)
          </h4>

          <div className="flex flex-col gap-2.5">
            {day.sessions.map((sess, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#251F4A]/60 border border-[#5B2BBE]/10 dark:border-[#322B60] p-3.5 rounded-xl shadow-xs flex flex-col gap-1.5 hover:border-[#5B2BBE]/30 dark:hover:border-[#D63BBE]/40 transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold bg-[#FAF9F6] dark:bg-[#1B1638] text-[#22202A] dark:text-[#F3F2F8] px-2 py-0.5 rounded-md border border-slate-200 dark:border-[#322B60] font-display">
                    {sess.time} WIB
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#5B2BBE] dark:text-[#C39BFF]">
                    {sess.type}
                  </span>
                </div>
                <h5 className="font-bold text-xs sm:text-sm text-[#22202A] dark:text-white mt-0.5 leading-snug">
                  {sess.title}
                </h5>
                {sess.speaker && (
                  <p className="text-[11px] text-[#6B6874] dark:text-[#A39EB8] font-medium">
                    Pemateri: <span className="font-semibold text-[#5B2BBE] dark:text-[#C39BFF]">{sess.speaker}</span>
                  </p>
                )}
                <div className="flex items-center justify-between text-[11px] text-[#6B6874] dark:text-[#A39EB8] pt-1.5 border-t border-slate-100 dark:border-[#322B60] mt-1">
                  <span className="flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-[14px] text-[#4256A6] dark:text-[#A5B8FF]">pin_drop</span>
                    {sess.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF9F6] dark:bg-[#151030] border-t border-[#5B2BBE]/10 dark:border-[#251F4A] flex justify-end">
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
