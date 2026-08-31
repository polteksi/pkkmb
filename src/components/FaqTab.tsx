import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/orientationData';
import { BrandDecoration } from './BrandDecoration';

export const FaqTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Categories
  const categories = ['all', 'Umum', 'Hak & Kewajiban', 'Larangan & Sanksi', 'Kesehatan & Teknis'];

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleToggle = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">
      
      {/* Header & Search Banner */}
      <div className="campus-card bg-white dark:bg-[#1B1638] p-6 sm:p-7 border border-[#5B2BBE]/12 dark:border-[#5B2BBE]/25 shadow-xs flex flex-col gap-4 relative overflow-hidden">
        
        <div className="absolute top-4 right-6 opacity-20 pointer-events-none">
          <BrandDecoration type="sparkle" size={24} color="#5B2BBE" />
        </div>

        <div>
          <div className="flex items-center gap-2 text-[#5B2BBE] dark:text-[#C39BFF] mb-1">
            <span className="material-symbols-outlined text-[26px]">help_center</span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-[#22202A] dark:text-white tracking-tight">
              Tanya Jawab & Bantuan (FAQ)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B6874] dark:text-[#A39EB8] font-medium">
            Temukan jawaban cepat mengenai aturan, atribut, jadwal, dan fasilitas selama pelaksanaan PKKMB ORVOKS 2026.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="flex flex-col md:flex-row gap-3 pt-2 border-t border-[#FAF9F6] dark:border-[#251F4A]">
          <div className="relative flex-1">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#6B6874] dark:text-[#A39EB8] text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Cari pertanyaan atau kata kunci (cth: 'parkir', 'name tag')..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenFaqIndex(null);
              }}
              className="w-full bg-[#FAF9F6] dark:bg-[#251F4A] border border-slate-200 dark:border-[#322B60] pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2BBE]/20 dark:focus:ring-[#C39BFF]/30 focus:border-[#5B2BBE] dark:focus:border-[#C39BFF] focus:bg-white dark:focus:bg-[#251F4A] text-[#22202A] dark:text-white placeholder:text-[#6B6874] dark:placeholder:text-[#A39EB8] font-medium transition-all"
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenFaqIndex(null);
                }}
                className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white border-[#5B2BBE] dark:border-[#C39BFF] shadow-xs'
                    : 'bg-[#FAF9F6] dark:bg-[#251F4A] text-[#6B6874] dark:text-[#A39EB8] border-slate-200 dark:border-[#322B60] hover:bg-[#EFE9FF]/60 dark:hover:bg-[#322B60]'
                }`}
              >
                {cat === 'all' ? 'Semua Kategori' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="flex flex-col gap-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={idx}
              className={`campus-card border transition-all overflow-hidden ${
                isOpen 
                  ? 'border-[#5B2BBE]/30 dark:border-[#5B2BBE]/50 shadow-sm bg-white dark:bg-[#1B1638]' 
                  : 'border-[#5B2BBE]/10 dark:border-[#251F4A] bg-white dark:bg-[#1B1638] hover:border-[#5B2BBE]/25 dark:hover:border-[#5B2BBE]/40'
              }`}
            >
              <button
                onClick={() => handleToggle(idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base flex justify-between items-center gap-4 transition-colors cursor-pointer"
              >
                <div className="flex flex-col gap-1.5 pr-2">
                  <span className="text-[10px] bg-[#EFE9FF] dark:bg-[#5B2BBE]/35 text-[#5B2BBE] dark:text-[#C39BFF] px-2.5 py-0.5 rounded-full w-max font-bold">
                    {faq.category}
                  </span>
                  <span className="text-[#22202A] dark:text-white leading-snug font-display font-bold">
                    {faq.question}
                  </span>
                </div>
                
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen 
                      ? 'rotate-180 bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white' 
                      : 'bg-[#FAF9F6] dark:bg-[#251F4A] text-[#6B6874] dark:text-[#A39EB8]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    expand_more
                  </span>
                </span>
              </button>

              {isOpen && (
                <div className="p-4 sm:p-5 bg-[#FAF9F6]/80 dark:bg-[#251F4A]/60 border-t border-[#5B2BBE]/10 dark:border-[#251F4A] text-xs sm:text-sm text-[#22202A] dark:text-[#F3F2F8] font-medium leading-relaxed animate-in slide-in-from-top-2 duration-150">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#5B2BBE] dark:text-[#C39BFF] text-[20px] shrink-0 mt-0.5">
                      info
                    </span>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="campus-card bg-[#FAF9F6] dark:bg-[#1B1638] border border-dashed border-[#5B2BBE]/20 dark:border-[#322B60] p-8 text-center rounded-2xl flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-[40px] text-[#6B6874] dark:text-[#A39EB8]">
              sentiment_dissatisfied
            </span>
            <p className="text-sm font-semibold text-[#22202A] dark:text-white">
              Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchQuery}".
            </p>
            <p className="text-xs text-[#6B6874] dark:text-[#A39EB8]">
              Coba gunakan kata kunci lain seperti 'parkir', 'terlambat', atau 'name tag'.
            </p>
          </div>
        )}
      </div>

      {/* Helpdesk Contact Card */}
      <div className="campus-card bg-[#FAF9F6] dark:bg-[#1B1638] border border-[#5B2BBE]/15 dark:border-[#5B2BBE]/30 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#5B2BBE] dark:bg-[#5B2BBE] text-white flex items-center justify-center shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-[26px]">contact_support</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-[#22202A] dark:text-white leading-snug">
              Belum menemukan jawaban Anda?
            </h3>
            <p className="text-xs text-[#6B6874] dark:text-[#A39EB8] mt-0.5">
              Hubungi mentor pendamping kelompok Anda atau datangi Posko Informasi di Gedung A Lt. 1.
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/6281213399217"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#5B2BBE] hover:bg-[#43208F] dark:hover:bg-[#43208F] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all text-center shrink-0 shadow-xs cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">chat</span>
          <span>Hubungi Helpdesk Panitia</span>
        </a>
      </div>

    </div>
  );
};
