import { DaySchedule, OrientationGroup, StudentMember, FaqItem, PerlengkapanItem, DresscodeHari } from '../types';

export const HERO_IMAGE_URL = '/images/orvoks.jpeg';

export const HERO_IMAGES = [
  '/images/orvoks.jpeg',
  '/images/orvoks2.png',
  '/images/orvoks3.png',
];

// ─── Rundown ORVOKS 2026
export const DAYS_DATA: DaySchedule[] = [
  {
    dayNumber: 1,
    dayName: 'Jumat',
    date: '18 September 2026',
    shortDate: '18 Sep',
    phase: 'Pra-PKKMB',
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
    shortDate: '19 Sep',
    phase: 'Pra-PKKMB',
    theme: 'Pra-PKKMB',
    progressPercent: 30,
    jamSesi: '07.30 – 12.00 WIB',
    kegiatan: [
      'Sosialisasi Bagian Kemahasiswaan (Termasuk Peraturan Anti Kekerasan)',
      'Sosialisasi Penugasan dan Pematangan Pelaksanaan PKKMB',
      'Pelaksanaan Persiapan Administrasi Kampus',
      'dll.',
    ],
  },
  {
    dayNumber: 3,
    dayName: 'Senin',
    date: '21 September 2026',
    shortDate: '21 Sep',
    phase: 'PKKMB Day 1',
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
    shortDate: '22 Sep',
    phase: 'PKKMB Day 2',
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
    shortDate: '23 Sep',
    phase: 'PKKMB Day 3',
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
    shortDate: '24 Sep',
    phase: 'PKKMB Day 4',
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
    shortDate: '25 Sep',
    phase: 'PKKMB Day 5',
    theme: 'PKKMB Day 5',
    progressPercent: 100,
    jamSesi: '07.00 – 21.00 WIB',
    kegiatan: [
      'Implementasi "Pondasi Kemandirian, Kokoh Berintegritas"',
       'Celebration Of GEVO and TABE',
      'Penutupan ORVOKS POLTEKSI 2026',
    ],
  },
];

