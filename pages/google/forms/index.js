import Head from 'next/head'
import styles from '../../../styles/Google.module.css'
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function GoogleForms() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Drive</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Drive
                </h1>

                <div className={styles.grid}>
                    <a href='forms/crear' rel="noreferrer">
                        <div className={styles.card}>
                            <h2>Crear un Formulari</h2>
                            <h4>Com crear un formulari i les seves funcions</h4>
                        </div>
                    </a>

                </div>
            </main>

            <Footer />
        </div>
    )
}