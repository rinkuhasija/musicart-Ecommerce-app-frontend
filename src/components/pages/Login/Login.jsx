import Footer from '../../layout/Footer/Footer'
import Logo from '../../layout/Logo/Logo'
import styles from './login.module.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

function Login() {

    // const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!email || !password) {
            alert("Please enter email and password");
        } else {

            try {
                let res = await fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                });
                let resJson = await res.json();

                if (res.status === 200) {
                    setEmail("");
                    setPassword("");
                    alert(`Hello ${email.slice(0, (email.length - 10))} . You are successfully Logged in`)
                    const token = resJson;
                    window.localStorage.setItem("token", token)

                    // navigate("/");

                } else {
                    console.log("Error occurred");
                }
            } catch (err) {
                console.log(err);
            }
        };
    }

    return (
        <div className={styles.login}>

            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.loginForm}>

                <div className={styles.loginContainer}>

                    <div className={styles.formContainer}>

                        <h2> Sign in</h2> <br />

                        <form className={styles.formGroup} >

                            <label htmlFor="email"> Enter your email or mobile number </label> <br />
                            <input type="email" value={email} name='email' placeholder='Email' id={styles.email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />

                            <label htmlFor="password" id={styles.secondLabel}> Password </label> <br />
                            <input type="password" value={password} name='password' placeholder='Password' id={styles.password} onChange={(e) => setPassword(e.target.value)} />

                        </form> <br />

                        <button id={styles.submitBtn} onClick={handleSubmit}>  <span> Continue </span> </button>
                        <p> By continuing, you agree to Musicart privacy notice and conditions of use. </p>
                    </div>
                </div >


            </div>

            <div className={styles.newUser}>
                <p>New to Musicart?</p>

            </div>

            <button id={styles.createAccountBtn}><span>  Create your Musicart account  </span></button>

            <div className={styles.footer}>
                <Footer />
            </div>


        </div>
    )
}

export default Login