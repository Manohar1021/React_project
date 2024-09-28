import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <div>
      <RulesContainer>
        <h2>How to Play Dice Game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on a dice</p>
            <p>After click on a dice if selected number is equal to dice number you will get same point as dice{" "}</p>
            <p>if you get wrondg guess then 2point will deducted</p>
        </div>
      </RulesContainer>
    </div>
  )
}

export default Rules

const RulesContainer=styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #fbf1f1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
h2
{
      font-size: 24px;
      font-weight: 24px;
}
text
{
    margin-top: 24px;

}

`
