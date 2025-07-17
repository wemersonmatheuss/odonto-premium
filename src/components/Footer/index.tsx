import styles from "./styles.module.css"

import insta from "../../assets/svg/instagram.svg"
import whatsapp from "../../assets/svg/whatsapp.svg"
import email from "../../assets/svg/email.svg"

export function Footer() {
    return (
        <footer className={styles.container}>

            <div className={styles.global}>

                <div className={styles.name}>

                    <h2>ODONTO PREMIUM</h2>

                    <div className={styles.links}>

                        <a href="#">
                            <img src={insta} alt="" />
                        </a>

                        <a href="#">
                            <img src={whatsapp} alt="" />
                        </a>

                        <a href="#">
                            <img src={email} alt="" />
                        </a>

                    </div>
                </div>

                <div className={styles.navigation}>
                    <h3>Especialidades</h3>
                    <div className={styles.linksNavigation}>
                        <a href="#">Odontologia Geral</a>
                        <a href="#">Implante de Prótese</a>
                        <a href="#">Odontopediatria</a>
                        <a href="#">Ortodontia (Aparelho)</a>
                        <a href="#">Clareamento e Estética</a>
                        <a href="#">Endodontia</a>
                        <a href="#">Fisioterapia Integrada</a>
                    </div>
                </div>

                <div className={styles.navigation}>
                    <h3>Navegação Rápida</h3>
                    <div className={styles.linksNavigation}>
                        <a href="#">Início</a>
                        <a href="#">Necessidades</a>
                        <a href="#">Especialidades</a>
                        <a href="#">Especialistas</a>
                        <a href="#">Contato</a>
                        <a href="#">Nosso Espaço</a>
                    </div>
                </div>

                <div className={styles.navigation}>
                    <h3>Contato</h3>
                    <div className={styles.linksNavigation}>
                        <a href="#">(81) 99999-9999</a>
                        <a href="#">dradaniela@gmail.com</a>
                        <a href="#">Limoeiro/PE</a>
                        <a href="#">Seg-Sex: 8h às 17h | Sab: 8h às 13h</a>
                    </div>
                </div>
            </div>

            <div className={styles.finally}>
                <div className={styles.line}></div>
                <div className={styles.footerInfos}>
                    <a href="#">© 2025 . Todos os direitos reservados.</a>
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Termos e Condições</a>
                </div>
            </div>
        </footer>
    )
}