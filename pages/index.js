import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "./components/footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pia&apos;t</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Benvingut a <span color='rgb(151, 215, 0)'>Pia</span>&apos;t
                </h1>

                <p className={styles.description}>
                    Nota per el jurat de Wapps: Anavem amb una mica de pressa i vam decidir no fer la aplicació movil (de moment) per que no quedés tot a mitges.
                </p>

                <div className={styles.grid}>
                    <a href="google" className={styles.card}>
                        <img src="/logos_serveis/google.png" alt='Logo Google' height='100' width='100' />
                        <h2>Google &rarr;</h2>
                    </a>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <img src="/logos_serveis/kahoot.png" alt='Logo Index' height='100' width='100' />
                        <h2>Index &rarr;</h2>
                    </a>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
