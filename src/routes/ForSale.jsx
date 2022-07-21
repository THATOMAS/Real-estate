import React from 'react'
import Header from "./Header"
import styled from "styled-components"


const ForSalePage = styled.section`
height:150vh;
`


const ForSale = ()=>{
    return(
        <ForSalePage>
            <Header/>
        </ForSalePage>
    )
}

export default ForSale;