import React,{useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Registerpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import GoogleSignin from "../components/GoogleSignin";
// Redux
import {connect} from 'react-redux'
import { register, login ,clearError} from "../redux/actions/auth";

import PropTypes from 'prop-types'




const initialState = {
  firstName :"",
  lastName: "",
  email:"",
  Birth: new Date(),
  password:"",
  ConfirmPassword:"",
  phoneNumber:"",
  hasEmail: "",
  isMember: true,
  loginError: ""
};
const passwordError={
  islength : false,
  upper: false,
  lower: false,
  matchPassword: false,
  hasnumber: false,
  hasSpclChr: false,
};




const PasswordReset = ({errorMessage,clearError})=>  {
  const [newUser, setNewUser] = useState(initialState);
  const [newPassWordWrong, setnewPassWordWrong] = useState(passwordError);
  const navigate = useNavigate();

  useEffect(() => {


  }, [navigate]);


  // click this button to change the the login and signup page
const toggleMember = async ()=>{
    setNewUser({...newUser, isMember: !newUser.isMember});
}


 const handleonSubmit = async (e) =>{
    e.preventDefault();
    // console.log(newUser);

    const{ password , email } = newUser
    const newPassword = password;

    const response = await axios.post('/api/v1/auth/passwordReset',{
       email,
       newPassword
    });

    const {success} = response.data;
    if(success){
        console.log('here');
        navigate('/register');
    }


  }

  const changEmail = (e)=>{
    newUser.hasEmail = "";
    const { name, value } = e.target;
    if(name === "email") {
    setNewUser({ ...newUser, email: value });}
}



  const handleOnChange = (e) =>{
    const { name, value } = e.target;
    newUser.loginError = "";

    setNewUser({ ...newUser, [name]: value });
    if (name === "password") {
     const islength = value.length> 6;
     const upper = /[A-Z]/.test(value);
     const lower = /[a-z]/.test(value);
     const hasnumber = /[0-9]/.test(value);
     const hasSpclChr = /[@,#,$,%,&,^,*,!]/.test(value);

     setnewPassWordWrong({
      ...newPassWordWrong,
      islength,
      upper,
      lower,
      hasnumber,
      hasSpclChr,
      matchPassword: newUser.ConfirmPassword === value,
    });
    };

    if (name === "ConfirmPassword"){
      setnewPassWordWrong({
        ...newPassWordWrong,
        matchPassword: newUser.password === value,
      });

    }

  }



  return (
    <Container id = "main-container" className="d-grid h-100" >
      <Form id="register-form"  className="mt-4" onSubmit={handleonSubmit}>
      <div class="pic_top">
        <img className="app-logo " 
              src={require("../assets/img/healthcare1.png")} alt="..."
               />
               </div>
        <h1 className="mb-3  fw-normal text-center">
          {newUser.isMember? "Public Health" : "Please Sign Up"}
        </h1>
        <hr />
        <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="Email"
                name="email"
                value={newUser.email}
                onChange={changEmail}
                placeholder="Email"
                required
              />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Your Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleOnChange}
                placeholder="Password"
                required
              />
          </Form.Group>
        {
          <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="ConfirmPassword"
                value={newUser.ConfirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
                required
              />
          <Form.Text>

              { !newPassWordWrong.matchPassword &&
                (<div className="text-danger mb-3">Password doesn't match!</div>)
              }
          </Form.Text>

            <ul className="mb-4">

              <li className= {newPassWordWrong.islength ? "text-success" : "text-danger"}>
                At least 6 characters
              </li>
              <li className= {newPassWordWrong.upper ? "text-success" : "text-danger"}>
                At least one upper case
              </li>
              <li className= {newPassWordWrong.lower ? "text-success" : "text-danger"}>
                At least one lower case
              </li>
              <li className= {newPassWordWrong.hasnumber ? "text-success" : "text-danger"}>
                At least one number
              </li>
              <li
                className={newPassWordWrong.hasSpclChr ? "text-success" : "text-danger"
                }>
                At least on of the special characters
              </li>
            </ul>
          </Form.Group>
          }
          <Button variant="outline-primary" type="submit" className="w-100" disabled={(Object.values(newPassWordWrong).includes(false))&&!newUser.isMember}>
            { "Submit" }
          </Button>
      </Form>

    </Container>
  )
}







export default PasswordReset;




