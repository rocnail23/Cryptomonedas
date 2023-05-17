import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
margin-top: 20px;
font-weight: bold;
font-size: 20px;
padding: 10px;
background-color: #66A2FE ;
border: none;
width: 100%;
border-radius: 10px;
color: #FFF;
transition: background-color .3s;
&:hover{
    background-color: #326AC0;
    cursor: pointer;
}
`
const Form = () => {
  return (
    <form>


        <Button>calcular</Button>
    </form>
  )
}

export default Form