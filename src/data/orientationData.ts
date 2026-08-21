import { DaySchedule, OrientationGroup, StudentMember, CampusLocation, FaqItem } from '../types';

export const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGwRf_cukRPQm8PNOFSJLHrBtmw1HW1AelFAXdvRHgjyxN1mG6FAqcFd2d3TJIBrQCs0KSCEHNELt6xhcM6Pj8wn9kwLD43Li7Zc_kFxprPqXb8Zuip1VSI_5tJVTS0yH6N6v6D2VhL2Wr8VYZhUTjlKxjUErl8gHr7_qvOPG00K6FUuRgG8PCVpXVIxlsVqZ8aYlDzuwn-uOjKZmrdKm68CHkH6J-obJW5UI5i9THo2VKvzNDFeTF';

export const DAYS_DATA: DaySchedule[] = [
  {
    dayNumber: 1,
    dayName: 'Senin',
    date: '25 Agustus 2026',
    theme: 'Upacara Pembukaan & Fondasi Vokasi',
    progressPercent: 20,
    primaryLocation: 'Lapangan Utama Politeknik',
    attributes: [
      { id: 'att-1-1', name: 'Kemeja Putih Lengan Panjang + Celana/Rok Hitam', checked: true, mandatory: true },
      { id: 'att-1-2', name: 'Dasi Hitam & Sepatu Pantofel Hitam', checked: true, mandatory: true },
      { id: 'att-1-3', name: 'Name Tag Orvoks & Buku Panduan', checked: true, mandatory: true },
      { id: 'att-1-4', name: 'Tumbler Air Minum 1L', checked: true, mandatory: false },
    ],
    sessions: [
      { time: '06.30 - 07.15', title: 'Registrasi & Apel Pagi Mahasiswa Baru', location: 'Plaza Rektorat', type: 'ceremony' },
      { time: '07.30 - 09.30', title: 'Upacara Sidang Terbuka Senat & Pembukaan PKKMB ORVOKS', speaker: 'Direktur Politeknik Semen Indonesia', location: 'Lapangan Utama Politeknik', type: 'ceremony' },
      { time: '10.00 - 11.45', title: 'Kuliah Umum: Peran Vokasi dalam Hilirisasi Industri Semen', speaker: 'Direktur PT Semen Indonesia (Persero) Tbk', location: 'Aula Utama Lt. 3', type: 'workshop' },
      { time: '11.45 - 13.00', title: 'Ishoma & Makan Siang Bersama Kelompok', location: 'Selasar Gedung Teknik', type: 'break' },
      { time: '13.00 - 15.30', title: 'Orientasi Sistem Akademik & Pengenalan SIAKAD', speaker: 'Bagian Administrasi Akademik', location: 'Lab Komputer A & B', type: 'workshop' },
    ]
  },
  {
    dayNumber: 2,
    dayName: 'Selasa',
    date: '26 Agustus 2026',
    theme: 'Kenali Dunia Kampusmu',
    progressPercent: 40,
    primaryLocation: 'Aula Utama',
    attributes: [
      { id: 'att-2-1', name: 'Kaos Almamater + Bawahan Hitam', checked: true, mandatory: true, note: 'Wajib kenakan kaos almamater resmi ORVOKS' },
      { id: 'att-2-2', name: 'Sepatu Kets Hitam Bertali', checked: true, mandatory: true },
      { id: 'att-2-3', name: 'ID Card / Name Tag Kelompok Beton', checked: true, mandatory: true },
      { id: 'att-2-4', name: 'Buku Saku Catatan & Alat Tulis', checked: true, mandatory: false },
    ],
    sessions: [
      { time: '07.00 - 07.30', title: 'Presensi & Pengecekan Atribut Pagi', location: 'Lobi Utama Gedung A', type: 'ceremony' },
      { time: '07.30 - 09.30', title: 'Pengenalan Jurusan & Program Studi Vokasi Terapan', speaker: 'Ketua Jurusan & Dosen Pembina', location: 'Aula Utama Lt. 3', type: 'workshop' },
      { time: '09.45 - 11.45', title: 'Campus Tour: Workshop Mesin, Lab Otomasi & Beton', speaker: 'Duta Kampus ORVOKS', location: 'Kawasan Workshop Vokasi', type: 'tour' },
      { time: '11.45 - 13.00', title: 'Ishoma & Yel-Yel Antar Kelompok', location: 'Amfiteater Terbuka', type: 'games' },
      { time: '13.00 - 15.30', title: 'Simulasi Proyek Rekayasa & Praktik K3 Industri', speaker: 'Instruktur K3 PT Semen Indonesia', location: 'Workshop Konstruksi & Fabrikasi', type: 'workshop' },
    ]
  },
  {
    dayNumber: 3,
    dayName: 'Rabu',
    date: '27 Agustus 2026',
    theme: 'Inovasi & Karakter Teknokrat Muda',
    progressPercent: 60,
    primaryLocation: 'Auditorium Gedung B',
    attributes: [
      { id: 'att-3-1', name: 'Batik Bebas Rapi + Celana/Rok Bahan Hitam', checked: false, mandatory: true },
      { id: 'att-3-2', name: 'Sepatu Formal / Tertutup', checked: false, mandatory: true },
      { id: 'att-3-3', name: 'Alat Peraga Mini Maket Kelompok', checked: false, mandatory: true },
    ],
    sessions: [
      { time: '07.00 - 08.00', title: 'Morning Energizer & Drill Disiplin', location: 'Lapangan Basket', type: 'games' },
      { time: '08.15 - 10.30', title: 'Talkshow Technopreneurship & Inovasi Material Masa Depan', speaker: 'Alumni Sukses & Founder Startup', location: 'Auditorium Gedung B', type: 'workshop' },
      { time: '10.45 - 12.00', title: 'Pengenalan Organisasi Mahasiswa (BEM, DPM, Himpunan)', speaker: 'Presiden Mahasiswa', location: 'Auditorium Gedung B', type: 'workshop' },
      { time: '13.00 - 16.00', title: 'Expo Unit Kegiatan Mahasiswa (UKM) & Open Recruitment', location: 'Gedung Serbaguna', type: 'tour' },
    ]
  },
  {
    dayNumber: 4,
    dayName: 'Kamis',
    date: '28 Agustus 2026',
    theme: 'Leadership & Solidaritas Tim Vokasi',
    progressPercent: 80,
    primaryLocation: 'Area Outbound Kampus',
    attributes: [
      { id: 'att-4-1', name: 'Kaos Olahraga Kampus + Celana Training', checked: false, mandatory: true },
      { id: 'att-4-2', name: 'Topi Lapangan & Sepatu Olahraga', checked: false, mandatory: true },
      { id: 'att-4-3', name: 'Handuk Kecil & Botol Minum', checked: false, mandatory: false },
    ],
    sessions: [
      { time: '06.30 - 07.30', title: 'Senam Pagi Bersama & Pemanasan', location: 'Lapangan Utama', type: 'games' },
      { time: '07.45 - 12.00', title: 'Outbound: Problem Solving & Simulasi Rantai Pasok', location: 'Taman Konservasi Kampus', type: 'games' },
      { time: '13.00 - 15.30', title: 'Penyusunan Rencana Studi & Mentoring Bersama Dosen Wali', location: 'Ruang Kelas Terpadu', type: 'workshop' },
    ]
  },
  {
    dayNumber: 5,
    dayName: 'Jumat',
    date: '29 Agustus 2026',
    theme: 'Inagurasi & Pengukuhan Insan Vokasi',
    progressPercent: 100,
    primaryLocation: 'Main Hall & Panggung Budaya',
    attributes: [
      { id: 'att-5-1', name: 'Jaket Almamater Lengkap + Atribut Resmi', checked: false, mandatory: true },
      { id: 'att-5-2', name: 'Kemeja Putih & Dasi Resmi', checked: false, mandatory: true },
      { id: 'att-5-3', name: 'Glow Stick & Atribut Inagurasi', checked: false, mandatory: false },
    ],
    sessions: [
      { time: '07.30 - 10.00', title: 'Pentas Seni & Gelar Budaya Karya Mahasiswa Baru', location: 'Panggung Utama', type: 'games' },
      { time: '10.15 - 11.30', title: 'Apresiasi Kelompok Terbaik & Lomba Kreativitas', location: 'Main Hall', type: 'ceremony' },
      { time: '13.30 - 15.30', title: 'Upacara Penutupan Resmi & Pelantikan Mahasiswa Baru', speaker: 'Direktur Politeknik', location: 'Main Hall', type: 'ceremony' },
    ]
  }
];

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

