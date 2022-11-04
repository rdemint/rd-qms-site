/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
      extend: {
          colors: {
              'accent-100': '#FFF6F4',
              'accent-200': '#FFF3F0',
              'accent-300': '#FEE2E2',
              'accent-400': '#FECED2',
              'accent-500': '#FEBAC1',
              'accent-600': '#FE94A3',
              'accent-700': '#FE94A3',
              'accent-800': '#FD496E',
              'accent-900': '#FD3762',
              'primary-100': '#C5EAFF',
              'primary-200': '#8BD6FF',
              'primary-300': '#53C2FF',
              'primary-400': '#2DB4FF',
              'primary-500': '#05A6FF',
              'primary-600': '#008FDE',
              'primary-700': '#0076B8',
              'primary-800': '#005E92',
              'primary-900': '#004369',
              'accent2-100': '#FEF7E6',
              'accent2-200': '#FEF0D2',
              'accent2-300': '#FCEECF',
              'accent2-400': '#FEEABE',
              'accent2-500': '#FEE5AC',
              'accent2-600': '#FEDE98',
              'accent2-700': '#FDD273',
              'accent2-800': '#FDCC5F',
              'accent2-900': '#FCB414'
          }
      },
  },
    plugins: [
    require('@tailwindcss/typography')
    ],
}
