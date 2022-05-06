import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [alertState, setAlertState] = useState(false);

  const emailHandleOnChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandleOnChange = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandleOnChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // password check function
  const isPasswordValid = () => {
    let letter = /[a-z]/;
    let upper = /[A-Z]/;
    let number = /[0-9]/;
    let format = /[!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/?] +/;

    if (
      password.length < 7 ||
      !letter.test(password) ||
      !number.test(password) ||
      !upper.test(password) ||
      !format.test(password)
    ) {
      if (password.length < 7) {
        return false;
      }
      if (!letter.test(password)) {
        return false;
      }
      if (!number.test(password)) {
        return false;
      }
      if (!upper.test(password)) {
        return false;
      }
      if (!format.test(password)) {
        return false;
      }
    } else return true;
  };

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
    if (passwordCheck === false) {
      setShowDialog(true);
    }

    if (password === confirmPassword) {
      setAlertState(true);
    }
  };

  // password toggle
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <div className="container my-4 border" style={{ height: "565px" }}>
        <div className="row " style={{ height: "560px" }}>
          {/* User Credentials */}
          {/* Email */}
          <div className="col mx-2 my-3 border  ">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control mb-3 "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={emailHandleOnChange}
            />
            {/* Password */}
            <label htmlFor="exampleInputPassword1">Password</label>
            <div className="input-group mb-3">
              <input
                type={passwordShown ? "text" : "password"}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                aria-label="Recipient's username"
                value={password}
                onChange={passwordHandleOnChange}
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text"
                id="basic-addon2"
                onClick={togglePassword}
              >
                {passwordShown ? "Hide Password" : "Show Password"}
              </span>
            </div>

            {/* checking condition for show nad Hide password */}
            {!passwordShown ? null : (
              <>
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control mb-3"
                  id="exampleInputPassword1"
                  placeholder=" Confirm Password"
                  aria-label="Recipient's username"
                  value={confirmPassword}
                  onChange={confirmPasswordHandleOnChange}
                  aria-describedby="basic-addon2"
                />
              </>
            )}

            <button
              type="submit"
              onClick={submitHandler}
              className="btn btn-primary  "
            >
              Submit
            </button>
            {!alertState ? null      
            : (
              <div className={ `alert  ${alertState? "alert-success": "alert-danger"} `} role="alert">
              This is a{`${alertState? " success": " danger"}`} alert—check it out!
            </div>
            )}

            <p className="message">{errorMessage}</p>
          </div>

          {/* Image */}
          <div className="col align-middle my-3 mx-2    border">
            <img
              src="/loginImage.jpeg"
              // className=" width-100% height-100%"
              style ={{width:"100%" , height:"100%"} }
              alt="Login page Image "
            />
          </div>

          {/* Dialog for incorrect password */}
          {/* {showDialog ? (
            // alert("Incorrect password")
            <>
              <div className="modal" role="dialog" style={{ display: "block" }}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Incorrect Password</h5>
                      <button
                        type="button"
                        className="close"
                        onClick={closeDialog}
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>
                        Enter password with Uppercase, lowercase , special
                        characters in it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null} */}
        </div>
      </div>
    </>
  );
}

export default App;
