import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({seterror,error,SelectedNumber,setSelectedNumber}) => {
    const arrNum=[1,2,3,4,5,6];
    const NumbreSelectorHandleer=(value)=>{
      setSelectedNumber(value);
      seterror("")

    }
   
  
    // console.log(SelectedNumber);
  return (
    <NumberSelectorContainer>
      <p className='error_color'>{error}</p>
    <div className='flex'>
        {arrNum.map((value,i)=>(
            <Box   $isSelected={
              value===SelectedNumber

            } onClick={()=>NumbreSelectorHandleer(value)}key={i}>{value }</Box>
        ))}
      
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

const Box=styled.div`
  height  :72px ;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  background-color: ${(props)=>props.$isSelected?"black":"white"};
  color: ${(props)=>props.$isSelected?"white":"black"};
`;

const NumberSelectorContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;
  .flex
  {display: flex;
  gap: 24px;
  }
  p
  {
    font-size:24px ;
    font-weight:700px ;
  }
  .error_color
  {
    color: red;
  }

`

export default NumberSelector;
