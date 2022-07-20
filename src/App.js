import React ,{useRef}from "react";
import HomePage from "./routes/HomePage";
import ViewHouses from "./routes/ViewHouses";
import AboutUs from "./routes/AboutUs";
import styled from "styled-components"


const background1 = require("./assets/HomePage/background.png")
const background2 = require('./assets/AboutUs/background.jpg')

const HomePageView = styled.section`  
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: url(${background1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  scroll-snap-align: start;
`

const ViewHousesView = styled.section`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  scroll-snap-align: start;
  background:#071E28
`

const AboutUsView = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: url(${background2});
  background-repeat:repeat;
  background-size:cover
  `

const App = () => {
const titleRef = useRef()
const titleRef2 = useRef()
const titleRef3 = useRef()

const toBottom = ()=>{titleRef2.current.scrollIntoView({behavior:'smooth'})}
const toTop = ()=>{titleRef.current.scrollIntoView({behavior:'smooth'})}
const toTop2 = ()=>{titleRef2.current.scrollIntoView({behavior:'smooth'})}
const toBottom2 = ()=>{titleRef3.current.scrollIntoView({behavior:'smooth'})}


  return (
    <main >
    <HomePageView ref={titleRef}>
      <HomePage toBottom={toBottom}/>
    </HomePageView >

    <ViewHousesView ref={titleRef2}>
      <ViewHouses toTop={toTop} toBottom2={toBottom2}/>
    </ViewHousesView>

    <AboutUsView ref={titleRef3} >
      <AboutUs toTop2={toTop2}/>
    </AboutUsView>

    </main>
  );
};

export default App;
