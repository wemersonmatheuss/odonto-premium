import styles from "./styles.module.css"

import { ButtonPrimary } from "../ButtonPrimary"

type Props = {
    title: string
    onClick?: () => void
}

export function Cta({ title, onClick }: Props) {
  

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ButtonPrimary
        name="Agendar Agora"
        className={styles.button}
        onClick={onClick}
      />
    </section>
  );
}