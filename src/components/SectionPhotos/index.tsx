import styles from "./styles.module.css"

import { CardPhoto } from "../CardPhoto"
import salaConsultorio from "../../assets/salaConsultorio.jpg"

export function SectionPhotos() {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>Conheça nosso espaço</h2>
            </div>

            <div className={styles.card}>
                <CardPhoto img={salaConsultorio} space="Sala de Atendimento"/>
            

            
                <CardPhoto img={salaConsultorio} space="Sala de Atendimento"/>
            

            
                <CardPhoto img={salaConsultorio} space="Sala de Atendimento"/>
            
            
            
                <CardPhoto img={salaConsultorio} space="Sala de Atendimento"/>
            </div>
        </section>
    )
}