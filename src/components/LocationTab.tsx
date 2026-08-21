import React, { useState } from 'react';
import { CAMPUS_LOCATIONS } from '../data/orientationData';
import { CampusLocation } from '../types';

interface LocationTabProps {
  onSelectLocation?: (loc: CampusLocation) => void;
}

export const LocationTab: React.FC<LocationTabProps> = ({ onSelectLocation }) => {
  const [selectedLocId, setSelectedLocId] = useState<string>('loc-1');
  const [buildingFilter, setBuildingFilter] = useState<string>('all');

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
    const updated = { ...coords, [selectedLocId]: val };
    setCoords(updated);
    localStorage.setItem('pkkmb_custom_coords', JSON.stringify(updated));
  };

  const filteredLocations = CAMPUS_LOCATIONS.filter((loc) => {
    if (buildingFilter === 'all') return true;
    if (buildingFilter === 'gedung-a') return loc.building.includes('Gedung A') || loc.building.includes('Utama');
    if (buildingFilter === 'workshop') return loc.building.includes('Workshop');
    if (buildingFilter === 'outdoor') return loc.building.includes('Terbuka');
    return true;
  });

  const activeLocation =
    CAMPUS_LOCATIONS.find((l) => l.id === selectedLocId) || CAMPUS_LOCATIONS[0];

  const activeCoord = coords[activeLocation.id] || activeLocation.coordinates || '';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeCoord)}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6 items-start">
      {/* Left Area: Filter and Map Blueprint (lg: col-span-7) */}
      <div className="lg:col-span-7 flex flex-col gap-4">
        {/* Header */}
        <div className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-4">
          <div className="flex items-center gap-2 text-[#5b0617] mb-1">
            <span className="material-symbols-outlined text-[24px]">map</span>
            <h2 className="font-display font-bold text-[20px] text-[#191c1d]">
              Peta Lokasi & Gedung Kampus
            </h2>
          </div>
          <p className="text-xs text-[#564242]">
            Panduan navigasi venue PKKMB di Kampus Politeknik Semen Indonesia.
          </p>

          {/* Building Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto mt-3 pt-1">
            {[
              { id: 'all', label: 'Semua Lokasi' },
              { id: 'gedung-a', label: 'Gedung Utama (A)' },
              { id: 'workshop', label: 'Workshop Vokasi' },
              { id: 'outdoor', label: 'Area Terbuka' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setBuildingFilter(tab.id)}
                className={`px-3 py-1 text-xs font-bold rounded border-2 shrink-0 transition-all ${
                  buildingFilter === tab.id
                    ? 'bg-[#5b0617] text-white border-[#191c1d] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-[#191c1d] border-[#191c1d] hover:bg-[#e7e8e9]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Blueprint / Map Visual Card */}
        <div className="bg-[#edeeef] border-2 border-[#191c1d] neu-shadow rounded-lg p-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#5b0617] uppercase tracking-wider">
              DENAH ZONA ORIENTASI
            </span>
            <span className="text-[10px] bg-white border border-[#191c1d] px-2 py-0.5 rounded font-bold">
              Politeknik Semen Indonesia
            </span>
          </div>

          {/* Conceptual Blueprint Map Graphic */}
          <div className="w-full bg-[#002a5b] text-white p-3 rounded-md border-2 border-[#191c1d] relative overflow-hidden flex flex-col gap-2">
            {/* Blueprint grid effect */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

            <div className="grid grid-cols-3 gap-2 relative z-10">
              {filteredLocations.map((loc) => {
                const isSelected = loc.id === activeLocation.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => {
                      setSelectedLocId(loc.id);
                      if (onSelectLocation) onSelectLocation(loc);
                    }}
                    className={`p-2 rounded border-2 text-left transition-all flex flex-col justify-between h-20 ${
                      isSelected
                        ? 'bg-[#b02a3e] text-white border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.9)] scale-102'
                        : 'bg-white/10 hover:bg-white/20 border-white/40 text-white'
                    }`}
                  >
                    <span className="text-[9px] uppercase font-bold text-white/80 line-clamp-1">
                      {loc.floor}
                    </span>
                    <span className="font-headline font-bold text-[11px] line-clamp-2 mt-1 leading-tight">
                      {loc.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-[10px] text-[#aac7ff] italic text-right mt-1 font-semibold">
              *Ketuk zona untuk melihat rute petunjuk arah
            </p>
          </div>
        </div>
      </div>

      {/* Right Area: Selected Location Details & Coordinate Editor (lg: col-span-5) */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        {/* Selected Location Details */}
        <div className="bg-[#f8f9fa] border-2 border-[#191c1d] neu-shadow rounded-lg p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap gap-1.5 items-center justify-between">
              <span className="bg-[#5b0617] text-white text-[10px] font-bold px-2.5 py-0.5 rounded border border-[#191c1d]">
                {activeLocation.floor} &bull; {activeLocation.building}
              </span>
              <span className="bg-white text-[#191c1d] border-2 border-[#191c1d] px-2 py-0.5 rounded text-[10px] font-bold shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                Kapasitas: {activeLocation.capacity}
              </span>
            </div>
            <h3 className="font-display font-black text-[20px] text-[#191c1d] mt-1 leading-tight">
              {activeLocation.name}
            </h3>
          </div>

          <p className="text-xs text-[#564242] leading-relaxed font-medium">
            {activeLocation.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {activeLocation.tags.map((t, idx) => (
              <span
                key={idx}
                className="bg-[#e7e8e9] text-[#191c1d] text-[10px] font-bold px-2 py-0.5 rounded border border-[#191c1d]"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Dynamic Coordinates Input Field */}
          <div className="bg-white border-2 border-[#191c1d] p-3.5 rounded-md flex flex-col gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-1">
            <label htmlFor="coords-input" className="text-xs font-bold text-[#002a5b] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">edit_location_alt</span>
              Masukkan Titik Koordinat Map:
            </label>
            <input
              id="coords-input"
              type="text"
              value={coords[activeLocation.id] || ''}
              onChange={handleCoordinateChange}
              placeholder="Contoh: -7.162384,112.639737"
              className="w-full bg-[#f8f9fa] border-2 border-[#191c1d] px-3 py-2 text-xs rounded font-bold focus:outline-none focus:ring-2 focus:ring-[#5b0617] shadow-inner"
            />
            <p className="text-[9px] text-[#897172] font-semibold">
              *Tulis koordinat (latitude, longitude) di atas. Data akan disimpan otomatis.
            </p>
          </div>

          {/* Step by step directions - Clickable maps link */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Klik untuk membuka rute di Google Maps"
            className="bg-[#ffdada]/60 border-2 border-[#191c1d] p-4 rounded-md flex flex-col gap-2 hover:bg-[#ffdada] transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 group text-left block"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#5b0617]">
                <span className="material-symbols-outlined text-[20px]">directions</span>
                <span className="font-bold text-xs uppercase tracking-wider">
                  Petunjuk Menuju Lokasi
                </span>
              </div>
              <span className="text-[10px] bg-[#5b0617] text-white font-bold px-2 py-0.5 rounded border border-[#191c1d] flex items-center gap-1 shrink-0 group-hover:scale-105 transition-transform shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                <span className="material-symbols-outlined text-[12px] text-white">open_in_new</span>
                Buka Map
              </span>
            </div>
            <p className="text-xs text-[#191c1d] font-semibold leading-relaxed mt-1">
              {activeLocation.directions}
            </p>
            <p className="text-[9px] text-[#5b0617] font-bold underline mt-1">
              *Ketuk kartu ini untuk navigasi Google Maps secara otomatis.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
