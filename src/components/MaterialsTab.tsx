import React, { useMemo, useState } from 'react';
import { BrandDecoration } from './BrandDecoration';

type MaterialKind = 'pdf' | 'presentation' | 'document' | 'video';

interface MaterialFile {
  name: string;
  url: string;
  size: string;
  kind: MaterialKind;
}

interface MaterialTopic {
  title: string;
  files: MaterialFile[];
}

interface MaterialDay {
  id: string;
  label: string;
  shortLabel: string;
  topics: MaterialTopic[];
}

const MATERIAL_DAYS: MaterialDay[] = [
  {
    id: 'pra-pkkmb-1',
    label: 'Pra-PKKMB Hari 1',
    shortLabel: 'Pra 1',
    topics: [
      {
        title: 'Akademik',
        files: [
          { name: 'Materi Pak Basyir', url: '/materi/pra%20pkkmb%201/Akademik/materi%20pak%20basyir%20(1)-dikompresi.pdf', size: '6,4 MB', kind: 'pdf' },
          { name: 'Panduan SIAKAD', url: '/materi/pra%20pkkmb%201/Akademik/siakad%20(1).mp4', size: '4,4 MB', kind: 'video' },
        ],
      },
      {
        title: 'Keuangan',
        files: [
          { name: 'Materi Keuangan', url: '/materi/pra%20pkkmb%201/keuangan/kauangan%20baru.pptx', size: '7,6 MB', kind: 'presentation' },
          { name: 'Cara Bayar Kuliah melalui BSI', url: '/materi/pra%20pkkmb%201/keuangan/Cara%20Bayar%20Kuliah%20Melalui%20Bank%20Syariah%20Indonesia_%20BSI%20Mobile,%20ATM,%20Transfer%20dan%20Teller%20Bank%20(1).mp4', size: '12,9 MB', kind: 'video' },
          { name: 'Cara Bayar melalui Tokopedia', url: '/materi/pra%20pkkmb%201/keuangan/tokped.mp4', size: '5,6 MB', kind: 'video' },
        ],
      },
    ],
  },
  {
    id: 'pra-pkkmb-2',
    label: 'Pra-PKKMB Hari 2',
    shortLabel: 'Pra 2',
    topics: [
      {
        title: 'Kemahasiswaan',
        files: [
          { name: 'Materi Kemahasiswaan', url: '/materi/pra%20pkkmb%202/kemahasiswaan/KEMAHASISWAAN.pdf', size: '11,6 MB', kind: 'pdf' },
        ],
      },
      {
        title: 'Pakta Integritas',
        files: [
          { name: 'Materi Pakta Integritas', url: '/materi/pra%20pkkmb%202/pakta%20integritas/Materi%20PAKTA%20INTEGRITAS.pptx', size: '860 KB', kind: 'presentation' },
          { name: 'Dokumen Pakta Integritas', url: '/materi/pra%20pkkmb%202/pakta%20integritas/Pakta%20Integritas.docx', size: '17 KB', kind: 'document' },
        ],
      },
    ],
  },
  { id: 'pkkmb-1', label: 'PKKMB Hari 1', shortLabel: 'PKKMB 1', topics: [] },
  { id: 'pkkmb-2', label: 'PKKMB Hari 2', shortLabel: 'PKKMB 2', topics: [] },
  { id: 'pkkmb-3', label: 'PKKMB Hari 3', shortLabel: 'PKKMB 3', topics: [] },
  { id: 'pkkmb-4', label: 'PKKMB Hari 4', shortLabel: 'PKKMB 4', topics: [] },
  { id: 'pkkmb-5', label: 'PKKMB Hari 5', shortLabel: 'PKKMB 5', topics: [] },
];

const KIND_META: Record<MaterialKind, { label: string; icon: string; color: string }> = {
  pdf: { label: 'PDF', icon: 'picture_as_pdf', color: 'bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-300' },
  presentation: { label: 'PPTX', icon: 'slideshow', color: 'bg-orange-50 text-orange-600 dark:bg-orange-500/15 dark:text-orange-300' },
  document: { label: 'DOCX', icon: 'description', color: 'bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300' },
  video: { label: 'VIDEO', icon: 'play_circle', color: 'bg-purple-50 text-[#5B2BBE] dark:bg-[#5B2BBE]/25 dark:text-[#D9BCFF]' },
};

