import React, { useState, useMemo } from 'react';
import { ALL_STUDENTS, GROUPS_DATA } from '../data/orientationData';
import { StudentMember } from '../types';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#5b0617] to-[#7a1f2b] dark:from-[#7a1f2b] dark:to-[#002a5b] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px]">person_search</span>
            <h3 className="font-display font-bold text-lg text-white">
              Cari Data Mahasiswa / Kelompok
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup Pencarian"
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Input Bar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50">
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px]">
              search
            </span>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ketik nama / NIM / prodi / kelompok..."
              className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-2.5 pl-10 pr-9 text-xs sm:text-sm rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-[#5b0617]/20 dark:focus:ring-[#ff8595]/30 focus:border-[#5b0617] dark:focus:border-[#ff8595] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
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
                className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 flex items-center justify-between hover:border-[#5b0617]/30 dark:hover:border-[#ff8595]/40 hover:bg-slate-50/80 dark:hover:bg-slate-800 cursor-pointer transition-all shadow-xs group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-xs"
                    style={{ backgroundColor: student.avatarColor }}
                  >
                    {student.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                      {student.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      NIM: {student.nim} &bull; {student.major}
                    </p>
                    <span className="inline-block mt-1 text-[10px] bg-[#002a5b]/10 dark:bg-[#002a5b]/40 text-[#002a5b] dark:text-[#aac7ff] font-bold px-2 py-0.2 rounded-full border border-[#002a5b]/20 dark:border-[#002a5b]/40">
                      {student.groupName} ({student.role})
                    </span>
                  </div>
                </div>

                <span className="material-symbols-outlined text-[18px] text-slate-300 dark:text-slate-600 group-hover:text-[#5b0617] dark:group-hover:text-[#ff8595] group-hover:translate-x-0.5 transition-all shrink-0">
                  chevron_right
                </span>
              </div>
            ))
          ) : query.trim() ? (
            <div className="text-center py-8 text-xs text-slate-400 dark:text-slate-500 flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[36px] text-slate-300 dark:text-slate-600">
                search_off
              </span>
              <span>Tidak ada data mahasiswa ditemukan untuk "{query}".</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Grup Orientasi Terdaftar:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {GROUPS_DATA.map((grp) => (
                  <button
                    key={grp.id}
                    onClick={() => setQuery(grp.name)}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-xl text-left text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all cursor-pointer shadow-xs flex flex-col justify-between"
                  >
                    <span className="text-slate-900 dark:text-white">{grp.name}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-400 font-normal mt-0.5">
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
