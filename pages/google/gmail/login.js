import Head from 'next/head'
import styles from '../../../styles/Google.module.css'
import Footer from "../../components/footer";
import Header from "../../components/header";
import {useEffect} from "react";

const guide = {
    "title": "Com accedir-hi",
    "body": [
        {
            "type": "text",
            "text": [ "Per accedir al nostre correu electrònic hem d’obrir una nova pestanya a Google i pressionar el botó %GMAIL% de a dalt a la dreta." ],
            "newline": 1
        },
        {
            "type":"image",
            "location": "/images/google/gmail/buscador-gmail.png"
        }
    ]
}

let guideHTML = "";

export default function GoogleGmailLogin() {
    useEffect(() => {
        guide.body.forEach(item => {
            if (item.type === 'image') {
                guideHTML = guideHTML + "<Image src='" + item.location + "' width='inherit - 10%' height='auto' />"
            }

            if (item.type === 'text') {
                item.text.forEach(textie => {
                    textie = textie.split('%').join('"').split('&').join(':');
                    guideHTML = guideHTML + textie + ' ';
                });

                for (var i = 0; item.newline < i; i++) {
                    guideHTML = guideHTML + "<br />"
                }
            }
        })
        document.getElementById('guideContainer').innerHTML = guideHTML
    }, []);

    return(
        <div className={styles.container}>
            <Head>
                <title>{guide.title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {guide.title.text}
                </h1>
                <div id='guideContainer'/>

            </main>

            <Footer />
        </div>
    )
}