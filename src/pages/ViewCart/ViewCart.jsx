import Footer from '../../components/layout/Footer/Footer'
import Logo from '../../components/layout/Logo/Logo'
import NavBar from '../../components/layout/NavBar/NavBar'
import styles from './viewCart.module.css'
import cart from '../../assets/cart-img.png'


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

                <div className={styles.leftSide}>

                    <img src="" alt="headphone" />

                    <div>
                        <p> Sony WH-CH720N </p>
                        <p>Clour : Black </p>
                        <p> In Stock </p>
                    </div>

                    <div>
                        <p>Price</p>
                        <p>₹3500</p>
                    </div>

                    <div>
                        <p>Quantity</p>
                        <input type="select" name="" id="" />
                    </div>

                </div>

                <div className={styles.rightSide}>

                    <p>PRICE DETAILS</p>
                    <p>Total MRP : ₹3500</p>
                    <p>Discount on MRP : ₹0</p>
                    <p>Convenience Fee : ₹45</p>

                    <h3>Total Amount : ₹3545</h3>

                    <button> <span> Place Order </span></button>

                </div>

            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default ViewCart