import styled from 'styled-components';
interface SectionProps {
  sectionName:string;
}
const Section: React.FC<SectionProps> = ({sectionName}) => {
  return (
    <Container id={sectionName}>
      <h1>Section: {sectionName}</h1>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.secondary.main};
  font-size: 10em;
`;
export default Section;
