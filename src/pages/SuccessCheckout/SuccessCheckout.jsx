import Footer from '../../components/layout/Footer/Footer'
import Logo from '../../components/layout/Logo/Logo'
import styles from './successCheckout.module.css'
import party from '../../assets/party-img.png'
import { Link } from 'react-router-dom'

function SuccessCheckout() {
    return (
        <div className={styles.successCheckout}>

            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.successContainer}>


                <div className={styles.orderDone}>

                    <img src={party} alt="party_emoji" />

                    <h3> Order is placed successfully! </h3>
                    <p> You  will be receiving a confirmation email with order details </p>

                    <button>  <Link to="/"> <span> Go back to Home page  </span> </Link>   </button>
                </div>

                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default SuccessCheckout