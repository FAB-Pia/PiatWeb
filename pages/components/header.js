import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header() {
    return(
        <header className={styles.header}>
            <strong><FontAwesomeIcon icon={solid('arrow-left')} /><FontAwesomeIcon icon={solid('house')} /></strong>
        </header>
    )
}