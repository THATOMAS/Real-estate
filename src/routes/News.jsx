import React,{useState}from 'react'
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"
import styled from "styled-components"
import Footer from "./Footer"

const NewsView = styled.article`
height:fit-content;
width:100vw;
display:flex;
flex-direction:column
`
const NewsPaper = styled.section`
height:70vh;
background:red;
`

const News = ()=>{
return(

<NewsView>
	<Navbar/>
 	<NewsPaper/>
     <Footer/>
 </NewsView>
	)
}
 
export default News