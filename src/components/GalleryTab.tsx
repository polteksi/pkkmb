import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { BrandDecoration } from './BrandDecoration';

const GOOGLE_DRIVE_GALLERY_URL = 'https://drive.google.com/drive/folders/1JgRi1w24SbyDuVJ3xwEUb1pyzCDKBzc';
const PLACEHOLDER_IMAGE = '/gallery/placeholder.webp';

interface GalleryImage {
  id: string;
  day: number;
  number: number;
  src: string;
  alt: string;
}

const DAY_LABELS = [
  'Pra-PKKMB Hari 1',
  'Pra-PKKMB Hari 2',
  'PKKMB Hari 1',
  'PKKMB Hari 2',
  'PKKMB Hari 3',
  'PKKMB Hari 4',
  'PKKMB Hari 5',
];

const PRA_PKKMB_DAY_2_IMAGES = [
  '/gallery/pra%20pkkmb%202/IMG_4364-01.jpeg',
  '/gallery/pra%20pkkmb%202/IMG_4400%20(1)-01.jpeg',
  '/gallery/pra%20pkkmb%202/IMG_4439-01.jpeg',
  '/gallery/pra%20pkkmb%202/IMG_4472-01.jpeg',
];

const GALLERY_DAYS = Array.from({ length: 7 }, (_, dayIndex) => {
  const day = dayIndex + 1;
  return {
    day,
    label: DAY_LABELS[dayIndex],
    images: Array.from({ length: 4 }, (_, imageIndex): GalleryImage => ({
      id: `day-${day}-image-${imageIndex + 1}`,
      day,
      number: imageIndex + 1,
      src: day === 2 ? PRA_PKKMB_DAY_2_IMAGES[imageIndex] : PLACEHOLDER_IMAGE,
      alt: `Dokumentasi ${DAY_LABELS[dayIndex]}, foto ${imageIndex + 1}`,
    })),
  };
});

