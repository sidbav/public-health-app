import React,{useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Registerpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import axios from 'axios';


const initialState = {
  firstName :"",
  lastName: "",
  email:"",
  Birth: new Date(),
  password:"",
  ConfirmPassword:"",
  phoneNumber:"",
  isMember: true,
};
const passwordError={
  islength : false,
  upper: false,
  lower: false,
  matchPassword: false,
  hasnumber: false
};


const Register = ()=>  {
  const [newUser, setNewUser] = useState(initialState);
  const [newPassWordWrong, setnewPassWordWrong] = useState(passwordError);
  const navigate = useNavigate();

  useEffect(() => {}, [newUser]);


  // click this button to change the the login and signup page
const toggleMember = ()=>{
    setNewUser({...newUser, isMember: !newUser.isMember});
}


 const handleonSubmit = async (e) =>{
    e.preventDefault();
    // console.log(newUser);

    const{ firstName, lastName, Birth, password, email , phoneNumber,isMember} = newUser
    const dob = Birth;
    if (!isMember){
       // register request overhere
        try {
            const response = await axios.post('/api/v1/auth/signup',{
              firstName,
              lastName,
              dob,
              password,
              email ,
              phoneNumber,
            })

          const {user} = response.data;
          console.log(user);
          setNewUser({...newUser, isMember: !newUser.isMember})
          //navigate('/landing');

        } catch (error) {
            console.log(error.response.data.msg)
        }
    }else{

        //login request overhere

        //



    }
        /*api.register(
      {
      firstName: newUser.FirstName,
      lastName: newUser.LastName,
      email:newUser.Email,
      birth: newUser.Birth,
      password: newUser.password
      }
    ).then(res =>{
      {console.log(res.data)}
    }).catch(error =>{
      console.log(error)
    }
    )*/

  }

  const handleOnChange = (e) =>{
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
    if (name === "password") {
     const islength = value.length> 6;
     const upper = /[A-Z]/.test(value);
     const lower = /[a-z]/.test(value);
     const hasnumber = /[0-9]/.test(value);

     setnewPassWordWrong({
      ...newPassWordWrong,
      islength,
      upper,
      lower,
      hasnumber,
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
    <Container id = "main-container" className="d-grid h-100">
      <Form id="register-form"  className="mt-4" onSubmit={handleonSubmit}>
        <h1 className="mb-3  fw-normal text-center">
          {newUser.isMember? "Please Login in" : "Please Sign Up"}
        </h1>
        <hr />
        {
           !newUser.isMember
           &&
          <Form.Group className="mb-3">
                <Form.Label>Your First Name</Form.Label>
                <Form.Control
                  type="firstName"
                  name="firstName"
                  value={newUser.firstName}
                  onChange={handleOnChange}
                  placeholder="First Name"
                  required
                />
            </Form.Group>
          }

          {
            !newUser.isMember &&
            <Form.Group className="mb-3">
                <Form.Label>Your Last Name</Form.Label>
                <Form.Control
                  type="lastName"
                  name="lastName"
                  value={newUser.lastName}
                  onChange={handleOnChange}
                  placeholder="Last Name"
                  required
                />
          </Form.Group>
          }
          {
            !newUser.isMember &&
            <Form.Group className="mb-3">


                <Form.Label>Your Phone Number</Form.Label>
                <Form.Control
                  type="phoneNumber"
                  name="phoneNumber"
                  value={newUser.phoneNumber}
                  onChange={handleOnChange}
                  placeholder="Phone Number"
                  required
                />
            </Form.Group>

          }
          <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="Email"
                name="email"
                value={newUser.email}
                onChange={handleOnChange}
                placeholder="Email"
                required
              />
          </Form.Group>

        {
          !newUser.isMember &&
          <Form.Group className="mb-3">
              <Form.Label>Your Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="Birth"
                value={newUser.Birth}
                onChange={handleOnChange}
                placeholder="Date of Birth"
                required
              />
          </Form.Group>
         }

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
          !newUser.isMember &&
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
            </ul>
          </Form.Group>
          }
          <Button variant="primary" type="submit" className="w-100" disabled={(Object.values(newPassWordWrong).includes(false))&&!newUser.isMember}>
            {!newUser.isMember? "Sign up": "Log in" }
          </Button>
      </Form>
      <div className="d-flex justify-content-center align-items-center ">
                  <span className="fw-normal">
                    {newUser.isMember? "Not a member yet ?": "Already a member ?"}
                    <button type = "button"
                      onClick={toggleMember}
                      className = "member-btn"
                    >
                      {newUser.isMember? 'Register' : 'Login'}

                    </button>
                    {/* Already have an account? <Link>Login</Link> */}
                  </span>
        </div>

    </Container>
  )
}

export default Register
