import React from 'react';
import {Navbar} from '../Navbar'

const ApplicationForm = () =>{

    return(
        <>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 mt-5">
                    <div className="card  profile-card">
                        <div className="card-body">
                          <h5 className="mb-4">Application</h5>
                          <label className="mb-3" style={{fontWeight:'bold'}}>Available Position</label>
                          <div className="row">
                              <div className="col-md-4">
                              <div className="form-group mb-3">
                              <select className="form-control">
                                                <option>Choose...</option>
                                                <option>Telecounselor</option>
                                                <option>Counselor</option>
                                                <option>Human resources</option>
                                            </select>
                                       </div>
                              </div>
                              <div className="col-md-4"></div>
                              <div className="col-md-4"></div>
                          </div>
                            <label className="mb-3" style={{fontWeight:'bold'}}>Personal Details</label>
                           <div className="row">
                                   <div className="col-md-4">
                                       <div className="form-group mb-3">
                                           <label>Name</label>
                                           <input type="text" className="form-control" />
                                       </div>
                                   </div>
                                   <div className="col-md-4">
                                   <div className="form-group mb-3">
                                           <label>DOB</label>
                                           <input type="text" className="form-control" />
                                       </div>
                                   </div>
                                   <div className="col-md-4">
                                   <div className="form-group mb-3">
                                           <label>Gender</label>
                                            <select className="form-control">
                                                <option>Choose...</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                       </div>
                                   </div>
                           </div>
                           <div className="row">
                                   <div className="col-md-4">
                                       <div className="form-group mb-3">
                                           <label>Marital Status</label>
                                           <select className="form-control">
                                                <option>Choose...</option>
                                                <option>Unmarried</option>
                                                <option>Married</option>
                                            </select>
                                       </div>
                                   </div>
                                   <div className="col-md-4">
                                   <div className="form-group mb-3">
                                           <label>Mobile No</label>
                                           <input type="number" className="form-control" />
                                       </div>
                                   </div>
                                   <div className="col-md-4">
                                   <div className="form-group mb-3">
                                           <label>Email ID</label>
                                           <input type="text" className="form-control" />
                                       </div>
                                   </div>
                           </div>
                           <label className="mb-3" style={{fontWeight:'bold'}}>Educational Details</label>
                           <div className="row">
                                   <div className="col-md-4">
                                       <div className="form-group mb-3">
                                           <label>10th / SSLC %</label>
                                           <input type="number" className="form-control" />
                                       </div>
                                   </div>
                                   <div className="col-md-4">
                                   <div className="form-group mb-3">
                                           <label>12th / PUC %</label>
                                           <input type="number" className="form-control" />
                                       </div>
                                   </div>
                                   <div className="col-md-4">
                                   <div className="form-group mb-3">
                                           <label>Graduation %</label>
                                           <input type="text" className="form-control" />
                                       </div>
                                   </div>
                           </div>
                           <div className="row">
                                   <div className="col-md-4">
                                       <div className="form-group mb-3">
                                           <label>Post Graduation % (if completed)</label>
                                           <input type="number" className="form-control" />
                                       </div>
                                   </div>
                           </div>
                           <label className="mb-3" style={{fontWeight:'bold'}}>Certification (if any)</label>
                        <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group mb-3">
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group mb-3">
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group mb-3">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                        </div>
                        <label className="mb-3" style={{fontWeight:'bold'}}>Work Experience (if any)</label>
                        <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group mb-3">
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group mb-3">
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group mb-3">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                        </div>
                        <label className="mb-3" style={{fontWeight:'bold'}}>Achievements (if any)</label>
                        <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group mb-3">
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group mb-3">
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group mb-3">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                        </div>
                        <label className="mb-3" style={{fontWeight:'bold'}}>Address</label>
                        <div className="row">
                            <div className="col-md-12">
                                <textarea className="form-control" rows="4"></textarea>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="form-group">
                                <button className="bt">Submit</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
export default ApplicationForm