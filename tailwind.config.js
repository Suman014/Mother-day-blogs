/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB', // Blue
        secondary: '#3B82F6', // Light blue
        accent: '#60A5FA', // Sky blue
        background: '#F8FAFC',
        'text-primary': '#1E293B',
        'text-secondary': '#64748B',
        'card-bg': '#FFFFFF',
        'hover-blue': '#1D4ED8',
        'gradient-start': '#F1F5F9',
        'gradient-end': '#E2E8F0',
        'soft-blue': '#DBEAFE',
        'border-color': '#E2E8F0',
      },
    },
  },
  plugins: [],
} 