import styles from './singleProduct.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../../components/layout/NavBar/NavBar'
import Logo from '../../components/layout/Logo/Logo'
import Footer from '../../components/layout/Footer/Footer'


const SingleProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://orca-app-ihire.ondigitalocean.app/api/v1/getProductById/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleClick = () => {
        navigate("/")
    }


    return (
        <div className={styles.singleProduct}>

            <div className={styles.navBar}>
                <NavBar />
            </div>

            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.backBtn}>
                <button onClick={handleClick}> <span> Back to products </span> </button>
            </div>

            <div className={styles.features}>
                <h3>{product.features}</h3>
            </div>

            <div className={styles.flexProductDisplay}>

                <div className={styles.leftImg}>

                    <div className={styles.dds}>
                        <img src={product.product_images[0]} alt="first_product_img" />
                    </div>

                    <div className={styles.flexRow}>
                        <img src={product.product_images[1]} alt="second_product_img" />
                        <img src={product.product_images[2]} alt="third_product_img" />
                        <img src={product.product_images[3]} alt="last_product_img" />
                    </div>
                </div>

                <div className={styles.rightDetails}>
                    <h2> {product.name} </h2>
                    <p>(50 Customer reviews)</p>
                    <h2> Price - ₹ {product.price} </h2>
                    <h3> {product.color} | {product.category} </h3>
                    <p> {product.description} </p>
                    <h3> Available - In stock</h3>
                    <h3> Brand - {product.brand}</h3>
                    <button> <span> Add to cart </span> </button>
                    <button> <span> Buy Now </span> </button>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default SingleProduct