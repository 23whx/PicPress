import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#E8F5E9',     // 淡绿色背景
          accent: '#F8BBD0', // 淡红色强调
          base: '#FFFFFF',   // 白色主色
        }
      },
    },
  },
  plugins: [],
} satisfies Config;

