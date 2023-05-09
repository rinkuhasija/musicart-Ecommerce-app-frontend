import Footer from '../../layout/Footer/Footer'
import Logo from '../../layout/Logo/Logo'
import styles from './successCheckout.module.css'
import party from '../../../assets/party-img.png'

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

                    <button> <span> Go back to Home page </span> </button>
                </div>

                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default SuccessCheckout