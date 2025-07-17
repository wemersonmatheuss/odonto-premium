import styles from "./styles.module.css"

import { CardInfoContact } from "../CardInfoContact"


import map from "../../assets/svg/maps.svg"
import telephone from "../../assets/svg/telephone.svg"
import email from "../../assets/svg/email.svg"
import clock from "../../assets/svg/clock.svg"

export function InfoContact() {
    return (
        <section className={styles.container}>
            <div className={ styles.title }>
                <p>Contato</p>
                <h2>Agende sua Consulta</h2>
            </div>

            <div className={styles.info}>
                <div className={styles.cards}>
                    <CardInfoContact icon={map} title="Endereço" description="Av Santo Antônio 223A, Centro" info2="Limoeiro/PE - CEP: 55700-000"/>

                    <CardInfoContact icon={telephone} title="Telefones" description="(81) 9966-0979" info2="(81) 99666-0979"/>

                    <CardInfoContact icon={email} title="E-mail" description="dradaniela@gmail.com"/>

                    <CardInfoContact icon={clock} title="Horário de Atendimento" description="Segunda a Sexta: 8h às 17h" info2="Sábado: 8h às 13h" info3="Atendimento noturno somente por agendamento"/>
                </div>

                <div className={styles.formWrapper}>
                    <h1>FORMULARIo</h1>
                </div>
            </div>
        </section>
    )
}