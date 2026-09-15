import React, { useState, useEffect } from 'react';
import { ALL_STUDENTS, GROUPS_DATA, matchesStudentSearch } from '../data/groupData';
import { StudentMember, OrientationGroup } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface GroupTabProps {
  groups?: OrientationGroup[] | null;
  isLoading?: boolean;
  onRefresh?: () => void | Promise<void>;
  onSelectStudent?: (student: StudentMember) => void;
  initialStudent?: StudentMember | null;
}

/**
 * 1. Skeleton Loader for GroupTab during data fetching
 */
const GroupTabSkeleton: React.FC = () => {
  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8 animate-pulse" aria-busy="true" aria-label="Memuat data kelompok">
      {/* Skeleton Header Card */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-5 sm:p-6 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-[#251F4A]" />
            <div className="flex flex-col gap-2">
              <div className="w-36 h-5 rounded-md bg-slate-200 dark:bg-[#251F4A]" />
              <div className="w-56 h-3 rounded-md bg-slate-100 dark:bg-[#251F4A]/60 hidden sm:block" />
            </div>
          </div>
          <div className="w-20 h-6 rounded-full bg-slate-200 dark:bg-[#251F4A]" />
        </div>
        <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-[#251F4A] overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-24 h-9 rounded-xl bg-slate-200 dark:bg-[#251F4A] shrink-0" />
          ))}
        </div>
      </div>

      {/* Skeleton Spotlight Card */}
      <div className="rounded-2xl p-6 sm:p-7 bg-[#251F4A] border border-[#5B2BBE]/30 flex flex-col gap-4">
        <div className="w-32 h-4 rounded bg-white/20" />
        <div className="w-48 h-8 rounded bg-white/20 mt-2" />
        <div className="w-full h-12 rounded bg-white/10 mt-2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          <div className="h-24 rounded-xl bg-white/10" />
          <div className="h-24 rounded-xl bg-white/10" />
        </div>
      </div>

      {/* Skeleton Roster Grid */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-5 sm:p-6 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex flex-col gap-4">
        <div className="w-44 h-5 rounded bg-slate-200 dark:bg-[#251F4A]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-16 rounded-xl border border-slate-100 dark:border-[#251F4A] bg-slate-50 dark:bg-[#251F4A]/40" />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * 2. Pending State Component when student has no group or data is null/empty
 */
interface GroupPendingStateProps {
  onRefresh?: () => void | Promise<void>;
  isChecking?: boolean;
}

const GroupPendingState: React.FC<GroupPendingStateProps> = ({ onRefresh, isChecking }) => {
  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">
      {/* Header Card */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-5 sm:p-6 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex flex-col gap-2 relative overflow-hidden">
        <div className="absolute top-4 right-6 opacity-20 pointer-events-none">
          <BrandDecoration type="sparkle" size={24} color="#5B2BBE" />
        </div>
        <div className="flex items-center gap-2.5 text-[#5B2BBE] dark:text-[#C39BFF]">
          <div className="w-10 h-10 rounded-xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">group</span>
          </div>
          <div>
            <h2 className="font-display font-black text-lg sm:text-2xl text-[#22202A] dark:text-white tracking-tight leading-tight">
              Kelompok Orientasi
            </h2>
            <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium">
              Informasi pembagian kelompok mahasiswa baru ORVOKS POLTEKSI 2026
            </p>
          </div>
        </div>
      </div>

      {/* Pending State Main Content Card */}
      <div className="campus-card bg-white dark:bg-[#1B1638] border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30 p-6 sm:p-10 rounded-2xl shadow-xs text-center flex flex-col items-center gap-5 relative overflow-hidden">
        {/* Subtle decorative ambient glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#5B2BBE]/5 dark:bg-[#5B2BBE]/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#F2B632]/5 dark:bg-[#F2B632]/10 blur-2xl pointer-events-none" />

        {/* Dual Material Symbols Icon Container: group & pending */}
        <div className="relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shadow-xs border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35">
            <span className="material-symbols-outlined text-[36px] sm:text-[42px]">group</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F2B632] text-[#22202A] flex items-center justify-center shadow-sm border-2 border-white dark:border-[#1B1638]">
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">pending</span>
          </div>
        </div>

        {/* Title & Official Description */}
        <div className="flex flex-col items-center gap-2 max-w-lg">
          <h3 className="font-display font-black text-xl sm:text-2xl text-[#22202A] dark:text-white tracking-tight">
            Kelompok Belum Diumumkan
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6874] dark:text-[#A39EB8] leading-relaxed font-medium">
            Saat ini kamu belum mendapatkan kelompok PKKMB. Informasi kelompok akan tersedia setelah pembagian kelompok resmi diumumkan oleh panitia.
          </p>
        </div>

        {/* Status Box: Label "Status" and Value "Menunggu Pengumuman Kelompok" */}
        <div className="w-full max-w-md bg-[#FAF9F6] dark:bg-[#251F4A]/70 border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30 rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2.5 text-left">
            <div className="w-8 h-8 rounded-lg bg-[#F2B632]/20 text-[#B88109] dark:text-[#FCD34D] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#6B6874] dark:text-[#A39EB8] uppercase tracking-wider block">
                Status
              </span>
              <span className="font-display font-extrabold text-xs sm:text-sm text-[#22202A] dark:text-white block mt-0.5">
                Menunggu Pengumuman Kelompok
              </span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[#F2B632]/15 text-[#B88109] dark:text-[#FCD34D] px-2.5 py-1 rounded-full border border-[#F2B632]/30 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2B632] animate-ping" />
            Pending
          </span>
        </div>

        {/* Small Additional Information */}
        <p className="text-[11px] sm:text-xs text-[#6B6874] dark:text-[#A39EB8] max-w-lg leading-relaxed text-center font-medium">
          Setelah kelompok diumumkan, kamu dapat melihat nama kelompok, mentor, anggota, dan informasi kegiatan di halaman ini.
        </p>

        {/* Refresh Action Button */}
        {onRefresh && (
          <button
            onClick={onRefresh}
            disabled={isChecking}
            className="mt-1 bg-[#5B2BBE] hover:bg-[#43208F] dark:bg-[#5B2BBE] dark:hover:bg-[#43208F] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer active:scale-95 flex items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            <span className={`material-symbols-outlined text-[18px] ${isChecking ? 'animate-spin' : ''}`}>
              refresh
            </span>
            <span>{isChecking ? 'Memeriksa...' : 'Periksa Pembaruan'}</span>
          </button>
        )}

        {/* Information & Preparation Guide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-3xl pt-4 border-t border-slate-100 dark:border-[#251F4A] text-left">
          <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#251F4A]/60 border border-[#5B2BBE]/10 dark:border-[#5B2BBE]/20 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#5B2BBE] dark:text-[#C39BFF]">
              <span className="material-symbols-outlined text-[18px]">checkroom</span>
              <span className="font-display font-bold text-xs">Siapkan Atribut</span>
            </div>
            <p className="text-[11px] text-[#6B6874] dark:text-[#A39EB8] leading-relaxed font-medium">
              Cek tab Atribut & Perlengkapan untuk mempersiapkan seragam dan barang bawaan wajib.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#251F4A]/60 border border-[#5B2BBE]/10 dark:border-[#5B2BBE]/20 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#5B2BBE] dark:text-[#C39BFF]">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span className="font-display font-bold text-xs">Pantau Jadwal</span>
            </div>
            <p className="text-[11px] text-[#6B6874] dark:text-[#A39EB8] leading-relaxed font-medium">
              Cermati susunan rundown Pra-PKKMB hingga Penutupan di tab Jadwal Kegiatan.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#251F4A]/60 border border-[#5B2BBE]/10 dark:border-[#5B2BBE]/20 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#5B2BBE] dark:text-[#C39BFF]">
              <span className="material-symbols-outlined text-[18px]">help_outline</span>
              <span className="font-display font-bold text-xs">Bantuan & FAQ</span>
            </div>
            <p className="text-[11px] text-[#6B6874] dark:text-[#A39EB8] leading-relaxed font-medium">
              Baca pertanyaan umum terkait pelaksanaan PKKMB di tab FAQ resmi kampus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 3. Main GroupTab Component with Strict Priority Logic:
 * 
 * IF data sedang loading:
 *     tampilkan Skeleton Loading
 * ELSE IF mahasiswa belum memiliki kelompok atau data kelompok null/kosong:
 *     tampilkan Pending State "Kelompok Belum Diumumkan"
 * ELSE:
 *     tampilkan Halaman Kelompok Existing
 */
export const GroupTab: React.FC<GroupTabProps> = ({ 
  groups: propGroups,
  isLoading: propIsLoading = false,
  onRefresh: propOnRefresh,
  onSelectStudent,
  initialStudent,
}) => {
  // Use prop groups if provided (including explicit null/[]), otherwise default to GROUPS_DATA
  const groups = propGroups !== undefined ? propGroups : GROUPS_DATA;
  const [selectedGroupId, setSelectedGroupId] = useState<string>('');
  const [searchMember, setSearchMember] = useState<string>('');
  const [isCheckingRefresh, setIsCheckingRefresh] = useState<boolean>(false);

  // Update selectedGroupId when groups data is available or changes
  useEffect(() => {
    if (groups && groups.length > 0) {
      setSelectedGroupId((prev) => {
        const exists = groups.some((g) => g.id === prev);
        return exists ? prev : groups[0].id;
      });
    }
  }, [groups]);

  useEffect(() => {
    if (!initialStudent) return;
    setSelectedGroupId(initialStudent.groupId);
    setSearchMember(initialStudent.name);
  }, [initialStudent]);

  const handleRefresh = async () => {
    setIsCheckingRefresh(true);
    try {
      if (propOnRefresh) {
        await propOnRefresh();
      } else {
        // Smooth feedback delay if using local check
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
    } finally {
      setIsCheckingRefresh(false);
    }
  };

  // 1. Loading State -> Render Skeleton
  if (propIsLoading) {
    return <GroupTabSkeleton />;
  }

  // 2. Pending / Empty State -> Render GroupPendingState
  if (!groups || groups.length === 0) {
    return (
      <GroupPendingState 
        onRefresh={handleRefresh}
        isChecking={isCheckingRefresh}
      />
    );
  }

  // 3. Populated State -> Render Active Group View
  const currentGroup = groups.find((g) => g.id === selectedGroupId) || groups[0];

  const isSearching = searchMember.trim().length > 0;
  const filteredMembers = (isSearching ? ALL_STUDENTS : currentGroup.members).filter((member) =>
    matchesStudentSearch(member, searchMember)
  );

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">
      
      {/* Header & Group Picker */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-5 sm:p-6 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 text-[#5B2BBE] dark:text-[#C39BFF]">
            <div className="w-10 h-10 rounded-xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">group</span>
            </div>
            <div>
              <h2 className="font-display font-black text-lg sm:text-2xl text-[#22202A] dark:text-white tracking-tight leading-tight">
                Kelompok Orientasi
              </h2>
              <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium hidden sm:block">
                Cari mahasiswa baru atau pilih kelompok untuk melihat mentor dan anggota
              </p>
            </div>
          </div>
          <span className="text-[11px] sm:text-xs bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-3 py-1 rounded-full border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35 shrink-0">
            {groups.length} Kelompok
          </span>
        </div>

        {/* Group Selector Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pt-1">
          {groups.map((grp) => {
            const isSelected = selectedGroupId === grp.id;
            return (
              <button
                key={grp.id}
                onClick={() => setSelectedGroupId(grp.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold border shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white border-[#5B2BBE] dark:border-[#C39BFF] shadow-sm font-bold ring-2 ring-[#5B2BBE]/25 dark:ring-[#C39BFF]/35'
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

      {/* Group Spotlight Details Card - ORVOKS Deep Purple */}
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
            <span className="bg-white/20 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full border border-white/25 font-display">
              {currentGroup.alias}
            </span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            {currentGroup.name}
          </h3>

          {/* Data resmi yang tersedia di workbook */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">school</span>
              </div>
              <div>
                <span className="text-[10px] text-[#EFE9FF] font-bold uppercase tracking-wider block font-display">
                  MENTOR PENDAMPING
                </span>
                <span className="font-bold text-sm sm:text-base text-white block mt-1">
                  {currentGroup.mentor}
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">groups</span>
              </div>
              <div>
                <span className="text-[10px] text-[#EFE9FF] font-bold uppercase tracking-wider block font-display">
                  JUMLAH ANGGOTA
                </span>
                <span className="font-bold text-sm sm:text-base text-white block mt-1">
                  {currentGroup.memberCount} Mahasiswa Baru
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Member Roster List */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-5 sm:p-6 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-[#251F4A] pb-4">
          <div>
            <h4 className="font-display font-bold text-lg text-[#22202A] dark:text-white">
              {isSearching
                ? `Hasil Pencarian (${filteredMembers.length} Mahasiswa)`
                : `Daftar Anggota (${currentGroup.members.length} Mahasiswa)`}
            </h4>
            <p className="text-xs text-[#6B6874] dark:text-[#A39EB8]">
              {isSearching
                ? 'Pencarian mencakup seluruh kelompok berdasarkan data resmi'
                : `Mahasiswa baru terdaftar di ${currentGroup.name}`}
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Cari nama, prodi, atau kelompok..."
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
              onClick={() => {
                setSelectedGroupId(member.groupId);
                setSearchMember('');
                onSelectStudent?.(member);
              }}
              className="p-3.5 rounded-xl border border-[#5B2BBE]/10 dark:border-[#251F4A] bg-white dark:bg-[#251F4A]/60 hover:border-[#5B2BBE]/30 dark:hover:border-[#5B2BBE]/50 hover:shadow-xs transition-all flex items-center justify-between gap-3 cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-white text-xs shrink-0 shadow-xs"
                  style={{ backgroundColor: member.avatarColor }}
                >
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h5 className="font-bold text-xs sm:text-sm text-[#22202A] dark:text-white leading-snug break-words">
                    {member.name}
                  </h5>
                  <p className="text-[11px] text-[#6B6874] dark:text-[#A39EB8] font-medium leading-snug break-words mt-0.5">
                    {member.major}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap mt-1">
                    <span className="text-[9px] bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-1.5 py-0.5 rounded-full border border-[#5B2BBE]/20">
                      {member.groupName} · {member.groupAlias}
                    </span>
                  </div>
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


