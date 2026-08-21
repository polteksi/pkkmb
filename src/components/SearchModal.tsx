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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow-lg rounded-xl max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#5b0617] text-white p-4 border-b-2 border-[#191c1d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px]">person_search</span>
            <h3 className="font-display font-black text-lg text-white">
              Cari Data Mahasiswa / Kelompok
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white text-[#191c1d] border-2 border-[#191c1d] rounded-md flex items-center justify-center font-bold hover:bg-[#ffdada] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Input Bar */}
        <div className="p-4 border-b-2 border-[#191c1d] bg-[#edeeef]">
          <div className="relative">
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ketik nama / NIM / jurusan..."
              className="w-full bg-white border-2 border-[#191c1d] py-2.5 pl-3 pr-9 text-sm rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-[#5b0617] font-medium"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                <span className="material-symbols-outlined text-[18px]">clear</span>
              </button>
            )}
          </div>
          <p className="text-[11px] text-[#564242] mt-1.5 font-medium">
            Contoh: <span className="underline cursor-pointer" onClick={() => setQuery('Farhan')}>Farhan</span>, <span className="underline cursor-pointer" onClick={() => setQuery('Beton')}>Beton</span>, <span className="underline cursor-pointer" onClick={() => setQuery('Otomasi')}>Otomasi</span>
          </p>
        </div>

        {/* Result List */}
        <div className="p-4 overflow-y-auto flex flex-col gap-2 flex-1 max-h-[50vh]">
          {searchResults.length > 0 ? (
            searchResults.map((student) => (
              <div
                key={student.id}
                onClick={() => {
                  onSelectStudent?.(student);
                  onClose();
                }}
                className="bg-white border-2 border-[#191c1d] rounded-md p-3 flex items-center justify-between hover:bg-[#ffdada]/30 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded border-2 border-[#191c1d] flex items-center justify-center font-bold text-white text-xs shrink-0"
                    style={{ backgroundColor: student.avatarColor }}
                  >
                    {student.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#191c1d]">
                      {student.name}
                    </h4>
                    <p className="text-[11px] text-[#564242]">
                      NIM: {student.nim} &bull; {student.major}
                    </p>
                    <span className="inline-block mt-0.5 text-[10px] bg-[#002a5b] text-white font-bold px-1.5 py-0.2 rounded">
                      {student.groupName} ({student.role})
                    </span>
                  </div>
                </div>

                <span className="text-xs text-[#5b0617] font-bold">&rarr;</span>
              </div>
            ))
          ) : query.trim() ? (
            <div className="text-center py-8 text-xs text-[#897172] flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-[32px] text-gray-400">
                search_off
              </span>
              <span>Tidak ada mahasiswa ditemukan untuk "{query}".</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#564242]">Grup Orientasi Terdaftar:</span>
              <div className="grid grid-cols-2 gap-2">
                {GROUPS_DATA.map((grp) => (
                  <button
                    key={grp.id}
                    onClick={() => setQuery(grp.name)}
                    className="bg-white border-2 border-[#191c1d] p-2 rounded text-left text-xs font-bold hover:bg-[#e7e8e9] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {grp.name}
                    <span className="block text-[10px] text-[#897172] font-normal">
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
