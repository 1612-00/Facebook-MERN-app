import { useState } from "react";
import "./login.css";
import RegisterDialog from "./RegisterDialog";

const Login = () => {
  const [open, setOpen] = useState(true);
  
  const handleClickOpen = () => {
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="login">
      <div className="loginHome">
        <div className="loginWrapper">
          <div className="loginLeft">
            <div className="loginTextMain">facebook</div>
            <div className="loginTextSub">
              Facebook helps you connect and share with the people in your life
            </div>
          </div>
          <div className="loginRight">
            <div className="loginFormWrapper">
              <div className="loginBox">
                <form className="loginForm">
                  <input
                    type="email"
                    placeholder="Email address or phone number"
                    className="loginInput"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="loginInput"
                  />
                  <button type="submit" className="loginBtn">
                    Log In
                  </button>
                  <span className="loginForgotPass">Forgotten password?</span>
                </form>
              </div>
              <hr className="loginHr" />
              <div className="loginRegister">
                <button className="registerBtn" onClick={handleClickOpen}>
                  Create New Account
                </button>
                <RegisterDialog onClose={handleClose} open={open} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
