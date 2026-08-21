import React, { useState } from 'react';
import { GROUPS_DATA } from '../data/orientationData';
import { StudentMember } from '../types';

interface GroupTabProps {
  onSelectStudent?: (student: StudentMember) => void;
  onOpenLocationModal: (locationName: string) => void;
}

export const GroupTab: React.FC<GroupTabProps> = ({ onSelectStudent, onOpenLocationModal }) => {
  const [selectedGroupId, setSelectedGroupId] = useState<string>('grp-1');
  const [searchMember, setSearchMember] = useState<string>('');

  const currentGroup = GROUPS_DATA.find((g) => g.id === selectedGroupId) || GROUPS_DATA[0];

  const filteredMembers = currentGroup.members.filter((m) =>
    m.name.toLowerCase().includes(searchMember.toLowerCase()) ||
    m.nim.includes(searchMember) ||
    m.major.toLowerCase().includes(searchMember.toLowerCase())
  );

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">
      
      {/* Header & Group Picker */}
      <div className="campus-card bg-white dark:bg-slate-900 p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 text-[#002a5b] dark:text-[#aac7ff]">
            <div className="w-10 h-10 rounded-xl bg-[#002a5b]/10 dark:bg-[#002a5b]/40 text-[#002a5b] dark:text-[#aac7ff] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">groups</span>
            </div>
            <div>
              <h2 className="font-display font-black text-lg sm:text-2xl text-slate-900 dark:text-white tracking-tight leading-tight">
                Kelompok Orientasi
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                Pilih kelompok untuk melihat mentor, ruang harian & daftar anggota
              </p>
            </div>
          </div>
          <span className="text-[11px] sm:text-xs bg-[#002a5b]/10 dark:bg-[#002a5b]/40 text-[#002a5b] dark:text-[#aac7ff] font-bold px-2.5 py-1 rounded-full border border-[#002a5b]/20 dark:border-[#002a5b]/40 shrink-0">
            5 Kelompok
          </span>
        </div>

        {/* Group Selector Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pt-1">
          {GROUPS_DATA.map((grp) => {
            const isSelected = selectedGroupId === grp.id;
            return (
              <button
                key={grp.id}
                onClick={() => setSelectedGroupId(grp.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold border shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#002a5b] dark:bg-[#00387a] text-white border-[#002a5b] dark:border-[#aac7ff] shadow-xs scale-102 font-bold ring-2 ring-[#002a5b]/20 dark:ring-[#aac7ff]/30'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <span>{grp.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                  {grp.members.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Group Spotlight Details Card - Solid Deep Navy Background with High Contrast Text & 3D Glow */}
      <div 
        style={{ backgroundColor: '#002a5b' }}
        className="rounded-2xl text-white p-6 sm:p-7 card-3d-dark border border-[#00387a] relative overflow-hidden flex flex-col gap-5"
      >
        {/* Subtle blueprint grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col gap-4">
          
          {/* Top Label & Group Alias */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/20 pb-3">
            <span className="text-xs text-[#aac7ff] font-bold tracking-wider uppercase flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">info</span>
              INFORMASI KELOMPOK
            </span>
            <span className="bg-white/20 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full border border-white/25">
              {currentGroup.alias}
            </span>
          </div>

          {/* Group Title & Motto */}
          <div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              {currentGroup.name}
            </h3>
            <div className="mt-2.5 bg-black/30 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <p className="text-xs sm:text-sm text-[#ffdada] italic font-medium leading-relaxed">
                "{currentGroup.motto}"
              </p>
            </div>
          </div>

          {/* Mentor & Room Detail Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {/* Mentor Info */}
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/20 flex flex-col justify-between gap-3">
              <div>
                <span className="text-[10px] text-[#aac7ff] font-bold uppercase tracking-wider block">
                  MENTOR PENDAMPING
                </span>
                <span className="font-bold text-sm sm:text-base text-white block mt-1">
                  {currentGroup.mentor}
                </span>
              </div>
              <a
                href={`https://wa.me/62${currentGroup.mentorPhone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl w-max shadow-sm transition-all active:scale-98"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>{currentGroup.mentorPhone} (WhatsApp)</span>
              </a>
            </div>

            {/* Room Location */}
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/20 flex flex-col justify-between gap-3">
              <div>
                <span className="text-[10px] text-[#aac7ff] font-bold uppercase tracking-wider block">
                  RUANG DISKUSI HARIAN
                </span>
                <span className="font-bold text-sm sm:text-base text-white block mt-1">
                  {currentGroup.room}
                </span>
              </div>
              <button
                onClick={() => onOpenLocationModal(currentGroup.room)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl w-max cursor-pointer self-start transition-all border border-white/20 active:scale-98"
              >
                <span className="material-symbols-outlined text-[18px]">pin_drop</span>
                <span>Lihat di Peta Kampus</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Member Roster List */}
      <div className="campus-card bg-white dark:bg-slate-900 p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Daftar Anggota ({currentGroup.members.length} Mahasiswa)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Mahasiswa baru terdaftar di {currentGroup.name}
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Cari nama / NIM / prodi..."
              value={searchMember}
              onChange={(e) => setSearchMember(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002a5b]/20 dark:focus:ring-[#aac7ff]/30 focus:border-[#002a5b] dark:focus:border-[#aac7ff] focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white font-medium transition-all"
            />
            {searchMember && (
              <button
                onClick={() => setSearchMember('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              onClick={() => onSelectStudent?.(member)}
              className="p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xs transition-all flex items-center justify-between gap-3 cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-white text-xs shrink-0 shadow-xs"
                  style={{ backgroundColor: member.avatarColor }}
                >
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                      {member.name}
                    </h5>
                    {member.role !== 'Anggota' && (
                      <span className="text-[9px] bg-[#ffdada] dark:bg-[#5b0617] text-[#5b0617] dark:text-[#ffdada] font-bold px-1.5 py-0.2 rounded-full border border-transparent dark:border-[#ff6473]/30">
                        {member.role}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                    {member.nim} &bull; {member.major}
                  </p>
                </div>
              </div>

              <span className="material-symbols-outlined text-[18px] text-slate-300 dark:text-slate-600 group-hover:text-[#5b0617] dark:group-hover:text-[#ff8595] group-hover:translate-x-0.5 transition-all shrink-0">
                chevron_right
              </span>
            </div>
          ))}

          {filteredMembers.length === 0 && (
            <div className="col-span-full text-center py-8 text-xs text-slate-400 dark:text-slate-500 italic">
              Tidak ditemukan mahasiswa dengan kata kunci tersebut.
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
