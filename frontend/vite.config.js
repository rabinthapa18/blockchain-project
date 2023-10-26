import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

let envConfig;
if (process.env.NODE_ENV === 'development') {
  envConfig = require('./config.development');
}
else {
  throw new Error(`Unknown NODE_ENV: ${process.env.NODE_ENV}`);
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], server: {
    port: 5000,
    host: '0.0.0.0',
  },
  define: {
    'import.meta.env.VUE_APP_SERVER': JSON.stringify(envConfig.VUE_APP_SERVER),
  }
})
