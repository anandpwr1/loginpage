import "./App.css";
import {useState} from 'react'

function App() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[emailMessage,setEmailMessage]=useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setEmailMessage("Email is Valid");
    } else if (!regEx.test(email) && email === "") {
      setEmailMessage("Email is Not Valid");
    } else {
      setEmailMessage("");
    }
  };

  // const passwordValidation = () =>{
  //   if(password.length)
  // }

const emailHandleOnChange = (e)=>{
  setEmail(e.target.value);
}
const passwordHandleOnChange = (e) =>{
  setPassword(e.target.value);
}

  return (
    <div className="container my-4 border" style={{height: "565px" }} >
      <div className="row " style={{height: "560px"}}>
        {/* User Credentials */}
        {/* Email */}
        <div className="col mx-2 my-3 border ">
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
          <input
            type="password"
            class="form-control mb-3"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange = {passwordHandleOnChange}
          />
          {/* Button */}
          <button type="submit"  onClick={emailValidation} class="btn btn-primary  ">Submit</button>
          <p className="message">{emailMessage}</p>


        </div>
      {/* Image */}
      <div className="col align-middle my-3 mx-2    border">
        <img
          src="/loginImage.jpeg"
          class=" rounded mx-auto my-5 d-block"
          alt="Login page Image "
        />
      </div>
      </div>
    </div>
  );
}

export default App;
