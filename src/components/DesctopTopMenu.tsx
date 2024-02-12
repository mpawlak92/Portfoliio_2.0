import { NavLink as BaseNavLink } from 'react-router-dom';
import { ThemeContext } from '../stores/context';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import Switch from './Switch';

const DesctopTopMenu = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [themeState, setThameState] = useState<boolean>(theme === 'dark' ? false : true);

  const handleThemeswitch = () => {
    if (changeTheme !== undefined) {
      setThameState(!themeState);
      changeTheme();
    }
  };

  return (
    <Container>
      <div>
        <Switch
          currnetState={themeState}
          onChanged={handleThemeswitch}
          onIcon="&#9728;" // kod dla ikony słońca
          offIcon="&#9790;" // kod dla ikony księżyca
          fontSize={18} //wartość w px
          scale={0.95}
        />
      </div>
      <NavLink to="/temp">Portfolio</NavLink>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  block-size: 50px;
  inline-size: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 15px;
`;
const NavLink = styled(BaseNavLink)`
  padding-inline: 15px;
  font-size: 20px;
  color: ${(props) => props.theme.palette.primary.text};
  text-decoration: none;
`;
export default DesctopTopMenu;
