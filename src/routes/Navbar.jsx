import React from "react"
import styled from "styled-components"
import {Link,Outlet} from "react-router-dom"

const logoimage = require("../assets/Logo.png")

const NavbarContainer = styled.div`
height:10vh;
width:100vw;
background:#071E28;
display:flex;
align-items:center;
justify-content:space-between
`

const PageLinks = styled.div`
height:50%;
width:70%;
display:flex;
justify-content:flex-end;
align-items:flex-start;
margin-right:20px;
`

const Number = styled.p`

font-family:Montaga;
color:white;
font-size:1.9em;
font-weight:lighter;
margin-left:30px;
align-self:center;
`

const Navbar = ()=>{

	return(
		<article>
			<NavbarContainer>
				<Link to="/" className="Logo"/>
				<PageLinks>
					<Link to="/" className="PageLink">Home</Link>
					<Link to="/MarketPlace" className="PageLink">onSale</Link>
					<Link to="/MarketPlace/ForRent" className="PageLink">toRent</Link>
					<Link to="/MarketPlace/Developments" className="PageLink">Developments</Link>
					
					<Number> +27 97 554 9900</Number>
				</PageLinks>
			</NavbarContainer>
			<Outlet/>
		</article>
		)
}

export default Navbar;