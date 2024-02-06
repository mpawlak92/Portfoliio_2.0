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
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={changeTheme}>theme is {theme}</button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
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
  justify-content: center;
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

export default App;
