import { useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { light, dark } from './theme';
import { ThemeContext } from './stores/context';
import GlobalStyle from './style/GlobalStyle';

function App() {
  const [theme, setThme] = useState('light');

  const changeTheme = () => {
    if (theme === 'light') {
      setThme('dark');
    } else {
      setThme('light');
    }
  };
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Portfolio_2.0'}>
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
          <ThemeProvider theme={theme === 'light' ? light : dark}>
            <GlobalStyle />
            <Container>
              <button onClick={changeTheme}>Cuttent theme is {theme}</button>
              <h1>Here will be my Portfolio 2.0 🛠️</h1>
            </Container>
          </ThemeProvider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.secondary.main};
  font-size: 10em;
`;

export default App;
