import React,{useRef} from 'react'

const AboutUs = ({toTop2})=>{



    const titleRef3=useRef()
    
    return(
        <article style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div id="about-us-center" style={{background:'#071E28'}}>
            <div id='about-us-top-cursor' onClick={toTop2}>
            </div>
            <div id='about-us-info-box'>
                <h1 style={{fontSize:'6em',color:'#B87333',fontFamily:'Montaga',marginLeft:'0.2em'}}>About us</h1>
                
                <p style={{fontSize:'3em',color:'white',fontFamily:'Pontano Sans',marginLeft:'0.2em'}}>Dreams Real Estate was founded by T.Mashori,
                    an <br/>exceptional industry leader in all things
                    Real estate.
                </p>

                <br/>

                <p style={{fontSize:'3em',color:'white',fontFamily:'Pontano Sans',marginRight:'0.2em',alignSelf:'flex-end'}}>Him and his associates saw a
                    need in the market for<br/> a agency 
                    that is unapologetic about setting 
                    high <br/>standards in terms of luxury.
                </p>

                <div className='available-houses' style={{alignSelf:'center'}}>
                <p style={{color:'white',fontSize:'3em'}}>Contact us</p>
                </div>

            </div>
        </div>
        </article>
        
    )
}

export default AboutUs