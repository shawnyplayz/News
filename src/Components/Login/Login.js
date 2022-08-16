import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      uname: null,
      pass: null,
      loggedIn: false
    }
    this.onSubmit = this.onSubmit.bind(this)

  }
  // handleChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
  onSubmit(e) {
    debugger
    try {
      if (this.state.uname === "admin" && this.state.pass === "admin")
        this.setState({
          loggedIn: true
        })
      this.props.history.push("/Dashboard");
    }
    catch (error) {
      console.log("Login page error==>", error);
    }

  }
  render() {
    if (this.state.loggedIn === true) {
      debugger
      return <Redirect to='/Home' />
    }
    return (
      <>
        <div className='main_Login container-fluid vh-100 d-flex justify-content-center align-items-center'>
          <div className="card shadow container w-50">
            <div className="row">
              <div className="col-md-5 mx-auto">
                <div id="first">
                  <div className="myform form ">
                    <div className="logo mb-3">
                      <div className="col-md-12 text-center">
                        <h1>Login</h1>
                      </div>
                    </div>
                    <form action="" method="post" name="login">
                      <div className="form-group my-2">
                        <label for="exampleInputEmail1">User Name</label>
                        <input type="text" name="uname" value={this.state.uname} className="form-control" id="text" aria-describedby="emailHelp" placeholder="Enter User Name" onChange={(e) => this.setState({
                          uname: e.target.value
                        })} />
                      </div>
                      <div className="form-group my-2">
                        <label for="exampleInputEmail1">Password</label>
                        <input type="password" name="password" id="password" value={this.state.pass} className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" onChange={(e) => this.setState({
                          pass: e.target.value
                        })} />
                      </div>
                      <div className="col-md-12 text-center my-2">
                        <button onClick={this.onSubmit} className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
