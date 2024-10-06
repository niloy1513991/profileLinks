import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/profileLinks/', // Ensure this line is correct
  plugins: [react()],
});
