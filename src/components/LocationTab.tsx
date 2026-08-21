import React, { useState } from 'react';
import { CAMPUS_LOCATIONS } from '../data/orientationData';
import { CampusLocation } from '../types';

interface LocationTabProps {
  onSelectLocation?: (loc: CampusLocation) => void;
}

export const LocationTab: React.FC<LocationTabProps> = ({ onSelectLocation }) => {
  const [selectedLocId, setSelectedLocId] = useState<string>('loc-1');

  const activeLocation =
    CAMPUS_LOCATIONS.find((l) => l.id === selectedLocId) || CAMPUS_LOCATIONS[0];

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLocation.coordinates || activeLocation.name)}`;

  return (
    <div className="tab-fade-in grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 items-start">
      
      {/* Left Column: Blueprint Map Grid (lg:col-span-7) */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        
        {/* Header */}
        <div className="campus-card bg-white dark:bg-slate-900 p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#5b0617] dark:text-[#ff8595]">
            <span className="material-symbols-outlined text-[26px]">map</span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
              Peta Lokasi & Gedung Kampus
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            Panduan navigasi venue PKKMB di Kampus Politeknik Semen Indonesia.
          </p>
        </div>

        {/* Interactive Blueprint Map Visual - Solid Deep Blueprint Navy Background with 3D Depth & Glow */}
        <div 
          style={{ backgroundColor: '#001e3d' }}
          className="rounded-2xl text-white p-5 sm:p-6 border border-slate-700 card-3d-dark relative overflow-hidden flex flex-col gap-4"
        >
          {/* Blueprint Grid Texture */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <span className="text-xs font-bold text-[#aac7ff] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">domain</span>
                DENAH ZONA ORIENTASI
              </span>
              <span className="text-[10px] bg-white/15 text-white border border-white/20 px-2.5 py-0.5 rounded-full font-bold">
                Politeknik Semen Indonesia
              </span>
            </div>

            {/* Zone Grid - Showing all 5 locations clearly */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {CAMPUS_LOCATIONS.map((loc) => {
                const isSelected = loc.id === activeLocation.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => {
                      setSelectedLocId(loc.id);
                      if (onSelectLocation) onSelectLocation(loc);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[5.5rem] ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#b02a3e] to-[#7a1f2b] text-white border-white shadow-md scale-102 ring-2 ring-white/30 font-bold'
                        : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                    }`}
                  >
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? 'text-[#ffdada]' : 'text-[#aac7ff]'}`}>
                      {loc.floor}
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm line-clamp-2 mt-1 leading-snug text-white">
                      {loc.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-[#aac7ff] italic text-right font-medium">
              *Ketuk zona untuk melihat rute & detail petunjuk arah
            </p>
          </div>
        </div>

      </div>

      {/* Right Column: Selected Location Details (lg:col-span-5) */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        
        {/* Selected Location Details */}
        <div className="campus-card bg-white dark:bg-slate-900 p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <span className="bg-[#5b0617]/10 dark:bg-[#ff8595]/15 text-[#5b0617] dark:text-[#ff8595] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#5b0617]/20 dark:border-[#ff8595]/30">
                {activeLocation.floor} &bull; {activeLocation.building}
              </span>
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                Kapasitas: {activeLocation.capacity}
              </span>
            </div>
            
            <h3 className="font-display font-black text-xl text-slate-900 dark:text-white leading-tight">
              {activeLocation.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {activeLocation.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {activeLocation.tags.map((t, idx) => (
              <span
                key={idx}
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Clickable Direction Card (Google Maps Redirect) */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Klik untuk membuka rute di Google Maps"
            className="campus-card-hover bg-gradient-to-br from-[#5b0617]/10 via-[#b02a3e]/10 to-red-50/50 dark:from-[#5b0617]/25 dark:via-[#b02a3e]/20 dark:to-slate-900 border border-[#5b0617]/20 dark:border-[#ff8595]/30 p-4 rounded-xl flex flex-col gap-2 cursor-pointer group text-left block transition-all mt-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#5b0617] dark:text-[#ff8595]">
                <span className="material-symbols-outlined text-[18px]">directions</span>
                <span className="font-bold text-xs uppercase tracking-wider">
                  Petunjuk Menuju Lokasi
                </span>
              </div>
              <span className="text-[10px] bg-[#5b0617] dark:bg-[#b02a3e] text-white font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 group-hover:scale-105 transition-transform shadow-xs">
                <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                Buka Map
              </span>
            </div>
            
            <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-relaxed mt-1">
              {activeLocation.directions}
            </p>
            
            <p className="text-[10px] text-[#5b0617] dark:text-[#ff8595] font-bold underline mt-1">
              *Ketuk kartu ini untuk navigasi Google Maps secara otomatis.
            </p>
          </a>
        </div>

      </div>

    </div>
  );
};
