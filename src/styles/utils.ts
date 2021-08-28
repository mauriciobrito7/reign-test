import { breakpoints } from "./theme";

export const device = {
  mobile: (styles: TemplateStringsArray) => {
    return `@media (min-width:${breakpoints.mobile}){
      ${styles}
    }`;
  },
  tablet: (styles: TemplateStringsArray) => {
    return `@media (min-width:${breakpoints.tablet}){
      ${styles}
    }`;
  },
  desktop: (styles: TemplateStringsArray) => {
    return `@media (min-width:${breakpoints.desktop}){
      ${styles}
    }`;
  },
  large: (styles: TemplateStringsArray) => {
    return `@media (min-width:${breakpoints.large}){
      ${styles}
    }`;
  },
  custom: (styles: TemplateStringsArray, width: string) => {
    return `@media (min-width:${width}){
      ${styles}
    }`;
  },
};

export const addOpacityToColor = (color: string, opacity: number) => {
  const opacityHex = Math.round(opacity * 255).toString(16);

  return `${color}${opacityHex}`;
};