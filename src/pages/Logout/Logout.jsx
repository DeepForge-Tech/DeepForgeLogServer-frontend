import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Logout() {
    const authCheck = async () => {
        try {
            const response = await axios.get('/api/auth/check_auth_cookie');
            const current_url = window.location.href;
            if (response.status === 200 && response.data.message === 'OK') {
                await axios.get('/api/auth/logout');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        window.location.href = '/';
    };

    authCheck();

    return (
        <>
        </>
    );
}


export default Logout;