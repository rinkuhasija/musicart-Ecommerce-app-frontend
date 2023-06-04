import Footer from '../../components/layout/Footer/Footer'
import Logo from '../../components/layout/Logo/Logo'
import styles from './signUp.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function SignUp() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [full_name, setFullName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!email || !password || !full_name || !phone_number) {
            toast.error("Please complete the Form first");
        } else {

            try {
                let res = await fetch("https://orca-app-ihire.ondigitalocean.app/api/v1/auth/register", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        full_name: full_name,
                        mobile: phone_number
                    }),
                });
                let resJson = await res.json();

                if (res.status === 201) {
                    setEmail("");
                    setPassword("");
                    setFullName("");
                    setPhoneNumber("");
                    toast.success('SignUp successful');

                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);

                } else {
                    console.log("Something went wrong");
                }
            } catch (err) {
                toast.error("Error")
                console.log(err);
            }
        };
    }

    return (
        <div className={styles.signUpContainer}>

            <div className={styles.logo}>
                <Logo />
                <Toaster />
            </div>



            <div className={styles.loginForm}>

                <div className={styles.loginContainer}>

                    <div className={styles.formContainer}>

                        <h2> Create Account </h2> <br />

                        <form className={styles.formGroup} >

                            <label htmlFor="name" className={styles.label}> Your name </label> <br />
                            <input type="text" value={full_name} name='name' placeholder='Your name' id={styles.name} onChange={(e) => setFullName(e.target.value)} /> <br /> <br />

                            <label htmlFor="mobile_no" className={styles.label}> Mobile number </label> <br />
                            <input type="number" value={phone_number} name='mobile_no' placeholder='Mobile no.' id={styles.mobileNo} onChange={(e) => setPhoneNumber(e.target.value)} /> <br /> <br />

                            <label htmlFor="email" id={styles.labelEmail}> Enter your email or mobile number </label> <br />
                            <input type="email" value={email} name='email' placeholder='Email' id={styles.email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />

                            <label htmlFor="password" className={styles.label}> Password </label> <br />
                            <input type="password" value={password} name='password' placeholder='Password' id={styles.password} onChange={(e) => setPassword(e.target.value)} />

                        </form> <br />

                        <p id={styles.youMustAgree}> By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.
                        </p>

                        <button id={styles.submitBtn} onClick={handleSubmit}>  <span> Continue </span> </button>

                        <p id={styles.privacyPolicy}> By continuing, you agree to Musicart privacy notice and conditions of use. </p>
                    </div>
                </div >


            </div>

            <div className={styles.oldUser}>
                <p>Already have an account? <Link className={styles.linkTag} to="/login"> Sign in </Link></p>

            </div>

            <div className={styles.footer}>
                <Footer />
            </div>

        </div>
    )
}

export default SignUp