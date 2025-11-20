import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://3script0r.github.io/CAT',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
 
});
