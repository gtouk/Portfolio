import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../pages/Freelancers'
import colors from '../../utils/styles/colors'

const HomeLogo=styled.div`
font-size: 80px;
text-decoration: none;
color: black;
font-weight: bold
`

const NavContainer= styled.nav`
padding: 30px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${colors.backgroundLight}
`


function Header() {
   return (
      <NavContainer>
         <Link to='/'>
               <HomeLogo>PortFolio</HomeLogo> 
         </Link> 
         <div>  
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contact">Contact Us</StyledLink>
            <StyledLink to="/learn" $isFullLink>Learn more</StyledLink> 
         
        </div>
      </NavContainer>

   )
}



export default Header