import { device } from './utils'

export const colors = {
  white: "#ffffff",
  background: '#fcfcfc',
  blackTitle: "#3b3b3b",
  blackParagraph: '#606060',
  blackItemText: '#343434',
  hoverItem: '#eaeaea',
  border: '#979797',
  primary: '#1797ff',
};

export const gutter = '14px';
export const borderRadius = '4px';

export const fontConfig = {
  font: {
    body: 'Roboto',
    headers: 'Baskervville'
  },
  fontSize: {
    body: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '14px',
    },
    h1: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '28px',
      lineHeight: '33px',
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '28px',
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
    },
    caption: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '11px',
      lineHeight: '13px',
    },
    nav: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '19px',
    },
    button: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
};

export const breakpoints = {
  mobile: "359px",
  tablet: "768px",
  desktop: "1200px",
  large: "1400px",
};

export const layout = {
  maxWidth: breakpoints.desktop,
  margin: '0 1em',
  responsive: {
    desktop: device.desktop`
    margin: 0 auto;
    `,
  }
}
