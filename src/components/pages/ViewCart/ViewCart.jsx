import Footer from '../../layout/Footer/Footer'
import Logo from '../../layout/Logo/Logo'
import NavBar from '../../layout/NavBar/NavBar'
import styles from './viewCart.module.css'
import cart from '../../../assets/cart-img.png'


function ViewCart() {
  return (
    <div className={styles.viewCart}>

        <div className={styles.topNavBar}>
            <NavBar />
        </div>

        <div className={styles.logo}>
            <Logo />
        </div>

        <div className={styles.backBtn}>
            <button> <span> Back to products </span> </button>
        </div>

        <div className={styles.myCart}>
            <img src={cart} alt="cart_image" />
            <h3> My Cart </h3>
        </div>

        <div className={styles.cartItemsWithAmount}>
            
        </div>

        <div className={styles.footer}>
            <Footer />
        </div>
    </div>
  )
}

export default ViewCart