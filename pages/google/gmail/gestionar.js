import Head from 'next/head'
import styles from '../../../styles/Google.module.css'
import Footer from "../../components/footer";
import Header from "../../components/header";
import {useEffect} from "react";

const guide = {
    "title":"Gestionar els Correus",
    "body":
        [
            {
                "type":"text",
                "text":["Pots fer varies coses amb els correus que has rebut:"],
                "newline": 1
            } ,
            {
                "type":"image",
                "location":"images/google/gmail/Gmail foto"
            },
            {
                "type":"text",
                "text":["El primer botó, marcat en verd, s’utilitza per seleccionar tots els correus de la safata."],
                "newline": 1
            } ,
            {
                "type":"text",
                "text":["El segon, fa que si estan associats a una etiqueta, se suprimeixen d’ella."],
                "newline": 1
            } ,
            {
                "type":"text",
                "text":["El tercer, marcar-los com a brossa o spam."],
                "newline": 1
            } ,
            {
                "type":"text",
                "text":["El quart, els esborra."],
                "newline": 1
            } ,
            {
                "type":"text",
                "text":["El cinquè, marcar-los o desmarcar-los com a llegits."],
                "newline": 1
            } ,
            {
                "type":"text",
                "text":["El sisè i el setè no són gens importants, només per a treball."],
                "newline": 1
            } ,
            {
                "type":"text",
                "text":["El vuitè els mou a altres safates."],
                "newline": 1
            } ,
            {
                "type":"text",
                "text":["El novè, afegir-li etiquetes."],
                "newline": 1
            } ,
            {
                "type":"text",
                "text":["I el desè, més opcions"],
                "newline": 1
            } ,
            {
                "type":"text",
                "text":["Al Mail hi ha una última opció, les etiquetes. És bastant complexa i només útil per a gent molt ordenada. Si voleu saber més, aquí us deixem l’enllaç d’un vídeo explicatiu:"],
                "newline": 1
            } ,
            {
                "type":"text",
                "text":["https://www.youtube.com/watch?v=K4NxiwquhKQ"],
                "newline": 1
            }
        ]
};

let guideHTML = "";

export default function GoogleGmailRedactar() {
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
                    {guide.title}
                </h1>
                <div id='guideContainer'/>

            </main>

            <Footer />
        </div>
    )
}