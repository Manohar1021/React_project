import styled  from "styled-components"
export const Button=styled.button`


  display:flex;
  color:white; 
  padding:10px 18px;
  font-size: 16px;
  background-color: transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  &:hover
  
  {
    background-color: white;
   transition: 0.3s background ease-in;
    border: 1px solid black;
    color: black;
  }

  background-color:#000000; 
  border-radius:none;
  min-width:220px;

`;
export const OutlineButton=styled(Button)`

background-color: white;
border:1px solid black;
color: black;
  
  &:hover
  
  {
    background-color: black;
   transition: 0.3s background ease-in;
    border: 1px solid black;
    color: white;
  }

  

`;