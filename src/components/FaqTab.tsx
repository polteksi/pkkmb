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
    <div className="flex flex-col gap-6 pb-8">
      {/* Header */}
      <div className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-5">
        <div className="flex items-center gap-2.5 text-[#5b0617] mb-2">
          <span className="material-symbols-outlined text-[28px]">help_center</span>
          <h2 className="font-display font-black text-[22px] text-[#191c1d] tracking-tight">
            Tanya Jawab & Bantuan (FAQ)
          </h2>
        </div>
        <p className="text-sm text-[#564242] leading-relaxed font-semibold">
          Temukan jawaban cepat mengenai aturan, atribut, jadwal, dan fasilitas selama pelaksanaan PKKMB ORVOKS 2026.
        </p>

        {/* Search & Category Layout */}
        <div className="mt-5 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#897172] text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Cari pertanyaan atau kata kunci..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenFaqIndex(null); // Close active ones on type
              }}
              className="w-full bg-white border-2 border-[#191c1d] pl-10 pr-4 py-2.5 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#5b0617] placeholder:text-[#897172] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-medium"
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto py-1 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenFaqIndex(null);
                }}
                className={`px-3.5 py-2 text-xs font-bold rounded border-2 transition-all shrink-0 capitalize ${
                  selectedCategory === cat
                    ? 'bg-[#5b0617] text-white border-[#191c1d] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-[#191c1d] border-[#191c1d] hover:bg-[#e7e8e9]'
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
              className={`border-2 border-[#191c1d] rounded-lg overflow-hidden bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
                isOpen ? 'bg-[#fcfdfe]' : 'hover:bg-[#fcfcfc]'
              }`}
            >
              <button
                onClick={() => handleToggle(idx)}
                className="w-full p-4 text-left font-bold text-sm sm:text-base flex justify-between items-center gap-3 transition-colors hover:bg-[#fcfdfe]"
              >
                <div className="flex flex-col gap-1 pr-2">
                  <span className="text-[10px] bg-[#ffdada] text-[#5b0617] px-2 py-0.5 rounded border border-[#191c1d] w-max font-bold">
                    {faq.category}
                  </span>
                  <span className="text-[#191c1d] mt-1 leading-snug">{faq.question}</span>
                </div>
                <span
                  className={`w-7 h-7 bg-[#ffdada] text-[#5b0617] border-2 border-[#191c1d] rounded flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-[#5b0617] text-white' : ''
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    keyboard_arrow_down
                  </span>
                </span>
              </button>
              {isOpen && (
                <div className="p-4 bg-[#f3f4f5] border-t-2 border-[#191c1d] text-xs sm:text-sm text-[#191c1d] font-medium leading-relaxed animate-in slide-in-from-top-2 duration-150">
                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-[#5b0617] text-[18px] shrink-0 mt-0.5">
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
          <div className="text-center py-10 bg-[#f8f9fa] border-2 border-dashed border-[#897172]/40 rounded-lg">
            <span className="material-symbols-outlined text-[48px] text-[#897172]/60 mb-2">
              sentiment_dissatisfied
            </span>
            <p className="text-sm font-semibold text-[#897172]">
              Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchQuery}".
            </p>
            <p className="text-xs text-[#897172]/80 mt-1">
              Coba gunakan kata kunci lain seperti 'parkir', 'terlambat', atau 'name tag'.
            </p>
          </div>
        )}
      </div>

      {/* Help Section Card */}
      <div className="bg-[#ffdada] border-2 border-[#191c1d] neu-shadow rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-white border-2 border-[#191c1d] rounded-lg flex items-center justify-center text-[#5b0617] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
            <span className="material-symbols-outlined text-[28px]">contact_support</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-[#5b0617] leading-snug">
              Belum menemukan jawaban Anda?
            </h3>
            <p className="text-xs text-[#564242] mt-0.5">
              Hubungi mentor pendamping kelompok Anda atau datangi Posko Informasi di Gedung A Lt. 1.
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/6281199887766"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#191c1d] border-2 border-[#191c1d] font-bold text-xs px-4 py-2.5 rounded-md hover:bg-[#e7e8e9] transition-all text-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
        >
          Hubungi Helpdesk Panitia
        </a>
      </div>
    </div>
  );
};
