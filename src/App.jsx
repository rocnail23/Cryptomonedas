import styled from "@emotion/styled"
import image from "./assets/pngwing.png"
import Form from "./components/Form"
import { useEffect, useState } from "react"
import axios from "axios"
import Prices from "./components/Prices"
import Spinners from "./components/spinners"


 const Container = styled.div`
 max-width: 900px;
 height: 100%;
 margin: 0 auto;
 @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;

    div:first-child{
        position: relative;
        top: 100px
     }
 }
    
 `
 const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
 `

 const Heading = styled.h1`
 font-family: "Bebas Neue", cursive;
 color:#fff;
 text-align: left;
 font-weight: 700;
 font-size: 50px;
 margin-top: 80px;
 margin-bottom: 50px;

 &::after{
  content: "";
  width: 100px;
  height: 6px;
  background-color: #66a2fe;
  display: block;
 }
 `

function App() {

  const [require,setRequire] = useState({
    currency: "",
    cryptoCurrency: ""
  })

  const [priceResult, setPricesResult] = useState(null)

  const {currency, cryptoCurrency} = require
  const [showSpinner, setShowSpinners] = useState(false)

  useEffect(() => {
  const getPrices = async () => {
    if(currency == "") return

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
    const result = await axios.get(url)
   setPricesResult(result.data.DISPLAY[cryptoCurrency][currency])
  }
  getPrices()
  },[require])
 
  const Component = showSpinner ?  <Spinners/> : <Prices priceResult={priceResult}/>

  return (
    <Container>
       <div>
        <img src={image} alt="imagen_crypto" />
       </div>
       <div>
        <Heading>Cotiza cryptomonedas al instante</Heading>
        <Form setShowSpinners={setShowSpinners} setRequire={setRequire}/>

          {Component}
        
       </div>
    </Container>
  )
}

export default App
