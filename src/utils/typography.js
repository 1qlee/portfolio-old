import Typography from "typography"

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.5,
  includeNormalize: false,
  googleFonts: [
    {
      name: 'Karla',
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
    "Karla",
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
