import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import {useState} from 'react'
import { Button, OutlineButton } from './styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [CurrentDice,setCurrentDice]=useState(1);
  const [SelectedNumber,setSelectedNumber]=useState();
  const [score,setScore]=useState(0)
  const [error,seterror]=useState("")
  const [showRules,setShowRules]=useState(false);


  const gernerateRandonNumber=(min, max)=> { // min and max included 
    console.log( Math.floor(Math.random() * (max - min + 1) + min))
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const roleDice=()=>{
    if(!SelectedNumber)
    {
      seterror("you have not selected a number")
      return
    }
    seterror("")
      
   const randomNumber= gernerateRandonNumber(1,6);
   setCurrentDice((prev)=>randomNumber)
   
   if(SelectedNumber===randomNumber)
    {
      setScore(prev=>prev+randomNumber)
    }
    else{
      setScore(prev=>prev-2)
    }
    setSelectedNumber(undefined)
  }


  const resetScore=()=>
  {
    setScore(0)

  }

  

  return (
   <Maincontainer>
    <div className="top_section">
    <TotalScore score={score}/>
    <NumberSelector error={error} seterror={seterror} SelectedNumber={SelectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>
    <RoleDice CurrentDice={CurrentDice} roleDice={roleDice}/>
    <div className="btns">
      <OutlineButton onClick={resetScore}>Reset</OutlineButton>
      <Button  onClick={()=>setShowRules(prev=>!prev)}>
      {showRules ?"Hide":"Show"} Rules</Button>
    </div>

    {showRules&&<Rules />}
  
   </Maincontainer>
  )
}

export default GamePlay


const Maincontainer=styled.div`
padding-top: 40px;
.top_section{
display: flex;
justify-content: space-between;
align-items: end;
}
.btns 
{
  text-align: center;
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  gap: 10px;
  
} 
`
