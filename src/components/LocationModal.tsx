import React from 'react';
import { CAMPUS_LOCATIONS } from '../data/orientationData';
import { CampusLocation } from '../types';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150" 
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#002a5b] to-[#004083] text-white p-5 flex items-start justify-between">
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[24px] text-[#aac7ff] mt-0.5">location_on</span>
            <div>
              <span className="text-[10px] text-[#aac7ff] font-bold uppercase tracking-wider block">
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
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shrink-0 ml-2"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex flex-col gap-4 flex-1">
          {/* Blueprint Visual Mock */}
          <div className="bg-[#001e3d] text-white p-5 rounded-xl border border-slate-700 relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:12px_12px]" />
            <span className="material-symbols-outlined text-[36px] text-red-400 mb-1">
              pin_drop
            </span>
            <h4 className="font-display font-bold text-base text-white">
              {matchedLocation.building}
            </h4>
            <span className="text-xs text-[#aac7ff] font-semibold mt-0.5">
              {matchedLocation.floor} &bull; Kapasitas {matchedLocation.capacity}
            </span>
          </div>

          <div>
            <h5 className="font-bold text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
              Deskripsi Fasilitas
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {matchedLocation.description}
            </p>
          </div>

          {/* Clickable Direction Steps Card */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Klik untuk membuka di Google Maps"
            className="bg-gradient-to-br from-[#5b0617]/10 via-[#b02a3e]/10 to-red-50/50 dark:from-[#5b0617]/25 dark:via-[#b02a3e]/20 dark:to-slate-800/80 border border-[#5b0617]/20 dark:border-[#ff8595]/30 p-4 rounded-xl flex flex-col gap-1.5 hover:border-[#5b0617]/40 dark:hover:border-[#ff8595]/50 transition-all cursor-pointer group block text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#5b0617] dark:text-[#ff8595]">
                <span className="material-symbols-outlined text-[18px]">directions_walk</span>
                <span className="font-bold text-xs uppercase tracking-wider">
                  Petunjuk Akses dari Gerbang Utama
                </span>
              </div>
              <span className="text-[10px] bg-[#5b0617] dark:bg-[#b02a3e] text-white font-bold px-2 py-0.5 rounded-full flex items-center gap-1 group-hover:scale-105 transition-transform shadow-xs">
                <span className="material-symbols-outlined text-[10px] text-white">open_in_new</span>
                Buka Map
              </span>
            </div>
            <p className="text-xs text-slate-800 dark:text-slate-200 font-bold leading-normal mt-1">
              {matchedLocation.directions}
            </p>
          </a>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {matchedLocation.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Hubungi panitia jika tersesat
          </span>
          <button
            onClick={onClose}
            className="bg-[#5b0617] dark:bg-[#7a1f2b] hover:bg-[#7a1f2b] dark:hover:bg-[#b02a3e] text-white px-5 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-xs"
          >
            Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};
