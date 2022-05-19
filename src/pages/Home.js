import React, { Component } from "react";
import axios from "axios"

const data = axios.get("api/v1/products")
.then((response) => console.log(response))
.catch((err) => {
    if(err) console.log(err.message)
})

class Home extends Component {

    
    
   constructor(props) {
       super()
    this.state = {
        input: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
   }

   
  
    handleSubmit = (e) => {
      e.preventDefault()


    }

    handleChange = (e) => {
      this.setState({input: e.target.value})
      console.log(e.target.value)
    }

  render() {
      console.log("hello: ",data)
    return (
      <div className="row ">
        <div className="medium-12 columns">
        <section className="login-area pb-100">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                            <h3 className="text-center mb-60">Please enter the e-mail address associated with your Oja account. We will send a link to this e-mail address to reset your password.</h3>
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="name">Email Address <span>**</span></label>
                                <input id="name" value={this.state.input} type="text" placeholder="Email address..." onChange={this.handleChange}/>
                                {/* <label for="pass">Password <span>**</span></label>
                                <input id="pass" type="password" placeholder="Enter password..." /> */}
                                {/* <div class="login-action mb-20 fix">
                                        <span class="log-rem f-left">
                                        <input id="remember" type="checkbox" />
                                        <label for="remember">Remember me!</label>
                                        </span>
                                        <span class="forgot-login f-right">
                                        <a href="#">Lost your password?</a>
                                        </span>
                                </div> */}
                                <button className="t-y-btn w-100">Reset password</button>
                                {/* <div class="or-divide"><span>or</span></div> */}
                                {/* <a href="register.html" class="t-y-btn t-y-btn-grey w-100">Register Now</a> */}
                            </form>
                            </div>
                    </div>
                </div>
                </div>
            </section>
             
        </div>
      </div>
    );
  }
}
export default Home;
