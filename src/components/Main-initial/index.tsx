import styles from "./styles.module.css"

import { ButtonPrimary } from "../ButtonPrimary"

type Props = {
    onClick?: () => void 
}

export function Main({ onClick }: Props) {
    return (
        <main className={styles.container} id="main">

            <div className={styles.title}>
                <h1>Sorria sem Medo</h1>
                <p>Atendimento odontológico de qualidade com preço que cabe no seu bolso</p>
            </div>

            <div className={styles.buttons}>
                <ButtonPrimary name="Agendar avaliação gratuita" onClick={onClick}/>
            </div>
        </main>
    )
}