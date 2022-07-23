import React ,{useState}from "react"
import styled from "styled-components"

const location = require("../assets/MarketPlace/location.png")
const bedroom = require("../assets/MarketPlace/bedroom.png")



const HouseBox = styled.div`
min-height:${props=>props.show? "18vh":"53vh"  };
width:96vw;
margin-top:20px;
display:flex;
flex-direction:column;
align-items:${props=>props.show? "center":"flex-start"  };
border:3px solid#21463C;
justify-self:center;
`

const ImageAndInfoBox = styled.div`
display:flex;
flex-direction:row;
height:${props=>props.show ? "150px":"520px"};
width:100%;
// background:green;

`



const EstateImage = styled.div`
height:${props=>props.show ? "200px":"520px"};
width:${props=>props.show ? "200px":"520px"};
background:url(${props=>props.image});
background-position:center;
background-size:cover;
`

const HouseInfoBox = styled.div`
flex:1;
display:flex;
flex-direction:column;
height: ${props=>props.show ?"200px":"520px"};
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
margin-top:10px;
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

const Br2 = styled.div`

height:1px;
width:35%;
margin-top:5px;
background:black;
align-self:flex-start;
border-radius:5px;
margin-left:5px

`

const InfoBoxText = styled.p`
font-family:Sans-serif;
color:black;
font-size:25px;
font-weight:lighter;
// background:red;
`


const SeeMore = styled.p`font-family:Sans-serif;
color:#B87333;
font-size:25px;
font-weight:lighter;
margin-right:10px;
cursor:pointer;
justify-self:flex-end;
align-self:center;
`

const MoreDetails = styled.div`
display:${props=>props.show?"none":"flex"};
// background:red;
height:300px;
flex-direction:column;
justify-content:space-evenly;
`

const LocationBedroomsBox = styled.div`
height:60%;
width:100%;
// background:yellow;
display:flex;
`

const LocationBox = styled.div`
flex:1;
// background:blue;
display:flex;
`
const LocationIcon = styled.div`
margin:5px;
height:40px;
width:40px;
background:url(${location});
background-position:center;
background-repeat:no-repeat;
background-size:contain;
`

const DetailsTextBox = styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
// background:blue;
`

const DetailsText = styled.p`
font-family:Sans-serif;
color:black;
font-size:20px;
font-weight:bold;
margin: 5px 0px 0px 10px;
`

const BedroomBox = styled.div`
flex:1;
// background:pink;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;
`


const BedRoomIcon = styled.div`
height:40px;
width:40px;
background:url(${bedroom});
background-position:center;
background-repeat:no-repeat;
background-size:contain;
margin: 5px 0px 0px 10px
`


const AgentBox = styled.div`
height:20%;
width:100%;
// background:blue;
display:flex;
align-items:center;
justify-content:center
`
const CallAgent = styled.a`
height:60px;
width:200px;
background:#071E28;
color:white;
font-size:25px;
font-family:Montaga;
border:none;
border-radius:30px;
cursor:pointer;
text-decoration:none;
display:flex;
align-items:center;
justify-content:center;
`

const SingleHouse = ({id,img,name,price,info,location,bedrooms})=>{
const [show,setShow] = useState(true)

				return(
					<HouseBox key={id} show={show}>
						<ImageAndInfoBox show={show}>
							<EstateImage image={img} show={show}/>
							<HouseInfoBox show={show}>
							<NameAndPriceBox show={show}>
								<Name>{name}</Name>
								<Price>R {price}</Price>
							</NameAndPriceBox>
							<Br/>							
							<InfoBoxText>{info}</InfoBoxText>
							<MoreDetails show={show}>
								<Br2/>
								<LocationBedroomsBox>
									<LocationBox>
										<LocationIcon/>
										<DetailsTextBox>
											<DetailsText>{location.City}</DetailsText>
											<DetailsText>{location.Estate}</DetailsText>
											<DetailsText>{location.State}</DetailsText>
											<DetailsText>{location.PostAdress}</DetailsText>
										</DetailsTextBox>
									</LocationBox>
									<BedroomBox>
										<BedRoomIcon/>
										<DetailsText >{bedrooms}</DetailsText>
									</BedroomBox>
								</LocationBedroomsBox>
								<AgentBox>
									<CallAgent href="https://thatodevelops.web.app/Hire-me" target="_blank">Call Agent</CallAgent>
								</AgentBox>
								
							</MoreDetails>	
						</HouseInfoBox>
						</ImageAndInfoBox>
	
						<SeeMore show={show} onClick={()=>{setShow(!show)}}>{show?"show more ..." : "show less ..."}</SeeMore>
					</HouseBox>
					)
}


export default SingleHouse;