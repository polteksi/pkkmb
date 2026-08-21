import React from 'react';
import { DaySchedule } from '../types';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#5b0617] to-[#7a1f2b] dark:from-[#7a1f2b] dark:to-[#002a5b] text-white p-5 flex items-start justify-between">
          <div>
            <span className="text-[10px] bg-white/20 text-[#ffdada] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-headline">
              HARI KE-{day.dayNumber} ({day.dayName})
            </span>
            <h3 className="font-display font-black text-lg sm:text-xl text-white mt-1 leading-tight">
              {day.theme}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup Modal"
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shrink-0 ml-2"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex flex-col gap-4 flex-1">
          
          {/* Primary Location Card */}
          <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-400 block uppercase tracking-wider">
                Lokasi Pusat:
              </span>
              <span className="font-headline font-bold text-slate-900 dark:text-white text-sm">
                {day.primaryLocation}
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenLocation(day.primaryLocation);
              }}
              className="bg-[#002a5b] dark:bg-[#00387a] hover:bg-[#00387a] dark:hover:bg-[#004b9e] text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">map</span>
              <span>Lihat Rute</span>
            </button>
          </div>

          <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#5b0617] dark:text-[#ff8595]">format_list_bulleted</span>
            Rundown Acara Lengkap ({day.sessions.length} Sesi)
          </h4>

          <div className="flex flex-col gap-3">
            {day.sessions.map((sess, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 p-3.5 rounded-xl shadow-xs flex flex-col gap-1.5 hover:border-slate-300 dark:hover:border-slate-600 transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-600">
                    {sess.time} WIB
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-400">
                    {sess.type}
                  </span>
                </div>
                <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mt-0.5 leading-snug">
                  {sess.title}
                </h5>
                {sess.speaker && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Pemateri: <span className="font-semibold text-[#5b0617] dark:text-[#ff8595]">{sess.speaker}</span>
                  </p>
                )}
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1.5 border-t border-slate-100 dark:border-slate-700 mt-1">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-slate-400">pin_drop</span>
                    {sess.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white px-5 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer border border-transparent dark:border-slate-700"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
