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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow-lg rounded-xl max-w-lg w-full max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#5b0617] text-white p-4 border-b-2 border-[#191c1d] flex items-center justify-between">
          <div>
            <span className="text-[10px] bg-[#ffdada] text-[#5b0617] font-bold px-2 py-0.5 rounded border border-[#191c1d] uppercase font-headline">
              HARI KE-{day.dayNumber} ({day.dayName})
            </span>
            <h3 className="font-display font-black text-lg text-white mt-1 leading-tight">
              {day.theme}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white text-[#191c1d] border-2 border-[#191c1d] rounded-md flex items-center justify-center font-bold hover:bg-[#ffdada] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto flex flex-col gap-3 flex-1">
          <div className="bg-[#edeeef] p-3 rounded-md border-2 border-[#191c1d] flex items-center justify-between">
            <div className="text-xs">
              <span className="font-bold text-[#564242] block">Lokasi Pusat:</span>
              <span className="font-headline font-bold text-[#191c1d] text-sm">
                {day.primaryLocation}
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenLocation(day.primaryLocation);
              }}
              className="bg-[#002a5b] text-white px-2.5 py-1 rounded text-xs font-bold border border-[#191c1d] hover:bg-[#00387a]"
            >
              Lihat Rute
            </button>
          </div>

          <h4 className="font-display font-bold text-sm text-[#191c1d] mt-1">
            Rundown Acara Lengkap
          </h4>

          <div className="flex flex-col gap-2.5">
            {day.sessions.map((sess, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#191c1d] p-3 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,0.7)] flex flex-col gap-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold bg-[#ffdada] text-[#5b0617] px-2 py-0.5 rounded border border-[#897172]">
                    {sess.time} WIB
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#564242]">
                    {sess.type}
                  </span>
                </div>
                <h5 className="font-bold text-xs sm:text-sm text-[#191c1d] mt-1">
                  {sess.title}
                </h5>
                {sess.speaker && (
                  <p className="text-[11px] text-[#564242]">
                    Pemateri: <span className="font-semibold text-[#5b0617]">{sess.speaker}</span>
                  </p>
                )}
                <div className="flex items-center justify-between text-[11px] text-[#897172] pt-1 border-t border-gray-200 mt-1">
                  <span>📍 {sess.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#e7e8e9] border-t-2 border-[#191c1d] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#191c1d] text-white px-4 py-1.5 rounded-md font-bold text-xs hover:bg-[#2e3132]"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