export const MaterialsTab: React.FC = () => {
  const [activeDayId, setActiveDayId] = useState(MATERIAL_DAYS[0].id);
  const activeDay = useMemo(
    () => MATERIAL_DAYS.find((day) => day.id === activeDayId) ?? MATERIAL_DAYS[0],
    [activeDayId],
  );
  const fileCount = activeDay.topics.reduce((total, topic) => total + topic.files.length, 0);

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">
      <section className="campus-card relative overflow-hidden border border-[#5B2BBE]/12 bg-white p-5 shadow-xs sm:p-7 dark:border-[#5B2BBE]/25 dark:bg-[#1B1638]">
        <div className="pointer-events-none absolute right-6 top-5 opacity-20">
          <BrandDecoration type="sparkle" size={28} color="#5B2BBE" />
        </div>
        <div className="relative z-10 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5B2BBE]/10 text-[#5B2BBE] dark:bg-[#5B2BBE]/30 dark:text-[#C39BFF]">
            <span className="material-symbols-outlined text-[25px]">school</span>
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-xl font-black tracking-tight text-[#22202A] sm:text-2xl dark:text-white">
              Materi ORVOKS 2026
            </h2>
            <p className="mt-1 max-w-2xl text-xs font-medium leading-relaxed text-[#6B6874] sm:text-sm dark:text-[#A39EB8]">
              Pelajari kembali materi dari pemateri setiap hari dan unduh file untuk dibaca secara offline.
            </p>
          </div>
        </div>
      </section>

      <section className="campus-card flex flex-col gap-5 border border-[#5B2BBE]/12 bg-white p-4 shadow-xs sm:p-6 dark:border-[#5B2BBE]/25 dark:bg-[#1B1638]">
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar" aria-label="Pilih hari materi">
          {MATERIAL_DAYS.map((day) => {
            const isActive = day.id === activeDay.id;
            return (
              <button
                key={day.id}
                type="button"
                onClick={() => setActiveDayId(day.id)}
                className={`min-h-10 shrink-0 rounded-xl border px-4 py-2 text-xs font-bold transition-all active:scale-95 ${
                  isActive
                    ? 'border-[#5B2BBE] bg-[#5B2BBE] text-white shadow-sm ring-2 ring-[#5B2BBE]/20'
                    : 'border-[#5B2BBE]/15 bg-[#FAF9F6] text-[#22202A] hover:border-[#5B2BBE]/35 hover:text-[#5B2BBE] dark:border-[#322B60] dark:bg-[#251F4A] dark:text-[#F3F2F8] dark:hover:text-[#C39BFF]'
                }`}
                aria-pressed={isActive}
              >
                <span className="sm:hidden">{day.shortLabel}</span>
                <span className="hidden sm:inline">{day.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-end sm:justify-between dark:border-[#251F4A]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B2BBE] dark:text-[#C39BFF]">Bahan pembelajaran</span>
            <h3 className="font-display text-lg font-black text-[#22202A] sm:text-xl dark:text-white">{activeDay.label}</h3>
          </div>
          <span className="w-fit rounded-full bg-[#5B2BBE]/10 px-3 py-1 text-[11px] font-bold text-[#5B2BBE] dark:bg-[#5B2BBE]/25 dark:text-[#D9BCFF]">
            {fileCount > 0 ? `${fileCount} materi tersedia` : 'Belum tersedia'}
          </span>
        </div>

        {fileCount === 0 ? (
          <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-[#5B2BBE]/25 bg-[#FAF9F6] px-5 py-10 text-center dark:border-[#5B2BBE]/35 dark:bg-[#251F4A]/55">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B2BBE]/10 text-[#5B2BBE] dark:bg-[#5B2BBE]/25 dark:text-[#C39BFF]">
              <span className="material-symbols-outlined text-[30px]">folder_off</span>
            </div>
            <h4 className="font-display text-base font-black text-[#22202A] dark:text-white">Materi belum tersedia</h4>
            <p className="mt-1 max-w-sm text-xs font-medium leading-relaxed text-[#6B6874] dark:text-[#A39EB8]">
              Materi untuk hari ini akan ditampilkan setelah selesai disampaikan oleh pemateri.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {activeDay.topics.map((topic) => (
              <section key={topic.title} className="overflow-hidden rounded-2xl border border-[#5B2BBE]/12 bg-[#FAF9F6] dark:border-[#322B60] dark:bg-[#251F4A]/65">
                <div className="flex items-center gap-3 border-b border-[#5B2BBE]/10 bg-white px-4 py-3 dark:border-[#322B60] dark:bg-[#251F4A]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5B2BBE]/10 text-[#5B2BBE] dark:bg-[#5B2BBE]/25 dark:text-[#C39BFF]">
                    <span className="material-symbols-outlined text-[20px]">topic</span>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-black text-[#22202A] dark:text-white">{topic.title}</h4>
                    <p className="text-[10px] font-semibold text-[#6B6874] dark:text-[#A39EB8]">{topic.files.length} file materi</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-3 sm:p-4">
                  {topic.files.map((file) => {
                    const meta = KIND_META[file.kind];
                    return (
                      <article key={file.url} className="overflow-hidden rounded-xl border border-[#5B2BBE]/10 bg-white shadow-2xs dark:border-[#322B60] dark:bg-[#1B1638]">
                        {file.kind === 'video' && (
                          <video controls preload="metadata" className="aspect-video w-full bg-black object-contain" aria-label={file.name}>
                            <source src={file.url} type="video/mp4" />
                            Browser Anda tidak mendukung pemutar video.
                          </video>
                        )}
                        <div className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center">
                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${meta.color}`}>
                            <span className="material-symbols-outlined text-[24px]">{meta.icon}</span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="line-clamp-2 text-sm font-bold leading-snug text-[#22202A] dark:text-white">{file.name}</p>
                            <div className="mt-1 flex items-center gap-2 text-[10px] font-bold text-[#6B6874] dark:text-[#A39EB8]">
                              <span>{meta.label}</span><span aria-hidden="true">•</span><span>{file.size}</span>
                            </div>
                          </div>
                          <div className="flex shrink-0 gap-2">
                            {file.kind === 'pdf' && (
                              <a
                                href={file.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#5B2BBE]/20 bg-white px-3 text-xs font-bold text-[#5B2BBE] transition-all hover:bg-[#5B2BBE]/5 active:scale-95 dark:bg-[#251F4A] dark:text-[#D9BCFF] sm:flex-none"
                              >
                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                <span>Lihat PDF</span>
                              </a>
                            )}
                            <a
                              href={file.url}
                              download
                              className="flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#5B2BBE] px-3 text-xs font-bold text-white transition-all hover:bg-[#43208F] active:scale-95 sm:flex-none"
                            >
                              <span className="material-symbols-outlined text-[18px]">download</span>
                              <span>Unduh</span>
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
