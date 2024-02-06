import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { light, dark } from './theme';
import { ThemeContext } from './stores/context';
import GlobalStyle from './style/GlobalStyle';
import Routing from './routing/routing';

function App() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Portfolio_2.0'}>
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
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
