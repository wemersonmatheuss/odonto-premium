import styles from "./styles.module.css"

import { CardTeam } from "../CardTeam"

import draDaniela from "../../assets/dradaniela.jpg"
import imgGisele from "../../assets/imgGisele.jpg"
import imgIngrid from "../../assets/imgIngrid.jpg"
import imgJheniffer from "../../assets/imgJheniffer.jpg"
import imgTatiane from "../../assets/imgTatiane.jpg"

export function Team() {
    return (
        <section className={styles.container} id="team">
            <div className={ styles.title }>
                <p>Nossa Equipe</p>
                <h2>Médicos Especialistas</h2>
            </div>

            <div className={styles.card}>
                <CardTeam img={draDaniela} name="Dra. Gisele Vasconcelos" cargo="Odontologista" cro="CRO: 12123" specialties="Dentista"/>

                <CardTeam img={imgGisele} name="Dra. Gisele Vasconcelos" cargo="Odontologista" cro="CRO: 19422" specialties="Prótese"/>

                <CardTeam img={imgGisele} name="Dra. Gisele Vasconcelos" cargo="Odontologista" cro="CRO: 19422" specialties="Dentista"/>

                <CardTeam img={imgIngrid} name="Dra. Ingrid Vitória" cargo="Biomedica" cro="CRBM: 13192" specialties="Harmonização Facial"/>

                <CardTeam img={imgJheniffer} name="Dra. Jheniffer Nicoly" cargo="Odontologista" cro="CRO: 19745" specialties="Dentista"/>

                <CardTeam img={imgTatiane} name="Dra. Tatiane Medeiros" cargo="Fisioterapeuta" cro="COFITO-PE 361309-F" specialties="Fisioterapia"/>
            </div>
        </section>
    )
}