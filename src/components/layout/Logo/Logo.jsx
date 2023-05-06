import logo from '../../../assets/logo-img.png'
import styles from './logo.module.css'

function Logo() {
  return (
    <div className={styles.logo}>
        <img src={logo} alt='Logo_img'></img>
        <h2>Musicart</h2>
    </div>
  )
}

export default Logo