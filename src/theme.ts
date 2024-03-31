import { DefaultTheme } from 'styled-components';
export const light: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black:{
        1000: 'rgba(0,0,0,1)',
        900: 'rgba(0,0,0,0.9)',
        800: 'rgba(0,0,0,0.8)',
        700: 'rgba(0,0,0,0.7)',
        600: 'rgba(0,0,0,0.6)',
        500: 'rgba(0,0,0,0.5)',
        400: 'rgba(0,0,0,0.4)',
        300: 'rgba(0,0,0,0.3)',
        200: 'rgba(0,0,0,0.2)',
        100: 'rgba(0,0,0,0.1)',
      },
      white: 'white',
      primary: '#bfdef3',
      secondary: '#75b3da',
    },
    primary: {
      main: '#bfdef3',
      text: '#000',
      background: '#dfdbdb',
    },
    secondary: {
      main: '#bfdef3',
      text: '#000',
      background: '#bfdef3',
    },
  },
};

export const dark: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black:{
        1000: 'rgba(0,0,0,1)',
        900: 'rgba(0,0,0,0.9)',
        800: 'rgba(0,0,0,0.8)',
        700: 'rgba(0,0,0,0.7)',
        600: 'rgba(0,0,0,0.6)',
        500: 'rgba(0,0,0,0.5)',
        400: 'rgba(0,0,0,0.4)',
        300: 'rgba(0,0,0,0.3)',
        200: 'rgba(0,0,0,0.2)',
        100: 'rgba(0,0,0,0.1)',
      },
      white: 'white',
      primary: '#bfdef3',
      secondary: '#75b3da',
    },
    primary: {
      main: '#bfdef3',
      text: '#fff',
      background: '#000',
    },
    secondary: {
      main: '#23272d',
      text: '#fff',
      background: '#23272d',
    },
  },
};
