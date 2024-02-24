import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

function Logout() {
    const authCheck = async () => {
        try {
            Cookies.remove('Authorization');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    authCheck();

    return (<Navigate to={"/"}/>);
}


export default Logout;