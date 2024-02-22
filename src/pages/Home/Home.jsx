import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preloader from "../../components/Preloader/Preloader";
import { Navigate } from 'react-router-dom';

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const authCheck = async () => {
            try {
                if (!Cookies.get('Authorization')) {
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

        // Set timeout for preloader
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Set timeout to 3 seconds

        // Clear timeout on component unmount
        return () => clearTimeout(timeout);
    }, []);

    if (isLoading) {
        return (
            <>
                <Preloader />
            </>
        );
    }
    if (isAuth == true)
    {
        return <Navigate to={"/login"} />;
    }
    else
    {
        return (
            <div>
                <Dashboard />
                {/* {isAuth ? <Dashboard /> : <Login />} */}
            </div>
        );
    }
};

export default App;