import { useState, useEffect } from 'react';
import { DAYS_DATA } from './data/orientationData';
import { TabType, DaySchedule, StudentMember } from './types';
import { Header } from './components/Header';
import { HomeTab } from './components/HomeTab';
import { ScheduleTab } from './components/ScheduleTab';
import { GroupTab } from './components/GroupTab';
import { AtributTab } from './components/AtributTab';
import { GuidebookTab } from './components/GuidebookTab';
import { FaqTab } from './components/FaqTab';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { PerlengkapanModal } from './components/PerlengkapanModal';
import { SearchModal } from './components/SearchModal';
import { MenuDrawer } from './components/MenuDrawer';
import { BrandDecoration } from './components/BrandDecoration';
import { SplashScreen } from './components/SplashScreen';


export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<TabType>('beranda');
  const [currentDayNumber, setCurrentDayNumber] = useState<number>(1); // Default to first session


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
  const [isPerlengkapanOpen, setIsPerlengkapanOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState<string>('');
  const [selectedStudent, setSelectedStudent] = useState<StudentMember | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const currentDay = DAYS_DATA.find((d) => d.dayNumber === currentDayNumber) || DAYS_DATA[0];

  const tabTitles: Record<TabType, string> = {
    beranda: 'Beranda Utama',
    jadwal: 'Jadwal 7 Hari',
    kelompok: 'Daftar Kelompok',
    atribut: 'Atribut PKKMB',
    guidebook: 'Guidebook PKKMB',
    faq: 'Tanya Jawab (FAQ)',
  };

  const handleOpenSearchWithQuery = (query: string) => {
    setSearchInitialQuery(query);
    setIsSearchOpen(true);
  };

  const handleSelectStudentFromSearch = (student: StudentMember) => {
    setSelectedStudent(student);
    setActiveTab('kelompok');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-orvoks-canvas min-h-screen text-[#22202A] dark:text-[#F3F2F8] flex flex-col font-body selection:bg-[#EFE9FF] selection:text-[#5B2BBE] dark:selection:bg-[#5B2BBE] dark:selection:text-white transition-colors duration-300 relative overflow-hidden">

      {/* Background Decorative Minimal Geometric Accents (Clean, non-intrusive, preserving generous whitespace) */}
      <div className="fixed top-28 -left-3 pointer-events-none opacity-15 dark:opacity-10 z-0">
        <BrandDecoration type="sparkle" size={24} color="#5B2BBE" />
      </div>
      <div className="fixed top-1/3 -right-3 pointer-events-none opacity-20 dark:opacity-10 z-0 hidden lg:block">
        <BrandDecoration type="starburst" size={28} color="#F2B632" secondaryColor="#5B2BBE" />
      </div>
      <div className="fixed bottom-32 -left-3 pointer-events-none opacity-15 dark:opacity-10 z-0 hidden md:block">
        <BrandDecoration type="diamond" size={20} color="#5B2BBE" />
      </div>
      <div className="fixed bottom-20 -right-2 pointer-events-none opacity-15 dark:opacity-10 z-0">
        <BrandDecoration type="sparkle" size={22} color="#4256A6" />
      </div>

      {/* Top Fixed App Bar with Dark Mode Toggle */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onNavigateToBeranda={() => handleNavigate('beranda')}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        activeTabTitle={tabTitles[activeTab]}
      />

      {/* Main Scrollable Canvas */}
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full flex-1 flex flex-col relative z-10">
        {activeTab === 'beranda' && (
          <HomeTab
            currentDay={currentDay}
            onSelectDay={(dayNum) => setCurrentDayNumber(dayNum)}
            onNavigateTab={handleNavigate}
            onOpenScheduleModal={(day) => setScheduleModalDay(day)}
            onOpenPerlengkapanModal={() => setIsPerlengkapanOpen(true)}
            onSearchStudent={handleOpenSearchWithQuery}
          />
        )}

        {activeTab === 'jadwal' && (
          <ScheduleTab
            initialDayNumber={currentDayNumber}
          />
        )}

        {activeTab === 'kelompok' && (
          <GroupTab initialStudent={selectedStudent} />
        )}

        {activeTab === 'atribut' && (
          <AtributTab />
        )}

        {activeTab === 'guidebook' && (
          <GuidebookTab />
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
      />

      <PerlengkapanModal
        isOpen={isPerlengkapanOpen}
        onClose={() => setIsPerlengkapanOpen(false)}
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

      {/* Opening Splash Screen Animation */}
      {showSplash && (
        <SplashScreen
          onFinish={() => setShowSplash(false)}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}
