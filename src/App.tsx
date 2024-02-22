import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { light, dark } from './theme';
import GlobalStyle from './style/GlobalStyle';
import Routing from './routing/routing';
import { ThemeContext } from './stores/theme-context';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Portfolio_2.0'}>
        <ThemeContext.Provider value={{ theme: theme, changeTheme: toggleTheme }}>
          <ThemeProvider theme={theme === 'light' ? light : dark}>
            <GlobalStyle />
            <Routing />
          </ThemeProvider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
