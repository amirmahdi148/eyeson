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
        sans: ["Manrope Variable", "Manrope", "sans-serif"],
        heading: ["Sora Variable", "Sora", "sans-serif"],
      }
    },
  },
  plugins: [],
}