export type TabType = 'beranda' | 'jadwal' | 'kelompok' | 'lokasi' | 'faq';

export interface DaySchedule {
  dayNumber: number;
  dayName: string;
  theme: string;
  date: string;
  progressPercent: number;
  attributes: {
    id: string;
    name: string;
    checked: boolean;
    mandatory: boolean;
    note?: string;
  }[];
  sessions: {
    time: string;
    title: string;
    speaker?: string;
    location: string;
    type: 'ceremony' | 'workshop' | 'tour' | 'break' | 'games';
  }[];
  primaryLocation: string;
}

export interface StudentMember {
  id: string;
  name: string;
  nim: string;
  major: string;
  groupName: string;
  groupId: string;
  role: 'Ketua Kelompok' | 'Wakil' | 'Anggota';
  avatarColor: string;
  mentorName: string;
  mentorContact: string;
}

export interface OrientationGroup {
  id: string;
  name: string;
  alias: string;
  mentor: string;
  mentorPhone: string;
  memberCount: number;
  room: string;
  motto: string;
  members: StudentMember[];
}

export interface CampusLocation {
  id: string;
  name: string;
  building: string;
  floor: string;
  capacity: string;
  description: string;
  tags: string[];
  directions: string;
  image?: string;
  coordinates?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
