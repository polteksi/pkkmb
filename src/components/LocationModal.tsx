import React, { useState } from 'react';
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

  // Load custom coordinates from localStorage or default
  const [coords, setCoords] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('pkkmb_custom_coords');
    const initial = saved ? JSON.parse(saved) : {};
    CAMPUS_LOCATIONS.forEach((loc) => {
      if (!initial[loc.id]) {
        initial[loc.id] = loc.coordinates || '';
      }
    });
    return initial;
  });

  const handleCoordinateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const updated = { ...coords, [matchedLocation.id]: val };
    setCoords(updated);
    localStorage.setItem('pkkmb_custom_coords', JSON.stringify(updated));
  };

  const activeCoord = coords[matchedLocation.id] || matchedLocation.coordinates || '';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeCoord)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150" onClick={onClose}>
      <div 
        className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow-lg rounded-xl max-w-lg w-full max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#002a5b] text-white p-4 border-b-2 border-[#191c1d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px]">location_on</span>
            <div>
              <span className="text-[10px] text-[#aac7ff] font-bold uppercase tracking-wider block">
                PANDUAN LOKASI VENUE
              </span>
              <h3 className="font-display font-black text-lg text-white leading-tight">
                {matchedLocation.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white text-[#191c1d] border-2 border-[#191c1d] rounded-md flex items-center justify-center font-bold hover:bg-[#ffdada] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto flex flex-col gap-4 flex-1">
          {/* Blueprint map mock */}
          <div className="bg-[#002a5b] text-white p-4 rounded-lg border-2 border-[#191c1d] relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px]" />
            <span className="material-symbols-outlined text-[40px] text-[#ff8b92] mb-1">
              pin_drop
            </span>
            <h4 className="font-display font-bold text-base text-white">
              {matchedLocation.building}
            </h4>
            <span className="text-xs text-[#aac7ff] font-semibold">
              {matchedLocation.floor} &bull; Kapasitas {matchedLocation.capacity}
            </span>
          </div>

          <div>
            <h5 className="font-bold text-xs text-[#564242] uppercase tracking-wider mb-1">
              Deskripsi Fasilitas
            </h5>
            <p className="text-xs text-[#191c1d] leading-relaxed font-semibold">
              {matchedLocation.description}
            </p>
          </div>

          {/* Coordinate settings in modal */}
          <div className="bg-white border-2 border-[#191c1d] p-3 rounded-md flex flex-col gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <label htmlFor="modal-coords-input" className="text-xs font-bold text-[#002a5b] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">edit_location_alt</span>
              Masukkan Titik Koordinat Map:
            </label>
            <input
              id="modal-coords-input"
              type="text"
              value={coords[matchedLocation.id] || ''}
              onChange={handleCoordinateChange}
              placeholder="Contoh: -7.162384,112.639737"
              className="w-full bg-[#f8f9fa] border-2 border-[#191c1d] px-2.5 py-1.5 text-xs rounded font-bold focus:outline-none focus:ring-2 focus:ring-[#5b0617]"
            />
          </div>

          {/* Direction Steps - Clickable */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Klik untuk membuka di Google Maps"
            className="bg-[#ffdada]/60 border-2 border-[#191c1d] p-3.5 rounded-md flex flex-col gap-1.5 hover:bg-[#ffdada] transition-all cursor-pointer shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 group block text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#5b0617]">
                <span className="material-symbols-outlined text-[18px]">directions_walk</span>
                <span className="font-bold text-xs uppercase tracking-wider">
                  Petunjuk Akses dari Gerbang Utama
                </span>
              </div>
              <span className="text-[9px] bg-[#5b0617] text-white font-bold px-2 py-0.5 rounded border border-[#191c1d] flex items-center gap-1 group-hover:scale-105 transition-transform shrink-0 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                <span className="material-symbols-outlined text-[10px] text-white">open_in_new</span>
                Buka Map
              </span>
            </div>
            <p className="text-xs text-[#191c1d] font-bold leading-normal pl-6 mt-1">
              {matchedLocation.directions}
            </p>
          </a>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {matchedLocation.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#ffdada] text-[#5b0617] text-[10px] font-bold px-2 py-0.5 rounded border border-[#897172]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#e7e8e9] border-t-2 border-[#191c1d] flex justify-between items-center">
          <span className="text-[11px] text-[#564242] font-semibold">
            Hubungi panitia jika tersesat
          </span>
          <button
            onClick={onClose}
            className="bg-[#5b0617] text-white px-4 py-1.5 rounded-md font-bold text-xs hover:bg-[#7a1f2b] border border-[#191c1d]"
          >
            Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};
