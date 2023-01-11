import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`



const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})

  useEffect(() => {
     setSurveyData(true)
     fetch(`http://localhost:8000/survey`)
        .then((response) => response.json()
        // eslint-disable-next-line no-console
        .then(({ surveyData }) => console.log(surveyData))
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
     )
  }, [])

  // eslint-disable-next-line no-console
  console.log(surveyData[questionNumberInt]);


  return (
     <SurveyContainer>
        <QuestionTitle>Question {questionNumberInt}</QuestionTitle>
        <QuestionContent>{surveyData[questionNumberInt]}</QuestionContent>
        <LinkWrapper>
           <Link to={`/survey/${prevQuestionNumber}`}>Back</Link>
           {surveyData[questionNumberInt + 1] ? (
              <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>
           ) : (
              <Link to="/results">Results</Link>
           )}
        </LinkWrapper>
     </SurveyContainer>
  )
}

export default Survey