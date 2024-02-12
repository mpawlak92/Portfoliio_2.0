import { DefaultTheme } from 'styled-components';
export const light: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: 'black',
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
      black: 'black',
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
