import DesctopTopMenu from '../components/DesctopTopMenu';
import AboutMe from './sections/AboutMe';
import LandingPage from './sections/LandingPage';
import Section from './sections/Section';


const HomePage = () => {


  return (
    <>
    <DesctopTopMenu />
    <LandingPage />
    <AboutMe />
    <Section sectionName='s2'/>
    </>
  
  );
};



export default HomePage;
