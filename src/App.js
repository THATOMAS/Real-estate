import React ,{useRef}from "react";
import HomePage from "./routes/HomePage";
import ViewHouses from "./routes/ViewHouses";
import AboutUs from "./routes/AboutUs";

const App = () => {

const titleRef = useRef()
const titleRef2 = useRef()
const titleRef3 = useRef()

const toBottom = ()=>{
  titleRef2.current.scrollIntoView({behavior:'smooth'})
}

const toTop = ()=>{
  titleRef.current.scrollIntoView({behavior:'smooth'})
}


const toBottom2 = ()=>{
  titleRef3.current.scrollIntoView({behavior:'smooth'})
}


  return (
    <main >
    <section id='home-page-view' ref={titleRef}>
      <HomePage toBottom={toBottom}/>
    </section>

    <section id='view-houses-view' ref={titleRef2} >
      <ViewHouses toTop={toTop} toBottom2={toBottom2}/>
    </section>

    <section id='about-us-view' ref={titleRef3}>
      <AboutUs />
    </section>

    </main>
  );
};

export default App;
