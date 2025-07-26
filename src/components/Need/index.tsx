import styles from "./styles.module.css"

import img from "../../assets/image-need.jpg"

import relogio from "../../assets/svg/relogio.svg"
import preco from "../../assets/svg/preco.svg"
import crianca from "../../assets/svg/crianca.svg"

export function Need() {
    return (
        <section className={styles.container} id="need">
            <h1>O que te impede de cuidar do seu sorriso?</h1>

            <div className={styles.containerChild}>
                <div className={styles.needs}>

                    <div className={styles.need}>

                        <div className={styles.img}>
                            <img src={relogio} alt="" />
                        </div>

                        <div className={styles.description}>
                            <h3>Falta de tempo</h3>
                            <p>Atendemos até a noite, sabemos que a correria do dia a dia atrapalha. Por isso, oferecmos horários noturnos e atendimentos aos sábados, tudo com agendamento fácil e rápido</p>
                        </div>

                    </div>

                    <div className={styles.need}>

                        <div className={styles.img}>
                            <img src={preco} alt="" />
                        </div>

                        <div className={styles.description}>
                            <h3>Preço alto</h3>
                            <p>
                                Somos uma clínica particular com valores acessíveis, sem surpresas. Aqui, qualidade e economia andam juntas.
                            </p>
                        </div>

                    </div>

                    <div className={styles.need}>

                        <div className={styles.img}>
                            <img src={crianca} alt="" />
                        </div>

                        <div className={styles.description}>
                            <h3>Problemas com confiança ou atendimento infantil</h3>
                            <p>Tratamento humanizado e familiar.
                                Atendemos desde os pequenos até os mais velhos com carinho e paciência. A confiança começa no primeiro atendimento!
                            </p>
                        </div>

                    </div>

                </div>

                <div className={styles.image}>
                    <img src={img} alt="Imagem da logo da clinica odonto premium" />
                </div>
            </div>

            
        </section>
    )
}