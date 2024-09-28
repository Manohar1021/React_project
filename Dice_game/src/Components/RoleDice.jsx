import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({roleDice,CurrentDice}) => {
    
    

      
  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
            <img src={`/images/dice/dice_${CurrentDice}.png`} alt="dice_1" />
        </div>
        <p>click on the Dice to Roll</p>

    </DiceContainer>
  )
}
const DiceContainer=styled.div`
display: flex;
align-items: center ;
margin-top: 48px;
flex-direction: column;
p
{
    font-size: 24px;
}
.dice
{
    
}
`

export default RoleDice
