module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tealCustom: {
          500: '#43C6AC', // Primary teal color
          600: '#3AB097', // Darker teal for hover states
          50: '#E7F9F5',  // Lighter teal for backgrounds
        },
      },
    },
    colors: {
      // Replace the blue palette
      blue: {
        500: '#43C6AC', // Replace default blue-500 with teal
        600: '#3AB097', // Replace default blue-600 with darker teal
        50: '#E7F9F5',  // Replace default blue-50 with lighter teal
      },
    },
  },
  plugins: [],
};
