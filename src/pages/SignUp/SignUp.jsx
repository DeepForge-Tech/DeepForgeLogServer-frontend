import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./SignUp.module.css"
import Field from "../../components/Field/Field"
import Button from "../../components/Button/Button"
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const instance = axios.create({
  withCredentials: true,
})

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [hasUsernameError, setHasUsernameError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [isAuth, setIsAuth] = useState(true)

  const TextError = "Incorrect username or password entered";
  const TextUsernameError = "You have not entered a username";
  const TextPasswordError = "The password cannot contain less than 8 characters";
  useEffect(() => {
    const authCheck = async () => {
      try {
        if (Cookies.get('Authorization')) {
          // window.location.href = "/";
          setIsAuth(true);
        }
        else {
          setIsAuth(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setIsAuth(false);
      }
    };

    authCheck();
  }, []);

  const ChangeFunction = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
      setHasUsernameError(event.target.value.trim().length === 0);
    } else if (name === 'password') {
      setPassword(value);
      setHasPasswordError(event.target.value.trim().length < 8);
    }

  };

  const SendRequest = async (event) => {
    event.preventDefault();
    try {
      const data = { username, password };
      const res = await instance.post('/api/auth/signup', data);
      if (res.statusText == "OK") {
        window.location.href = "/";
        setIsAuth(true);
      }
      else {
        setIsAuth(false);
      }
    }
    catch (error) {
      console.error(error);
      setHasError(true);
      setIsAuth(false);
    }
  };

//   if (isAuth == true) {
//     return <Navigate to={"/"} />;
//   }
//   else {
    return (
      <div className={styles.SignUpWidget}>
        <div className={styles.Group}>
          <form onSubmit={SendRequest}>
            <h2 className={styles.Header}>Sign Up</h2>
            <li className={styles.ErrorLabel}>{hasError == true ? TextError : null}</li>
            <Field className={styles.UsernameField} name={"username"} placeholder={"Username"} type={"text"} value={username} onChange={ChangeFunction} />
            <li className={styles.ErrorLabel}>{hasUsernameError == true ? TextUsernameError : null}</li>
            <Field className={styles.PasswordField} name={"password"} placeholder={"Password"} type={"password"} value={password} onChange={ChangeFunction} />
            <li className={styles.ErrorLabel}>{hasPasswordError == true ? TextPasswordError : null}</li>
            <center>
              <Button disabled={hasError || hasUsernameError || hasPasswordError} isactive={!hasError && !hasUsernameError && !hasPasswordError ? "true" : "false"} type={"submit"} text={"Login"} />
            </center>
          </form>
        </div>
      </div>
    );
//   }
}

export default SignUp;