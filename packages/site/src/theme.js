// Custom global variables
const global = {
  // Maximum content width when resolution is large
  maxContentWidth: 1120,
  // Width of logo
  logoWidth: 110,
}

// Browser width breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 478,
    md: 992,
    lg: global.maxContentWidth,
    xl: 1920,
  },
}

// Our color options
const color = {
  primary: '#00b7b2',
  secondary: '#223442',
  error: '#EA4B35',
  textPrimary: '#324452',
  transparent: 'rgba(0, 0, 0, 0)',
  opaque: 'rgba(255, 255, 255, 0.94)',
}

// Material UI default color palettes
const palette = {
  primary: {
    main: color.primary,
  },
  secondary: {
    main: color.secondary,
  },
  error: {
    main: color.error,
  },
  text: {
    primary: color.textPrimary,
  },
}

// Material UI default font typography
const typography = {
  fontFamily: 'Open Sans',
  htmlFontSize: 16,
  fontSize: 16,
  color: 'textPrimary',
}

// Material UI default props
const props = {
  // Name of the component ⚛️
  MuiButtonBase: {
    // The properties to apply
    disableRipple: false, // Set to true for no more ripple, on the whole application 💣!
  },
  MuiInput: {
    autoComplete: 'off',
  },
  MuiCheckbox: {
    color: 'primary',
  },
  MuiPaper: {
    square: true,
  },
  MuiRadio: {
    color: 'primary',
  },
  MuiSwitch: {
    color: 'primary',
  },
}

// Material UI style overrides
const overrides = {

}

export default {
  global,
  breakpoints,
  color,
  palette,
  typography,
  props,
  overrides,
}
