const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  mediumScreenLaptop: customMediaQuery(1200),
  smallScreenLaptop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576)
};

export const Colors = {
  primaryColor: '#FF9916',
  secondaryColor: '#0F264C',
  lightGrey: "#414148",
  secondaryOrange: 'linear-gradient(225deg, #FF9916 0%, rgba(255, 153, 22, 0.9375) 15.62%, rgba(255, 153, 22, 0.860417) 34.9%, rgba(255, 153, 22, 0.795833) 51.04%, rgba(255, 153, 22, 0.702083) 69.27%, rgba(255, 153, 22, 0.658333) 85.42%, rgba(255, 153, 22, 0.6) 100%)',
  sectioncolor: '#FFD59F',
  borderColor: '#B5B5B5',
};

export const FontSizes = {
  headingMd: '20px',
  xxl: '24px',
  xl: '22px',
  lg: '18px',
  md: '16px',
  sm: '14px',
  xs: '12px',
};

export const FontFamily = {
  primaryFont: 'Montserrat',
  secondaryFont: 'Roboto'
};

export const BoxShadow = {
  primaryBoxShadow: '0px 14px 34px rgba(0, 0, 0, 0.07)',
}
