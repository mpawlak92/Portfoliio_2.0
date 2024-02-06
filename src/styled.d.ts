import 'styled-components';
interface Palette {
  main: string;

}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
        primary: string;
        secondary: string;
      };
      primary: Palette;
      secondary: Palette;
    };
  }
}
