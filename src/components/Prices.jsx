import React from 'react'
import styled from '@emotion/styled'

const ResultDiv = styled.div`
 color: #fff;
`
const Info = styled.p`
font-size: 18px ;

 span{
    font-weight: bold;
 }
`
const Price = styled.p`
 font-size: 30px;
`

const Prices = ({priceResult}) => {
    
    if(priceResult == null ) return null

  return (
    <ResultDiv>
        <Price>el precio es: <span>{priceResult.PRICE}</span></Price>
        <Info>el precio mas alto del dia: <span>{priceResult.HIGHDAY}</span></Info>
        <Info>el precio mas bajo del dia: <span>{priceResult.LOWDAY}</span></Info>
        <Info>variacion ultimas 24 horas <span>{priceResult.CHANGEPCT24HOUR}</span></Info>
        <Info>ultima actualizacion: <span>{priceResult.LASTUPDATE}</span></Info>
    </ResultDiv>
  )
}

export default Prices