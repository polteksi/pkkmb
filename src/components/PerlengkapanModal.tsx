import React from 'react';
import { PERLENGKAPAN_ITEMS } from '../data/orientationData';
import { BrandDecoration } from './BrandDecoration';

interface PerlengkapanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PerlengkapanModal: React.FC<PerlengkapanModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="perlengkapan-modal-title"
    >
      <div
        className="bg-white dark:bg-[#1B1638] rounded-2xl max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header - ORVOKS Primary Purple */}
        <div className="bg-[#5B2BBE] text-white p-5 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] bg-white/20 text-[#EFE9FF] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-display inline-flex items-center gap-1 mb-1">
              <BrandDecoration type="sparkle" size={12} color="#F2B632" />
              Perlengkapan Hari-H
            </span>
            <h3 id="perlengkapan-modal-title" className="font-display font-black text-lg text-white leading-tight">
              Semua {PERLENGKAPAN_ITEMS.length} Item Wajib Bawa
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup Modal"
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shrink-0 ml-2 active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex flex-col gap-2.5 flex-1">
          {PERLENGKAPAN_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="p-3 rounded-xl border border-[#5B2BBE]/10 dark:border-[#251F4A] bg-[#FAF9F6]/90 dark:bg-[#251F4A]/50 flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-lg bg-[#5B2BBE]/10 dark:bg-[#5B2BBE]/30 text-[#5B2BBE] dark:text-[#C39BFF] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs font-display">
                {idx + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-1.5 flex-wrap">
                  <p className="text-xs sm:text-sm font-semibold text-[#22202A] dark:text-[#F3F2F8] leading-snug">
                    {item.text}
                  </p>
                  {item.mandatory ? (
                    <span className="text-[9px] bg-[#5B2BBE]/10 text-[#5B2BBE] dark:text-[#C39BFF] font-bold px-1.5 py-0.5 rounded-full border border-[#5B2BBE]/25 shrink-0">
                      Wajib
                    </span>
                  ) : (
                    <span className="text-[9px] bg-[#2F9672]/10 text-[#2F9672] dark:text-[#4ADE80] font-bold px-1.5 py-0.5 rounded-full border border-[#2F9672]/25 shrink-0">
                      Anjuran
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF9F6] dark:bg-[#151030] border-t border-[#5B2BBE]/10 dark:border-[#251F4A] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="bg-[#5B2BBE] hover:bg-[#43208F] dark:bg-[#5B2BBE] text-white px-5 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-xs active:scale-95"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
