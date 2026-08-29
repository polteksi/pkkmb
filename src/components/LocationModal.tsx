import React from 'react';
import { CAMPUS_LOCATIONS } from '../data/orientationData';
import { CampusLocation } from '../types';
import { BrandDecoration } from './BrandDecoration';

interface LocationModalProps {
  locationName: string | null;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  locationName,
  onClose,
}) => {
  if (!locationName) return null;

  const matchedLocation: CampusLocation =
    CAMPUS_LOCATIONS.find((l) =>
      locationName.toLowerCase().includes(l.name.toLowerCase()) ||
      l.name.toLowerCase().includes(locationName.toLowerCase()) ||
      locationName.toLowerCase().includes(l.building.toLowerCase())
    ) || CAMPUS_LOCATIONS[0];

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(matchedLocation.coordinates || matchedLocation.name)}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150" 
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-[#1B1638] rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-[#5B2BBE]/15 dark:border-[#D63BBE]/25 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header - ORVOKS Blue/Purple Gradient */}
        <div className="bg-[#5B2BBE] text-white p-5 flex items-start justify-between relative overflow-hidden">
          <div className="flex items-start gap-2.5 relative z-10">
            <span className="material-symbols-outlined text-[24px] text-[#FDE8FA] mt-0.5">location_on</span>
            <div>
              <span className="text-[10px] text-[#EFE9FF] font-bold uppercase tracking-wider block font-display">
                PANDUAN LOKASI VENUE
              </span>
              <h3 className="font-display font-black text-lg sm:text-xl text-white leading-tight mt-0.5">
                {matchedLocation.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup Modal"
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shrink-0 ml-2 relative z-10"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex flex-col gap-4 flex-1">
          
          {/* Visual Showcase Card */}
          <div className="rounded-xl text-white p-5 card-3d-dark border border-[#5B2BBE]/30 relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute top-2 right-2 opacity-25">
              <BrandDecoration type="sparkle" size={20} color="#F2B632" />
            </div>
            <span className="material-symbols-outlined text-[36px] text-[#FF85EA] mb-1">
              pin_drop
            </span>
            <h4 className="font-display font-bold text-base text-white">
              {matchedLocation.building}
            </h4>
            <span className="text-xs text-[#EFE9FF] font-semibold mt-0.5">
              {matchedLocation.floor} &bull; Kapasitas {matchedLocation.capacity}
            </span>
          </div>

          <div>
            <h5 className="font-bold text-xs text-[#6B6874] dark:text-[#A39EB8] uppercase tracking-wider mb-1 font-display">
              Deskripsi Fasilitas
            </h5>
            <p className="text-xs sm:text-sm text-[#22202A] dark:text-[#F3F2F8] leading-relaxed font-medium">
              {matchedLocation.description}
            </p>
          </div>

          {/* Clickable Direction Steps Card */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Klik untuk membuka di Google Maps"
            className="bg-[#FAF9F6] dark:bg-[#251F4A] border border-[#5B2BBE]/20 dark:border-[#D63BBE]/30 p-4 rounded-xl flex flex-col gap-1.5 hover:border-[#5B2BBE]/40 dark:hover:border-[#D63BBE]/50 transition-all cursor-pointer group block text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#5B2BBE] dark:text-[#C39BFF]">
                <span className="material-symbols-outlined text-[18px]">directions_walk</span>
                <span className="font-bold text-xs uppercase tracking-wider font-display">
                  Petunjuk Akses dari Gerbang Utama
                </span>
              </div>
              <span className="text-[10px] bg-[#5B2BBE] text-white font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 group-hover:scale-105 transition-transform shadow-xs">
                <span className="material-symbols-outlined text-[11px] text-white">open_in_new</span>
                Buka Map
              </span>
            </div>
            <p className="text-xs text-[#22202A] dark:text-[#F3F2F8] font-bold leading-normal mt-1">
              {matchedLocation.directions}
            </p>
          </a>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {matchedLocation.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#FAF9F6] dark:bg-[#251F4A] text-[#6B6874] dark:text-[#A39EB8] text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-[#322B60]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF9F6] dark:bg-[#151030] border-t border-[#5B2BBE]/10 dark:border-[#251F4A] flex justify-between items-center">
          <span className="text-xs text-[#6B6874] dark:text-[#A39EB8] font-medium">
            Hubungi panitia jika tersesat
          </span>
          <button
            onClick={onClose}
            className="bg-[#5B2BBE] hover:bg-[#43208F] dark:bg-[#5B2BBE] text-white px-5 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-xs active:scale-95"
          >
            Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};
