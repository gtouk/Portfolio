import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/Atoms'
import Dyvan from '../../assets/dyvan.jpg'
import pdf from './THE_RESUME_ENGLISH.pdf'


const HomeWrapper=styled.div`
display: flex;
justify-content: center;
`

const HomerContainer=styled.div`
margin: 30px;
background-color: ${colors.background};
padding: 60px 90px;
display: flex;
flex-direction: row;
max-width: 1200px;
`

const LeftCol = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;
${StyledLink} {
  max-width: 250px;
}
`

const StyledTitle = styled.div`
  padding-bottom: 30px;
  line-height: 50px;
`

const Illustration = styled.img`
  flex: 1;
  height: 500px;
  width: 100px;
  margin-left: 30px
`
 const StyledCV = styled.div`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  width: 100px;
    color: white; 
    border-radius: 30px; 
    background-color: ${colors.secondary};}
    margin-bottom: 50px;
    `

function Home() {
  const text="My name is GILLY DYVAN TOUKAM MENGAPTCHE. I am a first year student in software engineering at the University of Ottawa. I am passionate about programming, web and mobile application development and websites. I work hard to achieve my goals. I work well in a team, I listen more than I talk. I do my best every day to meet the challenges I face. I know what I want and what I am worth. I am open to internships for the summer of 2023."

  return (
    <HomeWrapper>
      <HomerContainer>
        <LeftCol>
          <StyledTitle>
          {text}
          </StyledTitle>
          <a href={pdf} target='_blank' rel="noreferrer"><StyledCV isFullLink>MON CV</StyledCV></a>
       
          <StyledLink to='/learn' $isFullLink>Learn More</StyledLink>
        </LeftCol>
        <Illustration src={Dyvan} alt='on dit quoi?'/>
      </HomerContainer>
    </HomeWrapper>
  );
}

export default Home;
