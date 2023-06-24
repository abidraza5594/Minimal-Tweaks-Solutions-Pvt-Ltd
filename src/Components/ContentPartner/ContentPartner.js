import React from 'react'
import "./contentpartner.css"
import LogosOFContentPartner from "../../Images/logos.png"
import PhoneLogo from "../../Images/phone.png"
const ContentPartner = () => {
  return (
    <>
        <div className="content_partner">

            <div className="left_content_partner">
                <h2>Content Partner</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque voluptate iure quos mollitia tenetur velit?
                Inventore, numquam hic alias quae commodi culpa distinctio dolorum,
                dolorem perspiciatis incidunt magni aliquid aut.</p>
                <img src={LogosOFContentPartner} alt="" />

            </div>

            <div className="right_content_partner">
                <img src={PhoneLogo} alt="" />
            </div>

        </div>
    </>
  )
}

export default ContentPartner