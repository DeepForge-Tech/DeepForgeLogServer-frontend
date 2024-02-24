import githubLogo from '/Images/github.svg'
import Logo from '/Images/Logo.svg'
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styles from './Header.module.css'
import ButtonLink from "../ButtonLink/ButtonLink"
import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
    withCredentials: true,
})

const SignUpButton = ({ text,isFilled, href, onClick,...props }) => (
    <ButtonLink isFilled={isFilled} text={text} href={href} onClick={onClick} {...props} />
);

function Header() {
    const [signUpButtonText, setSignUpButtonText] = useState('');
    const [signUpButtonLink, setSignUpButtonLink] = useState('');
    const [isAuth, setIsAuth] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const authCheck = async () => {
            try {
                // const current_url = window.location.href;
                if (Cookies.get('Authorization')) {
                    if (location.pathname == "/") {
                        setSignUpButtonText("exit");
                        setSignUpButtonLink('/logout');
                    }
                    else {
                        setSignUpButtonText('Dashboard');
                        setSignUpButtonLink('/');
                    }
                    setIsAuth(true);
                }
                else {
                    setSignUpButtonText("sign up");
                    setSignUpButtonLink("/signup");
                    setIsAuth(false);
                }
            } catch (error) {
                console.error('Error:', error);
                setSignUpButtonText("sign up");
                setSignUpButtonLink("/signup");
                setIsAuth(false);
            }
        };

        authCheck();
    }, [location]);
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = async function() {
        const header = await document.querySelector('.Header');
        const scrollTop = window.scrollY;
        scrollTop >= 120 ? await header.classList.add('Fixed') : await header.classList.remove('Fixed');
    };

    return (
        <header className={styles.Header}>

            <div className={styles.HeaderContent}>
                <a href='/' className={styles.LogoLink}>
                    <img src={Logo} width={"92"} height={"92"} />
                    <span id={styles.NameCompany_1}>Deep</span><span>Forge</span>
                </a>
                <div className={styles.Space}></div>
                <div className={styles.Social}>
                    <a href="https://github.com/DeepForge-Technologies" className={styles.GithubLink}>
                        <img src={githubLogo} className={styles.GithubLogo} width={"32"} height={"32"} />
                    </a>
                    {!isAuth ? <ButtonLink isFilled={false} text={"Login"} href={"/login"} /> : null}
                    <SignUpButton isFilled={true} text={signUpButtonText} href={signUpButtonLink} />
                </div>
            </div>
        </header>
    );
}

const LogoutRequest = async () => {
    try {
        const response = await instance.get('/api/auth/logout');
        if (response.status === 200) {
            // Redirect the user to the login page or any other page you want
            setIsAuth(false);
            window.location.href = '/';
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

export default Header;