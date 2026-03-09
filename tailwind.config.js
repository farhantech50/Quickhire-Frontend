/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // semantic colors
        text: {
          DEFAULT: "#1F2937", // dark gray text
          light: "#6B7280", // secondary text
          dark: "#F9FAFB", // white text for dark mode
          muted: "#9CA3AF", // disabled text
          teal: "#0D9488",

          // Status colors
          danger: "#DC2626", // red-600
          "danger-hover": "#B91C1C", // red-700
          warning: "#F59E0B", // amber-500
          "warning-hover": "#B45309",
          success: "#16A34A", // green-600
          "success-hover": "#15803D",
          info: "#0EA5E9", // sky-500
          "info-hover": "#0369A1",

          reset: "#6B7280", // gray-500

          // Action colors
          edit: "#a7c957", // light olive green
          "edit-hover": "#7eab0a", // dark olive green
          access: "#219ebc",
          "access-hover": "#1565C0",

          // Additional accent colors
          purple: "#7C3AED", // violet-600
          "purple-hover": "#5B21B6",
          orange: "#FB923C", // orange-400
          "orange-hover": "#EA580C",
          pink: "#EC4899", // pink-500
          "pink-hover": "#BE185D",
        },

        background: {
          DEFAULT: "#fdfffc", // white background
          dark: "#6c757d", // lighter gray
          muted: "#F3F4F6", // card background / light gray
          lightTeal: "#5bc0be", // light teal
          modalHeader: "#74a57f", //olive
          teal: "#0D9488",
        },
        card: {
          DEFAULT: "#FFFFFF", // white card
          dark: "#134E4A", // dark teal card
          border: "#D1D5DB", // gray-300
          lightPink: "#FCE7F3", // Tailwind bg-pink-100
          lightBlue: "#DBEAFE", // Tailwind bg-blue-100
          lightGreen: "#DCFCE7",
          lightYellow: "#FFFFED",
          lightGray: "#f9f9f9",
        },
        button: {
          primary: "#0D9488", // teal-600
          "primary-hover": "#0F766E", // teal-700
          secondary: "#FFFFFF", // white button
          "secondary-hover": "#E5F9F8", // light teal hover
          danger: "#DC2626", // red-600
          "danger-hover": "#B91C1C", // red-700
          reset: "#6B7280", // gray-500
          edit: "#a7c957", //light olive green
          "edit-hover": "#7eab0a", //dark olive green
          access: "#219ebc",
          "access-hover": "#1565C0",
        },
        border: {
          DEFAULT: "#D1D5DB", // gray-300
          dark: "#0F766E", // teal border in dark mode
          green: "#a7c957", // light olive green
        },
        navbar: {
          DEFAULT: "#FFFFFF", // lightest gray
          dark: "#ced4da", // light gray
          text: "#FFFFFF", // white text
          logout: " #FFCDD2",
        },
        sidebar: {
          DEFAULT: "#0D9488", // teal sidebar
          dark: "#343a40", // light gray
          text: "#FFFFFF", // white text
          "text-dark": "#FFFFFF", // white text in dark mode
          close: "000000",
          header: "#00695C",
        },
        menu: {
          header: "#6B7280",
        },
        login: {
          dark: "#14B8A6",
          middle: "#0D9488",
          light: "#0F766E",
          red: "#EF4444",
        },
        access: {
          module: "#14B8A6",
          menu: "#E3F2FD",
          submenu: "#E8F5E9",
          border_module: "#14B8A6",
          border_menu: "#2196F3",
          border_submenu: "#4CAF50",
          hover: "#BFBFBF",
          list: "#13dac9",
          toggle: "#0d9493",
        },
        profile: {
          DEFAULT: "#ffffff",
          number: "#000000",
        },
      },
    },
    fontFamily: {
      epilogue: ['"Epilogue"', "sans-serif"],
      clash: ['"Clash Display"', "sans-serif"],
    },
  },
  plugins: [],
};
