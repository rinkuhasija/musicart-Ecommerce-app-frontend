import styles from './pageNotFound.module.css'
import { Link } from 'react-router-dom'


function PageNotFound() {
    return (
        <div className={styles.pnf}>
            <h1 className={styles.pnfTitle}>404</h1>
            <h2 className={styles.pnfHeading}>Oops ! Page Not Found</h2>
            <Link to="/" className={styles.pnfBtn}>
                Go Back
            </Link>
        </div>
    )
}

export default PageNotFound