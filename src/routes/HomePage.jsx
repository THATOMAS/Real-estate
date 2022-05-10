import React,{useRef} from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({toBottom})=>{

    return(

      <article>
      
      <div id ='home-page-heading'>
      </div>
          
      <div id='home-page-center'>
        <div id='home-page-center-info'>
            <div className='available-houses'>
            <p style={{color:'white',fontSize:'2em',textAlign:'center'}}>Available Houses</p>
            </div>
            <h1 style={{marginLeft:'0.5em',fontFamily: 'Montaga',fontWeight:'lighter',fontSize:'4em',color:'white'}}>We make dreams <br/>come true,<br/>give us a call. </h1>
        </div>
            
        <div id='home-page-bottom-cursor' onClick={toBottom}>
          <div id='cursor' >
          </div>
        </div>
        
      </div>
        </article>
        
    )
}

export default HomePage