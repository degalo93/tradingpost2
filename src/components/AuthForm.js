import React, { Component } from "react";
import PropTypes from "prop-types";



 class AuthForm extends Component {
    constructor (props) {
        super(props);
    this.state = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        description: "",
        passwordConfirm: "",
        profilePic: ""
    };
 }
 handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
 render(){
    const { firstName, lastName,  userName, email, password , passwordConfirm, phone, city, state, description, profilePic } = this.state;
    const {signUp, heading, buttonText, errors,history, removeError} = this.props; 
    history.listen(() => {
        removeError();
      });
    return (
        <div className="container formContent">
            <form onSubmit= {this.handleSubmit}>
            <h2>{heading}</h2>
            
              {errors.message && (
                <div className="alert alert-danger">{errors.message}</div>
              )}

               <div className="row">
                  <div className=" input-field col s12">
                     <i class="material-icons prefix">email</i>
                     <input
                        autoComplete="off"
                        value={email}
                        onChange={this.handleChange}
                        id = "email"
                        name="email"
                        placeholder="Email"
                        type="Email"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className=" input-field col s12">
                     <i class="material-icons prefix">security</i>
                     <input
                        autoComplete="off"
                        value={password}
                        onChange={this.handleChange}
                        id = "password"
                        name="password"
                        placeholder="Password"
                        type="password"
                     />
                     
                  </div>
                </div>
                {signUp && (
                    <div>
                  <div className= "row">
                  <div className=" input-field col s12">
                  <i class="material-icons prefix">security</i>
                     <input
                        autoComplete="off"
                        value={passwordConfirm}
                        onChange={this.handleChange}
                        id ="passwordConfirm"
                        name="passwordConfirm"
                        placeholder="Confirm password"
                        type="password"
                     />
                  </div>
               </div>
                <div className="row">
              <div className="input-field col s6">
                     <i class="material-icons prefix">person</i>
                     <input
                        autoComplete="off"
                        id = "firstName"
                        value={firstName}
                        onChange={this.handleChange}
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                     />
                  </div>
                  <div className="input-field col s6">
                     <input
                        autoComplete="off"
                        id = "lastName"
                        value={lastName}
                        onChange={this.handleChange}
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className=" input-field col s12">
                     <i class="material-icons prefix">account_circle</i>
                     <input
                        autoComplete = "off"
                        value={userName}
                        onChange={this.handleChange}
                        id = "userName"
                        name="userName"
                        placeholder="Username"
                        type="text"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className=" input-field col s12">
                     <i class="material-icons prefix">phone</i>
                     <input
                        autoComplete="off"
                        value={phone}
                        onChange={this.handleChange}
                        id = "phone"
                        name="phone"
                        placeholder="Phone"
                        type="text"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className=" input-field col s6">
                     <i class="material-icons prefix">location_on</i>
                     <input
                        autoComplete="off"
                        value={city}
                        onChange={this.handleChange}
                        id = "city"
                        name="city"
                        placeholder="City"
                        type="text"
                     />

                  </div>

                  <div className="input-field col s6">

                     <input
                        autoComplete="off"
                        value={state}
                        onChange={this.handleChange}
                        id = "state"
                        name="state"
                        placeholder="State"
                        type="text"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className="input-field col s12">
                     <i class="material-icons prefix">description</i>
                     <input
                        autoComplete="off"
                        value={description}
                        onChange={this.handleChange}
                        id= "description"
                        name="description"
                        placeholder="Bio"
                        type="text"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className="input-field col s12">
                     <i class="material-icons prefix">picture</i>
                     <input
                        autoComplete= "off"
                        value={profilePic}
                        onChange={this.handleChange}
                        id="profilePic"
                        name="profilePic"
                        placeholder="Profile picture link"
                        type="text"
                     />
                  </div>
               </div>
               </div>
               )}
               <button className="waves-effect waves-light btn-small" >
               {buttonText}
              </button>
            </form>
         </div>

    );
 }
}
AuthForm.propTypes = {
    buttonText: PropTypes.string,
    errors: PropTypes.object,
    heading: PropTypes.string,
    history: PropTypes.object,
    onAuth: PropTypes.func,
    signIn: PropTypes.bool,
    removeError: PropTypes.func
  };
export default AuthForm;  