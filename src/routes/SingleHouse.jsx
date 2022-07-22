import React ,{useState}from "react"
import styled from "styled-components"





const HouseBox = styled.div`
min-height:${props=>props.show? "53vh" : "20vh" };
width:96vw;
margin-top:20px;
display:flex;
flex-direction:column;
align-items:${props=>props.show? "flex-start" : "center" };
border:3px solid#21463C;
justify-self:center;
`

const ImageAndInfoBox = styled.div`
display:flex;
flex-direction:row;
height:200px;
width:100%;
background:green;

`

const MoreDetails = styled.div`
display:${props=>props.show === false && "none"};
height:35vh;
width:100%;
background:red;

`

const EstateImage = styled.div`
height:200px;
width:250px;
background:url(${props=>props.image});
background-position:center;
background-size:cover;
`

const HouseInfoBox = styled.div`
flex:1;
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
font-size:25px;
font-weight:lighter;
margin-right:10px;
cursor:pointer;
justify-self:flex-end;
align-self:center;
`




const SingleHouse = ({id,img,name,price,info})=>{
const [show,setShow] = useState(false)

				return(
					<HouseBox key={id} show={show}>
						<ImageAndInfoBox>
							<EstateImage image={img}/>
							<HouseInfoBox>
							<NameAndPriceBox>
								<Name>{name}</Name>
								<Price>R {price}</Price>
							</NameAndPriceBox>
							<Br/>
							<InfoBoxText>{info}</InfoBoxText>
						</HouseInfoBox>
						</ImageAndInfoBox>
						<MoreDetails show={show}>
							This is more Details section
						</MoreDetails>
						<SeeMore show={show} onClick={()=>{setShow(!show)}}>{show?"show less ..." : "show more ..."}</SeeMore>
					</HouseBox>
					)
}


export default SingleHouse;