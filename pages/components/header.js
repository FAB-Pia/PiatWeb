import styles from "../../styles/Home.module.css";
import fastyles from '@fortawesome/fontawesome-free/css/all.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <strong><i className='fa-solid fa-arrow-left' /><i className={fastyles.faHouse} /></strong>
        </header>
    )
}