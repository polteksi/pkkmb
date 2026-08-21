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
    <div className="flex flex-col gap-4 pb-6">
      {/* Header & Group Picker */}
      <div className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-[#002a5b]">
            <span className="material-symbols-outlined text-[24px]">group</span>
            <h2 className="font-display font-bold text-[20px] text-[#191c1d]">
              Kelompok Orientasi
            </h2>
          </div>
          <span className="text-xs bg-[#ffdada] text-[#5b0617] font-bold px-2 py-0.5 rounded border border-[#191c1d]">
            5 Kelompok
          </span>
        </div>

        {/* Group Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 pt-1">
          {GROUPS_DATA.map((grp) => (
            <button
              key={grp.id}
              onClick={() => setSelectedGroupId(grp.id)}
              className={`px-3 py-1.5 rounded text-xs font-bold border-2 shrink-0 transition-all ${
                selectedGroupId === grp.id
                  ? 'bg-[#002a5b] text-white border-[#191c1d] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-[#191c1d] border-[#191c1d] hover:bg-[#e7e8e9]'
              }`}
            >
              {grp.name}
            </button>
          ))}
        </div>
      </div>

      {/* Group Detail Card */}
      <div className="bg-[#002a5b] text-white border-2 border-[#191c1d] neu-shadow rounded-lg p-4 sm:p-5 relative overflow-hidden">
        <div className="absolute top-2 right-2 bg-[#d6e3ff] text-[#001b3e] text-[10px] font-bold px-2 py-0.5 rounded border border-[#191c1d]">
          {currentGroup.alias}
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[11px] text-[#aac7ff] font-bold tracking-widest uppercase">
            INFORMASI KELOMPOK
          </span>
          <h3 className="font-display font-black text-[22px] sm:text-[24px] text-white leading-tight">
            {currentGroup.name}
          </h3>
          <p className="text-xs text-[#aac7ff] italic mt-0.5">
            "{currentGroup.motto}"
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4 pt-3 border-t border-white/20">
          <div className="bg-white/10 p-2.5 rounded border border-white/20 flex flex-col">
            <span className="text-[10px] text-[#aac7ff] font-bold uppercase">
              Mentor Pendamping
            </span>
            <span className="font-bold text-xs text-white">{currentGroup.mentor}</span>
            <a
              href={`https://wa.me/62${currentGroup.mentorPhone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] text-emerald-300 font-semibold mt-1 flex items-center gap-1 hover:underline"
            >
              <span className="material-symbols-outlined text-[14px]">call</span>
              {currentGroup.mentorPhone} (WhatsApp)
            </a>
          </div>

          <div className="bg-white/10 p-2.5 rounded border border-white/20 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#aac7ff] font-bold uppercase">
                Ruang Diskusi Harian
              </span>
              <span className="font-bold text-xs text-white block">{currentGroup.room}</span>
            </div>
            <button
              onClick={() => onOpenLocationModal(currentGroup.room)}
              className="mt-1 text-[11px] text-[#ffdada] font-bold hover:underline self-start flex items-center gap-0.5"
            >
              <span className="material-symbols-outlined text-[14px]">pin_drop</span>
              Lihat di Peta Kampus
            </button>
          </div>
        </div>
      </div>

      {/* Member Roster List */}
      <div className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-[17px] text-[#191c1d]">
              Daftar Anggota ({currentGroup.members.length} Mahasiswa)
            </span>
          </div>

          <input
            type="text"
            placeholder="Cari anggota / NIM..."
            value={searchMember}
            onChange={(e) => setSearchMember(e.target.value)}
            className="bg-white border-2 border-[#191c1d] px-2.5 py-1 text-xs rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-1 focus:ring-[#5b0617]"
          />
        </div>

        <div className="flex flex-col gap-2">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              onClick={() => onSelectStudent?.(member)}
              className="bg-white border-2 border-[#191c1d] rounded-md p-3 flex items-center justify-between hover:bg-[#f3f4f5] transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded border-2 border-[#191c1d] flex items-center justify-center font-display font-black text-white text-xs shrink-0"
                  style={{ backgroundColor: member.avatarColor }}
                >
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-xs sm:text-sm text-[#191c1d]">
                      {member.name}
                    </h4>
                    {member.role !== 'Anggota' && (
                      <span className="text-[9px] bg-[#ffdada] text-[#5b0617] font-bold px-1.5 py-0.2 rounded border border-[#191c1d]">
                        {member.role}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#564242] font-medium mt-0.5">
                    {member.nim} &bull; {member.major}
                  </p>
                </div>
              </div>

              <span className="text-xs text-[#897172] font-bold">&rarr;</span>
            </div>
          ))}

          {filteredMembers.length === 0 && (
            <div className="text-center py-6 text-xs text-[#897172] italic">
              Tidak ditemukan mahasiswa dengan kata kunci tersebut.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
