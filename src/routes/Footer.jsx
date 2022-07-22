import React from "react"
import styled from "styled-components"

const FooterContainer= styled.section`
height:25vh;
width:100vw;
background:#B87333;
display:flex

`

const Left = styled.div`
height:100%;
flex:1;
display:flex;
flex-direction:column;
`
const Heading = styled.p`
font-family:Montaga;
font-size:35px;
font-weight:lighter;
text-decoration:none;
color:black;
align-self:center

` 

const Name = styled.a`
font-family:Montaga;
font-size:25px;
font-weight:lighter;
text-decoration:none;
color:black;
align-self:center;
cursor:pointer

`



const Center = styled.div`
height:100%;
flex:1;
display:flex;
flex-direction:column;
`



const Right = styled.div`
height:100%;
flex:1;
display:flex;
flex-direction:column;
`

const LinkText = styled.p`
font-size:1.5em;
color:white;
display:flex;
align-items:flex-end;
justify-content:center;
flex-direction:row;

`

const LinkBox = styled.div`
width:fit-content;
height:fit-content;
background: white;
border-radius:5px;
margin-left:5px

`




const Footer = ()=>{
	return(
		<FooterContainer>
			<Left>
				<Heading>Links</Heading>
				<Name href="/">Home</Name>
				<Name href="/MarketPlace">Market</Name>
				<Name href="/News">News</Name>
			</Left>
			<Center>
				<Heading>Company</Heading>
				<Name>Contact us</Name>
				<Name>Blog</Name>
				<Name>Jobs</Name>
			</Center>
			<Right>
				<Heading>Support</Heading>
				<Name>Help</Name>
				<Name>Service Status</Name>
				<Name>Report a Bug</Name>
			</Right>
		</FooterContainer>
		
		)
}

export default Footer