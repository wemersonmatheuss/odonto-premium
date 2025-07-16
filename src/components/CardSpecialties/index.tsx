import styles from "./styles.module.css"

import verified from "../../assets/svg/verified.svg"

type Props = {
    img: string
    title: string
    subtitle: string
    service1: string
    service2: string
    service3: string
    service4: string
    cta: string
}

export function CardSpecialties({ img, title, subtitle, service1, service2, service3, service4, cta }: Props) {
    return (
        <div className={ styles.container }>
            <div className={ styles.icon }>
                <img src={img} alt="" />
            </div>

            <div className={ styles.title }>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>

            <div className={ styles.services }>
                <div className={ styles.service }>
                    <img src={verified} alt="Icone de Verificado" />
                    <p>{service1}</p>
                </div>

                <div className={ styles.service }>
                    <img src={verified} alt="Icone de Verificado" />
                    <p>{service2}</p>
                </div>

                <div className={ styles.service }>
                    <img src={verified} alt="Icone de Verificado" />
                    <p>{service3}</p>
                </div>

                <div className={ styles.service }>
                    <img src={verified} alt="Icone de Verificado" />
                    <p>{service4}</p>
                </div>
            </div>

            <div className={styles.cta}>
                <a href="#">{ cta }</a>
            </div>
        </div>
    )
}