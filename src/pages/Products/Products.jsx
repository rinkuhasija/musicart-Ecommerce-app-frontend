import Logo from '../../components/layout/Logo/Logo'
import NavBar from '../../components/layout/NavBar/NavBar'
import styles from './products.module.css'
import Footer from '../../components/layout/Footer/Footer'
import { useState, useEffect, useRef, useContext } from 'react'
import axios from 'axios'
import search from '../../assets/search-img1.png'
import gridImg from '../../assets/grid-img.png'
import list from '../../assets/list-img.png'
import authContext from '../../context/login/authContext'
import { useNavigate } from 'react-router-dom'
import dataContext from '../../context/dataContext/dataContext'

function Products() {

    const navigate = useNavigate();
    const { dataState, setDataState } = useContext(dataContext)
    // console.log(dataState);

    const [grid, setGrid] = useState(true)
    const myRef = useRef(null);

    const [results, setResults] = useState([])

    const handleSearchSubmit = async () => {
        try {
            const { data } = await axios.get(`https://musicart-cuvette-backend.onrender.com/api/v1/searchProduct/${dataState.keyword}`)
            setDataState({ ...dataState, resultsFromContext: data })
            setResults(data)
        } catch (error) {
            console.log(error);
        }
    }

    let url = 'https://musicart-cuvette-backend.onrender.com/api/v1/getproductsdata'

    function getProducts() {
        axios.get(url)
            .then((response) => {
                setResults(response.data)
                console.log(results)
            })
            .catch((error) => {
                console.log(error);
                myRef.current.insertAdjacentHTML('beforeend', '<div classname={styles.loadingContentBefore}>loading...</div>')
            })

    }

    useEffect(() => {
        getProducts();
    }, [])

    const sortByPrice = () => {
        const sortedArr = [...results].sort((a, b) => a.price - b.price)
        setResults(sortedArr)
    }

    const sortByBrand = () => {
        const sortedArr = [...results].sort((a, b) => a.brand > b.brand ? 1 : -1)
        setResults(sortedArr)
    }


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
                <input value={dataState.keyword} onChange={(e) => setDataState({ ...dataState, keyword: e.target.value })} type="text" placeholder="Search Product" id={styles.searchProductInput} />
                <button onClick={handleSearchSubmit}> Search </button>
                <button onClick={getProducts}> All Products</button>

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
                    <p onClick={sortByPrice}> Sort by Price  </p>

                    <p onClick={sortByBrand}> Sort by Brand</p>


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
                            <button onClick={(e) => {
                                // setId(result._id);
                                navigate((`/products/${result._id}`));
                            }}> <span> Details </span></button>
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
                                <button onClick={(e) => {
                                    // setId(result._id);
                                    navigate((`/products/${result._id}`));
                                }}> <span> Details </span></button>
                            </div>

                        </div>
                    )
                })}


            </main >

            <footer className={styles.footer}>
                <Footer />
            </footer>


        </div >
    )
}

export default Products