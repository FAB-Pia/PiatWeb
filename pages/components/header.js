import styles from "../../styles/Home.module.css";
import Image from "next/image";

export default function Header() {
    return(
        <footer className={styles.footer}>
            <span width={88}>
                <a width={88} href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank' rel="noreferrer">
                    <Image src='/images/Reconeixement-NoComercial-CompartirIgual.png' width={88} height={31} />
                </a>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&#8962;
            Gracies a{':'} <br/>
            <div>
                <a href='https://dinahosting.com' target='_blank' rel="noreferrer">
                    <span className={styles.logo}>
                        <Image src="/images/dinahosting.png" alt="Logo DinaHosting" width={72} height={16}/>
                    </span>
                </a>
                <a href='https://wapps.cat' target='_blank' rel="noreferrer">
                    <span className={styles.logo}>
                        <Image src="/images/wapps.png" alt="Logo Wapps" width={72} height={16}/>
                    </span>
                </a>
            </div>
        </footer>
    )
}