import styles from "../../styles/Kahoot.module.css";
import Head from "next/head";
import Image from 'next/image'
import Footer from "../components/footer";
import {useEffect} from "react";

const guide = {
    "title": {
        "text": "Crear un Kahoot",
        "size": 24
    },
    "body": [
        {
            "text": [ "Per crear un Kahoot, el primer que has de fer un cop ja hagis iniciat sessió a la teva conta és prémer el botó d’adalt a la dreta que posa %Crear%." ],
            "type": "text",
            "newline": 1
        },
        {
            "type": "text",
            "text": [ "Un cop a dins del creador el primer pas és fer la primera pregunta. Pots fer diverses accions per començar a crear-la. " ],
            "newline" : 1
        },
        {
            "type" : "image",
            "location" : "/images/kahoot/crear.png"
        },
        {
            "type" : "text",
            "text" : [
                "A dalt a la dreta hi ha quatre desplegables que et permeten canviar el funcionament de la pregunta.",
                "El primer, %Tipo de Pregunta%, et permet triar com serà la pregunta&",
                "Quiz, De quatre respostes.",
                "Verdad o Falso, De dos respostes",
                "Diapositiva: Només informació"
            ],
            "newline" : 1
        },
        {
            "type" : "text",
            "text" : [ "El segon, %Limite de tiempo%, et permet seleccionar el temps límit de a pregunta, podent seleccionar entre 5, 10, 30 segons i entre 1, 1 i mig, 2 i 4 minuts." ],
            "newline" : 1
        },
        {
            "type" : "text",
            "text" : [ "El tercer, %Puntos%, et deixa triar els punts que otorgarà la pregunta, Normals, dobles o sense punts." ],
            "newline" : 1
        },
        {
            "type" : "text",
            "text" : [ "El quart, %Opciones de respuesta%, et dona l’opció de seleccionar com es seleccionarà la resposta. Pots triar entre Selección Simple, només una resposta correcte o selección múltiple, el jugador pot triar varies." ],
            "newline" : 2
        },
        {
            "type" : "text",
            "text" : [ "A l’hora de crear les preguntes hi ha diverses accions possibles." ],
            "newline" : 1
        },
        {
            "type" : "image",
            "location" : "/images/kahoot/crear2.png"
        },
        {
            "type" : "text",
            "text" : [
                "A dalt s’ha d’escriure el títol de la pregunta.",
                "Abaix, has de posar les possibles 4 respostes i marcar una com a correcte.",
                "Al mig, pots inserir una imatge que acompanyi a la pregunta."
            ],
            "newline" : 1
        },
        {
            "type" : "text",
            "text" : [
                "Un cop hagis fet una diapositiva clica al botó %Añadir Pregunta%.",
                "Repeteix aquest procès fins tenir la quantitat de preguntes que vulguis.",
                "Finalment, per guardar el teu progrés clica al botó d’adalt a la dreta %Guardar%."
            ],
            "newline" : 1
        },

    ]

}
let guideHTML = "";

export default function KahootCreate() {
    useEffect(() => {
        guide.body.forEach(item => {
            if (item.type === 'image') {
                guideHTML = guideHTML + "<Image src='" + item.location + "' width='inherit - 10%' height='auto' />"
            }

            if (item.type === 'text') {
                item.text.forEach(textie => {
                    guideHTML = guideHTML + textie;
                });

                if (item.newline === 1) {
                    guideHTML = guideHTML + "<br />"
                }
            }
        })
        document.getElementById('guideContainer').innerHTML = guideHTML
    }, []);

    return(
        <div className={styles.container}>
            <Head>
                <title>{guide.title.text}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {guide.title.text}
                </h1>
                <div id='guideContainer'></div>

            </main>

            <Footer />
        </div>
    )
}