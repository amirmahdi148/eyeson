export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ring: "var(--ring)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["Geist Variable", "sans-serif"],
      }
    },
  },
  plugins: [],
}