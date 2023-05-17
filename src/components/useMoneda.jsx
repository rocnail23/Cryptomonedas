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

const useMoneda = (initialState,options) => {

    const [coin, setCoin] = useState(initialState)

    const select = () => {
        

        return( <Fragment>

            <Label>elige tu moneda</Label>
            <Select value={coin} onChange={(e) => setCoin(e.target.value)}>
                <option value="">--seleccionar moneda</option>
                {options.map(moneda => (
                    <option key={moneda.code} value={moneda.code}>{moneda.name}</option>
                ))}
            </Select>
        </Fragment>)

                }

    return [coin, select, setCoin]

}

export default useMoneda