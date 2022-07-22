import React ,{useState} from "react"
import styled from "styled-components"
import SingleHouse from "./SingleHouse"

const Container= styled.article`
height:fit-content;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
`

const Filtered = ({houses})=>{
	
	return(
		<Container>
			{houses.map((house)=>{
				return(
					<SingleHouse key={houses.id} {...house}/>
					)
			})}

		</Container>

		)
}

export default Filtered;