export const GalleryTab: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const currentGallery = useMemo(
    () => GALLERY_DAYS.find((gallery) => gallery.day === activeDay) ?? GALLERY_DAYS[0],
    [activeDay],
  );

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="tab-fade-in flex flex-col gap-6 pb-8">
      <section className="campus-card relative overflow-hidden border border-[#5B2BBE]/12 bg-white p-5 shadow-xs sm:p-7 dark:border-[#5B2BBE]/25 dark:bg-[#1B1638]">
        <div className="pointer-events-none absolute right-6 top-5 opacity-20">
          <BrandDecoration type="sparkle" size={26} color="#5B2BBE" />
        </div>
        <div className="relative z-10 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5B2BBE]/10 text-[#5B2BBE] dark:bg-[#5B2BBE]/30 dark:text-[#C39BFF]">
            <span className="material-symbols-outlined text-[25px]">photo_library</span>
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-xl font-black tracking-tight text-[#22202A] sm:text-2xl dark:text-white">
              Galeri ORVOKS 2026
            </h2>
          </div>
        </div>
      </section>

      <section className="campus-card flex flex-col gap-5 border border-[#5B2BBE]/12 bg-white p-4 shadow-xs sm:p-6 dark:border-[#5B2BBE]/25 dark:bg-[#1B1638]">
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar" aria-label="Pilih hari galeri">
          {GALLERY_DAYS.map((gallery) => {
            const isActive = gallery.day === activeDay;
            return (
              <button
                key={gallery.day}
                type="button"
                onClick={() => setActiveDay(gallery.day)}
                className={`min-h-10 shrink-0 rounded-xl border px-4 py-2 text-xs font-bold transition-all active:scale-95 ${
                  isActive
                    ? 'border-[#5B2BBE] bg-[#5B2BBE] text-white shadow-sm ring-2 ring-[#5B2BBE]/20'
                    : 'border-[#5B2BBE]/15 bg-[#FAF9F6] text-[#22202A] hover:border-[#5B2BBE]/35 hover:text-[#5B2BBE] dark:border-[#322B60] dark:bg-[#251F4A] dark:text-[#F3F2F8] dark:hover:text-[#C39BFF]'
                }`}
                aria-pressed={isActive}
              >
                {gallery.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-1 border-b border-slate-100 pb-4 dark:border-[#251F4A] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B2BBE] dark:text-[#C39BFF]">
              Dokumentasi Kegiatan
            </span>
            <h3 className="font-display text-lg font-black text-[#22202A] sm:text-xl dark:text-white">
              {currentGallery.label}
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#6B6874] dark:text-[#A39EB8]">4 foto landscape</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {currentGallery.images.map((image) => (
            <article
              key={image.id}
              className="group overflow-hidden rounded-2xl border border-[#5B2BBE]/12 bg-[#FAF9F6] shadow-xs transition-all hover:-translate-y-0.5 hover:border-[#5B2BBE]/30 hover:shadow-md dark:border-[#322B60] dark:bg-[#251F4A]/70"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(image)}
                className="relative block aspect-video w-full cursor-zoom-in overflow-hidden bg-slate-100 text-left dark:bg-[#15112E]"
                aria-label={`Perbesar ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white opacity-90 backdrop-blur-sm transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                  <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                </span>
              </button>

              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-[#22202A] dark:text-white">{currentGallery.label}</p>
                  <p className="text-[11px] font-medium text-[#6B6874] dark:text-[#A39EB8]">Foto dokumentasi {image.number}</p>
                </div>
                <a
                  href={image.src}
                  download={`orvoks-hari-${image.day}-foto-${image.number}.webp`}
                  className="flex h-9 shrink-0 items-center gap-1 rounded-lg border border-[#5B2BBE]/20 bg-[#5B2BBE]/10 px-3 text-xs font-bold text-[#5B2BBE] transition-all hover:bg-[#5B2BBE]/20 active:scale-95 dark:border-[#C39BFF]/30 dark:bg-[#5B2BBE]/25 dark:text-[#D9BCFF]"
                  aria-label={`Unduh ${image.alt}`}
                >
                  <span className="material-symbols-outlined text-[17px]">download</span>
                  <span>Unduh</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </section>

      {selectedImage && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedImage(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl dark:bg-[#1B1638]">
            <div className="flex items-center justify-between gap-3 border-b border-[#5B2BBE]/15 bg-[#5B2BBE]/8 p-4 dark:border-[#5B2BBE]/25 dark:bg-[#5B2BBE]/15">
              <div className="min-w-0">
                <h3 className="truncate font-display text-base font-black text-[#22202A] sm:text-lg dark:text-white">
                  Dokumentasi {DAY_LABELS[selectedImage.day - 1]}
                </h3>
                <p className="text-xs font-medium text-[#6B6874] dark:text-[#A39EB8]">Foto {selectedImage.number} dari 4</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5B2BBE]/10 text-[#5B2BBE] transition-colors hover:bg-[#5B2BBE]/20 dark:bg-[#5B2BBE]/30 dark:text-[#C39BFF]"
                aria-label="Tutup foto"
              >
                <span className="material-symbols-outlined text-[21px]">close</span>
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#F3F2F0] p-3 sm:p-5 dark:bg-[#15112E]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[72vh] max-w-full rounded-xl object-contain shadow-sm"
              />
            </div>

            <div className="border-t border-[#5B2BBE]/15 p-3 dark:border-[#5B2BBE]/25 sm:p-4">
              <a
                href={selectedImage.src}
                download={`orvoks-hari-${selectedImage.day}-foto-${selectedImage.number}.webp`}
                className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#5B2BBE] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#43208F] active:scale-[0.99] sm:mx-auto sm:w-auto sm:min-w-44 dark:hover:bg-[#7D3BD6]"
              >
                <span className="material-symbols-outlined text-[19px]">download</span>
                <span>Unduh Foto</span>
              </a>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
};
