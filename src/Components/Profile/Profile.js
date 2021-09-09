import React,{useState} from 'react';
import { Navbar } from '../Navbar';
const Profile = () =>{

    return(
        <>
        <Navbar/>
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                      <div className="card mt-5 profile-card">
                          <div className="card-body">
                             <h5 className="mb-4">Profile</h5>
                               <div className="form-group mb-3">
                                <label>Name</label>
                                <input type="text" className="form-control" />
                               </div>
                               <div className="form-group mb-3">
                                <label>Email ID</label>
                                <input type="text" className="form-control" />
                               </div>
                               <div className="form-group mb-3">
                                <label>Mobile No</label>
                                <input type="text" className="form-control" />
                               </div>
                               <div className="form-group mb-3">
                                <label>Position Applied</label>
                                <input type="text" className="form-control" />
                               </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-8">
                      <div className="card mt-5 profile-card">
                          <div className="card-body ">
                             <h5>More Details</h5>
                             
                             <div className="form-group mb-3">
                                 <label>Address</label>
                                 <textarea className="form-control"></textarea>
                             </div>
                               <div className="row">
                                   <div className="col-md-6">
                                    <div className="form-group mb-3">
                                    <label>Attended Interview on</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                   </div>
                                   <div className="col-md-6">
                                    <div className="form-group mb-3">
                                    <label>Interview Status</label>
                                    <input type="text" className="form-control" />
                                  </div>
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
export default Profile