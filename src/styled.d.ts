import 'styled-components';
interface Palette {
  main: string;
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
        white: string;
        primary: string;
        secondary: string;
      };
      primary: Palette;
      secondary: Palette;
    };
  }
}
