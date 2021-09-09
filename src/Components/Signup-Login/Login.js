import React,{Component} from 'react';
import LoginImage from '../assets/Login.png'
import axios from 'axios'
class Login extends Component{
      constructor(){
          super();
          this.state = {
              email:'',
              password:'',
              message:''
          }
      }

      processEmail = (obj) => {
          this.setState({
              email:obj.target.value
          })
      }

      processPassword = (obj) => {
            this.setState({
                password:obj.target.value
            })
      }

      login = () =>{
          var url = "http://localhost:4000/login";
          var input ={"email":this.state.email, "password":this.state.password};
          axios.post(url, input)
          .then(response =>{
              if(response.data.id == ""){
                  this.setState({
                      message: "Invalid Email id / password"
                  })
              } else{
                  this.setState({
                      message: "Logged in Succesfully..."
                  })
                  localStorage.setItem("email", response.data[0].email)
                  localStorage.setItem("id", response.data[0].id)
                  window.location.href="http://localhost:3000/#/intro"
                  window.location.reload()
                  
              }
             
          })

      }


    render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-3">
                    <h1 className="heading-title">Career.io</h1>
                </div>

                <div className="col-md-12 mt-5">
                    <div className="card card-outer-layout-login">
                        <div className="card-body">
                             <h5>Login</h5>
                            
                           <div className="row mt-4">
                               
                           <div className="col-md-6">
                                 <div className="row row-margin-login">
                                     <div className="col-md-6">
                                     <div className="form-group mb-3">
                                            <label>Email</label>
                                            <input type="text" 
                                            className="form-control"
                                            onChange={this.processEmail}
                                            />
                                          </div>
                                     </div>
                                     <div className="col-md-6">
                                          <div className="form-group mb-3">
                                            <label>Password</label>
                                            <input type="text" 
                                            className="form-control"
                                            onChange={this.processPassword}
                                            />
                                          </div>
                                     </div>
                                 </div>
                                  <div className="row">
                                      <div className="form-group">
                                          <button className="bt-login" onClick={this.login}>
                                              Login
                                          </button>
                                      </div>
                                  </div>
                                   <div className="mt-3">
                                   <p className="text-success">{this.state.message}</p>
                                   </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card card-layout-login">
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

}
export default Login