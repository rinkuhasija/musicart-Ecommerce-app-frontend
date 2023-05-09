import styles from './navBar.module.css'
import call_logo from '../../../assets/call-img.png'

function NavBar() {
    return (
        <div className={styles.navBar}>

            <div className={styles.navInner}>


                <div className={styles.logo}>
                    <img src={call_logo} alt="call_logo" />
                    <p> +91 2121131313 </p>
                </div>

                <div className={styles.middleContent}>
                    <p> Get 50% off on selected items |  Shop Now</p>
                </div>

                <div className={styles.logout}>
                    <div> Logout </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar