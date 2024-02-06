import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { ThemeContext } from '../stores/context';

const HomePage = () => {
  const changeTheme = useContext(ThemeContext);

  return (
    <Container>
      <button onClick={changeTheme.changeTheme}>Cuttent theme is {changeTheme.theme}</button>
      <h1>Here will be my Portfolio 2.0 🛠️</h1>

      <NavLink to="/temp">Portfolio subpage</NavLink>
    </Container>
  );
};
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
export default HomePage;
