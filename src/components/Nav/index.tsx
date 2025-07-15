import { ButtonPrimary } from "../ButtonPrimary"

import styles from "./styles.module.css"

export function Nav() {
    return (
        <nav className={styles.container}>
            <p>ODONTO PREMIUM</p>
            <ButtonPrimary name="Agendar Consulta"/>
        </nav>
    )
}