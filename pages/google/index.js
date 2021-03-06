import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Google.module.css'
import Footer from "../components/footer";
import Header from "../components/header";

export default function Google() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Google</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Google
                </h1>

                <div className={styles.grid}>
                    <a href='google/gmail' rel="noreferrer">
                        <div className={styles.card}>
                            <Image src="/logos_serveis/gmail.png" alt='Logo Gmail' height='100' width='100' />
                            <h2>Gmail &rarr;</h2>
                        </div>
                    </a>
                    <a href='google/docs' rel="noreferrer">
                        <div className={styles.card}>
                            <Image src="/logos_serveis/docs.png" alt='Logo Docs' height='100' width='80' />
                            <h2>Docs &rarr;</h2>
                        </div>
                    </a>
                    <a href='google/sheets' rel="noreferrer">
                        <div className={styles.card}>
                            <Image src="/logos_serveis/sheets.png" alt='Logo Sheets' height='100' width='100' />
                            <h2>Sheets &rarr;</h2>
                        </div>
                    </a>
                    <a href='google/drive' rel="noreferrer">
                        <div className={styles.card}>
                            <Image src="/logos_serveis/drive.png" alt='Logo Drive' height='100' width='100' />
                            <h2>Drive &rarr;</h2>
                        </div>
                    </a>
                    <a href='google/forms' rel="noreferrer">
                        <div className={styles.card}>
                            <Image src="/logos_serveis/forms.png" alt='Logo Forms' height='100' width='100' />
                            <h2>Forms &rarr;</h2>
                        </div>
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    )
}
