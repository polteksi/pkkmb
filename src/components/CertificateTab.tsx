import React, { useMemo, useState } from 'react';
import certificateFiles from 'virtual:certificate-manifest';

type PreviewState = 'idle' | 'loading' | 'ready' | 'error';

const normalizeName = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLocaleLowerCase('id-ID');

const getStudentName = (fileName: string) => fileName.replace(/\.pdf$/i, '');

const getCertificateUrl = (fileName: string) =>
  `/sertifikat/${encodeURIComponent(fileName)}`;

export const CertificateTab: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [previewState, setPreviewState] = useState<PreviewState>('idle');

  const normalizedQuery = normalizeName(query);
  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    return certificateFiles
      .filter((fileName) => normalizeName(getStudentName(fileName)).includes(normalizedQuery))
      .sort((first, second) => {
        const firstName = normalizeName(getStudentName(first));
        const secondName = normalizeName(getStudentName(second));
        const firstStartsWithQuery = firstName.startsWith(normalizedQuery);
        const secondStartsWithQuery = secondName.startsWith(normalizedQuery);

        if (firstStartsWithQuery !== secondStartsWithQuery) {
          return firstStartsWithQuery ? -1 : 1;
        }

        return firstName.localeCompare(secondName, 'id-ID');
      });
  }, [normalizedQuery]);

  const selectedName = selectedFile ? getStudentName(selectedFile) : '';
  const selectedUrl = selectedFile ? getCertificateUrl(selectedFile) : '';

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setSelectedFile(null);
    setPreviewState('idle');
  };

  const handleSelectCertificate = (fileName: string) => {
    setSelectedFile(fileName);
    setPreviewState('loading');
  };

  const handleClearSearch = () => {
    setQuery('');
    setSelectedFile(null);
    setPreviewState('idle');
  };

  const hasCertificates = certificateFiles.length > 0;

  return (
    <div className="tab-fade-in flex flex-col gap-5 pb-8">
      <section className="campus-card border border-[#5B2BBE]/12 bg-white p-5 shadow-xs dark:border-[#5B2BBE]/25 dark:bg-[#1B1638] sm:p-7">
        <div className="flex items-start gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#5B2BBE]/20 bg-[#5B2BBE]/10 text-[#5B2BBE] dark:border-[#5B2BBE]/35 dark:bg-[#5B2BBE]/30 dark:text-[#C39BFF]">
            <span className="material-symbols-outlined text-[27px]" aria-hidden="true">
              workspace_premium
            </span>
          </div>
          <div className="min-w-0">
            <h1 className="font-display text-xl font-black leading-tight tracking-tight text-[#22202A] dark:text-white sm:text-2xl">
              Sertifikat Kelulusan Orvoks
            </h1>
            <p className="mt-1 max-w-2xl text-xs font-medium leading-relaxed text-[#595662] dark:text-[#C4BED6] sm:text-sm">
              Cari nama lengkapmu. Pilih hasil yang sesuai untuk melihat sertifikat dan mengunduh file PDF.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="certificate-search"
            className="mb-2 block text-xs font-bold text-[#22202A] dark:text-[#F3F2F8]"
          >
            Nama mahasiswa
          </label>
          <div className="relative">
            <span
              className="material-symbols-outlined pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[21px] text-[#5B2BBE] dark:text-[#C39BFF]"
              aria-hidden="true"
            >
              search
            </span>
            <input
              id="certificate-search"
              type="search"
              value={query}
              onChange={handleQueryChange}
              placeholder="Contoh: Ahmad Ahsan Faisol"
              autoComplete="name"
              className="min-h-12 w-full rounded-xl border border-[#817B8B] bg-white py-3 pl-11 pr-12 text-sm font-semibold text-[#22202A] placeholder:text-[#6B6874] focus:border-[#5B2BBE] focus:outline-none focus:ring-3 focus:ring-[#5B2BBE]/25 dark:border-[#81799C] dark:bg-[#251F4A] dark:text-white dark:placeholder:text-[#B9B2CC] dark:focus:border-[#C39BFF] dark:focus:ring-[#C39BFF]/25"
              aria-describedby="certificate-search-help certificate-result-status"
            />
            {query && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-0.5 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-[#5E5968] transition-colors hover:bg-[#5B2BBE]/10 hover:text-[#5B2BBE] focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-[#5B2BBE] dark:text-[#C4BED6] dark:hover:bg-[#5B2BBE]/25 dark:hover:text-white"
                aria-label="Hapus pencarian"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">close</span>
              </button>
            )}
          </div>
          <p id="certificate-search-help" className="mt-2 text-[11px] font-medium text-[#595662] dark:text-[#C4BED6]">
            
          </p>
        </div>
      </section>

      <section
        className="campus-card overflow-hidden border border-[#5B2BBE]/12 bg-white shadow-xs dark:border-[#5B2BBE]/25 dark:bg-[#1B1638]"
        aria-labelledby="certificate-results-heading"
      >
        <div className="flex min-h-14 items-center justify-between gap-3 border-b border-[#E6E1EC] px-4 py-3 dark:border-[#393159] sm:px-5">
          <h2 id="certificate-results-heading" className="font-display text-sm font-extrabold text-[#22202A] dark:text-white">
            Hasil Pencarian
          </h2>
          <p
            id="certificate-result-status"
            className="text-[11px] font-bold text-[#595662] dark:text-[#C4BED6]"
            aria-live="polite"
          >
            {normalizedQuery ? `${results.length} nama ditemukan` : 'Ketik nama untuk mencari'}
          </p>
        </div>

        {!hasCertificates ? (
          <div className="flex min-h-44 flex-col items-center justify-center gap-2 px-5 py-8 text-center" role="alert">
            <span className="material-symbols-outlined text-[32px] text-[#A13D46] dark:text-[#FFB4B9]" aria-hidden="true">error</span>
            <p className="font-display text-sm font-bold text-[#22202A] dark:text-white">Daftar sertifikat tidak tersedia</p>
            <p className="max-w-md text-xs leading-relaxed text-[#595662] dark:text-[#C4BED6]">
              Muat ulang halaman. Jika masih kosong, hubungi panitia PKKMB.
            </p>
          </div>
        ) : !normalizedQuery ? (
          <div className="flex min-h-44 flex-col items-center justify-center gap-2 px-5 py-8 text-center">
            <span className="material-symbols-outlined text-[32px] text-[#5B2BBE] dark:text-[#C39BFF]" aria-hidden="true">person_search</span>
            <p className="font-display text-sm font-bold text-[#22202A] dark:text-white">Masukkan nama lengkapmu</p>
            <p className="max-w-md text-xs leading-relaxed text-[#595662] dark:text-[#C4BED6]">
              Kamu juga bisa mencari dengan sebagian nama, misalnya nama depan atau nama belakang.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="flex min-h-44 flex-col items-center justify-center gap-2 px-5 py-8 text-center">
            <span className="material-symbols-outlined text-[32px] text-[#5E5968] dark:text-[#C4BED6]" aria-hidden="true">search_off</span>
            <p className="font-display text-sm font-bold text-[#22202A] dark:text-white">Nama belum ditemukan</p>
            <p className="max-w-md text-xs leading-relaxed text-[#595662] dark:text-[#C4BED6]">
              Periksa ejaan nama sesuai data PKKMB, lalu coba lagi.
            </p>
          </div>
        ) : (
          <ul className="max-h-[24rem] divide-y divide-[#E6E1EC] overflow-y-auto dark:divide-[#393159]">
            {results.map((fileName) => {
              const studentName = getStudentName(fileName);
              const isSelected = selectedFile === fileName;

              return (
                <li key={fileName}>
                  <button
                    type="button"
                    onClick={() => handleSelectCertificate(fileName)}
                    className={`flex min-h-14 w-full cursor-pointer items-center gap-3 px-4 py-3 text-left transition-colors focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-[#5B2BBE] sm:px-5 ${
                      isSelected
                        ? 'bg-[#EFE9FF] text-[#43208F] dark:bg-[#5B2BBE]/35 dark:text-white'
                        : 'text-[#22202A] hover:bg-[#FAF9F6] dark:text-[#F3F2F8] dark:hover:bg-[#251F4A]'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span
                      className="material-symbols-outlined shrink-0 text-[24px] text-[#5B2BBE] dark:text-[#C39BFF]"
                      aria-hidden="true"
                    >
                      picture_as_pdf
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block break-words font-display text-xs font-bold leading-relaxed sm:text-sm">{studentName}</span>
                      <span className={`mt-0.5 block text-[11px] font-medium ${isSelected ? 'text-[#5B2BBE] dark:text-[#E1C9FF]' : 'text-[#595662] dark:text-[#C4BED6]'}`}>
                        Pilih untuk melihat sertifikat
                      </span>
                    </span>
                    <span className="material-symbols-outlined shrink-0 text-[20px]" aria-hidden="true">
                      {isSelected ? 'check_circle' : 'chevron_right'}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {selectedFile && (
        <section
          className="campus-card overflow-hidden border border-[#5B2BBE]/15 bg-white shadow-xs dark:border-[#5B2BBE]/30 dark:bg-[#1B1638]"
          aria-labelledby="certificate-preview-heading"
        >
          <div className="flex flex-col gap-3 border-b border-[#E6E1EC] p-4 dark:border-[#393159] sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#5B2BBE] dark:text-[#C39BFF]">Sertifikat terpilih</p>
              <h2 id="certificate-preview-heading" className="mt-0.5 break-words font-display text-sm font-extrabold text-[#22202A] dark:text-white sm:text-base">
                {selectedName}
              </h2>
            </div>
            <a
              href={selectedUrl}
              download={selectedFile}
              data-file-name={selectedFile}
              className="flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#5B2BBE] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#43208F] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#5B2BBE] dark:hover:bg-[#7D3BD6] sm:w-auto"
            >
              <span className="material-symbols-outlined text-[19px]" aria-hidden="true">download</span>
              <span>Unduh Sertifikat PDF</span>
            </a>
          </div>

          <div className="relative min-h-[32rem] bg-[#F3F1EC] dark:bg-[#0F0C20]">
            {previewState === 'loading' && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#F3F1EC] dark:bg-[#0F0C20]" role="status">
                <div className="flex flex-col items-center gap-2 px-5 text-center">
                  <span className="material-symbols-outlined animate-spin text-[30px] text-[#5B2BBE] dark:text-[#C39BFF]" aria-hidden="true">progress_activity</span>
                  <p className="text-xs font-bold text-[#22202A] dark:text-white">Memuat pratinjau sertifikat</p>
                </div>
              </div>
            )}

            {previewState === 'error' ? (
              <div className="flex min-h-[32rem] flex-col items-center justify-center gap-2 px-5 text-center" role="alert">
                <span className="material-symbols-outlined text-[32px] text-[#A13D46] dark:text-[#FFB4B9]" aria-hidden="true">broken_image</span>
                <p className="font-display text-sm font-bold text-[#22202A] dark:text-white">Pratinjau tidak dapat dimuat</p>
                <p className="max-w-md text-xs leading-relaxed text-[#595662] dark:text-[#C4BED6]">
                  Sertifikat tetap dapat diunduh melalui tombol di atas.
                </p>
              </div>
            ) : (
              <iframe
                key={selectedFile}
                src={`${selectedUrl}#view=FitH`}
                title={`Pratinjau sertifikat ${selectedName}`}
                className="h-[72dvh] min-h-[32rem] w-full border-0"
                onLoad={() => setPreviewState('ready')}
                onError={() => setPreviewState('error')}
              />
            )}
          </div>
        </section>
      )}
    </div>
  );
};
