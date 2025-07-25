import { ButtonPrimary } from "../ButtonPrimary"

import styles from "./styles.module.css"

type Props = {
    onClick?: () => void
}

export function Nav({ onClick }: Props) {
    return (
        <nav className={styles.container}>
            <p>ODONTO PREMIUM</p>
            <ButtonPrimary name="Agendar" onClick={onClick}/>
        </nav>
    )
}