export const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    id: 'loc-1',
    name: 'Aula Utama',
    building: 'Gedung Utama (Gedung A)',
    floor: 'Lantai 3',
    capacity: '800 Orang',
    description: 'Pusat kegiatan serbaguna kampus untuk sidang terbuka, kuliah perdana, dan inagurasi mahasiswa baru.',
    tags: ['Acara Utama', 'AC', 'Sound System Terintegrasi', 'Wi-Fi Kampus'],
    directions: 'Dari gerbang utama masuk ke Lobi Gedung A, gunakan lift ke Lt. 3 atau tangga sayap kanan.',
    coordinates: '-7.162384,112.639737',
  },
  {
    id: 'loc-2',
    name: 'Workshop Fabrikasi & Konstruksi Beton',
    building: 'Gedung Workshop Vokasi Terapan',
    floor: 'Lantai 1',
    capacity: '250 Orang',
    description: 'Fasilitas praktik rekayasa perbaikan mesin, pengujian kuat tekan beton, dan simulator otomasi industri.',
    tags: ['Lab Praktik', 'Wajib APD', 'Alat Uji Mutu', 'CNC Router'],
    directions: 'Berjalan ke arah timur dari Aula Utama melewati koridor kanopi hijau, tepat di samping hanggar uji bahan.',
    coordinates: '-7.162123,112.640123',
  },
  {
    id: 'loc-3',
    name: 'Amfiteater Terbuka & Plaza Kreatif',
    building: 'Area Terbuka Kampus Tengah',
    floor: 'Area Luar (Ground)',
    capacity: '600 Orang',
    description: 'Area pertunjukan seni, yel-yel kelompok, dan istirahat interaktif di bawah naungan pohon rindang.',
    tags: ['Outdoor', 'Panggung Terbuka', 'Food Truck Area', 'Wi-Fi Area'],
    directions: 'Terletak di jantung kampus tepat antara Gedung A dan Gedung Workshop.',
    coordinates: '-7.162543,112.639912',
  },
  {
    id: 'loc-4',
    name: 'Ruang A.204 (Sekretariat Kelompok Beton)',
    building: 'Gedung Teknik & Komputer (Gedung A)',
    floor: 'Lantai 2',
    capacity: '40 Orang',
    description: 'Ruang diskusi dan evaluasi tim harian bersama mentor pendamping Kak Dimas Prasetyo.',
    tags: ['Ruang Kelas', 'Proyektor', 'AC'],
    directions: 'Naik ke Lantai 2 Gedung A, belok kiri setelah tangga utama.',
    coordinates: '-7.162384,112.639737',
  },
  {
    id: 'loc-5',
    name: 'Perpustakaan Digital & Learning Center',
    building: 'Gedung Rektorat Terpadu',
    floor: 'Lantai 2 & 3',
    capacity: '300 Orang',
    description: 'Pusat referensi riset, jurnal internasional teknik, dan ruang co-working mahasiswa vokasi.',
    tags: ['Zona Hening', 'Komputer Riset', 'Charging Station'],
    directions: 'Berada di sayap barat dekat Gedung Administrasi Pusat.',
    coordinates: '-7.162811,112.639234',
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Bagaimana jika saya terlambat atau berhalangan hadir?',
    answer: 'Mahasiswa baru wajib menghubungi mentor kelompok minimal 30 menit sebelum apel pagi dimulai dan menyertakan surat keterangan sakit/izin resmi dari orang tua/wali.',
    category: 'Tata Tertib'
  },
  {
    question: 'Apakah atribut name tag dan buku saku wajib dibawa setiap hari?',
    answer: 'Ya! Name tag dan Buku Saku ORVOKS 2026 merupakan atribut identitas wajib yang akan diperiksa oleh Divisi Disiplin dan Evaluasi pada saat presensi pagi.',
    category: 'Atribut'
  },
  {
    question: 'Di mana tempat parkir dan titik penurunan (drop zone) peserta?',
    answer: 'Drop zone kendaraan roda 4 berada di Gerbang Utara. Parkir sepeda motor peserta dialokasikan di Lapangan Parkir Timur dengan menunjukkan kartu peserta PKKMB.',
    category: 'Fasilitas'
  },
  {
    question: 'Apa saja sanksi jika melanggar ketentuan tata tertib?',
    answer: 'Sanksi bersifat edukatif dan konstruktif, mulai dari teguran lisan, tugas resume tambahan jurnal vokasi, hingga penundaan sertifikat kelulusan PKKMB yang menjadi syarat yudisium.',
    category: 'Tata Tertib'
  }
];
