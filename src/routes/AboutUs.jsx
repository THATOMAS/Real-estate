import React,{useRef,useState} from 'react'

const AboutUs = ({toTop2})=>{

const [show,setShow] = useState(true)

const hovering = ()=>{
    setShow(false)
    return
}

const notHovering = ()=>{
    setShow(true)
}

    const titleRef3=useRef()
    
    return(
        <article style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div id="about-us-center" style={{background:'#071E28'}}>
            <div id='about-us-top-cursor-box' >
                <div id='about-us-top-cursor' onClick={toTop2}>
                    
                </div>
            </div>
            <div id='about-us-info-box'>
                <h1 style={{fontSize:'3em',color:'#B87333',fontFamily:'Montaga',marginLeft:'0.2em'}}>About us</h1>
                
                <p style={{fontSize:'2em',color:'white',fontFamily:'Pontano Sans',marginLeft:'0.2em'}}>Dreams Real Estate was founded by T.Mashori,
                    an <br/>exceptional industry leader in all things
                    Real estate.
                </p>

                <br/>

                <p style={{fontSize:'2em',color:'white',fontFamily:'Pontano Sans',marginRight:'0.2em',alignSelf:'flex-end'}}>Him and his associates saw a
                    need in the market for<br/> a agency 
                    that is unapologetic about setting 
                    high <br/>standards in terms of luxury.
                </p>

                <div onMouseOver={hovering} onMouseLeave={notHovering} className='available-houses' style={{alignSelf:'center'}}>
                <a href="https://thatodevelops.web.app/Hire-me" target="_blank" style={{color:'white',fontSize:'3em',textDecoration:"none"}}>{show ? <>Contact us</> : <>081 472 1948</>}</a>
                </div>

            </div>
        </div>

        <p style={{fontSize:'2em',color:'white' ,marginTop:'2.5em'}}>Created by <a href="https://thatodevelops.web.app" target="_blank" style={{color:'#B87333',cursor:'pointer'}}>Thato Mashori. </a> </p>
        </article>
        
    )
}

export default AboutUs