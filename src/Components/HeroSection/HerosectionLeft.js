import React from 'react'
import "./herosectionleft.css"
import HeroLeftImg from "../../Images/Hero section.png"

const HerosectionLeft = () => {
  return (
    <div className="herosectionleft__container">
        <div className="heroleftheader">
            Unlock Your <span className='underlined'> Financial </span>
            <br/>
            Potential <mark> With CMS</mark>
        </div>

        <div className="hero_left_section__containt">

            <div className='about'><mark>ABOUT COURSE</mark></div>
            <div>
            <p className='content'>CMA (Certified Management Accountant) USA is a globally recognized professional certification in the field of management accounting, offered by the Institute of Management Accountants (IMA). The certification demonstrates expertise in financial planning, analysis, control, decision support, and professional ethics.</p>
                </div>
        </div>
        <div className="heroleft_img">
            <img src={HeroLeftImg} alt="" />
        </div>
    </div>
  )
}

export default HerosectionLeft