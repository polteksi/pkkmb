import { useState, useEffect } from 'react';
import { DAYS_DATA } from './data/orientationData';
import { TabType, DaySchedule, StudentMember } from './types';
import { Header } from './components/Header';
import { HomeTab } from './components/HomeTab';
import { ScheduleTab } from './components/ScheduleTab';
import { GroupTab } from './components/GroupTab';
import { LocationTab } from './components/LocationTab';
import { FaqTab } from './components/FaqTab';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { LocationModal } from './components/LocationModal';
import { SearchModal } from './components/SearchModal';
import { MenuDrawer } from './components/MenuDrawer';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('beranda');
  const [currentDayNumber, setCurrentDayNumber] = useState<number>(1); // Default to Monday / Hari ke-1 (Senin)

  // Dark mode state: default to light if not saved
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('pkkmb_theme');
    if (savedTheme) return savedTheme === 'dark';
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('pkkmb_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('pkkmb_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Modal states
  const [scheduleModalDay, setScheduleModalDay] = useState<DaySchedule | null>(null);
  const [locationModalName, setLocationModalName] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const currentDay = DAYS_DATA.find((d) => d.dayNumber === currentDayNumber) || DAYS_DATA[0];

  const tabTitles: Record<TabType, string> = {
    beranda: 'Beranda Utama',
    jadwal: 'Jadwal 5 Hari',
    kelompok: 'Daftar Kelompok',
    lokasi: 'Denah & Venue',
    faq: 'Tanya Jawab (FAQ)',
  };

  const handleOpenSearchWithQuery = (query: string) => {
    setSearchInitialQuery(query);
    setIsSearchOpen(true);
  };

  const handleSelectStudentFromSearch = (_student: StudentMember) => {
    setActiveTab('kelompok');
  };

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-architectural min-h-screen text-slate-900 dark:text-slate-100 flex flex-col font-body selection:bg-[#ffdada] selection:text-[#5b0617] transition-colors duration-300">
      {/* Top Fixed App Bar with Dark Mode Toggle */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        activeTabTitle={tabTitles[activeTab]}
      />

      {/* Main Scrollable Canvas */}
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full flex-1 flex flex-col transition-all">
        {activeTab === 'beranda' && (
          <HomeTab
            currentDay={currentDay}
            onSelectDay={(dayNum) => setCurrentDayNumber(dayNum)}
            onNavigateTab={handleNavigate}
            onOpenScheduleModal={(day) => setScheduleModalDay(day)}
            onOpenLocationModal={(loc) => setLocationModalName(loc)}
            onSearchStudent={handleOpenSearchWithQuery}
          />
        )}

        {activeTab === 'jadwal' && (
          <ScheduleTab
            initialDayNumber={currentDayNumber}
            onOpenLocationModal={(loc) => setLocationModalName(loc)}
          />
        )}

        {activeTab === 'kelompok' && (
          <GroupTab
            onOpenLocationModal={(loc) => setLocationModalName(loc)}
          />
        )}

        {activeTab === 'lokasi' && (
          <LocationTab />
        )}

        {activeTab === 'faq' && (
          <FaqTab />
        )}
      </main>

      <Footer onNavigateTab={handleNavigate} />

      {/* Interactive Modals and Drawers */}
      <ScheduleModal
        day={scheduleModalDay}
        onClose={() => setScheduleModalDay(null)}
        onOpenLocation={(loc) => setLocationModalName(loc)}
      />

      <LocationModal
        locationName={locationModalName}
        onClose={() => setLocationModalName(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        initialQuery={searchInitialQuery}
        onClose={() => setIsSearchOpen(false)}
        onSelectStudent={handleSelectStudentFromSearch}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigateTab={handleNavigate}
        activeTab={activeTab}
      />
    </div>
  );
}
