import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return(
        <header className={styles.header}>
            <strong><FontAwesomeIcon icon="fa-solid fa-arrow-left" /><FontAwesomeIcon icon="fa-solid fa-house" /></strong>
        </header>
    )
}