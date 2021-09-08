import React,{useState} from 'react';
import LoginImage from '../assets/Login.svg'
const Login = () =>{

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h1 className="heading-title">Career.io</h1>
                </div>

                <div className="col-md-12 mt-4">
                    <div className="card card-outer-layout">
                        <div className="card-body">
                             <h5>Login</h5>
                           <div className="row mt-4">
                               
                           <div className="col-md-6">
                                 <div className="row row-margin">
                                     <div className="col-md-6">
                                          <div className="form-group mb-3">
                                            <label>Name</label>
                                            <input type="text" className="form-control"/>
                                          </div>
                                     </div>
                                     <div className="col-md-6">
                                     <div className="form-group mb-3">
                                            <label>Email</label>
                                            <input type="text" className="form-control"/>
                                          </div>
                                     </div>
                                 </div>
                                 <div className="row">
                                     <div className="col-md-6">
                                          <div className="form-group mb-3">
                                            <label>Mobile No</label>
                                            <input type="text" className="form-control"/>
                                          </div>
                                     </div>
                                     <div className="col-md-6">
                                     <div className="form-group mb-3">
                                            <label>Password</label>
                                            <input type="text" className="form-control"/>
                                          </div>
                                     </div>
                                 </div>
                                  <div className="row">
                                      <div className="form-group">
                                          <button className="bt-login">Login</button>
                                      </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card card-layout">
                                        <div className="card-body card-layout-body-login">
                                             <div className="login-heroimg">
                                             <img src={LoginImage}  />
                                             </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Login