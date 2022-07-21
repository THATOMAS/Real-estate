import React from "react"
import styled from "styled-components"

const searchIcon = require("../assets/MarketPlace/searchIcon.png")

const HeaderContainer = styled.article`
height:15vh;
width:100vw;
background:#E7E7E7;
display:flex;
flex-direction:column
`

const HeadingAndSearchBarBox = styled.div`
height:40%;
width:100vw;
display:flex;
align-items:center;
justify-content:space-between;
`
const Heading = styled.h1`
font-family:Montaga;
color:black;
font-size:35px;
font-weight:lighter;

`

const Form = styled.form`
display:flex;
margin-right:50px
`

const Input = styled.input`

width:350px;
display:flex;
border:5px solid #B87333;
background:#E7E7E7;
outline:none;

`
const Button = styled.button`
border:none;
justify-self:flex-end;
height:45px;
width:50px;
background:url(${searchIcon});
background-size:cover;
background-position:center;
background-repeat:no-repeat;
border-radius:0px 5px 5px 0px;
cursor:pointer;
`

const PreferencesBox = styled.div`
height:60%;
width:100vw;
background:red;
display:flex;
align-items:center;
justify-content:space-around;
`

const SinglePreferenceBox = styled.div`
height:70px;
width:200px;
background:blue;
display:flex;
flex-direction:column;
align-items:center;
`


const Label = styled.label`
font-family:Montaga;
color:black;
font-size:25px;
height:40%;
width:100%;
background:green;
display:flex;
align-items:center;
justify-content:center;

`

const Select = styled.select`
height:60%;
width:100%;
background:yellow;
display:flex;
align-items:center;
justify-content:center;


`
const Option = styled.option`
font-family:Montaga;
color:black;
font-size:22px;
outline:none;
background:#B87333
}

`


const Header = ()=>{
	return(<HeaderContainer>
		<HeadingAndSearchBarBox>
			<Heading>Find your dream property here</Heading>
			<Form >
				<Input type="text" name="search" />
				<Button type="submit"/>
			</Form>
		</HeadingAndSearchBarBox>
		<PreferencesBox>
			<SinglePreferenceBox>
				<Label>Property Type:</Label>
				<Select >
					<Option>Houses</Option>
					<Option>Apartments</Option>
					<Option>Commune</Option>		
				</Select>				
			</SinglePreferenceBox>
			

		</PreferencesBox>

	</HeaderContainer>)
}

export default Header;