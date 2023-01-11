
 import React from "react"
 import styled from "styled-components"
import colors from "../../utils/styles/colors"

 const FreelancersWrapper=styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items:center;
 height: 80vh;
 background-color: ${colors.backgroundLight}
 `

 const FreelancersContainer=styled.div`
 display: flex;
 width: 80%;
 justify-content: space-between;
 align-items: center;

 `





function About() {
    return (
      <FreelancersWrapper>

        <FreelancersContainer>
         <div>
            <h1>My Skills</h1>
            <div>
                <ul>
                    <li>PYTHON, C</li>
                    <li>HTML, CSS, JavaScript ( Partial knowledge of React JS, Node JS, Mongo DB),</li>
                    <li>Windows, Linux </li>
                </ul>
            </div>
         </div>
         <div>
            <h1>My Projects</h1>
            <div>
                <ul>
                    <li>Setting up an online library</li>
                    <li>Setting up an E-commerce site</li>
                    <li>Design of an operating system for cell phones </li>
                </ul>
            </div>
         </div>
         <div>
            <h1>My Interests</h1>
            <div>
                <ul>
                    <li>Listen to music: Rap, Romance, Gospel</li>
                    <li>Playing video games </li>
                    <li>Playing soccer</li>
                </ul>
            </div>
         </div>


        </FreelancersContainer>
     
      </FreelancersWrapper>
    )
  }

export default About