/**
 * Design Tokens — Source of Truth
 * Figma: 무물 AI 가이드 / PhaseDesktop (66:79701)
 *
 * Hex values live ONLY here.
 * globals.css (@theme) and components reference CSS variables — no hex codes.
 */

export const primitive = {
  fontFamily: { base: 'Pretendard' },
  fontWeight: { regular: '400', medium: '500', semibold: '600' },
}

export const colors = {
  fg: {
    DEFAULT:    '#1a1a1a',
    low:        '#666666',
    lower:      '#8a8a8a',
    disabled:   '#cccccc',
    inverse:    '#ffffff',
    onContrast: '#ffffff',
    critical:   '#f31110',
    warning:    '#fa9200',
    success:    '#1ea514',
  },
  bg: {
    DEFAULT:     '#ffffff',
    low:         '#f5f5f5',
    disabled:    '#f5f5f5',
    contrast:    '#000000',
    neutralLow:  '#ebebeb',
    warningLow:  '#fff4e5',
    criticalLow: '#ffecec',
    successLow:  '#ecffec',
  },
  accent: {
    DEFAULT: '#245eff',
    light:   '#417eff',
    dark:    '#1a47cc',
    low:     '#e2f1ff',
    focus:   '#b8d4ff',
  },
  stroke: {
    border:          '#e0e0e0',
    borderStrong:    '#000000',
    borderCritical:  '#f31110',
    borderSuccess:   '#1ea514',
    borderDisabled:  '#ebebeb',
    divide:          '#ebebeb',
    divideLow:       '#f5f5f5',
  },
  divide: '#e0e0e0',
}

export const typography = {
  text: {
    s:         { size: '12px', lineHeight: '20px', weight: primitive.fontWeight.regular },
    sMedium:   { size: '12px', lineHeight: '20px', weight: primitive.fontWeight.medium },
    sSemibold: { size: '12px', lineHeight: '20px', weight: primitive.fontWeight.semibold },
    m:         { size: '14px', lineHeight: '22px', weight: primitive.fontWeight.regular },
    mMedium:   { size: '14px', lineHeight: '22px', weight: primitive.fontWeight.medium },
    mSemibold: { size: '14px', lineHeight: '22px', weight: primitive.fontWeight.semibold },
    l:         { size: '16px', lineHeight: '24px', weight: primitive.fontWeight.regular },
    lMedium:   { size: '16px', lineHeight: '24px', weight: primitive.fontWeight.medium },
    lSemibold: { size: '16px', lineHeight: '24px', weight: primitive.fontWeight.semibold },
  },
  title: {
    xs:  { size: '18px', lineHeight: '26px', weight: primitive.fontWeight.semibold },
    s:   { size: '20px', lineHeight: '28px', weight: primitive.fontWeight.semibold },
    m:   { size: '24px', lineHeight: '32px', weight: primitive.fontWeight.semibold },
    l:   { size: '30px', lineHeight: '38px', weight: primitive.fontWeight.semibold },
    xl:  { size: '32px', lineHeight: '40px', weight: primitive.fontWeight.semibold },
    xxl: { size: '38px', lineHeight: '46px', weight: primitive.fontWeight.semibold },
  },
}

export const spacing = {
  50: '2px', 100: '4px', 150: '6px', 200: '8px', 250: '10px',
  300: '12px', 400: '16px', 500: '20px', 600: '24px', 800: '32px',
}

export const borderRadius = {
  xxs: '2px', xs: '4px', m: '8px', l: '12px', full: '9999px',
}

export const size = {
  icon: { s: '16px', m: '20px', l: '24px' },
  button: {
    height:   { s: '28px', m: '32px', l: '40px' },
    minWidth: { s: '48px', m: '56px', l: '64px' },
  },
}

// Component-specific tokens (not semantic)
export const componentTokens = {
  button: {
    secondary: { bg: '#ebecf1', bgPressed: '#d8dae0', outlineBorder: '#cccccc' },
    ghost:     { hoverBg: '#f8f9fc' },
    negative:  { bgHover: '#ff5e56', bgPressed: '#b30c0c' },
    disabled:  { fg: 'rgba(0, 0, 0, 0.2)' },
  },
}
