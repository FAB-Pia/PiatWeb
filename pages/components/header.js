import styles from "../../styles/Home.module.css";
import fastyles from '@fortawesome/fontawesome-free/css/all.css'

const website_url = 'http://140.238.75.242:3001'

export default function Header() {
    return(
        <header className={styles.header}>
            <a href={website_url}><i className='fa-solid fa-arrow-left' /> <i className='fa-solid fa-house' /></a>
        </header>
    )
}