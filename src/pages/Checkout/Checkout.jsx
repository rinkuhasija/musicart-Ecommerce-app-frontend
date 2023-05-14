import styles from './checkout.module.css'
import Logo from '../../components/layout/Logo/Logo'
import NavBar from '../../components/layout/NavBar/NavBar'
import { Link } from 'react-router-dom'
import Footer from '../../components/layout/Footer/Footer'

function Checkout() {
  return (
    <div className={styles.checkout}>

      <div className={styles.nav}>
        <NavBar />
      </div>

      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.backBtn}>
        <button> <Link to='/cart'> <span> Back to cart </span> </Link>  </button>
      </div>

      <div className={styles.middleText}>
        <h3>Checkout</h3>
      </div>

      <div className={styles.mainContentContainer}>

        <div className={styles.leftSide}>

          <div className={styles.insideCheckoutFields}>
            <h3> 1. Delivery address </h3>
            <p>Akash Patel
              104
              kk hh nagar, Lucknow
              Uttar Pradesh 226025 </p>
          </div>

          <div className={styles.insideCheckoutFields}>

            <h3>2. Payment method </h3>
            <p> Pay on delivery ( Cash/Card ) </p>

          </div>

          <div className={styles.insideCheckoutFields}>

            <h3>3. Review items and delivery</h3>
            <div className={styles.insideReviewItems}>
              <img src="" alt="sony_img" />
              <p> <strong> Sony WH-CH720N </strong></p>
              <p>Color : Black</p>
              <pre>Estimated delivery :
                Monday — FREE Standard Delivery</pre>
            </div>

          </div>

          <hr />

          <div >

          </div>


        </div>

        <div className={styles.rightSide}>

          <button> <span> Place your order </span></button>

          <p></p>
          <hr />

          <div></div>
          <hr />
          <div></div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Checkout