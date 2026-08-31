import { DaySchedule, OrientationGroup, StudentMember, FaqItem, PerlengkapanItem, DresscodeHari } from '../types';

export const HERO_IMAGE_URL = 'public/Elaina 3D.jpg';

// ─── Rundown ORVOKS 2026 ───────────────────────────────────────────────────
export const DAYS_DATA: DaySchedule[] = [
  {
    dayNumber: 1,
    dayName: 'Jumat',
    date: '18 September 2026',
    theme: 'Pra-PKKMB',
    progressPercent: 15,
    jamSesi: '07.30 – 11.00 WIB',
    kegiatan: [
      'Sosialisasi Bagian Keuangan',
      'Sosialisasi Bagian Akademik',
      'Pembagian Atribut PKKMB',
      'Sosialisasi Peraturan dan Persiapan PKKMB',
    ],
  },
  {
    dayNumber: 2,
    dayName: 'Sabtu',
    date: '19 September 2026',
    theme: 'Pra-PKKMB',
    progressPercent: 30,
    jamSesi: '07.30 – 12.00 WIB',
    kegiatan: [
      'Sosialisasi Bagian Kemahasiswaan (Termasuk Peraturan Anti Kekerasan)',
      'Sosialisasi Penugasan dan Pematangan Pelaksanaan PKKMB',
      'Pelaksanaan Persiapan Administrasi Kampus',
    ],
  },
  {
    dayNumber: 3,
    dayName: 'Senin',
    date: '21 September 2026',
    theme: 'PKKMB Day 1',
    progressPercent: 50,
    jamSesi: '06.30 – 17.00 WIB',
    kegiatan: [
      'Pembukaan ORVOKS POLTEKSI 2026',
      'Penyampaian Materi Pertama (Industri)',
      'Penyampaian Materi Kedua (Nasional)',
      'Penyampaian Materi Ketiga (Program)',
    ],
  },
  {
    dayNumber: 4,
    dayName: 'Selasa',
    date: '22 September 2026',
    theme: 'PKKMB Day 2',
    progressPercent: 65,
    jamSesi: '07.00 – 17.00 WIB',
    kegiatan: [
      'Pelaksanaan Materi Pertama (Nasional)',
      'Penyampaian Materi Kedua (Nasional)',
      'Penyampaian Materi Ketiga (Industri)',
      'Penyampaian Materi Keempat (Industri)',
    ],
  },
  {
    dayNumber: 5,
    dayName: 'Rabu',
    date: '23 September 2026',
    theme: 'PKKMB Day 3',
    progressPercent: 75,
    jamSesi: '07.00 – 17.00 WIB',
    kegiatan: [
      'Visit Industri',
      'Penyampaian Materi Pertama (Industri)',
      'Penyampaian Materi Kedua (Industri)',
      'Industri Session',
      'Sharing Session',
      'ORMAWA dan UKM',
    ],
  },
  {
    dayNumber: 6,
    dayName: 'Kamis',
    date: '24 September 2026',
    theme: 'PKKMB Day 4',
    progressPercent: 85,
    jamSesi: '07.00 – 12.00 WIB',
    kegiatan: [
      'Pelaksanaan Kreatifitasi dan Pengabdian',
      'Industrial Implementation',
    ],
  },
  {
    dayNumber: 7,
    dayName: 'Jumat',
    date: '25 September 2026',
    theme: 'PKKMB Day 5',
    progressPercent: 100,
    jamSesi: '07.00 – 21.00 WIB',
    kegiatan: [
      'Implementasi "Pondasi Kemandirian, Kokoh Berintegritas"',
      'Celebration of GEVO and TABE',
      'Penutupan ORVOKS POLTEKSI 2026',
    ],
  },
];

// ─── Perlengkapan Hari-H (Poin A) — single source of truth ───────────────
export const PERLENGKAPAN_ITEMS: PerlengkapanItem[] = [
  { id: 'p-1',  text: 'Sarapan sebelum mengikuti rangkaian kegiatan.', mandatory: true },
  { id: 'p-2',  text: 'Name Tag yang sudah dibuat sebelum Pra-PKKMB.', mandatory: true },
  { id: 'p-3',  text: 'Name Tag dengan warna pita sesuai kelompok.', mandatory: true },
  { id: 'p-4',  text: 'Peserta putri diimbau memakai legging/celana panjang.', mandatory: false },
  { id: 'p-5',  text: 'Barang-barang penugasan sesuai ketentuan.', mandatory: true },
  { id: 'p-6',  text: 'Alat tulis.', mandatory: true },
  { id: 'p-7',  text: 'Obat-obatan pribadi.', mandatory: false },
  { id: 'p-8',  text: 'Payung dan jas hujan.', mandatory: false },
  { id: 'p-9',  text: 'Tumbler air minum (dilarang wadah sekali pakai).', mandatory: true },
  { id: 'p-10', text: 'Kacamata hitam, kipas, payung lipat (opsional).', mandatory: false },
  { id: 'p-11', text: 'Peralatan ibadah.', mandatory: false },
];