// ─── Perlengkapan Hari-H (Poin A) — single source of truth ───────────────
export const PERLENGKAPAN_ITEMS: PerlengkapanItem[] = [
  { id: 'p-1',  text: 'Sarapan sebelum mengikuti rangkaian kegiatan.', mandatory: true },
  { id: 'p-2',  text: 'Name Tag yang sudah dibuat sebelum Pra-PKKMB.', mandatory: true },
  { id: 'p-3',  text: 'Name Tag dengan warna pita Merah Cabai.', mandatory: true },
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
// Image paths reference files in /public (day1.png – day7.png)
// Replace image paths to update dresscode example images per day.
export const DRESSCODE_DATA: DresscodeHari[] = [
  {
    label: 'Pra-PKKMB',
    tanggal: 'Jumat, 18 September 2026',
    image: '/day1.png',
    putra: [
      'Kemeja batik lengan panjang',
      'Rambut harus rapi sesuai ketentuan tata tertib',
      'Celana panjang dengan bahan non-jeans, dan tidak ketat',
      'Sepatu bebas dan menggunakan kaos kaki',
      'Memakai Name Tag, dengan ketentuan warna (peserta laki-laki) dan\nwarna pita sesuai kelompok.',
    ],
    putri: [
      'Kemeja batik lengan panjang',
      'Menggunakan hijab rapi bagi yang berhijab, dan menata rambut dengan\nrapi bagi yang non-hijab. Rambut harus rapi sesuai ketentuan tata tertib',
      'Celana/Rok panjang dengan bahan non-jeans, dan tidak ketat',
      'Sepatu bebas dan menggunakan kaos kaki',
      'Memakai Name Tag, dengan ketentuan (peserta Perempuan) dan warna\npita sesuai kelompok.',
    ],
    wajibMembawa: [
      '1. Ijazah Copy',
      '2. Transkip Copy',
      '3. KK Copy',
      '4. KTP Copy',
      '5. Akte Copy',
      '6. Pas photo terbaru 4×6 background biru asli',
      '->\ndikumpulkan dalam\nsatu map coklat',
    ],
  },
  {
    label: 'Pra-PKKMB',
    tanggal: 'Sabtu, 19 September 2026',
    image: '/day1.png',
    putra: [
      'Kemeja batik lengan panjang',
      'Rambut harus rapi sesuai ketentuan tata tertib',
      'Celana panjang dengan bahan non-jeans, dan tidak ketat',
      'Sepatu bebas dan menggunakan kaos kaki',
      'Memakai Name Tag, dengan ketentuan warna (peserta laki-laki) dan\nwarna pita sesuai kelompok.',
    ],
    putri: [
      'Kemeja batik lengan panjang',
      'Menggunakan hijab rapi bagi yang berhijab, dan menata rambut dengan\nrapi bagi yang non-hijab. Rambut harus rapi sesuai ketentuan tata tertib',
      'Celana/Rok panjang dengan bahan non-jeans, dan tidak ketat',
      'Sepatu bebas dan menggunakan kaos kaki',
      'Memakai Name Tag, dengan ketentuan (peserta Perempuan) dan warna\npita sesuai kelompok.',
    ],
    wajibMembawa: [
      '1. Ijazah Copy',
      '2. Transkip Copy',
      '3. KK Copy',
      '4. KTP Copy',
      '5. Akte Copy',
      '6. Pas photo terbaru 4×6 background biru asli',
      '->\ndikumpulkan dalam\nsatu map coklat',
    ],
  },
  {
    label: 'PPKKMB Day 1',
    tanggal: 'Senin, 21 September 2026',
    image: '/day2.png',
    putra: [
      'Helm dan Name Tag, dengan ketentuan warna biru\n(peserta laki-laki) dan warna pita sesuai kelompok.',
      'Kemeja putih lengan panjang',
      'Berdasi merah maroon',
      'celana hitam panjang berbahan non-jeans dan tidak ketat',
      'Menggunakan ikat pinggang hitam',
      'Pita lengan penanda prodi, lengan sebelah kanan.',
      'Pita lengan warna hitam penanda sakit (bagi yang sakit),\nlengan sebelah kiri.',
      'Rambut harus rapi sesuai ketentuan tata tertib',
      'Sepatu full hitam',
      'Kaos kaki putih panjang.',
    ],
    putri: [
      'Memakai Helm dan Name Tag, dengan ketentuan warna pink\n(peserta Perempuan) dan warna pita sesuai kelompok',
      'Menggunakan hijab hitam segi empat rapi bagi yang berhijab\nsesuai ketentuan tata tertib',
      'Bagi yang tidak berkerudung, rambut diikat rapi kuncir kuda,\nbagi peserta yang memiliki rambut pendek dan tidak dapat\ndiikat, rambut dapat dirapikan, atau dijepit di bagian belakang\ntelinga.',
      'Kemeja putih lengan panjang',
      'Berdasi merah maroon',
      'Rok hitam panjang dengan bahan non-jeans dan tidak ketat',
      'Sepatu full hitam',
      'Kaos kaki putih panjang',
      'Menggunakan ikat pinggang hitam\ndihimbau menggunakan legging panjang',
      'Pita lengan penanda prodi, lengan sebelah kanan.',
      'Pita lengan warna hitam penanda sakit (bagi yang sakit),\nlengan sebelah kiri',
    ],
  },
  {
    label: 'PPKKMB Day 2',
    tanggal: 'Selasa, 22 September 2026',
    image: '/day3.png',
    putra: [
      'Helm dan Name Tag, dengan ketentuan warna biru\n(peserta laki-laki) dan warna pita sesuai kelompok.',
      'Rambut harus rapi sesuai ketentuan tata tertib.',
      'Pita lengan penanda prodi, lengan sebelah kanan.',
      'Pita lengan warna hitam penanda sakit (bagi yang sakit),\nlengan sebelah kiri.',
      'Baju merah lengan panjang.',
      'Celana trining berwarna hitak, dan tidak ketat.',
      'Sepatu Bertali, berwarna bebas.',
    ],
    putri: [
      'Helm dan Name Tag, dengan ketentuan warna pink\n(peserta perempuan) dan warna pita sesuai kelompok',
      'Baju merah lengan panjang',
      'Celana trining berwarna hitak, dan tidak ketat',
      'Sepatu Bertali, berwarna bebas',
      'Hijab Sport bagi yang berhijab, kuncir kuda bagi yang\ntidak berhijab.',
      'Pita lengan penanda prodi, lengan sebelah kanan.',
      'Pita lengan berwarna hitam penanda sakit (bagi yang\nsakit), lengan sebelah kiri.',
    ],
    membawaGanti: [
      'Kemeja putih lengan panjang berdasi merah maroon.',
      'Celana hitak panjang dengan bahan\nnon-jeans dan tidak ketat.',
      'Sepatu full hitak, Kaos kaki Putih, panjang minimal tiga\njari di atas mata kaki.',
      'Menggunakan ikat pinggang hitak.',
    ],
  },
  {
    label: 'PPKKMB Day 3',
    tanggal: 'Rabu, 23 September 2026',
    image: '/day2.png',
    putra: [
      'Helm dan Name Tag, dengan ketentuan warna biru (peserta\nlaki-laki) dan warna pita sesuai kelompok.',
      'Rambut harus rapi sesuai ketentuan tata tertib.',
      'Pita lengan penanda prodi, lengan sebelah kanan.',
      'Pita lengan warna hitam penanda sakit (bagi yang sakit),\nlengan sebelah kiri.',
      'Kemeja putih lengan panjang berdasi merah maroon.',
      'Celana hitak panjang dengan bahan\nnon-jeans dan tidak ketat.',
      'Sepatu full hitak, Kaos kaki Putih, panjang minimal tiga jari\ndi atas mata kaki.',
      'Menggunakan ikat pinggang hitak.',
    ],
    putri: [
      'Helm dan Name Tag, dengan ketentuan warna pink\n(peserta perempuan) dan warna pita sesuai kelompok',
      'Kemeja putih lengan panjang berdasi merah maroon',
      'Mengenakan kerudung segi empat berwarna hitam, bagi\nyang berkerudung.',
      'Bagi yang tidak berkerudung, rambut diikat rapi kuncir\nkuda, bagi peserta yang memiliki rambut pendek dan tidak\ndapat diikat, rambut dapat dirapikan, atau dijepit di bagian belakang\ntelinga.',
      'Rok hitak panjang dengan bahan non-jeans dan tidak ketat',
      'Sepatu full hitak......',
      'Kaos kaki putih panjang.',
      'Menggunakan ikat pinggang hitak',
      'Diimbau menggunakan legging panjang.',
      'Pita lengan penanda prodi, lengan sebelah kanan.',
      'Pita lengan berwarna hitam penanda sakit (bagi yang\nsakit), lengan sebelah kiri.',
    ],
    membawaGanti: [
      'Kemeja batik lengan panjang',
      'Celana hitak panjang dengan bahan\nnon-jeans dan tidak ketat.',
      'Sepatu full hitak, Kaos kaki Putih,\npanjang minimal tiga jari di atas mata kaki.',
      'Menggunakan ikat pinggang hitak.',
    ],
  },
  {
    label: 'PPKKMB Day 4',
    tanggal: 'Kamis, 24 September 2026',
    image: '/day1.png',
    putra: [
      'Helm dan Name Tag, dengan ketentuan warna biru (peserta\nlaki-laki) dan warna pita sesuai kelompok.',
      'Kemeja batik lengan panjang',
      'Pita lengan penanda prodi, lengan sebelah kanan.',
      'Pita lengan warna hitam penanda sakit (bagi yang sakit),\nlengan sebelah kiri.',
      'Rambut harus rapi sesuai ketentuan tata tertib',
      'Celana hitak panjang dengan bahan\ntidak ketat',
      'Sepatu bebas, Kaos kaki Putih, panjang minimal tiga jari di\natas mata kaki',
      'Menggunakan ikat pinggang hitak (Kondisional)',
    ],
    putri: [
      'Helm dan Name Tag, dengan ketentuan warna pink\n(peserta Perempuan) dan warna pita sesuai kelompok.',
      'Kemeja batik lengan panjang',
      'Pita lengan penanda prodi, lengan sebelah kanan.',
      'Pita lengan berwarna hitam penanda sakit (bagi yang\nsakit), lengan sebelah kiri.',
      'Mengenakan kerudung segi empat berwarna bebas, bagi\nyang berkerudung.',
      'Bagi yang tidak berkerudung, rambut diikat rapi kuncir\nkuda, bagi peserta yang memiliki rambut pendek dan tidak\ndapat diikat, rambut dapat dirapikan, atau dijepit di bagian belakang\ntelinga.',
      'Rok/Celana panjang dengan bahan non-jeans dan tidak\nketat',
      'Sepatu bebas',
      'Kaos kaki putih panjang minimal tiga jari di atas mata kaki',
      'Menggunakan ikat pinggang hitak (Kondisional)',
      'Diimbau menggunakan legging panjang (Bagi yang\nmengenakan rok)',
    ],
  },
  {
    label: 'PPKKMB Day 5',
    tanggal: 'Jumat, 25 September 2026',
    image: '/day6.png',
    images: ['/day6.png', '/day7.png'],
    putra: [
      'Helm dan Name Tag, dengan ketentuan warna biru (peserta\nlaki-laki) dan warna pita sesuai kelompok',
      'Rambut harus rapi sesuai ketentuan tata tertib.',
      'Pita lengan penanda prodi, lengan sebelah kanan.',
      'Pita lengan warna hitam penanda sakit (bagi yang sakit),\nlengan sebelah kiri.',
      'Baju hitam lengan panjang.',
      'Celana trining berwarna hitak, dan tidak ketat.',
      'Sepatu Bertali, berwarna bebas.',
    ],
    putri: [
      'Helm dan Name Tag, dengan ketentuan warna pink (peserta\nperempuan) dan warna pita sesuai kelompok',
      'Baju hitak lengan panjang',
      'Celana trining berwarna hitak, dan tidak ketat',
      'Sepatu Bertali, berwarna bebas',
      'Hijab Sport bagi yang berhijab, kuncir kuda bagi yang tidak\nberhijab.',
      'Pita lengan penanda prodi, lengan sebelah kanan.',
      'Pita lengan berwarna hitam penanda sakit (bagi yang\nsakit), lengan sebelah kiri.',
    ],
    membawaGanti: [
      'Kemeja putih lengan panjang berdasi merah maroon',
      'Mengenakan kerudung segi empat berwarna hitam, bagi yang\nberkerudung.',
      'Bagi yang tidak berkerudung, rambut diikat rapi kuncir\nkuda, bagi peserta yang memiliki rambut pendek dan tidak\ndapat diikat, rambut dapat dirapikan, atau dijepit di bagian belakang\ntelinga.',
      'Rok hitak panjang dengan bahan non-jeans dan tidak ketat',
      'Sepatu full hitak, Kaos kaki putih panjang',
      'Menggunakan ikat pinggang hitak',
      'Diimbau menggunakan legging panjang',
      'Almamater (diimbau untuk tidak menggunakan terlebih\ndahulu, menunggu intruksi dari panitia)',
    ],
    catatan: 'Seluruh peserta dapat membawa baju ganti sesuai dengan kostum pementasan, dan baju tiap prodi dengan warna sebagai berikut\n\nKaos Coklat\nTeknologi Mesin\n\nKaos Abu-abu Muda\nAkuntansi\n\nKaos Navy\nTeknologi Informasi\n\nKaos Kuning Mustard\nAdministrasi Perkantoran',
  },
];

// ─── Groups Data ───────────────────────────────────────────────────────────
// Default kosong saat website diluncurkan (belum diumumkan oleh panitia)
export const GROUPS_DATA: OrientationGroup[] = [];

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
