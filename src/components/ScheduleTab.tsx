import React, { useState } from 'react';
import { DAYS_DATA } from '../data/orientationData';
import { DaySchedule } from '../types';

interface ScheduleTabProps {
  initialDayNumber?: number;
  onOpenLocationModal: (locationName: string) => void;
}

export const ScheduleTab: React.FC<ScheduleTabProps> = ({
  initialDayNumber = 2,
  onOpenLocationModal,
}) => {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(initialDayNumber);
  const [filterType, setFilterType] = useState<string>('all');
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    'att-1-1': true,
    'att-1-2': true,
    'att-2-1': true,
    'att-2-2': true,
  });

  const selectedDay: DaySchedule =
    DAYS_DATA.find((d) => d.dayNumber === selectedDayNum) || DAYS_DATA[1];

  const filteredSessions = selectedDay.sessions.filter((session) => {
    if (filterType === 'all') return true;
    return session.type === filterType;
  });

  const toggleCheck = (id: string) => {
    setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'ceremony':
        return { label: 'Sidang & Apel', bg: 'bg-[#5b0617] text-white' };
      case 'workshop':
        return { label: 'Materi & Kuliah', bg: 'bg-[#002a5b] text-white' };
      case 'tour':
        return { label: 'Campus Tour', bg: 'bg-[#b02a3e] text-white' };
      case 'games':
        return { label: 'Ice Breaking & Games', bg: 'bg-[#7a1f2b] text-white' };
      case 'break':
        return { label: 'Ishoma', bg: 'bg-[#564242] text-white' };
      default:
        return { label: 'Sesi', bg: 'bg-black text-white' };
    }
  };

  return (
    <div className="flex flex-col gap-4 pb-6">
      {/* Header */}
      <div className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-4">
        <div className="flex items-center gap-2 text-[#5b0617] mb-1">
          <span className="material-symbols-outlined text-[24px]">calendar_month</span>
          <h2 className="font-display font-bold text-[20px] text-[#191c1d]">
            Jadwal Rangkaian PKKMB
          </h2>
        </div>
        <p className="text-xs text-[#564242]">
          Susunan agenda 5 hari Orientasi Vokasi Politeknik Semen Indonesia 2026.
        </p>

        {/* Day selection tabs */}
        <div className="grid grid-cols-5 gap-1.5 mt-3">
          {DAYS_DATA.map((day) => (
            <button
              key={day.dayNumber}
              onClick={() => setSelectedDayNum(day.dayNumber)}
              className={`flex flex-col items-center py-2 px-1 rounded border-2 transition-all ${
                selectedDayNum === day.dayNumber
                  ? 'bg-[#5b0617] text-white border-[#191c1d] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold'
                  : 'bg-white text-[#191c1d] border-[#191c1d] hover:bg-[#e7e8e9]'
              }`}
            >
              <span className="text-[10px] uppercase font-bold tracking-wider">
                H-{day.dayNumber}
              </span>
              <span className="text-xs font-headline font-black">
                {day.dayName.slice(0, 3)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Day Info */}
      <div className="bg-[#edeeef] border-2 border-[#191c1d] neu-shadow rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="bg-[#b02a3e] text-white text-[11px] font-bold px-2 py-0.5 rounded border border-[#191c1d] inline-block mb-1">
              {selectedDay.date}
            </span>
            <h3 className="font-display font-bold text-[18px] text-[#191c1d]">
              {selectedDay.theme}
            </h3>
          </div>
          <button
            onClick={() => onOpenLocationModal(selectedDay.primaryLocation)}
            className="bg-white border-2 border-[#191c1d] text-[#5b0617] px-2.5 py-1 rounded text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffdada] flex items-center gap-1 shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            {selectedDay.primaryLocation}
          </button>
        </div>

        {/* Filter buttons */}
        <div className="flex gap-1.5 overflow-x-auto mt-3 pt-2 border-t border-[#191c1d]/20">
          {[
            { id: 'all', label: 'Semua Sesi' },
            { id: 'ceremony', label: 'Sidang/Apel' },
            { id: 'workshop', label: 'Materi' },
            { id: 'tour', label: 'Tour/Praktik' },
            { id: 'games', label: 'Games' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full border border-[#191c1d] shrink-0 transition-colors ${
                filterType === f.id
                  ? 'bg-[#191c1d] text-white'
                  : 'bg-white text-[#191c1d] hover:bg-[#e7e8e9]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sessions Timeline */}
      <div className="flex flex-col gap-3">
        {filteredSessions.map((sess, idx) => {
          const badge = getTypeBadge(sess.type);
          return (
            <div
              key={idx}
              className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-3.5 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-headline font-bold text-xs bg-white px-2 py-0.5 border border-[#191c1d] rounded text-[#5b0617]">
                  {sess.time} WIB
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border border-[#191c1d] ${badge.bg}`}
                >
                  {badge.label}
                </span>
              </div>

              <h4 className="font-display font-bold text-[15px] text-[#191c1d] mt-1 leading-snug">
                {sess.title}
              </h4>

              {sess.speaker && (
                <div className="flex items-center gap-1.5 text-xs text-[#564242]">
                  <span className="material-symbols-outlined text-[16px] text-[#5b0617]">
                    person
                  </span>
                  <span className="font-medium">{sess.speaker}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-[#564242] border-t border-[#191c1d]/10 pt-2 mt-1">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#002a5b]">
                    pin_drop
                  </span>
                  <span className="font-semibold">{sess.location}</span>
                </div>
                <button
                  onClick={() => onOpenLocationModal(sess.location)}
                  className="text-[11px] font-bold text-[#5b0617] hover:underline"
                >
                  Peta &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Attributes Checklist for the Day */}
      <div className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-4 mt-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-[#5b0617]">
            <span className="material-symbols-outlined text-[20px]">checklist</span>
            <h4 className="font-display font-bold text-[16px] text-[#191c1d]">
              Perlengkapan & Atribut Hari {selectedDay.dayName}
            </h4>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {selectedDay.attributes.map((attr) => {
            const isChecked = checklist[attr.id] ?? attr.checked;
            return (
              <div
                key={attr.id}
                onClick={() => toggleCheck(attr.id)}
                className={`border-2 border-[#191c1d] p-2.5 rounded-md flex items-center justify-between cursor-pointer transition-colors ${
                  isChecked ? 'bg-[#f3f4f5]' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-5 h-5 border-2 border-[#191c1d] rounded-sm flex items-center justify-center ${
                      isChecked ? 'bg-[#b02a3e] text-white' : 'bg-white'
                    }`}
                  >
                    {isChecked && (
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    )}
                  </div>
                  <div>
                    <span
                      className={`text-xs font-semibold ${
                        isChecked ? 'line-through text-[#897172]' : 'text-[#191c1d]'
                      }`}
                    >
                      {attr.name}
                    </span>
                    {attr.mandatory && (
                      <span className="ml-1.5 text-[9px] bg-[#ffdada] text-[#5b0617] font-bold px-1.5 py-0.2 rounded border border-[#897172]">
                        Wajib
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
