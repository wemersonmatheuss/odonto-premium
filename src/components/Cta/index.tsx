import styles from "./styles.module.css"

import { ButtonPrimary } from "../ButtonPrimary"

type Props = {
    title: string
}

export function Cta({ title }: Props){
    return (
        <section className={ styles.container }>
            <h2 className={ styles.title }>{ title }</h2>

            <ButtonPrimary name="Agendar Agora" className={ styles.button }/>
        </section>
    )
}