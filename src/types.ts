export type TabType = 'beranda' | 'jadwal' | 'kelompok' | 'atribut' | 'guidebook' | 'faq';

export interface DaySchedule {
  dayNumber: number;
  dayName: string;
  theme: string;
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

export interface PerlengkapanItem {
  id: string;
  text: string;
  mandatory: boolean;
}

export interface DresscodeHari {
  label: string;        // e.g. "Pra-PKKMB", "PPKKMB Day 1"
  tanggal: string;      // e.g. "Jumat, 18 September 2026"
  image: string;        // e.g. "/day1.png"
  putra: string[];
  putri: string[];
  wajibMembawa?: string[];
  membawaGanti?: string[];
  catatan?: string;
}