import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate (); //for navigating to about page

  const emailHandler = (e) => {
    setEmail(e.target.value); //gets the value entered in email field
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value); // gets the value entered in password field
  };

  // Submit button handler
  const submitHandler = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (email === "") {
      setErrorMessage("Email field can't be empty");
      return;
    }

    if (!regEx.test(email)) {
      setErrorMessage("Email is Not Valid");
      return;
    }

    let passwordCheck = isPasswordValid();
    if (!passwordCheck) setErrorMessage("password is Not Valid");
    else setErrorMessage("");

    // Redirecting to New Page

    navigate('/about')  //navigate to about page
  };

  // password check
  const isPasswordValid = () => {
    let letter = /[a-z]/;
    // let upper = /[A-Z]/;
    // let number = /[0-9]/;
    // let format = /[!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/?] +/;
    // console.log(password);
    if (
      password.length < 7
      ||
      !letter.test(password) 
      // !number.test(password) ||
      // !upper.test(password) ||
      // !format.test(password)
    ) {
      return false;
    } else {
      return true;
    }
  };

  // Toggle Password
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div className="container my-4 border" style={{ height: "565px" }}>
        <div className="row " style={{ height: "560px" }}>
          {/* Email  */}
          <div className="col  col-md-6 mx-auto my-auto">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={emailHandler}
              />
            </div>

            {/* Password  */}
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <div className="input-group mb-3">
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={password}
                  onChange={passwordHandler}
                />
                <span
                  className="input-group-text"
                  id="basic-addon2"
                  onClick={togglePassword}
                >
                  {passwordShown ? "Hide Password" : "Show Password"}
                </span>
              </div>
            </div>

            {/* anchor tag is used as a button here */}

            {/* <a className="btn btn-primary" type="submit" href="/about" role="button" onClick={submitHandler}>Submit</a> */}

            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitHandler}
            >Submit</button>

            {/* Error Message  */}
            <p className="message">{errorMessage}</p>
          </div>

          {/*Image  */}
          <div className="col align-middle my-3 mx-2  ">
            <img
              src="loginiImage.jpeg"
              alt="imagelogin"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
