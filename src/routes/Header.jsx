import React from "react"
import styled from "styled-components"

const searchIcon = require("../assets/MarketPlace/searchIcon.png")
const close = require("../assets/MarketPlace/close.png")


const HeaderContainer = styled.article`
height:18vh;
width:100vw;
background:#E7E7E7;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
`


const Heading = styled.h1`
font-family:Montaga;
color:black;
font-size:30px;
font-weight:lighter;
margin-bottom:5px
`

const Form = styled.form`
display:flex;
`

const Input = styled.input`

width:500px;
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
// background:red;
display:flex;
align-items:center;
justify-content:space-around;
`

const SinglePreferenceBox = styled.div`
height:70px;
width:200px;
// background:blue;
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
// background:green;
display:flex;
align-items:center;
justify-content:center;

`

const Select = styled.select`
height:60%;
width:100%;
// background:yellow;
display:flex;
align-items:center;
justify-content:center;
background:none;
text-align:center;
font-family:Montaga;
color:black;
font-size:25px;
background:white;
`
const Option = styled.option`
font-family:Montaga;
color:black;
font-size:25px;
outline:none;
background:white;
&:hover{
	background:#B87333
}
`

const Header = ()=>{
	return(<HeaderContainer>

			<Heading>Find your dream property here</Heading>
			<Form >
				<Input type="text" name="search" />
				<Button type="submit"/>
			</Form>

		<PreferencesBox>
			<SinglePreferenceBox>
				<Label>Property type:</Label>
				<Select >
					<Option>Houses</Option>
					<Option>Apartments</Option>
					<Option>Commune</Option>		
				</Select>
			</SinglePreferenceBox>
							
			<SinglePreferenceBox>
				<Label>Max price:</Label>
				<Select >
					<Option>R 4 m</Option>
					<Option>R 5 m</Option>
					<Option>R 6 m</Option>		
				</Select>
			</SinglePreferenceBox>
							
			<SinglePreferenceBox>
				<Label>Min price:</Label>
				<Select >
					<Option>R 600 K</Option>
					<Option>R 500 K</Option>
					<Option>R 400 K</Option>		
				</Select>


			</SinglePreferenceBox>
							
	
						<SinglePreferenceBox>
				<Label>Bedrooms:</Label>
				<Select >

					<Option>1</Option>
					<Option>2</Option>
					<Option>3</Option>
					<Option>4</Option>
					<Option>5</Option>
					<Option>6</Option>		
				</Select>

				
			</SinglePreferenceBox>
							

		</PreferencesBox>

	</HeaderContainer>)
}

export default Header;