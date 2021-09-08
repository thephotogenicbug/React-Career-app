import React from 'react';
import HeroImage from '../assets/Hero-image.png'
import {Link} from 'react-router-dom';
import LogoImage from '../assets/Logo.png'
const Main = () =>{

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h1 className="heading-title">Career.io</h1>
                </div>
                <div className="col-md-6 ">
                    <h2 className="heading-title-one">JobSphere</h2>
                    <p className="text-justify mt-3">
                    Recruitment at Career.io is a vital need for the organisation to grow. We place the right candidates into the right jobs and evaluate their performances onto a cosmic basis.
                    </p>
                </div>
                <div className="col-md-6 mt-3">
                 <img src={HeroImage} className="hero" alt="hero"/>
                </div>
            </div>
             <div className="button-row">
             <Link to='/signup'><button className="bt m-2">Signup</button></Link>
             <Link to='/login'><button className="bt2 m-2">Login</button></Link>
             </div>
             <div className="row">
               
             </div>
          
        </div>
    )

}
export default Main