import React, { useState } from 'react';
import { BrandDecoration } from './BrandDecoration';

interface GuidebookTabProps {
  fileUrl?: string;
  isAvailable?: boolean;
}

export const GuidebookTab: React.FC<GuidebookTabProps> = ({
  fileUrl = '/documents/guidebook-pkkmb-2026.docx',
  isAvailable = true,
}) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [activeAvailable, setActiveAvailable] = useState<boolean>(isAvailable);

  const handleDownload = () => {
    setDownloadStarted(true);
    // Reset notification after 3 seconds
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3500);
  };

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">
      {/* Header Banner */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-5 sm:p-6 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0 border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35 shadow-xs">
            <span className="material-symbols-outlined text-[28px]">menu_book</span>
          </div>
          <div>
            <span className="text-[10px] bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-display inline-flex items-center gap-1 mb-1 border border-[#5B2BBE]/20">
              <BrandDecoration type="sparkle" size={11} color="#5B2BBE" />
              DOKUMEN RESMI
            </span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-[#22202A] dark:text-white tracking-tight leading-tight">
              Guidebook PKKMB POLTEKSI 2026
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6874] dark:text-[#A39EB8] font-medium mt-0.5">
              Unduh panduan lengkap PKKMB POLTEKSI 2026 dalam format dokumen (.docx).
            </p>
          </div>
        </div>

        <span className="text-xs bg-[#FAF9F6] dark:bg-[#251F4A] text-[#6B6874] dark:text-[#A39EB8] font-bold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-[#322B60] w-max shrink-0">
          Format: Microsoft Word (.docx)
        </span>
      </div>

      {activeAvailable ? (
        /* AVAILABLE STATE */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Download Card (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="campus-card bg-white dark:bg-[#1B1638] p-6 sm:p-7 border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30 shadow-xs flex flex-col gap-5 relative overflow-hidden">
              
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#5B2BBE]/5 dark:bg-[#5B2BBE]/15 blur-2xl pointer-events-none" />

              <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-[#4256A6]/10 dark:bg-[#4256A6]/25 text-[#4256A6] dark:text-[#A5B8FF] flex items-center justify-center shrink-0 border border-[#4256A6]/20 shadow-xs">
                    <span className="material-symbols-outlined text-[32px]">description</span>
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#22202A] dark:text-white leading-snug">
                      Buku Panduan Mahasiswa Baru
                    </h3>
                    <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium mt-0.5">
                      ORVOKS 2026 &bull; Politeknik Semen Indonesia
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#2F9672]/15 text-[#2F9672] dark:text-[#4ADE80] px-3 py-1 rounded-full border border-[#2F9672]/30 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F9672] dark:bg-[#4ADE80] animate-ping" />
                  Tersedia
                </span>
              </div>

              {/* Document Meta Information */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#FAF9F6] dark:bg-[#251F4A]/60 border border-[#5B2BBE]/10 dark:border-[#251F4A]">
                <div>
                  <span className="text-[10px] text-[#6B6874] dark:text-[#A39EB8] font-bold uppercase tracking-wider block font-display">
                    Tipe File
                  </span>
                  <span className="text-xs font-bold text-[#22202A] dark:text-white mt-0.5 block">
                    Word (.docx)
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#6B6874] dark:text-[#A39EB8] font-bold uppercase tracking-wider block font-display">
                    Versi Dokumen
                  </span>
                  <span className="text-xs font-bold text-[#22202A] dark:text-white mt-0.5 block">
                    v1.0 (Final)
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-[#6B6874] dark:text-[#A39EB8] font-bold uppercase tracking-wider block font-display">
                    Pembaruan
                  </span>
                  <span className="text-xs font-bold text-[#22202A] dark:text-white mt-0.5 block">
                    Agustus 2026
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#6B6874] dark:text-[#A39EB8] leading-relaxed font-medium">
                Guidebook ini memuat seluruh informasi esensial pelaksanaan PKKMB 2026, mulai dari tata tertib, jadwal kegiatan per hari, ketentuan atribut, penugasan kelompok, hingga denah lokasi kampus.
              </p>

              {/* Download Action Area */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={fileUrl}
                  download="Guidebook-PKKMB-POLTEKSI-2026.docx"
                  onClick={handleDownload}
                  className="flex-1 bg-[#5B2BBE] hover:bg-[#43208F] dark:bg-[#5B2BBE] dark:hover:bg-[#43208F] text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  <span>Unduh Guidebook (.docx)</span>
                </a>
              </div>

              {downloadStarted && (
                <div className="p-3 bg-[#2F9672]/15 border border-[#2F9672]/30 rounded-xl text-xs font-bold text-[#2F9672] dark:text-[#4ADE80] flex items-center gap-2 animate-in fade-in duration-200">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Pengunduhan file Word Guidebook sedang berjalan...</span>
                </div>
              )}
            </div>

            {/* Admin Note for Replacing Static Word Document */}
            <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#251F4A]/50 border border-slate-200 dark:border-[#322B60] flex items-start gap-3">
              <span className="material-symbols-outlined text-[20px] text-[#5B2BBE] dark:text-[#C39BFF] shrink-0 mt-0.5">
                folder_open
              </span>
              <div className="text-xs text-[#6B6874] dark:text-[#A39EB8] leading-relaxed">
                <span className="font-bold text-[#22202A] dark:text-white block mb-0.5">
                  Lokasi Penyimpanan File Guidebook (Statis):
                </span>
                File Word dapat diperbarui kapan saja di direktori <code className="bg-slate-200 dark:bg-black/40 px-1.5 py-0.5 rounded text-[#5B2BBE] dark:text-[#C39BFF] font-mono text-[11px]">public/documents/guidebook-pkkmb-2026.docx</code>.
              </div>
            </div>
          </div>

          {/* Table of Contents / Highlights (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="campus-card bg-white dark:bg-[#1B1638] p-5 sm:p-6 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#5B2BBE] dark:text-[#C39BFF] border-b border-slate-100 dark:border-[#251F4A] pb-3">
                <span className="material-symbols-outlined text-[20px]">list_alt</span>
                <h4 className="font-display font-bold text-sm sm:text-base text-[#22202A] dark:text-white">
                  Daftar Isi Buku Panduan
                </h4>
              </div>

              <div className="flex flex-col gap-2.5">
                {[
                  { num: '01', title: 'Kata Sambutan & Visi Misi Kampus', icon: 'campaign' },
                  { num: '02', title: 'Tata Tertib & Kode Etik Mahasiswa Baru', icon: 'gavel' },
                  { num: '03', title: 'Rundown Lengkap Sesi 5 Hari', icon: 'schedule' },
                  { num: '04', title: 'Ketentuan Dresscode & Atribut Wajib', icon: 'checkroom' },
                  { num: '05', title: 'Penugasan Kelompok & Esai Vokasi', icon: 'assignment' },
                  { num: '06', title: 'Peta Kampus & Fasilitas Penunjang', icon: 'map' },
                  { num: '07', title: 'Kontak Darurat & Hotline Panitia', icon: 'contact_phone' },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="p-2.5 rounded-xl border border-[#5B2BBE]/8 dark:border-[#251F4A] bg-[#FAF9F6]/80 dark:bg-[#251F4A]/40 flex items-center gap-3"
                  >
                    <span className="text-[11px] font-mono font-bold text-[#5B2BBE] dark:text-[#C39BFF] bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 px-2 py-0.5 rounded-lg shrink-0">
                      {item.num}
                    </span>
                    <span className="text-xs font-semibold text-[#22202A] dark:text-[#F3F2F8] flex-1">
                      {item.title}
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-slate-400 dark:text-[#6B6874]">
                      {item.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      ) : (
        /* PENDING STATE (If Guidebook file not yet released) */
        <div className="campus-card bg-white dark:bg-[#1B1638] border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30 p-8 sm:p-12 rounded-2xl shadow-xs text-center flex flex-col items-center gap-5 relative overflow-hidden">
          {/* Subtle ambient glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#5B2BBE]/5 dark:bg-[#5B2BBE]/15 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#F2B632]/5 dark:bg-[#F2B632]/10 blur-2xl pointer-events-none" />

          {/* Dual Material Symbols Icon Container */}
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shadow-xs border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/35">
              <span className="material-symbols-outlined text-[36px] sm:text-[42px]">menu_book</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F2B632] text-[#22202A] flex items-center justify-center shadow-sm border-2 border-white dark:border-[#1B1638]">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">pending</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex flex-col items-center gap-2 max-w-lg">
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#22202A] dark:text-white tracking-tight">
              Guidebook Belum Tersedia
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6874] dark:text-[#A39EB8] leading-relaxed font-medium">
              Buku panduan resmi PKKMB POLTEKSI 2026 sedang dalam proses penyusunan dan pengesahan akhir oleh panitia.
            </p>
          </div>

          {/* Status Box */}
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
                  Menunggu Rilis Resmi Panitia
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[#F2B632]/15 text-[#B88109] dark:text-[#FCD34D] px-2.5 py-1 rounded-full border border-[#F2B632]/30 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B632] animate-ping" />
              Pending
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-[#6B6874] dark:text-[#A39EB8] max-w-lg leading-relaxed text-center font-medium">
            Tautan unduhan file Word (.docx) akan langsung aktif secara otomatis setelah dokumen dipublikasikan.
          </p>

          <button
            disabled
            className="mt-1 bg-slate-200 dark:bg-[#251F4A] text-slate-400 dark:text-slate-500 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-not-allowed flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">file_download_off</span>
            <span>Guidebook Belum Tersedia</span>
          </button>
        </div>
      )}
    </div>
  );
};
