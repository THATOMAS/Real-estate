import React ,{useRef}from 'react'

const topCursor = require('../assets/ViewHouses/topCursor.png')

const bottomCursor = require('../assets/ViewHouses/bottomCursor.png')
const centerPic = require('../assets/ViewHouses/centerPic.png')


const ViewHouses = ({toTop,toBottom2})=>{
document.body.style.background = '#071E28'

    return(
        <article id='view-houses-page'>
            <div id='view-houses-top-cursor'>
                <div style={{height:'3em'
                ,width:'7em' ,
                background:`url(${topCursor})`,
                backgroundPosition:'center',
                backgroundSize:'contain',
                cursor:'pointer',
                backgroundRepeat:'no-repeat'}}
                 onClick={toTop}>
                     
                 </div>
            </div>
            
            <div id='view-houses-center'>
                <div id='view-houses-center-info'>
                
                    <h1 
                    style={{fontSize:'3em',color:'#B87333'}}>
                    Lets look at some houses on
                    <br/>the market .
                    </h1>
                    
                    <p style={{fontSize:'2em',
                    color:'white' ,
                    fontFamily: 'Pontano Sans'}}>
                    With a great track record,our 
                    team of dedicated individuals 
                    will help you find your dream home  .
                    </p>

                    <div className='available-houses'>
                        <p style={{color:'white',fontSize:'2em',textAlign:'center'}}>Available Houses</p>
                    </div>
                
                </div>
                
                <div id="view-houses-center-photo">
                    <div style={{height:'75%',
                    width:'90%',
                    background:`url(${centerPic})`,
                    
                     backgroundRepeat:'no-repeat',
                     backgroundPosition:'center',
                     backgroundSize:'contain'
                }}>
                    </div>
                </div>
                </div>
            

            <div id='view-houses-bottom-cursor'>
                
                <div style={{height:'3em',
                    width:'7em' ,
                    background:`url(${bottomCursor})`,
                    backgroundPosition:'center',
                    backgroundSize:'contain',
                    cursor:'pointer',
                     backgroundRepeat:'no-repeat',
                     backgroundPosition:'center',
                     backgroundSize:'contain'
                }}
                    onClick={toBottom2}>
                </div>
            
            </div>
        

        </article>
        
    )
}

export default ViewHouses