import styles from "./styles.module.css"

import { ButtonPrimary } from "../ButtonPrimary"

export function Main() {
    return (
        <main className={styles.container} id="main">

            <div className={styles.title}>
                <h1>Cuidando da Sua Saúde com Excelência</h1>
                <p>Tecnologia de última geração e uma equipe experiente para oferecer tratamentos qualificados com segurança e qualidade.</p>
            </div>

            <div className={styles.buttons}>
                <ButtonPrimary name="Agendar Consulta" />
            </div>
        </main>
    )
}