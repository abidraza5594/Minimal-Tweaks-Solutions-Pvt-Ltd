import React from 'react'
import "./section3main.css"
import TranerReviews from "../../Images/Trainer-reviews.png"
import Carts from "../../Images/carts.png"
import PerSone from "../../Images/Sir With NSA Cup 2.png"
// import Capture from "../../Images/"
const Sectionmainimg = () => {
  return (
    <>
    <div className="section3_mainIMG">
      <div className="section3_main_top">
        <div style={{backgroundColor:"yellow",marginTop:"10px"}}>MEET M. IRFAT l INDIA'S LEADING CMA & CPA INSTRUCTOR</div>
        <div>
          <h3 style={{margin:0,marginTop:"10px"}}>A Pofessional CA, CMA(USA), CPA, and</h3>
          <h3 style={{margin:0}}>CIMA (UK) with a Passion for Education</h3>
        </div>
        <div style={{width:"550px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ratione, in saepe? Porro ullam ipsa reprehenderit nobis animi 
          ipsum aliquid fuga debitis tenetur sapiente nihil, 
          minus iure voluptatibus assumenda, tempora nam.
        </div>
        <div className='social_logo'>
          <img src={TranerReviews} alt="" />
        </div>
        <div className="mainsection__bottom_cart">
            <img src={Carts} alt="" />
        </div>
      </div>

      <div className="mainsection3_right">
          <img src="" alt="" />
          <img style={{marginTop:"-60px" ,width:"436px",height:"671px"}} src={PerSone} alt="" />
          <div className="yelloddiv"></div>
      </div>
    </div>
    </>
  )
}

export default Sectionmainimg