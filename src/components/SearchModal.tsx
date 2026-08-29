import React, { useState, useMemo } from 'react';
import { ALL_STUDENTS, GROUPS_DATA } from '../data/orientationData';
import { StudentMember } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface SearchModalProps {
  isOpen: boolean;
  initialQuery?: string;
  onClose: () => void;
  onSelectStudent?: (student: StudentMember) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  initialQuery = '',
  onClose,
  onSelectStudent,
}) => {
  const [query, setQuery] = useState(initialQuery);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return ALL_STUDENTS.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.nim.includes(q) ||
        s.groupName.toLowerCase().includes(q) ||
        s.major.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-[#1B1638] rounded-2xl max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-[#5B2BBE]/15 dark:border-[#D63BBE]/25 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header - ORVOKS Deep Purple Gradient */}
        <div className="bg-gradient-to-r from-[#43208F] via-[#5B2BBE] to-[#7D3BD6] text-white p-5 flex items-center justify-between relative overflow-hidden">
          <div className="flex items-center gap-2 relative z-10">
            <span className="material-symbols-outlined text-[24px]">person_search</span>
            <h3 className="font-display font-bold text-lg text-white">
              Cari Data Mahasiswa / Kelompok
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup Pencarian"
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 relative z-10"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Input Bar */}
        <div className="p-4 border-b border-[#FAF9F6] dark:border-[#251F4A] bg-[#FAF9F6]/70 dark:bg-[#251F4A]/50">
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#6B6874] dark:text-[#A39EB8] text-[20px]">
              search
            </span>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ketik nama / NIM / prodi / kelompok..."
              className="w-full bg-white dark:bg-[#1B1638] border border-slate-200 dark:border-[#322B60] py-2.5 pl-10 pr-9 text-xs sm:text-sm rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-[#5B2BBE]/20 dark:focus:ring-[#C39BFF]/30 focus:border-[#5B2BBE] dark:focus:border-[#C39BFF] text-[#22202A] dark:text-white placeholder:text-[#6B6874] dark:placeholder:text-[#A39EB8] font-medium transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Result List */}
        <div className="p-4 overflow-y-auto flex flex-col gap-2.5 flex-1 max-h-[50vh]">
          {searchResults.length > 0 ? (
            searchResults.map((student) => (
              <div
                key={student.id}
                onClick={() => {
                  onSelectStudent?.(student);
                  onClose();
                }}
                className="bg-white dark:bg-[#251F4A]/60 border border-[#5B2BBE]/10 dark:border-[#322B60] rounded-xl p-3.5 flex items-center justify-between hover:border-[#5B2BBE]/30 dark:hover:border-[#D63BBE]/40 hover:bg-[#FAF9F6] dark:hover:bg-[#251F4A] cursor-pointer transition-all shadow-xs group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-xs font-display"
                    style={{ backgroundColor: student.avatarColor }}
                  >
                    {student.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-[#22202A] dark:text-white truncate">
                      {student.name}
                    </h4>
                    <p className="text-[11px] text-[#6B6874] dark:text-[#A39EB8] truncate mt-0.5 font-medium">
                      NIM: {student.nim} &bull; {student.major}
                    </p>
                    <span className="inline-block mt-1 text-[10px] bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-2 py-0.2 rounded-full border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35">
                      {student.groupName} ({student.role})
                    </span>
                  </div>
                </div>

                <span className="material-symbols-outlined text-[18px] text-slate-300 dark:text-[#322B60] group-hover:text-[#5B2BBE] dark:group-hover:text-[#C39BFF] group-hover:translate-x-0.5 transition-all shrink-0">
                  chevron_right
                </span>
              </div>
            ))
          ) : query.trim() ? (
            <div className="text-center py-8 text-xs text-[#6B6874] dark:text-[#A39EB8] flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[36px] text-slate-300 dark:text-slate-600">
                search_off
              </span>
              <span>Tidak ada data mahasiswa ditemukan untuk "{query}".</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-[#6B6874] dark:text-[#A39EB8] uppercase tracking-wider font-display">
                Grup Orientasi Terdaftar:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {GROUPS_DATA.map((grp) => (
                  <button
                    key={grp.id}
                    onClick={() => setQuery(grp.name)}
                    className="bg-white dark:bg-[#251F4A]/60 border border-[#5B2BBE]/12 dark:border-[#322B60] p-2.5 rounded-xl text-left text-xs font-bold hover:bg-[#FAF9F6] dark:hover:bg-[#322B60] transition-all cursor-pointer shadow-xs flex flex-col justify-between"
                  >
                    <span className="text-[#22202A] dark:text-white font-display">{grp.name}</span>
                    <span className="text-[10px] text-[#6B6874] dark:text-[#A39EB8] font-normal mt-0.5">
                      {grp.members.length} Mahasiswa
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
