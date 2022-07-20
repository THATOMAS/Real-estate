import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const heading = require('../assets/HomePage/heading.png')
const bottompointer = require("../assets/HomePage/cursor.png")

const HomePageHeading = styled.div`
  height: 15vh;
  width: 100vw;
  background: url(${heading});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const HomePageCenter = styled.div`
height: 85vh;
  width: 100%;
`

const HomePageCenterInfo = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: column;
justify-content: flex-end;`


const ButtonText = styled.p`
color:white;
font-size:2em;
text-align:center;`

const Heading = styled.h1`
margin-left:0.5em;
font-family:Montaga
;font-weight:lighter;
font-size:4em;
color:white;
`

const HomePageBottomPointerBox = styled.div`
  height: 30vh;
  width: 100%; 
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const Pointer = styled.div`
margin-top :2em;
  height: 7em;
  width: 7em;
  background: url(${bottompointer});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;`

const HomePage = ({toBottom})=>{

    return(

      <article>
      
        <HomePageHeading/>
        <HomePageCenter>
          <HomePageCenterInfo>
              < Link to="/MarketPlace" className='available-houses' >
                <ButtonText>Available Houses</ButtonText>
              </Link>
              <Heading>We make dreams <br/>come true,<br/>give us a call. </Heading>
          </HomePageCenterInfo>
              
          <HomePageBottomPointerBox onClick={toBottom}>
            <Pointer/>
          </HomePageBottomPointerBox>
          
        </HomePageCenter>
      </article>
        
    )
}

export default HomePage