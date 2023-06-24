import React from 'react'
import "./section5.css"

const Section5 = () => {
    return (
        <div className="section5_main">
            <div className="section5_1">
                <h1>Why CMA?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ex error, odio quis minus necessitatibus nostrum optio vero?
                    Modi delectus id exercitationem impedit quisquam ipsam
                    expedita soluta explicabo,
                    voluptatibus quis iusto?</p>
                <div className="btnss">
                    <button style={{ backgroundColor: "black", color: "white" }}>Course Overview</button>
                    <button>Scope</button>
                    <button>Eligibility</button>
                    <button>Opportunity</button>
                    <button>Salary</button>
                </div>
            </div>

            <div className="section5_containt">
                <div className="inner_section5">
                <div className="section5_left">
                    <p>The CMA program aims to enhance the skills and knowledge of financial professionals in areas such as financial planning, analysis, control, decision support, and professional ethics. To earn the CMA designation, individuals must meet the educational and experience requirements, as well as</p>
                </div>

                <div className="section5_right">
                    <ul>
                        <li><p>Lorem Expedita libero culpa, officiis ex vitae sed laudantium!</p></li>
                        <li><p>Lorem Dignissimos perferendis quis temporibus labore in.</p></li>
                        <li><p>Lorem ipsum dolo modi eveniet ullam voluptas aspernatur!</p></li>
                    </ul>
                </div>
                </div>
            </div>
            <button className='rnow'>Register Now</button>
        </div>
    )
}

export default Section5