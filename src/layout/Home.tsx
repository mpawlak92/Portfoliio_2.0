import { useEffect, useState } from 'react';
import { keyframes, styled } from 'styled-components';
import homeBg from '../assets/home_bg_4k_transparent.webp';
import myPhoto from '../assets/PageOwner.jpg';
import DesctopTopMenu from '../components/DesctopTopMenu';

const HomePage = () => {
  const [imgShowDelayStyle, setImgShowDelayStyle] = useState('hidden');
  const [hovered, setHovered] = useState<boolean>(false);
  const [stardedAnimationEnd, setStartedAnimationEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setImgShowDelayStyle('visible');
      setTimeout(() => {
        setStartedAnimationEnd(true);
      }, 500);
    }, 500);
  }, []);

  return (
    <Container>
      <DesctopTopMenu />
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
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 15px;
  padding-block-start: 50px;
  background-color: ${(props) => props.theme.palette.primary.background};
  background-image: url(${homeBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box;
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
interface MyImgProps {
  $imgshowdelaystyle: string;
  $propmouse?: boolean;
}

const MyImg = styled.img<MyImgProps>`
  visibility: ${(props) => props.$imgshowdelaystyle};
  max-inline-size: 100%;
  max-block-size: 80%;
  object-fit: contain;
  border: 2px solid blue;
  border-radius: 25px;
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
  border: 2px solid blue;
  border-radius: 25px;
  opacity: 0;
  transition: opacity 2s ease 0.3s;
  z-index: 1;
  ${MyImg}:hover + & {
    opacity: 1;
  }
`;
export default HomePage;
