import 'styled-components';
interface Palette {
  
  text: string;
  background: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black:{
          1000: string;
          900: string;
          800: string;
          700: string;
          600: string;
          500: string;
          400: string;
          300: string;
          200: string;
          100: string;
        },
        white:{
          1000: string;
          900: string;
          800: string;
          700: string;
          600: string;
          500: string;
          400: string;
          300: string;
          200: string;
          100: string;
        },
        cta:{
          1000: string;
          750: string;
          500: string;
          250: string;
          0: string;
         
        },
        ctaShades:{
          900: string;
          800: string;
          700: string;
          600: string;
          500: string;
          400: string;
          300: string;
          200: string;
          100: string;
        },
      };
      primary: Palette;
      secondary: Palette;
    };
  }
}
