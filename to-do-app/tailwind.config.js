module.exports = {
  mode: "jit",
  prefix: "tw-",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    sceens: {
      tablet: `960px`,
      desktop: `1248px`,
    },
    colors: {
      white: '#FFFFFF',
      'pedros-color': '#61dafb'
    },
    extend: {},
  },
  plugins: [],
}
