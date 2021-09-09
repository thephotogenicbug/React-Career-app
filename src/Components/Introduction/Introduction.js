import React from 'react';
import Form from '../assets/Form.svg'
import Interview from '../assets/Interview.svg'
import Manager from '../assets/Manager.svg'
import Hr from '../assets/Hr.svg'
import { Navbar } from '../Navbar';
const Introduction = () =>{

    return(
        <>
        <Navbar/>
        <div className="container">
           <div className="row">
               <div className="col-md-12 mt-3">
                   {/* <h1>Career.io</h1> */}
               </div>
               <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card card-border">
                <img src={Form} height="200px" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Application Process</h5>
                    <p className="card-text">We get copious number of applications for interviews. </p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card card-border">
                <img src={Interview} height="200px"  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Interview Process</h5>
                    <p className="card-text">We pick the finest candidates and conduct an interview with basic etiquttes.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card card-border">
                <img src={Manager} height="200px"  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Managerial Round</h5>
                    <p className="card-text">The manager will conduct an interview keeping the company standards in mind. </p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card card-border">
                <img src={Hr} height="200px" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">HR Round</h5>
                    <p className="card-text">Once the candidate is selected the HR will be taking in to conduct induction and explain company policies and procedures.</p>
                </div>
                </div>
            </div>
            </div>
           </div>
           <div className="row mb-5"></div>
        </div>
        </>
    )

}
export default Introduction