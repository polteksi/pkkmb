# ORVOKS PKKMB POLTEKSI 2026

Dashboard informasi PKKMB Politeknik Semen Indonesia 2026. Proyek dibuat dengan React, TypeScript, Vite, dan Tailwind CSS.

## Menjalankan proyek

Persyaratan: Node.js dan npm.

```powershell
npm install
npm run dev
```

Pemeriksaan sebelum deployment:

```powershell
npm run lint
npm run build
```

## Status tanggal otomatis

Status jadwal dihitung otomatis berdasarkan tanggal WIB (`Asia/Jakarta`):

- Sebelum tanggal kegiatan: **Belum Dimulai**
- Tepat pada tanggal kegiatan: **Sedang Berlangsung**
- Setelah tanggal kegiatan: **Selesai**

Halaman juga otomatis memilih hari yang sedang berlangsung. Apabila tidak ada kegiatan pada tanggal tersebut, halaman memilih kegiatan berikutnya; setelah seluruh rangkaian selesai, halaman memilih hari terakhir. Browser memeriksa pergantian tanggal setiap satu menit, sehingga status tidak perlu diubah manual setiap hari.

### Mengganti tanggal kegiatan

Edit data pada `src/data/orientationData.ts`, di bagian `DAYS_DATA`:

```ts
{
  dayNumber: 1,
  dayName: 'Jumat',
  dateISO: '2026-09-18',
  date: '18 September 2026',
  shortDate: '18 Sep',
  // ...
}
```

`dateISO` wajib menggunakan format `YYYY-MM-DD` dan menjadi sumber status otomatis. Sesuaikan juga `date`, `shortDate`, dan `dayName` agar tulisan yang terlihat pengguna tetap cocok.

## Cara push ke GitHub

Repo utama menggunakan remote `polteksi` dan branch `main`.

```powershell
cd C:\\Users\\ASUS\\pkkmb
git status
npm run lint
npm run build
git add -A
git commit -m "jelaskan perubahan"
git pull --rebase polteksi main
git push polteksi main
```

Periksa hasil push:

```powershell
git status
git log -1 --oneline
git ls-remote polteksi refs/heads/main
```

Jika `git status` menampilkan `working tree clean` dan hash lokal sama dengan hash `polteksi/main`, perubahan sudah berhasil dikirim. Cloudflare akan menjalankan deployment otomatis apabila repo ini telah terhubung ke project Cloudflare.
