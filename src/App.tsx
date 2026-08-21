import { useState } from 'react';
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
  const [currentDayNumber, setCurrentDayNumber] = useState<number>(2); // Default to Tuesday / Hari ke-2 as in mockup

  // Modal states
  const [scheduleModalDay, setScheduleModalDay] = useState<DaySchedule | null>(null);
  const [locationModalName, setLocationModalName] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const currentDay = DAYS_DATA.find((d) => d.dayNumber === currentDayNumber) || DAYS_DATA[1];

  const handleOpenSearchWithQuery = (query: string) => {
    setSearchInitialQuery(query);
    setIsSearchOpen(true);
  };

  const handleSelectStudentFromSearch = (_student: StudentMember) => {
    setActiveTab('kelompok');
  };

  return (
    <div className="bg-architectural min-h-screen text-[#191c1d] flex flex-col font-body selection:bg-[#ffdada] selection:text-[#5b0617]">
      {/* Top Fixed App Bar */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenGroups={() => setActiveTab('kelompok')}
      />

      {/* Main Scrollable Canvas */}
      <main className="pt-20 pb-16 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto w-full flex-1 flex flex-col transition-all">
        {activeTab === 'beranda' && (
          <HomeTab
            currentDay={currentDay}
            onSelectDay={(dayNum) => setCurrentDayNumber(dayNum)}
            onNavigateTab={(tab) => setActiveTab(tab)}
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

      <Footer onNavigateTab={(tab) => setActiveTab(tab)} />

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
        onNavigateTab={(tab) => setActiveTab(tab)}
      />
    </div>
  );
}
