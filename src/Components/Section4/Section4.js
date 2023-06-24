import React from 'react'
import "./section4.css"
import Dotted from "../../Images/dotted.png"
import RegisterBtm from "../../Images/large.png"

const Section4 = () => {
  return (
    <div className="section4_main">
        <div className="section4">
        <div className="inner_section4">
            <div>
                <h3>Embrace the power of your</h3>
                <h3>future and take countrol of it </h3>
            </div>
            <div>
                <p style={{margin:0}}>sign up for the CMA Webinar</p>
                <p style={{margin:0}}>A complete guide to crack CMA</p>
            </div>
        </div>

        <div className="dotted">
            <img src={Dotted} alt="" />
        </div>

        <div className="registerbtn">
            <img style={{cursor:"pointer"}} src={RegisterBtm} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Section4