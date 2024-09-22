import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-Learning-Projects/07_Currency_convertor/currency_converter',
  plugins: [react()],
})
