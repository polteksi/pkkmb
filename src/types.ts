export type TabType = 'beranda' | 'jadwal' | 'kelompok' | 'atribut' | 'materi' | 'galeri' | 'guidebook' | 'faq';

export interface DaySchedule {
  dayNumber: number;
  dayName: string;
  theme: string;
  dateISO: string;         // YYYY-MM-DD; source for automatic WIB status
  date: string;
  shortDate: string;        // e.g. "18 Sep"
  phase: string;            // e.g. "Pra-PKKMB", "PKKMB Day 1"
  progressPercent: number;
  jamSesi: string;          // Rentang jam sesi (ditampilkan sekali sebagai header)
  kegiatan: string[];       // Daftar kegiatan tanpa jam/lokasi individual
}

export interface StudentMember {
  id: string;
  name: string;
  major: string;
  gender: 'L' | 'P' | '';
  groupName: string;
  groupAlias: string;
  groupId: string;
  avatarColor: string;
  mentorName: string;
}

export interface OrientationGroup {
  id: string;
  name: string;
  alias: string;
  mentor: string;
  memberCount: number;
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

export interface PerlengkapanItem {
  id: string;
  text: string;
  mandatory: boolean;
}

export interface DresscodeHari {
  label: string;        // e.g. "Pra-PKKMB", "PPKKMB Day 1"
  tanggal: string;      // e.g. "Jumat, 18 September 2026"
  image: string;        // e.g. "/day1.png"
  images?: string[];    // optional gallery when a day has multiple examples
  putra: string[];
  putri: string[];
  wajibMembawa?: string[];
  membawaGanti?: string[];
  catatan?: string;
}
