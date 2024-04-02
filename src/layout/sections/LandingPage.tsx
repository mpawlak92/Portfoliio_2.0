import { useContext, useEffect, useState } from 'react';
import { keyframes, styled } from 'styled-components';
import { ThemeContext } from '../../stores/theme-context';
import { Link } from 'react-router-dom';

import heroBgLight from '../../assets/hero_bg_light.jpg';
import heroBgDark from '../../assets/hero_bg_dark.jpg';
import {device} from '../../style/Brakepoints'



const LandingPage = () => {
  const [imgShowDelayStyle, setImgShowDelayStyle] = useState('hidden');
  // const [hovered, setHovered] = useState<boolean>(false);
  const [startAnimationEnd, setStartAnimationEnd] = useState(false);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setImgShowDelayStyle('visible');
      setTimeout(() => {
        setStartAnimationEnd(true);
        
      }, 500);
    }, 500);
  }, []);

  return (
    <Container $mode={theme} id='Home'>
      <Overlay></Overlay>
      <Heading $imgshowdelaystyle={imgShowDelayStyle} className={startAnimationEnd ? '' : 'fadeIn'}>
      Let's go beyond imagination!
      </Heading>
      <PortfolioBtn to="/portfolio">Portfolio</PortfolioBtn>
    </Container>
  );
};


interface ContainerProps {
  $mode: string;
}
interface HeadingProps {
  $imgshowdelaystyle: string;
  
}
const Container = styled.div<ContainerProps>`
  block-size: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 15px;
  padding-block-start: 70px;
  background-color: ${(props) => props.theme.palette.primary.background};
  background-image: ${(props) => props.$mode === 'light' ? `url(${heroBgLight})` : `url(${heroBgDark})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box;
  font-size: 1rem;
  z-index:5;
  overflow: hidden;
  
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.common.black[400]};
  z-index:10;
`
const fadeIn = keyframes`
  from {
    transform:scale(0);
    opacity: 0;
  }

  to {
    transform:scale(1);
    opacity: 1;
  }
`;
const Heading = styled.header<HeadingProps>`
  visibility: ${(props) => props.$imgshowdelaystyle};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
  color: ${props=> props.theme.palette.common.white[800]};
  text-shadow: 5px 5px 2px ${props=> props.theme.palette.common.black[500]};;
  text-align: center;
  z-index:11;
  transition: opacity .5s linear;

  &.fadeIn {
    animation: ${fadeIn} .5s linear forwards;
    animation-delay: 0.5s;
  }

  @media (${device.mobileM}) {
    font-size: 7em;
  }
  @media (${device.tablet}) {
    font-size: 7.2em;
  }
  @media (${device.laptopL}) {
    font-size: 8em;
  }
`
const PortfolioBtn = styled(Link)`
  margin-block-start: 20px ;
  padding-inline: 20px;
  padding-block: 15px;
  aspect-ratio: 3/1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4em;
  color: ${(props) => props.theme.palette.common.white[900]};
  background-color: ${(props) => props.theme.palette.common.cta[500]};
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0px 5px 5px ${(props) => props.theme.palette.common.black[400]};
  z-index:11;
  &:hover{
    background-color: ${(props) => props.theme.palette.common.cta[750]};
  }
  @media (${device.mobileM}) {
    font-size: 3em;
  }
  @media (${device.tablet}) {
    font-size: 3.2em;
  }
  
  @media (${device.laptopL}) {
    font-size: 3.8em;
  }
`;
export default LandingPage;