// ─── Dresscode Per Hari (Poin B) — single source of truth ─────────────────
export const DRESSCODE_DATA: DresscodeHari[] = [
  {
    label: 'Pra-PKKMB',
    tanggal: '18 & 19 September 2026',
    putra: [
      'Kemeja putih lengan panjang',
      'Celana bahan hitam rapi',
      'Sepatu formal/tertutup warna gelap',
      'Sabuk hitam',
      'Name tag terpasang',
    ],
    putri: [
      'Kemeja putih lengan panjang',
      'Rok/celana bahan hitam rapi',
      'Sepatu formal/tertutup warna gelap',
      'Legging/celana panjang (dianjurkan)',
      'Name tag terpasang',
    ],
  },
  {
    label: 'Day 1',
    tanggal: 'Senin, 21 September 2026',
    putra: [
      'Kemeja putih lengan panjang',
      'Celana bahan hitam',
      'Sepatu pantofel hitam',
      'Dasi hitam',
      'Jas almamater POLTEKSI',
      'Name tag lengkap',
    ],
    putri: [
      'Kemeja putih lengan panjang',
      'Rok/celana bahan hitam',
      'Sepatu tertutup hitam',
      'Jas almamater POLTEKSI',
      'Kerudung hitam (bagi yang berkerudung)',
      'Name tag lengkap',
    ],
  },
  {
    label: 'Day 2',
    tanggal: 'Selasa, 22 September 2026',
    putra: [
      'Baju batik bebas rapi',
      'Celana bahan hitam',
      'Sepatu formal/tertutup',
      'Name tag lengkap',
    ],
    putri: [
      'Baju batik bebas rapi',
      'Rok/celana bahan hitam',
      'Sepatu formal/tertutup',
      'Kerudung menyesuaikan warna batik (bagi yang berkerudung)',
      'Name tag lengkap',
    ],
  },
  {
    label: 'Day 3',
    tanggal: 'Rabu, 23 September 2026',
    putra: [
      'Kaos olahraga kampus/bebas rapi',
      'Celana training/olahraga',
      'Sepatu olahraga',
      'Name tag terpasang',
    ],
    putri: [
      'Kaos olahraga kampus/bebas rapi',
      'Celana training/legging panjang',
      'Sepatu olahraga',
      'Name tag terpasang',
    ],
    catatan: 'Bawa baju ganti untuk sesi industri jika diperlukan.',
  },
  {
    label: 'Day 4',
    tanggal: 'Kamis, 24 September 2026',
    putra: [
      'Kaos almamater POLTEKSI / kaos putih polos',
      'Celana bahan hitam',
      'Sepatu formal/tertutup',
      'Name tag lengkap',
    ],
    putri: [
      'Kaos almamater POLTEKSI / kaos putih polos',
      'Rok/celana bahan hitam',
      'Sepatu formal/tertutup',
      'Kerudung putih (bagi yang berkerudung)',
      'Name tag lengkap',
    ],
  },
  {
    label: 'Day 5',
    tanggal: 'Jumat, 25 September 2026',
    putra: [
      'Kaos sesuai warna prodi (lihat ketentuan di bawah)',
      'Celana hitam bahan/rapi',
      'Sepatu formal/tertutup',
      'Jas almamater POLTEKSI (untuk sesi penutupan)',
      'Name tag lengkap',
    ],
    putri: [
      'Kaos sesuai warna prodi (lihat ketentuan di bawah)',
      'Celana/rok hitam bahan/rapi',
      'Sepatu formal/tertutup',
      'Kerudung menyesuaikan warna kaos prodi (bagi yang berkerudung)',
      'Jas almamater POLTEKSI (untuk sesi penutupan)',
      'Name tag lengkap',
    ],
    catatan: 'Warna kaos per prodi — Teknologi Mesin: Coklat Berkerah · Teknologi Informasi: Navy Berkerah · Akuntansi: Abu-abu Muda · Administrasi Perkantoran: Kuning Mustard.',
  },
];

