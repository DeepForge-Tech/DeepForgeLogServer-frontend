import { useState, useEffect } from 'react'
import reactLogo from './static/react.svg'
import './App.css'
import './components/Header/Header'
import Header from './components/Header/Header'
import Login from './pages/Login/Login'
import { Link, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp'
import Dashboard from "./pages/Dashboard/Dashboard"
import axios from 'axios';
import Logout from './pages/Logout/Logout'
import Cookies from 'js-cookie';
import Preloader from "./components/Preloader/Preloader";
import Home from "./pages/Home/Home";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      try {
        if (Cookies.get('Authorization')) {
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

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={isAuth ? <Navigate to={"/"} /> : <Login />} />
        <Route path="signup" element={isAuth ? <Navigate to={"/"} /> : <SignUp />} />
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </>
  )
}

export default App;