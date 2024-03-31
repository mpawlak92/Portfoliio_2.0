import styled from 'styled-components';
import { useContext, useState } from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';
import {Link as SLink} from 'react-scroll'

import { ThemeContext } from '../stores/theme-context';

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
      <NavContent>
      <ScrollLink activeClass="active"
      to="Home" 
      spy={true} 
      smooth={true} 
      offset={0} 
      duration={800}
      isDynamic={true}
      >
        Home
      </ScrollLink>
      <ScrollLink activeClass="active"
      to="aboutme"
      spy={true} 
      smooth={true} 
      offset={0} 
      duration={800}
      isDynamic={true} 
      >
        About me
      </ScrollLink>
      <ScrollLink activeClass="active"
      to="s2"
      spy={true} 
      smooth={true} 
      offset={0} 
      duration={800}
      isDynamic={true}
      >
        Section 2
      </ScrollLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
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
      </NavContent>
    </Container>
    
  );
};

const Container = styled.nav`
  position: fixed;
  top: 0;
  block-size: 70px;
  inline-size: 100%;
  padding-inline: 15px;
  background-color: rgba(0,0,0, 0.7);
  z-index:11;
`;
const NavContent = styled.div`
  width: 100%;
  height: 100%;
  block-size: 70px;
  inline-size: 100%;
  padding-inline: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid white;
`
const NavLink = styled(BaseNavLink)`
  padding-inline: 25px;
  font-size: 20px;
  color: ${(props) => props.theme.palette.common.white};
  text-decoration: none;
`;
const ScrollLink = styled(SLink)`
  padding-inline:5px;
  margin-inline: 25px;
  font-size: 20px;  
  color: ${(props) => props.theme.palette.common.white};
  text-decoration: none;
  &.active{
    font-weight: bold;
    border-bottom: 1px solid ${(props) => props.theme.palette.common.white};
  
  }
`
export default DesctopTopMenu;
