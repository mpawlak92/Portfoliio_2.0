import styled, { keyframes } from 'styled-components';

import myPhoto from '../../assets/PageOwner.jpg';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../stores/theme-context';


const AboutMe: React.FC = ({}) => {
  const [imgShowDelayStyle, setImgShowDelayStyle] = useState('hidden');
  const [hovered, setHovered] = useState<boolean>(false);
  const [stardedAnimationEnd, setStartedAnimationEnd] = useState(false);

  const { theme } = useContext(ThemeContext);
 
  useEffect(() => {
    setTimeout(() => {
      setImgShowDelayStyle('visible');
      setTimeout(() => {
        setStartedAnimationEnd(true);
        
      }, 500);
    }, 500);
    
  }, []);
  return (
    <Container $mode={theme} id='aboutme'>
      <h1>Section: about me</h1>
      <MyImg
        src={myPhoto}
        className={stardedAnimationEnd ? '' : 'fadeIn'}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        $imgshowdelaystyle={imgShowDelayStyle}
        $propmouse={hovered}
      ></MyImg>
      <MyDescription>
        <p>
          Front-end developer with higher education in IT, starting his career in the industry. I can offer my knowledge
          and experience in build web application in React, Angular, or Vue.js. I am a quick learner and a loyal
          employee. My next goal is to know React Native and go deeper in React. I don't give up until I reach my goal.
        </p>
      </MyDescription>
    </Container>
  );
};
interface MyImgProps {
  $imgshowdelaystyle: string;
  $propmouse?: boolean;
}
interface ContainerProps {
  $mode: string;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 15px;
  padding-block-start: 50px;
  background-color: ${(props) => props.theme.palette.primary.background};
  font-size: 10em;
  overflow: hidden;
`;

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

const MyImg = styled.img<MyImgProps>`
  visibility: ${(props) => props.$imgshowdelaystyle};
  max-inline-size: 100%;
  max-block-size: 80%;
  object-fit: contain;
  border-radius: 25px;
  box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.3);
  opacity: ${(props) => (props.$propmouse ? 0 : 1)};
  transition: opacity 0.5s linear;
  z-index: 2;
  &.fadeIn {
    animation: ${fadeIn} 0.5s linear forwards;
    animation-delay: 0.5s;
  }
`;

const MyDescription = styled.div`
  position: absolute;
  max-height: 80vh;
  max-width: 100vh;
  margin-inline: 15px;
  padding: 20px;
  text-indent: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.3);
  opacity: 0;
  transition: opacity 2s ease 0.3s;
  z-index: 1;
  ${MyImg}:hover + & {
    opacity: 1;
  }
`;
export default AboutMe;