// ─── Groups Data ───────────────────────────────────────────────────────────
export const GROUPS_DATA: OrientationGroup[] = [
  {
    id: 'grp-1',
    name: 'Kelompok Beton',
    alias: 'Beton Mutu Tinggi',
    mentor: 'Kak Dimas Prasetyo (Teknik Mesin \'23)',
    mentorPhone: '0812-3456-7890',
    memberCount: 15,
    room: 'Ruang A.204 (Gedung Teknik)',
    motto: 'Kokoh Berintegritas, Membangun Negeri Tanpa Retak!',
    members: [
      { id: 'std-1', name: 'Ahmad Farhan Maulana', nim: '264101001', major: 'D4 Rekayasa Perawatan Bangunan', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Ketua Kelompok', avatarColor: '#b02a3e', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-2', name: 'Nabila Ayu Safitri', nim: '264101002', major: 'D3 Teknik Otomasi & Kontrol', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Wakil', avatarColor: '#002a5b', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-3', name: 'Bima Satria Wijaya', nim: '264101003', major: 'D4 Manajemen Logistik Industri', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#7a1f2b', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-4', name: 'Dewi Lestari Putri', nim: '264101004', major: 'D3 Teknik Perbaikan Mesin', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#5b0617', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-5', name: 'Rizky Alamsyah', nim: '264101005', major: 'D4 Rekayasa Perawatan Bangunan', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#004083', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-6', name: 'Siti Rahmadani', nim: '264101006', major: 'D3 Teknik Kimia Industri', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#8f0c28', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-7', name: 'Hafizh Nur Rohman', nim: '264101007', major: 'D4 Manajemen Logistik Industri', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#40000c', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-8', name: 'Clara Anindya', nim: '264101008', major: 'D3 Teknik Otomasi & Kontrol', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#b02a3e', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-9', name: 'Eko Prasetyo', nim: '264101009', major: 'D3 Teknik Perbaikan Mesin', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#002a5b', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-10', name: 'Gita Permatasari', nim: '264101010', major: 'D4 Rekayasa Perawatan Bangunan', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#7a1f2b', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-11', name: 'Hendri Kurniawan', nim: '264101011', major: 'D3 Teknik Kimia Industri', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#5b0617', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-12', name: 'Indah Kusuma Wardani', nim: '264101012', major: 'D4 Manajemen Logistik Industri', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#004083', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-13', name: 'Julian Dwi Saputra', nim: '264101013', major: 'D3 Teknik Otomasi & Kontrol', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#8f0c28', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-14', name: 'Karin Amelia', nim: '264101014', major: 'D4 Rekayasa Perawatan Bangunan', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#40000c', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
      { id: 'std-15', name: 'Lutfi Hakim', nim: '264101015', major: 'D3 Teknik Perbaikan Mesin', groupName: 'Kelompok Beton', groupId: 'grp-1', role: 'Anggota', avatarColor: '#b02a3e', mentorName: 'Kak Dimas Prasetyo', mentorContact: '0812-3456-7890' },
    ]
  },
  {
    id: 'grp-2',
    name: 'Kelompok Klinker',
    alias: 'Inti Peleburan',
    mentor: 'Kak Ratna Prameswari (Teknik Kimia \'23)',
    mentorPhone: '0813-9876-5432',
    memberCount: 15,
    room: 'Ruang A.205 (Gedung Teknik)',
    motto: 'Menyala Bersama, Membentuk Generasi Unggul!',
    members: [
      { id: 'std-16', name: 'Aditya Bagus Nugroho', nim: '264101016', major: 'D3 Teknik Kimia Industri', groupName: 'Kelompok Klinker', groupId: 'grp-2', role: 'Ketua Kelompok', avatarColor: '#5b0617', mentorName: 'Kak Ratna Prameswari', mentorContact: '0813-9876-5432' },
      { id: 'std-17', name: 'Bella Chandra Kirana', nim: '264101017', major: 'D4 Manajemen Logistik Industri', groupName: 'Kelompok Klinker', groupId: 'grp-2', role: 'Wakil', avatarColor: '#002a5b', mentorName: 'Kak Ratna Prameswari', mentorContact: '0813-9876-5432' },
      { id: 'std-18', name: 'Candra Danuarta', nim: '264101018', major: 'D3 Teknik Otomasi & Kontrol', groupName: 'Kelompok Klinker', groupId: 'grp-2', role: 'Anggota', avatarColor: '#b02a3e', mentorName: 'Kak Ratna Prameswari', mentorContact: '0813-9876-5432' },
    ]
  },
  {
    id: 'grp-3',
    name: 'Kelompok Semen',
    alias: 'Perekat Bangsa',
    mentor: 'Kak Fikri Ardiansyah (Logistik \'23)',
    mentorPhone: '0821-4455-6677',
    memberCount: 15,
    room: 'Ruang B.102 (Gedung Terpadu)',
    motto: 'Menyatukan Potensi, Memperkokoh Prestasi!',
    members: [
      { id: 'std-19', name: 'Dany Setiawan', nim: '264101019', major: 'D4 Rekayasa Perawatan Bangunan', groupName: 'Kelompok Semen', groupId: 'grp-3', role: 'Ketua Kelompok', avatarColor: '#7a1f2b', mentorName: 'Kak Fikri Ardiansyah', mentorContact: '0821-4455-6677' },
      { id: 'std-20', name: 'Elsa Febriyanti', nim: '264101020', major: 'D3 Teknik Otomasi & Kontrol', groupName: 'Kelompok Semen', groupId: 'grp-3', role: 'Wakil', avatarColor: '#004083', mentorName: 'Kak Fikri Ardiansyah', mentorContact: '0821-4455-6677' },
    ]
  },
  {
    id: 'grp-4',
    name: 'Kelompok Baja',
    alias: 'Tulangan Tangguh',
    mentor: 'Kak Wahyu Tri (Otomasi \'23)',
    mentorPhone: '0857-1122-3344',
    memberCount: 15,
    room: 'Ruang B.103 (Gedung Terpadu)',
    motto: 'Tak Goyah oleh Beban, Selalu Menopang Kemajuan!',
    members: [
      { id: 'std-21', name: 'Fajar Nugraha', nim: '264101021', major: 'D3 Teknik Perbaikan Mesin', groupName: 'Kelompok Baja', groupId: 'grp-4', role: 'Ketua Kelompok', avatarColor: '#40000c', mentorName: 'Kak Wahyu Tri', mentorContact: '0857-1122-3344' },
      { id: 'std-22', name: 'Giselle Clarissa', nim: '264101022', major: 'D4 Rekayasa Perawatan Bangunan', groupName: 'Kelompok Baja', groupId: 'grp-4', role: 'Wakil', avatarColor: '#8f0c28', mentorName: 'Kak Wahyu Tri', mentorContact: '0857-1122-3344' },
    ]
  },
  {
    id: 'grp-5',
    name: 'Kelompok Struktur',
    alias: 'Pilar Inovasi',
    mentor: 'Kak Anisa Rahma (Perawatan Bangunan \'23)',
    mentorPhone: '0896-5544-3322',
    memberCount: 15,
    room: 'Ruang C.301 (Gedung Lab)',
    motto: 'Presisi dalam Ukuran, Maksimal dalam Tindakan!',
    members: [
      { id: 'std-23', name: 'Haris Munandar', nim: '264101023', major: 'D4 Rekayasa Perawatan Bangunan', groupName: 'Kelompok Struktur', groupId: 'grp-5', role: 'Ketua Kelompok', avatarColor: '#5b0617', mentorName: 'Kak Anisa Rahma', mentorContact: '0896-5544-3322' },
    ]
  }
];

export const ALL_STUDENTS: StudentMember[] = GROUPS_DATA.flatMap(g => g.members);

// ─── FAQ Items (18 Q&A) ────────────────────────────────────────────────────
export const FAQ_ITEMS: FaqItem[] = [
  // Umum
  {
    question: 'Apa itu ORVOKS POLTEKSI 2026?',
    answer: 'ORVOKS (Orientasi Vokasi) adalah nama resmi PKKMB Politeknik Semen Indonesia — agenda tahunan resmi sebagai wadah orientasi, adaptasi, dan pembekalan bagi mahasiswa baru.',
    category: 'Umum',
  },
  {
    question: 'Apa tema ORVOKS 2026?',
    answer: '"ONBOARDING TALENT: Gerbang Vokasi, Talenta Berkarya."',
    category: 'Umum',
  },
  {
    question: 'Apa slogan/jargon kegiatan ini?',
    answer: 'Slogan ORVOKS: "Pondasi Kemandirian, Kokoh Berintegritas!" dan slogan Onboarding Talent: "Vokasi Kuat, Industri Hebat!"',
    category: 'Umum',
  },
  {
    question: 'Siapa maskot ORVOKS POLTEKSI?',
    answer: 'SIVO, maskot resmi POLTEKSI yang berperan sebagai "Tuan Rumah" dan "Mentor Utama" bagi mahasiswa baru.',
    category: 'Umum',
  },
  {
    question: 'Apa itu GEVO dan TABE?',
    answer: 'GEVO (Gerbang Vokasi) melambangkan fase awal penuh rasa ingin tahu dan semangat belajar; TABE (Talenta Berkarya) melambangkan puncak metamorfosis mahasiswa yang matang, percaya diri, dan siap berkarya.',
    category: 'Umum',
  },
  {
    question: 'Apa tujuan diadakannya ORVOKS 2026?',
    answer: 'Membentuk kejujuran & etika akademik, melatih kesiapan mental & kemandirian, menumbuhkan gotong royong/kerja tim, serta membantu mahasiswa baru mengenal fasilitas, kurikulum, dan lingkungan kampus.',
    category: 'Umum',
  },
  // Hak & Kewajiban
  {
    question: 'Apa saja hak peserta selama ORVOKS?',
    answer: 'Mendapat materi & bimbingan resmi, diperlakukan adil dan manusiawi tanpa diskriminasi/kekerasan, menggunakan fasilitas kampus yang diizinkan, serta menyampaikan aspirasi/keluhan/kondisi darurat kepada panitia.',
    category: 'Hak & Kewajiban',
  },
  {
    question: 'Apa kewajiban utama peserta?',
    answer: 'Menjaga nama baik kampus, menaati tata tertib, menghormati sesama peserta dan panitia, bersikap sopan, hadir tepat waktu (minimal 30 menit sebelum acara), serta mengenakan atribut dan dresscode lengkap.',
    category: 'Hak & Kewajiban',
  },
  {
    question: 'Bagaimana ketentuan rambut dan kerudung peserta?',
    answer: 'Putra: rambut rapi model 3-2-1 cm, warna hitam alami. Putri berkerudung: kerudung rapi sesuai ketentuan warna dresscode. Putri tidak berkerudung: rambut diikat kuncir kuda, tidak diwarnai.',
    category: 'Hak & Kewajiban',
  },
  // Larangan & Sanksi
  {
    question: 'Apa saja yang dilarang selama ORVOKS?',
    answer: 'Kekerasan fisik/verbal/cyberbullying, tindakan asusila atau ujaran SARA, kecurangan akademis/non-akademis, membawa rokok/vape/miras/narkoba, membawa senjata/benda berbahaya, merusak fasilitas kampus, serta memakai aksesoris/barang mewah berlebihan.',
    category: 'Larangan & Sanksi',
  },
  {
    question: 'Apa sanksi bila melanggar aturan?',
    answer: 'Sanksi berjenjang: SP 1 (pelanggaran ringan–sedang, wajib tugas substitusi edukatif), SP 2 (pelanggaran sedang–berat, bisa berupa penugasan khusus atau penangguhan kelulusan ORVOKS), dan SP 3 (pelanggaran berat/fatal, dinyatakan gugur/tidak lulus ORVOKS dan wajib mengulang tahun depan).',
    category: 'Larangan & Sanksi',
  },
  {
    question: 'Apa yang terjadi jika hukuman pengganti SP 1 tidak diselesaikan?',
    answer: 'Status sanksi otomatis naik menjadi SP 2.',
    category: 'Larangan & Sanksi',
  },
  {
    question: 'Apakah pelanggaran pidana ditangani panitia saja?',
    answer: 'Tidak. Pelanggaran hukum pidana/kriminal akan dilimpahkan ke pihak berwajib dan bidang kemahasiswaan POLTEKSI untuk proses sanksi akademis lebih lanjut.',
    category: 'Larangan & Sanksi',
  },
  // Kesehatan & Teknis
  {
    question: 'Bagaimana jika peserta sakit saat kegiatan berlangsung?',
    answer: 'Peserta dapat melapor kepada panitia ORVOKS atau mendatangi posko kesehatan yang disediakan.',
    category: 'Kesehatan & Teknis',
  },
  {
    question: 'Apakah peserta wajib sarapan sebelum kegiatan?',
    answer: 'Ya, seluruh peserta diimbau sarapan terlebih dahulu sebelum mengikuti rangkaian kegiatan ORVOKS.',
    category: 'Kesehatan & Teknis',
  },
  {
    question: 'Apakah peserta dengan riwayat penyakit perlu persiapan khusus?',
    answer: 'Ya, peserta dengan riwayat penyakit wajib membawa obat-obatan pribadi.',
    category: 'Kesehatan & Teknis',
  },
  {
    question: 'Kapan pertanyaan yang diajukan ke panitia akan dijawab?',
    answer: 'Pertanyaan yang masuk di atas pukul 19.00 WIB akan dibalas keesokan harinya.',
    category: 'Kesehatan & Teknis',
  },
  {
    question: 'Di mana penugasan ORVOKS akan diinformasikan?',
    answer: 'Seluruh penugasan disosialisasikan pada Sabtu, 5 September 2026 melalui akun media sosial resmi @pkkmb.polteksi.',
    category: 'Kesehatan & Teknis',
  },
];
