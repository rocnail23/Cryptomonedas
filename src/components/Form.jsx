import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useMoneda from './useMoneda'
import useCrypto from './useCrypto'
import axios from "axios"
import Error from './Error'

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
const Form = ({setRequire,setShowSpinners}) => {

  const [cryptoList, setCryptList] = useState(null)

  const coins = [
    {code: "USD", name: "Dolar"},
    {code: "EUR", name: "Euro"},
    {code: "GBP", name: "Libra esterlina"},
]

  const [coin, selectCoin, setCoin] = useMoneda("",coins)
  const [crypto, selectCrypto] = useCrypto("",cryptoList)
  const [error, setError] = useState(false)
 
  useEffect(() => {

   const getCryptos = async () =>{
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
    const res = await axios.get(url)
    setCryptList(res.data.Data)
    
   }

   getCryptos()

  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(coin.trim()== ""||crypto.trim()==""){
      setError(true)
     return
    }
    setError(false)
    setShowSpinners(true)

    setTimeout(()=>{
      setRequire({
        currency: coin,
        cryptoCurrency: crypto
        
      })
      setShowSpinners(false)
    },2000)

    

  }
 
  return (
    <form onSubmit={handleSubmit}>
     {error ? <Error/>: null}   
    {selectCoin()}
    {selectCrypto()}
        <Button>calcular</Button>
    </form>
  )
}

export default Form