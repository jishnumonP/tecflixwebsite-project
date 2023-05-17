import React from 'react'
import {AiOutlineWhatsApp } from 'react-icons/ai'
import metaverse from '../../assets/img/meta.jpeg'
import './Home.css'
import Courses from './Content/Courses/Courses'
import Community from './Content/community/Community'
import Plans from './Content/Plans/Plans'

function Home() {
    const handleClick = () => {
        window.open('https://www.youtube.com/@techflixai', '_blank');}
  return (
    <>

    <section>

<div className="container">
    <div className="home-container">
<div className="home-content">
    <h2 className='section-title'>
       Learn Everything For <span className="highlights">Free!!</span> 
    </h2>
    <p>
Master Trending Technologies with Techflix AI , Invest Your Time and return skills

    </p>
<div className="home-btns">
   <button className="register-btn" onClick={handleClick}>
    Get Started
    </button> 
    {/* <button className="watch-btn"> */}
       {/* <span>Watch Now</span> <AiFillYoutube/> */}
       <button className="register-btn" onClick={handleClick}>

        Watch Now
      

    {/* </button> */}
    </button>
</div>


</div>
<div className="home-img">
    <div className="home-img-wrapper">
<div className="box-01">

            <div className="box-img">
<img src={metaverse} alt="" />
            </div>
    
</div>
        
<div className="whatsapp-container">
    <h5>500+ Students</h5>
    <AiOutlineWhatsApp color='green' height='100px'/>
</div>
<div className="support">
    <h5>Active Support</h5>
</div>



    </div>
</div>

    </div>
</div>

    </section>
    <Courses/>
   <Community/>
   <Plans/>
 
    </>
  )
}

export default Home