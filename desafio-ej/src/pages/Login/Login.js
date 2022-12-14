import React, { useState } from "react";
import logoSVG from "./assets/logo_svg.svg";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem-vindo! </span>

            <span className="login-form-title">
              <img src={logoSVG} alt="Cine Jr" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <a href="admin" className="login-form-btn" style={{width: "100%", textDecoration: "none"}}>Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

/*
* Q: Why doesn't the login button go to the admin page?
* A: Because the button is not a link, it's a button. You need to use the <a> tag to make it a link. 
*/
