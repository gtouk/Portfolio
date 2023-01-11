import call from '../../assets/call.webp'
import styled from 'styled-components'
export {StyledLink} from '../../utils/styles/Atoms'
import localisation from '../../assets/localisation.webp'
import ottawa from '../../assets/ottawa.webp'




 const FreelancersWrapper=styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items:center;
 `

 const FreelancersContainer=styled.div`
 display: flex;
 width: 80%;
 justify-content: space-between;
 align-items: center;
 margin-top: 100px
 `

 const Picture=styled.img`
width: 100px ;
 `



function Freelancers() {
    return (
      <FreelancersWrapper>
        <h1>HOW TO REACH US ?</h1>

        <FreelancersContainer>
         <div>
            <Picture src={call}/>
            <div><strong>Phone Number : +1 (343) 462-8114</strong></div>
         </div>
         <div>
            <Picture src={ottawa} />
            <div><strong><a href="mailto:gtouk010@uottawa.ca " target='_blank'>University of Ottawa <br /> gtouk010@uottawa.ca</a></strong></div>
         </div>
         <div>
            <Picture src={localisation}/>
            <div><strong>176 Rue de Cannes Gatineau QC</strong></div>
         </div>


        </FreelancersContainer>
     
      </FreelancersWrapper>
    )
  }




  
  export default Freelancers