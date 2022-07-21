import React ,{useRef}from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"


const topCursor = require('../assets/ViewHouses/topCursor.png')
const bottomCursor = require('../assets/ViewHouses/bottomCursor.png')
const centerPic = require('../assets/ViewHouses/centerPic.png')


const ViewHousesPage = styled.article`
height: 100vh;
  width: 100vw;
`

const TopPointerBox = styled.div`
height: 5vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const TopPointer = styled.div`
height:4.1em;
width:4em;
background:url(${topCursor});
background-position:center;
background-size:cover;
cursor:pointer;
background-repeat:no-repeat;
margin-top:2em;
&:hover{transform: scale(1.2);}
`

const ViewHousesCenter = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const ViewHousesCenterInfo = styled.div`
  height: 90vh;
  width: 47%;
  margin-left:3% ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Heading = styled.h1`
font-size:3em;
color:#B87333;

`

const PageText = styled.p`
font-size:2em;
color:white;
font-family: Pontano Sans

`


const ButtonText = styled.p`
color:white;
font-size:2em;
text-align:center;`

const ViewHousesCenterPhotoBox = styled.div`
  height: 90vh;
  width: 50vw;
  /*background: green;*/
  display: flex;
align-items: center;
justify-content: center;

`

const ViewHousesCenterPhoto = styled.div`
height:75%;
width:90%;
background: url(${centerPic});
background-repeat:no-repeat;
background-position:center;
background-size:contain
`

const ViewHousesBottomPointerBox = styled.div`
height: 5vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    transform:scale(1.2)
}
`

const ViewHousesBottomPointer = styled.div`
height:4.1em;                    
width:4em;
background: url(${bottomCursor});
background-position:center;
background-size:contain;
cursor:pointer;
background-repeat:no-repeat;
background-position:center;
background-size:cover;
margin-bottom:2em


`

const ViewHouses = ({toTop,toBottom2})=>{

    return(
        <ViewHousesPage>
            <TopPointerBox>
               <TopPointer onClick={toTop}/>     
            </TopPointerBox>
            
            <ViewHousesCenter>
                <ViewHousesCenterInfo>
                
                    <Heading>Lets look at some houses on<br/>the market .</Heading>
                    <PageText>
                        With a great track record,our 
                        team of dedicated individuals 
                        will help you find your dream home  .
                    </PageText>

                    <Link to='/MarketPlace' className='available-houses' style={{textDecoration:'none',marginRight:'7em'}}>
                        <ButtonText>Available Houses</ButtonText>
                    </Link>
                
                </ViewHousesCenterInfo>
                
                <ViewHousesCenterPhotoBox>
                    <ViewHousesCenterPhoto/>
                </ViewHousesCenterPhotoBox>
            </ViewHousesCenter>
            

            <ViewHousesBottomPointerBox>   
                <ViewHousesBottomPointer onClick={toBottom2}/>
            </ViewHousesBottomPointerBox>
        </ViewHousesPage>
        
    )
}

export default ViewHouses