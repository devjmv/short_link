/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background-primary': "url('/')",
        'background-eventuser': "url('/')"
      },
      
      variants: {},

      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },

      colors: {
        bgdark: "#172439",
        dark: "#0d1829",
        bglight: "#e2e8f0",
        light: "#cccccc",
        primary: "#70abaf",
        secondary: "#99e1d9",
        terciary: "#705d56",
        navy: "#303972"
      },
    },
    plugins: [],
  },
};
