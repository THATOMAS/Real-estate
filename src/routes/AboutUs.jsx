import React,{useRef,useState} from 'react'
import styled from "styled-components"

const topcursor = require('../assets/ViewHouses/topCursor.png')

const AboutUsView = styled.article`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const AboutUsCenter = styled.div`
height: 70vh;
width: 80vw;
display: flex;
flex-direction: column;
background:#071E28

`
const AboutUsTopPointerBox = styled.div`  
height: 10%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
&:hover{transform: scale(1.2);}
`
const AboutUsTopPointer = styled.div`
height: 4.1em;
  width: 4em;
  background:url(${topcursor});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
`

const AboutUsInfoBox = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  justify-content: flex-end;
`

const Heading = styled.h1`
font-size:3em;
color:#B87333;
font-family:Montaga;
margin-left:0.2em;`

const PageText = styled.p`
font-size:2em;
color:white;
font-family:Pontano Sans;
margin-left:0.2em
`

const LinkBox = styled.div`
width:fit-content;
height:fit-content;
background: #B87333;
border-radius:5px;
margin-top:10px
`
const LinkText = styled.p`
height:10%;
width:100%;
font-size:2em;
color:white;
margin-top:2.5em;
display:flex;
align-items:flex-end;
justify-content:center;
flex-direction:column



`

const LinkTo = styled.a`
color:white;
font-size:3em;
text-decoration:none

`

const AboutUs = ({toTop2})=>{
const [show,setShow] = useState(true)
const hovering = ()=>{setShow(false)}
const notHovering = ()=>{setShow(true)}
const titleRef3=useRef()
    
    return(
        <AboutUsView>
            <AboutUsCenter>
                <AboutUsTopPointerBox>
                    <AboutUsTopPointer onClick={toTop2}/>
                </AboutUsTopPointerBox>
        
            <AboutUsInfoBox>
                <Heading>About us</Heading>
                
                <PageText>Dreams Real Estate was founded by T.Mashori,
                    an <br/>exceptional industry leader in all things
                    Real estate.
                </PageText>
                <br/>
                <PageText>Him and his associates saw a
                    need in the market for<br/> a agency 
                    that is unapologetic about setting 
                    high <br/>standards in terms of luxury.
                </PageText>

                <div onMouseOver={hovering} onMouseLeave={notHovering} className='available-houses' style={{alignSelf:'center'}}>
                <LinkTo 
                    href="https://thatodevelops.web.app/Hire-me" 
                    target="_blank" >{show ? <>Contact us</> : <>081 472 1948</>}
                </LinkTo>
                </div>

            </AboutUsInfoBox>
        </AboutUsCenter>
        <LinkText
        >Created by<LinkBox> <a href="https://thatodevelops.web.app" target="_blank" 
        style={{color:'#071E28',cursor:'pointer',textDecoration:"none"}}>Thato Mashori. </a> </LinkBox>
        </LinkText>
        

        </AboutUsView>
        
    )
}

export default AboutUs;