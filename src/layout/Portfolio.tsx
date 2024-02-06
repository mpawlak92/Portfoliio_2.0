import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PortfolioPage = () => {
  return (
    <Container>
      <h1>Portfolio page for routing test</h1>

      <NavLink to="/">Home</NavLink>
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
export default PortfolioPage;
