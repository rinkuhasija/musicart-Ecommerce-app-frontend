import Logo from '../../components/layout/Logo/Logo'
import NavBar from '../../components/layout/NavBar/NavBar'
import styles from './products.module.css'
import Footer from '../../components/layout/Footer/Footer'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import search from '../../assets/search-img1.png'
import gridImg from '../../assets/grid-img.png'
import list from '../../assets/list-img.png'

function Products() {

    const [grid, setGrid] = useState(true)
    const myRef = useRef(null);
    // let data = ["", "", "", ""]
    const [results, setResults] = useState([])
    let url = 'https://musicart-cuvette-backend.onrender.com/getproductsdata'
    // let url = 'http://localhost:3000/getProductsData'
    let data = []

    function getProducts() {
        axios.get(url)
            .then((response) => {
                setResults(response.data)
            })
            .catch((error) => {
                console.log(error);
                myRef.current.insertAdjacentHTML('beforeend', '<div classname={styles.loadingContentBefore}>loading...</div>')

            })

    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <div className={styles.productsContainer}>

            <nav className={styles.topNavBar}>
                <NavBar />
            </nav>

            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.banner}>

                <div className={styles.insideBannerLeft}>
                    <h2> Grab upto 50% off on
                        Selected headphones </h2>
                    <button> <span> Buy Now </span> </button>
                </div>

                <div className={styles.insideBannerRight}>

                </div>

            </div>

            <div className={styles.searchProduct}>

                <img src={search} alt="search_svg" />
                <input type="text" placeholder="Search Product" id={styles.searchProductInput} />

            </div>

            <div className={styles.viewTypeAndFilterSelect}>

                <div className={styles.gridListChange}>
                    <img onClick={() => setGrid(true)} src={gridImg} alt="grid" />
                    <img onClick={() => setGrid(false)} src={list} alt="list" />
                </div>

                <div className={styles.filterSelect}>

                    <div>
                        Headphone type
                    </div>
                    <div>
                        Company
                    </div>
                    <div>
                        Colour
                    </div>
                    <div>
                        Price
                    </div>

                </div>

                <div className={styles.sortSelect}>
                    <p>Sort by</p>
                    <select>
                        <option value="price">Price</option>
                        <option value="color">Color</option>
                        <option value="category">Category</option>
                    </select>

                </div>

            </div>

            <main ref={myRef} className={grid ? styles.productList : styles.productListInListView}>

                {grid ? results.map((result, index) => {
                    return (

                        <div key={index} className={styles.oneProduct}>
                            <img src={result.product_images[0]} alt="product_image" />
                            <h3>{result.name}</h3>
                            <p> Price - ₹ {result.price}</p>
                            <p> {result.color} | {result.category}</p>
                        </div>)

                }) : results.map((result, index) => {
                    return (

                        <div key={index} className={styles.listView}>

                            <div className={styles.leftListView}>
                                <img src={result.product_images[0]} alt="product_image" />
                            </div>

                            <div className={styles.rightListView}>
                                <h3>{result.name}</h3>
                                <p> Price - ₹ {result.price}</p>
                                <p> {result.color} | {result.category}</p>
                                <p> {result.features}</p>
                                <button> <span> Details </span></button>
                            </div>

                        </div>
                    )
                })}


            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>


        </div>
    )
}

export default Products