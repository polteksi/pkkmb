import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/orientationData';

export const FaqTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Categories
  const categories = ['all', 'Tata Tertib', 'Atribut', 'Fasilitas'];

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
      <div className="campus-card bg-gradient-to-r from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/90 p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#5b0617] dark:text-[#ff8595] mb-1">
            <span className="material-symbols-outlined text-[26px]">help_center</span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
              Tanya Jawab & Bantuan (FAQ)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            Temukan jawaban cepat mengenai aturan, atribut, jadwal, dan fasilitas selama pelaksanaan PKKMB ORVOKS 2026.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="flex flex-col md:flex-row gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="relative flex-1">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px]">
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
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b0617]/20 dark:focus:ring-[#ff8595]/30 focus:border-[#5b0617] dark:focus:border-[#ff8595] focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium transition-all"
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
                    ? 'bg-[#5b0617] dark:bg-[#7a1f2b] text-white border-[#5b0617] dark:border-[#ff6473] shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
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
                  ? 'border-[#5b0617]/30 dark:border-[#ff8595]/40 shadow-sm bg-white dark:bg-slate-900' 
                  : 'border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => handleToggle(idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base flex justify-between items-center gap-4 transition-colors cursor-pointer"
              >
                <div className="flex flex-col gap-1.5 pr-2">
                  <span className="text-[10px] bg-[#ffdada] dark:bg-[#5b0617] text-[#5b0617] dark:text-[#ffdada] px-2.5 py-0.5 rounded-full w-max font-bold">
                    {faq.category}
                  </span>
                  <span className="text-slate-900 dark:text-white leading-snug font-display font-bold">
                    {faq.question}
                  </span>
                </div>
                
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen 
                      ? 'rotate-180 bg-[#5b0617] dark:bg-[#b02a3e] text-white' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    expand_more
                  </span>
                </span>
              </button>

              {isOpen && (
                <div className="p-4 sm:p-5 bg-slate-50/80 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed animate-in slide-in-from-top-2 duration-150">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#5b0617] dark:text-[#ff8595] text-[20px] shrink-0 mt-0.5">
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
          <div className="campus-card bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center rounded-2xl flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-[40px] text-slate-300 dark:text-slate-600">
              sentiment_dissatisfied
            </span>
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchQuery}".
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Coba gunakan kata kunci lain seperti 'parkir', 'terlambat', atau 'name tag'.
            </p>
          </div>
        )}
      </div>

      {/* Helpdesk Contact Card */}
      <div className="campus-card bg-gradient-to-r from-red-50 via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-red-950/20 border border-red-200/70 dark:border-red-900/40 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#5b0617] dark:bg-[#7a1f2b] text-white flex items-center justify-center shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-[26px]">contact_support</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white leading-snug">
              Belum menemukan jawaban Anda?
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Hubungi mentor pendamping kelompok Anda atau datangi Posko Informasi di Gedung A Lt. 1.
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/6281199887766"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#5b0617] dark:bg-[#b02a3e] hover:bg-[#7a1f2b] dark:hover:bg-[#ff6473] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all text-center shrink-0 shadow-xs cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">chat</span>
          <span>Hubungi Helpdesk Panitia</span>
        </a>
      </div>

    </div>
  );
};
