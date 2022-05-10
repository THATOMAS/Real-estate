import React ,{useRef}from 'react'

const topCursor = require('../assets/ViewHouses/topCursor.png')

const bottomCursor = require('../assets/ViewHouses/bottomCursor.png')



const ViewHouses = ({toTop,toBottom2})=>{
document.body.style.background = '#071E28'

    return(
        <article id='view-houses-page'>
            <div id='view-houses-top-cursor'>
                <div style={{height:'4em'
                ,width:'7em' ,
                background:`url(${topCursor})`,
                backgroundPosition:'center',
                backgroundSize:'contain',cursor:'pointer'}}
                 onClick={toTop}>
                     
                 </div>
            </div>
            
            <div id='view-houses-center'>
                <div id='view-houses-center-info'></div>
                <div id="view-houses-center-photo"></div>
            </div>
            

            <div id='view-houses-bottom-cursor'>
                
                <div style={{height:'4em',
                    width:'7em' ,
                    background:`url(${bottomCursor})`,
                    backgroundPosition:'center',
                    backgroundSize:'contain',
                    cursor:'pointer'}}
                    onClick={toBottom2}>
                </div>
            
            </div>
        

        </article>
        
    )
}

export default ViewHouses