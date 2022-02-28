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
      sm: `375px`,
      md: `768px`,
      lg: `1024px`,
      xl: `1400px`,
    },
    height: {
      '1/20': '5%',
      '1/10': '10%',
    },
    colors: {
      white: '#FFFFFF',
      'pedros-color': '#61dafb',
    },
    extend: {},
  },
  plugins: [],
}
