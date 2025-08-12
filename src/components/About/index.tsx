import styles from "./styles.module.css"

import img from "../../assets/dradaniela.jpg"

export function About() {
    return (
        <section className={styles.container}>
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>

            <div className={styles.description}>
                <h3>Quem está por trás da Odonto Premium?</h3>
                <p>Dra. Daniela Bordignon, cirurgiã-dentista com mais de 20 anos de experiência, decidiu trazer todo o cuidado, carinho e qualidade que marcou sua trajetória em Limoeiro para a cidade de Vitória de Santo Antão.
                Na Odonto Premium, ela lidera uma equipe pronta para te atender com respeito, atenção e os melhores materiais do mercado.
                Acreditamos que todos merecem sorrir com segurança, conforto e autoestima.
                </p>
            </div>
        </section>
    )
}