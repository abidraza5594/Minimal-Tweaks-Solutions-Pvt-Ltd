import React from 'react'
import "./herosectionleft.css"
import HeroLeftImg from "../../Images/Hero section.png"

const HerosectionLeft = () => {
  return (
    <div className="herosectionleft__container">
        <div className="heroleftheader">
            <h1>Unlock Your Financial</h1>
            <h1>Potential With CMS</h1>
        </div>

        <div className="hero_left_section__containt">
            <span style={{fontSize:"10px",letterSpacing:"2px",backgroundColor:"yellow"}}>ABOUT COURSE</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Velit, neque? Reprehenderit nobis quam cupiditate
                fugiat laudantium? Aut, repudiandae reiciendis dignissimos
                modi error natus recusandae excepturi provident, 
                fugiat veniam sunt asperiores.</p>
        </div>
        <div className="heroleft_img">
            <img src={HeroLeftImg} alt="" />
        </div>
    </div>
  )
}

export default HerosectionLeft