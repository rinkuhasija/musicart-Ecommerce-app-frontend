import styles from './navBar.module.css'
import call_logo from '../../../assets/call-img.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import Login from '../../../pages/Login/Login'
import { useContext } from 'react'
import authContext from '../../../context/login/authContext'


function NavBar() {

    const abc = useContext(authContext)

    const navigate = useNavigate()
    const loginState = abc.state.login;

    const [login, setLogin] = useState( loginState );

    function handleLogin(newLoginValue) {
        setLogin(newLoginValue);
    }

    function handleClick() {
        toast.success("successfully logged out")
        abc.logout();

        // window.localStorage.removeItem("token")
        setTimeout(() => {
            navigate("/login")
        }, 2000);
    }

    function handleClickForLoginSignup() {
        navigate("/login")
    }

    return (
        <div className={styles.navBar}>

            <div className={styles.navInner}>

                <div className={styles.loginNone}>
                    <Login />
                </div>


                <div className={styles.logo}>
                    <img src={call_logo} alt="call_logo" />
                    <p> +91 2121131313  </p>
                </div>

                <div className={styles.middleContent}>
                    <p> Get 50% off on selected items |  Shop Now</p>
                </div>

                {login ? <div className={styles.logout}>
                    <div onClick={handleClick}> Logout </div>
                </div> : <div className={styles.logout}>
                    <div onClick={handleClickForLoginSignup}> Login | Signup </div>
                </div>}

                <Toaster />
            </div>
        </div>
    )
}

export default NavBar