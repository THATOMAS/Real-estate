import React ,{useState} from "react"
import styled from "styled-components"


const Container= styled.article`
height:fit-content;
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
`

const HouseBox = styled.div`
min-height:300px;
width:90vw;
background:white;
margin-top:10px;
margin-bottom:10px;
display:flex;
align-items:center;
border:3px solid#21463C
`
const EstateImage = styled.div`

flex:2;
height:300px;
width:450px;
background:url(${props=>props.image});
background-position:center;
background-size:cover;
`

const HouseInfoBox = styled.div`
flex:5;
display:flex;
flex-direction:column;
height:280px;
// background:green;
margin-left:5px;
justify-content:flex-start
`

const NameAndPriceBox = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
height:15%;
// background:red;
width:95%;
margin-left:5px
;
`
const Name = styled.h5`
font-family:Montaga;
color:black;
font-size:28px;
font-weight:lighter
`

const Price = styled.h4`
font-family:Montaga;
color:black;
font-size:40px
`

const Br = styled.div`
height:1px;
width:95%;
margin-top:5px;
background:black;
align-self:flex-start;
border-radius:5px;
margin-left:5px

`
const InfoBoxText = styled.p`
font-family:Sans-serif;
color:black;
font-size:30px;
font-weight:lighter

`
const SeeMore = styled.p`font-family:Sans-serif;
color:#B87333;
font-size:35px;
font-weight:lighter;
margin-top:5px;
cursor:pointer;
`

const Filtered = ({houses})=>{
	return(
		<Container>
			{houses.map((house)=>{

				return(
					<HouseBox key={house.id}>
						<EstateImage image={house.img}/>
						<HouseInfoBox>
							<NameAndPriceBox>
								<Name>{house.name}</Name>
								<Price>R {house.price}</Price>
							</NameAndPriceBox>
							<Br/>
							<InfoBoxText>{house.info}</InfoBoxText>
							<SeeMore>See more ...</SeeMore>
						</HouseInfoBox>
					</HouseBox>
					)
			})}
		</Container>

		)
}

export default Filtered;