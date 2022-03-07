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
    extend: {
      height: {
        '1/10': '10%',

        '38vmin': '38vmin',

        '1/20vh': '5vh',
        '13/200vh': '6.5vh',
        '7/100vh': '7vh',
        '29/50vh':'58vh',
      },
      width: {
        '9/20': '45',
        '11/20': '55%',
        '13/20': '65%',
        '14/20': '70%',
        '16/20': '80%',
        '10/12': '83.333%',
      },
    },
  },
  plugins: [],
}
