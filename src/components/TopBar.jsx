import styles from './TopBar.module.css';
import logo from '../assets/logo.svg';

function TopBar() {
    return (
        <div className={styles.topbar}>
            <img src={logo} className={styles.logo} alt="logo" />
        </div>
    )
}

export default TopBar
