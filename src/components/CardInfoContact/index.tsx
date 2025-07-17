import styles from "./styles.module.css"

type Props = {
    icon: string
    title: string
    description: string
    info2?: string
    info3?: string
}

export function CardInfoContact({ icon, title, description, info2, info3 }: Props) {
    return (
        <div className={ styles.container }>
            <div className={styles.image}>
                <img src={icon} alt="" />
            </div>

            <div className={styles.description}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{info2}</p>
                <p>{info3}</p>
            </div>
        </div>
    )
}