import React from 'react'
import styled from 'styled-components'
const TotalScore = ({score}) => {
  return (
    
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    
  );
}

const ScoreContainer=styled.div`
    max-width: 200px;
    text-align: center;
    h1
    {
        font-size: 100px;
        line-height: 100px;
        margin: 0;
        
    }
    p
    {
        font-size: 24px;
        margin-top: 10px;
        font-weight:500px ;
    }
`; 

export default TotalScore
