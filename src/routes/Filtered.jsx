import React ,{useState} from "react"
import styled from "styled-components"

const Container= styled.div`
height:100%;
width:100vw;
background:red
`


const Filtered = ({houses})=>{
	return(
		<Container>
			{houses.map((house)=>{

				return(<p>{house.name}</p>)
			})}
		</Container>

		)
}

export default Filtered;