import { createContext } from 'react';

export interface ThemeContextType {
  theme?: string;
  changeTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  changeTheme: () => {},
});
