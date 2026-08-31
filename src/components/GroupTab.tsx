import React, { useState } from 'react';
import { GROUPS_DATA } from '../data/orientationData';
import { StudentMember } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface GroupTabProps {
  onSelectStudent?: (student: StudentMember) => void;
}

export const GroupTab: React.FC<GroupTabProps> = ({ onSelectStudent }) => {
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
      <div className="campus-card bg-white dark:bg-[#1B1638] p-5 sm:p-6 border border-[#5B2BBE]/12 dark:border-[#D63BBE]/20 shadow-xs flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 text-[#5B2BBE] dark:text-[#C39BFF]">
            <div className="w-10 h-10 rounded-xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">groups</span>
            </div>
            <div>
              <h2 className="font-display font-black text-lg sm:text-2xl text-[#22202A] dark:text-white tracking-tight leading-tight">
                Kelompok Orientasi
              </h2>
              <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium hidden sm:block">
                Pilih kelompok untuk melihat mentor, ruang harian & daftar anggota
              </p>
            </div>
          </div>
          <span className="text-[11px] sm:text-xs bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-3 py-1 rounded-full border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35 shrink-0">
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
                    ? 'bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white border-[#5B2BBE] dark:border-[#D63BBE] shadow-md scale-102 font-bold ring-2 ring-[#5B2BBE]/25 dark:ring-[#D63BBE]/35'
                    : 'bg-[#FAF9F6] dark:bg-[#251F4A] text-[#22202A] dark:text-[#F3F2F8] border-[#5B2BBE]/12 dark:border-[#251F4A] hover:bg-[#EFE9FF]/60 dark:hover:bg-[#322B60]'
                }`}
              >
                <span>{grp.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-[#EFE9FF] dark:bg-[#322B60] text-[#5B2BBE] dark:text-[#C39BFF]'}`}>
                  {grp.members.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Group Spotlight Details Card - ORVOKS Deep Purple Gradient */}
      <div 
        className="rounded-2xl text-white p-6 sm:p-7 card-3d-dark border border-[#5B2BBE]/30 relative overflow-hidden flex flex-col gap-5"
      >
        {/* Minimal geometric background accent */}
        <div className="absolute top-3 right-4 opacity-15 pointer-events-none">
          <BrandDecoration type="starburst" size={28} color="#FFFFFF" secondaryColor="#F2B632" />
        </div>
        
        <div className="relative z-10 flex flex-col gap-4">
          
          {/* Top Label & Group Alias */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/20 pb-3">
            <span className="text-xs text-[#EFE9FF] font-bold tracking-wider uppercase flex items-center gap-1.5 font-display">
              <BrandDecoration type="sparkle" size={14} color="#F2B632" />
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
            <div className="mt-2.5 bg-black/25 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
              <p className="text-xs sm:text-sm text-[#FDE8FA] italic font-medium leading-relaxed">
                "{currentGroup.motto}"
              </p>
            </div>
          </div>

          {/* Mentor & Room Detail Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {/* Mentor Info */}
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/20 flex flex-col justify-between gap-3">
              <div>
                <span className="text-[10px] text-[#EFE9FF] font-bold uppercase tracking-wider block font-display">
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
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#2F9672] hover:bg-[#257A5D] px-4 py-2 rounded-xl w-max shadow-sm transition-all active:scale-98"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>{currentGroup.mentorPhone} (WhatsApp)</span>
              </a>
            </div>

            {/* Room Info */}
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/20 flex flex-col gap-3">
              <div>
                <span className="text-[10px] text-[#EFE9FF] font-bold uppercase tracking-wider block font-display">
                  RUANG DISKUSI HARIAN
                </span>
                <span className="font-bold text-sm sm:text-base text-white block mt-1">
                  {currentGroup.room}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 bg-white/10 px-3 py-1.5 rounded-xl w-max border border-white/15">
                <span className="material-symbols-outlined text-[16px]">meeting_room</span>
                <span>Ruang Kelompok</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Roster List */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-5 sm:p-6 border border-[#5B2BBE]/12 dark:border-[#D63BBE]/20 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-[#251F4A] pb-4">
          <div>
            <h4 className="font-display font-bold text-lg text-[#22202A] dark:text-white">
              Daftar Anggota ({currentGroup.members.length} Mahasiswa)
            </h4>
            <p className="text-xs text-[#6B6874] dark:text-[#A39EB8]">
              Mahasiswa baru terdaftar di {currentGroup.name}
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Cari nama / NIM / prodi..."
              value={searchMember}
              onChange={(e) => setSearchMember(e.target.value)}
              className="w-full bg-[#FAF9F6] dark:bg-[#251F4A] border border-slate-200 dark:border-[#322B60] px-3 py-2 text-xs rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2BBE]/20 dark:focus:ring-[#C39BFF]/30 focus:border-[#5B2BBE] dark:focus:border-[#C39BFF] focus:bg-white dark:focus:bg-[#251F4A] text-[#22202A] dark:text-white font-medium transition-all"
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
              className="p-3.5 rounded-xl border border-[#5B2BBE]/10 dark:border-[#251F4A] bg-white dark:bg-[#251F4A]/60 hover:border-[#5B2BBE]/30 dark:hover:border-[#D63BBE]/40 hover:shadow-xs transition-all flex items-center justify-between gap-3 cursor-pointer group"
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
                    <h5 className="font-bold text-xs sm:text-sm text-[#22202A] dark:text-white truncate">
                      {member.name}
                    </h5>
                    {member.role !== 'Anggota' && (
                      <span className="text-[9px] bg-[#FDE8FA] dark:bg-[#D63BBE]/30 text-[#D63BBE] dark:text-[#FF85EA] font-bold px-1.5 py-0.2 rounded-full border border-[#D63BBE]/20">
                        {member.role}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#6B6874] dark:text-[#A39EB8] font-medium truncate mt-0.5">
                    {member.nim} &bull; {member.major}
                  </p>
                </div>
              </div>

              <span className="material-symbols-outlined text-[18px] text-slate-300 dark:text-[#322B60] group-hover:text-[#5B2BBE] dark:group-hover:text-[#C39BFF] group-hover:translate-x-0.5 transition-all shrink-0">
                chevron_right
              </span>
            </div>
          ))}

          {filteredMembers.length === 0 && (
            <div className="col-span-full text-center py-8 text-xs text-[#6B6874] dark:text-[#A39EB8] italic">
              Tidak ditemukan mahasiswa dengan kata kunci tersebut.
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
