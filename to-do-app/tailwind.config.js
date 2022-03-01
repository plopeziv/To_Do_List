module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    sceens: {
      sm: `375px`,
      md: `768px`,
      lg: `1024px`,
      xl: `1400px`,
    },
    height: {
      '1/20vh': '5vh',
      '13/200vh': '6.5vh',
      '29/50vh':'58vh'
    },
    width: {
      '13/20': '65%',
      '10/12': '83.333%'
    },
    colors: {
      white: '#FFFFFF',
      'pedros-color': '#61dafb',
    },
    extend: {},
  },
  plugins: [],
}
