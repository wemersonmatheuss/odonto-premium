import styles from "./styles.module.css"

import insta from "../../assets/svg/instagram.svg"
import whatsapp from "../../assets/svg/whatsapp.svg"
import email from "../../assets/svg/email.svg"

export function Footer() {
    return (
        <footer className={styles.container}>

            <div className={styles.global}>

                <div className={styles.name}>

                    <a href="#">ODONTO PREMIUM</a>

                    <div className={styles.links}>

                        <a href="https://www.instagram.com/odontoopremium/" target="blank">
                            <img src={insta} alt="" />
                        </a>

                        <a href="#">
                            <img src={whatsapp} alt="" />
                        </a>

                        <a href="mailto:dradaniela@gmail.com" target="blank">
                            <img src={email} alt="" />
                        </a>

                    </div>
                </div>

                <div className={styles.navigation}>
                    <h3>Especialidades</h3>
                    <div className={styles.linksNavigation}>
                        <a href="#specialties">Odontologia Geral</a>
                        <a href="#specialties">Implante de Prótese</a>
                        <a href="#specialties">Odontopediatria</a>
                        <a href="#specialties">Ortodontia (Aparelho)</a>
                        <a href="#specialties">Clareamento e Estética</a>
                        <a href="#specialties">Endodontia</a>
                        <a href="#specialties">Fisioterapia Integrada</a>
                    </div>
                </div>

                <div className={styles.navigation}>
                    <h3>Navegação Rápida</h3>
                    <div className={styles.linksNavigation}>
                        <a href="#main">Início</a>
                        <a href="#need">Necessidades</a>
                        <a href="#specialties">Especialidades</a>
                        <a href="#team">Especialistas</a>
                        <a href="#contact">Contato</a>
                        <a href="#photos">Nosso Espaço</a>
                    </div>
                </div>

                <div className={styles.navigation}>
                    <h3>Contato</h3>
                    <div className={styles.linksNavigation}>
                        <a href="#">(81) 983144661</a>
                        <a href="#">(81) 979111263</a>
                        <a href="mailto:dradaniela@gmail.com">dradaniela@gmail.com</a>
                        <a href="#">Vitória/PE</a>
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
                    <a href="https://www.instagram.com/wemerson_dev/" target="blank" style={{color: "red"}}>Desenvolvido e mantido por Wemerson Dev</a>
                </div>
            </div>
        </footer>
    )
}