import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {readdirSync} from 'node:fs';
import path from 'path';
import {defineConfig} from 'vite';

const VIRTUAL_CERTIFICATE_MANIFEST = 'virtual:certificate-manifest';
const RESOLVED_CERTIFICATE_MANIFEST = `\0${VIRTUAL_CERTIFICATE_MANIFEST}`;

function certificateManifestPlugin() {
  return {
    name: 'certificate-manifest',
    resolveId(id: string) {
      if (id === VIRTUAL_CERTIFICATE_MANIFEST) {
        return RESOLVED_CERTIFICATE_MANIFEST;
      }
    },
    load(id: string) {
      if (id !== RESOLVED_CERTIFICATE_MANIFEST) {
        return;
      }

      const certificateDirectory = path.resolve(__dirname, 'public', 'sertifikat');
      const certificateFiles = readdirSync(certificateDirectory)
        .filter((fileName) => fileName.toLocaleLowerCase('id-ID').endsWith('.pdf'))
        .sort((first, second) => first.localeCompare(second, 'id-ID'));

      return `export default ${JSON.stringify(certificateFiles)};`;
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), certificateManifestPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
