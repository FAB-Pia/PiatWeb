import Head from 'next/head'
import styles from '../../../../styles/Kahoot.module.css'
import Footer from "../../../components/footer";
import Header from "../../../components/header";

export default function GoogleGmail() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kahoot</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Kahoot
                </h1>

                <div className={styles.grid}>
                    <a href='gmail/login' rel="noreferrer">
                        <div className={styles.card}>
                            <h2>Obrir i Iniciar Sessió</h2>
                            <h4>Prepara Gmail per fer-lo servir</h4>
                        </div>
                    </a>
                    <a href='kahoot/create' rel="noreferrer">
                        <div className={styles.card}>
                            <h2>Crear un Kahoot</h2>
                            <h4>Comença a fer servir Kahoot</h4>
                        </div>
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    )
}