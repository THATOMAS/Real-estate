import React from "react"
import styled from "styled-components"
import {Link,Outlet} from "react-router-dom"

const logoimage = require("../assets/Logo.png")

const NavbarContainer = styled.div`
height:15vh;
width:100vw;
background:#071E28;
display:flex;
align-items:center;
justify-content:space-around
`

const PageLinks = styled.div`
height:50%;
width:90%;
display:flex;
justify-content:flex-end;
align-items:flex-start;

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
					
					<Link to="/MarketPlace" className="PageLink">For Sale</Link>
					<Link to="/MarketPlace/ForRent" className="PageLink">For Rent</Link>
					<Link to="/MarketPlace/Developments" className="PageLink">Developments</Link>
					
					<Number> +27 97 554 9900</Number>
				</PageLinks>
			</NavbarContainer>
			<Outlet/>
		</article>
		)
}

export default Navbar;