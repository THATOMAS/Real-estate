import React from 'react'
import CenterPage from "./CenterPage"
import Filtered from "./Filtered"
import Footer from "./Footer"
import styled from "styled-components"

const ForSalePage = styled.section`
height:100vh;

`


const ForSale = ()=>{
    return(
        <ForSalePage>
            <CenterPage/>
        </ForSalePage>
    )
}

export default ForSale;
