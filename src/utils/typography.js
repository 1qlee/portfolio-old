import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  includeNormalize: false,
  googleFonts: [
    {
      name: 'Rubik',
      styles: [
        '400',
        '700',
      ],
    },
    {
      name: 'Spectral',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  headerFontFamily: [
    "Rubik",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [
    "Spectral",
    "Georgia",
    "sans-serif"
  ]
});

export default typography
