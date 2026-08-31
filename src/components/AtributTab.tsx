import React, { useState, useEffect } from 'react';
import { PERLENGKAPAN_ITEMS, DRESSCODE_DATA } from '../data/orientationData';
import { BrandDecoration } from './BrandDecoration';

export const AtributTab: React.FC = () => {
  const [activeDresscodeIdx, setActiveDresscodeIdx] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);

  const activeDresscode = DRESSCODE_DATA[activeDresscodeIdx];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (showImageModal) setShowImageModal(false);
    };
    if (showImageModal) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showImageModal]);

  const renderItemList = (items: string[], icon: string = 'check_small', iconColor: string = 'text-[#5B2BBE] dark:text-[#C39BFF]') => (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <span className={`material-symbols-outlined text-[15px] ${iconColor} shrink-0 mt-0.5`}>
            {icon}
          </span>
          <p className="text-xs sm:text-sm text-[#22202A] dark:text-[#F3F2F8] font-medium leading-snug whitespace-pre-line">
            {item}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">

      {/* Header Banner */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-6 sm:p-7 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex flex-col gap-2 relative overflow-hidden">
        <div className="absolute top-4 right-6 opacity-20 pointer-events-none">
          <BrandDecoration type="starburst" size={28} color="#5B2BBE" secondaryColor="#F2B632" />
        </div>
        <div className="flex items-center gap-2 text-[#5B2BBE] dark:text-[#C39BFF] relative z-10">
          <span className="material-symbols-outlined text-[26px]">checkroom</span>
          <h2 className="font-display font-black text-xl sm:text-2xl text-[#22202A] dark:text-white tracking-tight">
            Atribut & Perlengkapan PKKMB
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#6B6874] dark:text-[#A39EB8] font-medium relative z-10">
          Perlengkapan wajib bawa (Poin A) dan ketentuan dresscode per hari (Poin B) untuk seluruh rangkaian ORVOKS POLTEKSI 2026.
        </p>
      </div>

      {/* ═══ POIN A: PERLENGKAPAN HARI-H ══════════════════════════════════ */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#5B2BBE] text-white flex items-center justify-center shrink-0 font-display font-black text-sm shadow-xs">
            A
          </div>
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#22202A] dark:text-white leading-tight">
              Perlengkapan Hari-H
            </h3>
            <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium">
              Pastikan semua item terbawa setiap hari kegiatan berlangsung.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {PERLENGKAPAN_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="campus-card bg-white dark:bg-[#1B1638] p-4 border border-[#5B2BBE]/10 dark:border-[#5B2BBE]/25 flex items-start gap-3 shadow-xs transition-all hover:border-[#5B2BBE]/25 dark:hover:border-[#5B2BBE]/40"
            >
              <div className="w-8 h-8 rounded-xl bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0 font-display font-black text-xs border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30">
                {idx + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-1.5 flex-wrap">
                  <p className="text-xs sm:text-sm font-semibold text-[#22202A] dark:text-[#F3F2F8] leading-snug flex-1">
                    {item.text}
                  </p>
                  {item.mandatory ? (
                    <span className="text-[9px] bg-[#5B2BBE]/10 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-1.5 py-0.5 rounded-full border border-[#5B2BBE]/25 shrink-0">
                      Wajib
                    </span>
                  ) : (
                    <span className="text-[9px] bg-[#2F9672]/10 text-[#2F9672] dark:text-[#4ADE80] font-bold px-1.5 py-0.5 rounded-full border border-[#2F9672]/20 shrink-0">
                      Anjuran
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 px-1 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] bg-[#5B2BBE]/10 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-2 py-0.5 rounded-full border border-[#5B2BBE]/25">Wajib</span>
            <span className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium">Harus dibawa, akan diperiksa panitia</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] bg-[#2F9672]/10 text-[#2F9672] dark:text-[#4ADE80] font-bold px-2 py-0.5 rounded-full border border-[#2F9672]/20">Anjuran</span>
            <span className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium">Sangat disarankan untuk kenyamanan</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#5B2BBE]/20 dark:to-[#5B2BBE]/30" />
        <span className="text-xs font-bold text-[#6B6874] dark:text-[#A39EB8] uppercase tracking-wider font-display shrink-0">
          Ketentuan Pakaian
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#5B2BBE]/20 dark:to-[#5B2BBE]/30" />
      </div>

      {/* ═══ POIN B: DRESSCODE PER HARI ═══════════════════════════════════ */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#5B2BBE] text-white flex items-center justify-center shrink-0 font-display font-black text-sm shadow-xs">
            B
          </div>
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#22202A] dark:text-white leading-tight">
              Dresscode per Hari
            </h3>
            <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium">
              Pilih hari untuk melihat ketentuan pakaian putra & putri.
            </p>
          </div>
        </div>

        {/* Day Tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {DRESSCODE_DATA.map((dc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDresscodeIdx(idx)}
              className={`flex flex-col items-center px-3.5 py-2 rounded-xl border transition-all cursor-pointer shrink-0 ${
                activeDresscodeIdx === idx
                  ? 'bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white border-[#5B2BBE] dark:border-[#C39BFF] shadow-sm font-bold'
                  : 'bg-white dark:bg-[#1B1638] text-[#6B6874] dark:text-[#A39EB8] border-slate-200 dark:border-[#251F4A] hover:bg-[#EFE9FF]/60 dark:hover:bg-[#251F4A]/70 font-medium'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider leading-none">
                {dc.label}
              </span>
              <span className="text-[11px] font-semibold mt-0.5 leading-none">
                {dc.tanggal.split(',')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Dresscode Detail */}
        <div className="campus-card bg-white dark:bg-[#1B1638] border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/30 overflow-hidden shadow-xs">
          {/* Card Header */}
          <div className="bg-[#5B2BBE]/8 dark:bg-[#5B2BBE]/15 border-b border-[#5B2BBE]/15 dark:border-[#5B2BBE]/25 p-4 flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold text-[#5B2BBE] dark:text-[#C39BFF] uppercase tracking-wider font-display">
                {activeDresscode.label}
              </span>
              <h4 className="font-display font-bold text-base text-[#22202A] dark:text-white mt-0.5">
                {activeDresscode.tanggal}
              </h4>
            </div>
            <span className="material-symbols-outlined text-[28px] text-[#5B2BBE] dark:text-[#C39BFF] opacity-60">
              checkroom
            </span>
          </div>

          {/* Lihat Contoh Dresscode Button */}
          <div className="p-4 border-b border-[#5B2BBE]/10 dark:border-[#251F4A] text-center">
            <button
              onClick={() => setShowImageModal(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#5B2BBE] dark:bg-[#5B2BBE] hover:bg-[#43208F] dark:hover:bg-[#7D3BD6] text-white font-bold text-sm py-3 px-6 rounded-xl transition-all shadow-xs cursor-pointer active:scale-98"
            >
              <span className="material-symbols-outlined text-[20px]">visibility</span>
              <span>👁 Lihat Contoh Dresscode</span>
            </button>
          </div>

          {/* Putra & Putri columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#5B2BBE]/8 dark:divide-[#251F4A]">
            {/* Putra */}
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#4256A6]/10 dark:bg-[#4256A6]/25 text-[#4256A6] dark:text-[#A5B8FF] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">man</span>
                </div>
                <span className="font-display font-bold text-sm text-[#4256A6] dark:text-[#A5B8FF] uppercase tracking-wider">
                  Putra
                </span>
              </div>
              {renderItemList(activeDresscode.putra, 'check_small', 'text-[#4256A6] dark:text-[#A5B8FF]')}
            </div>

            {/* Putri */}
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/25 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">woman</span>
                </div>
                <span className="font-display font-bold text-sm text-[#5B2BBE] dark:text-[#C39BFF] uppercase tracking-wider">
                  Putri
                </span>
              </div>
              {renderItemList(activeDresscode.putri, 'check_small', 'text-[#5B2BBE] dark:text-[#C39BFF]')}
            </div>
          </div>

          {/* Wajib Membawa Section */}
          {activeDresscode.wajibMembawa && activeDresscode.wajibMembawa.length > 0 && (
            <div className="p-4 border-t border-[#5B2BBE]/10 dark:border-[#251F4A] border-l-4 border-l-[#F2B632]">
              <div className="flex items-center gap-2 mb-2.5 text-[#B88109] dark:text-[#FCD34D]">
                <span className="material-symbols-outlined text-[16px]">assignment</span>
                <h5 className="font-display font-bold text-sm uppercase tracking-wider">
                  Wajib Membawa
                </h5>
              </div>
              {renderItemList(activeDresscode.wajibMembawa, 'folder_open', 'text-[#6B6874] dark:text-[#A39EB8]')}
            </div>
          )}

          {/* Membawa Ganti Section */}
          {activeDresscode.membawaGanti && activeDresscode.membawaGanti.length > 0 && (
            <div className="p-4 border-t border-[#5B2BBE]/10 dark:border-[#251F4A] border-l-4 border-l-[#5B2BBE]">
              <div className="flex items-center gap-2 mb-2.5 text-[#5B2BBE] dark:text-[#C39BFF]">
                <span className="material-symbols-outlined text-[16px]">local_florist</span>
                <h5 className="font-display font-bold text-sm uppercase tracking-wider">
                  Membawa Ganti
                </h5>
              </div>
              {renderItemList(activeDresscode.membawaGanti, 'check_circle', 'text-[#6B6874] dark:text-[#A39EB8]')}
            </div>
          )}

          {/* Catatan Khusus Section */}
          {activeDresscode.catatan && (
            <div className="mx-4 my-4 p-3.5 bg-[#F2B632]/10 dark:bg-[#F2B632]/15 border border-[#F2B632]/30 dark:border-[#F2B632]/30 rounded-xl flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[18px] text-[#B88109] dark:text-[#FCD34D] shrink-0 mt-0.5">
                info
              </span>
              <p className="text-xs sm:text-sm text-[#22202A] dark:text-[#F3F2F8] font-medium leading-relaxed whitespace-pre-line">
                {activeDresscode.catatan}
              </p>
            </div>
          )}
        </div>

        {/* Catatan umum rambut/penampilan */}
        <div className="campus-card bg-[#5B2BBE]/5 dark:bg-[#5B2BBE]/10 border border-[#5B2BBE]/20 dark:border-[#5B2BBE]/30 p-4 rounded-2xl flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#5B2BBE] dark:text-[#C39BFF]">info</span>
            <h5 className="font-display font-bold text-sm text-[#22202A] dark:text-white">Ketentuan Rambut & Penampilan</h5>
          </div>
          <div className="flex flex-col gap-1.5 pl-6">
            <p className="text-xs text-[#22202A] dark:text-[#F3F2F8] font-medium leading-relaxed">
              <strong>Putra:</strong> Rambut rapi model 3-2-1 cm, warna hitam alami.
            </p>
            <p className="text-xs text-[#22202A] dark:text-[#F3F2F8] font-medium leading-relaxed">
              <strong>Putri berkerudung:</strong> Kerudung rapi sesuai ketentuan warna dresscode.
            </p>
            <p className="text-xs text-[#22202A] dark:text-[#F3F2F8] font-medium leading-relaxed">
              <strong>Putri tidak berkerudung:</strong> Rambut diikat kuncir kuda, tidak diwarnai.
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal / Lightbox */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowImageModal(false);
          }}
        >
           <div
            className="relative bg-white dark:bg-[#1B1638] rounded-2xl overflow-hidden shadow-2xl border border-[#5B2BBE]/20 max-w-5xl w-full max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="bg-[#5B2BBE]/8 dark:bg-[#5B2BBE]/15 border-b border-[#5B2BBE]/15 dark:border-[#5B2BBE]/25 p-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-black text-lg text-[#22202A] dark:text-white">
                  Contoh Dresscode
                </h3>
                <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium">
                  {activeDresscode.label} - {activeDresscode.tanggal}
                </p>
              </div>
              <button
                onClick={() => setShowImageModal(false)}
                className="w-8 h-8 rounded-full bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] hover:bg-[#5B2BBE]/20 dark:hover:bg-[#5B2BBE]/40 flex items-center justify-center transition-all cursor-pointer shrink-0"
                aria-label="Tutup"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Body - Image */}
            <div className="p-4 overflow-y-auto flex justify-center bg-[#FAF9F6] dark:bg-[#1B1638]">
              {activeDresscode.image ? (
                <img
                  src={activeDresscode.image}
                  alt={`Contoh dresscode ${activeDresscode.label}`}
                  className="max-w-full h-auto object-contain rounded-xl border border-[#5B2BBE]/10 dark:border-[#5B2BBE]/25 shadow-xs"
                  style={{ maxHeight: 'calc(90vh - 120px)' }}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const parent = img.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="text-center py-8 text-[#6B6874] dark:text-[#A39EB8]"><span class="material-symbols-outlined text-[48px] mb-2 block">image_broken</span><p class="text-sm">Contoh gambar dresscode belum tersedia.</p></div>';
                    }
                  }}
                />
              ) : (
                <div className="text-center py-8 text-[#6B6874] dark:text-[#A39EB8]">
                  <span className="material-symbols-outlined text-[48px] mb-2 block">image_broken</span>
                  <p className="text-sm">Contoh gambar dresscode belum tersedia.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
