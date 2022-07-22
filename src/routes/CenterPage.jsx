import React,{useState} from "react"
import styled from "styled-components"
import Filtered from "./Filtered"
import SearchBar from "./SearchBar"
import Footer from "./Footer"

import Data from "../Houses"



const close = require("../assets/MarketPlace/close.png")


const Container = styled.article`
height:100vh;
`


const Header = ()=>{

	const [houses,setHouses] = useState(Data)

	return(
	<Container>
		<SearchBar/>	
		<Filtered houses={houses}/>
		<Footer/>
	</Container>)
}

export default Header;