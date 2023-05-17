import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
font-family: "Bebas Neue", cursive;
color: #fff;
text-transform: uppercase;
font-weight: bold;
font-size: 2.4rem;
margin-top: 2rem;
display: block;
`

const Select = styled.select`
width: 100%;
display: block;
padding: 1rem;
appearance: none;
-webkit-appearance: none;
border-radius: 10px;
border: none;
font-size: 1rem;
outline: none;

`

const useCrypto = (initialState,options) => {
    
    const [coin, setCoin] = useState(initialState)

    const select = () => 
         (       <Fragment>

            <Label>elige tu moneda</Label>
           <Select onChange={(e) => setCoin(e.target.value)} value={coin}>
                <option value="">--seleccionar tu crypto</option>
                {options?.map(crypto => (
                    <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name} >{crypto.CoinInfo.FullName}</option>
                ))}
            </Select> 
        </Fragment>)

                

    return [coin, select,]

}

export default useCrypto