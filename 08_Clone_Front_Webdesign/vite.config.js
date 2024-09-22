import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-Learning-Projects/08_Clone_Front_Webdesign',

  plugins: [react()],
})
