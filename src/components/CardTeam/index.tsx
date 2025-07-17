import styles from "./styles.module.css"

import verified from "../../assets/svg/verified.svg"

type Props = {
    name: string
    cargo: string
    cro: string
    specialties: string
    img: string
}

export function CardTeam({ name, cargo, cro, specialties, img }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>

            <div className={styles.description}>
                <h3>{name}</h3>
                <h4>{cargo}</h4>
                <p>{ cro }</p>

                <div className={styles.specialties}>
                    <img src={verified} alt="" />
                    <p>{specialties}</p>
                </div>
            </div>
        </div>
    )
}