import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSSL from '@vitejs/plugin-basic-ssl';
import vitePluginRequire from 'vite-plugin-require';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSSL(), vitePluginRequire.default()],
  server: {
    https: true,
  },
});
