import React,{useState}from 'react'
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"
import Filtered from "./Filtered"
import styled from "styled-components"
import Footer from "./Footer"

import data from "../Houses"



const MarketPlaceView =styled.section`
height:fit-content;
width:100vw;
display:flex;
flex-direction:column

`


const MarketPlace = ()=>{

const [houses,setHouses] = useState(data)  

// const FilterItems = ()=>{

// }  

    return(
        <MarketPlaceView>
            <Navbar/>
            <SearchBar/>
            <Filtered houses={houses}/>
            <Footer/>
        </MarketPlaceView>
    )
}

export default MarketPlace