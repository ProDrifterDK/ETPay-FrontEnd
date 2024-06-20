import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6F4FF',
          600: '#006DFF',
        },
        secondary: {
          100: '#F9F7FF',
          600: '#855CF8',
        },
        neutral: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['64px', '80px'],
        'display-xl': ['56px', '72px'],
        'display-lg': ['48px', '60px'],
        'display-md': ['36px', '48px'],
        'display-sm': ['30px', '40px'],
        'display-xs': ['24px', '32px'],
        'body-xl': ['20px', '28px'],
        'body-lg': ['18px', '28px'],
        'body-md': ['16px', '24px'],
        'body-sm': ['14px', '20px'],
        'body-xs': ['12px', '16px'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
