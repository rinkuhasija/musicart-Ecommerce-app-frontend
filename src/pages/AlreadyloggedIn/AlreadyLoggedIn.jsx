import styles from  './alreadyLoggedIn.module.css'
import { Link } from 'react-router-dom'

function AlreadyLoggedIn() {
    return (
        <div className={styles.pnf}>
            <h1 className={styles.pnfTitle}> </h1>
            <h2 className={styles.pnfHeading}>You are already Logged In .</h2>
            <Link to="/" className={styles.pnfBtn}>
                Go Back to Products
            </Link>
        </div>
    )
}

export default AlreadyLoggedIn