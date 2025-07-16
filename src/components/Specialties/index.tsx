import styles from "./styles.module.css"

import { CardSpecialties } from "../CardSpecialties"

import tooth from "../../assets/svg/tooth.svg"
import dentalCrown from "../../assets/svg/dentalCrown.svg"
import child from "../../assets/svg/child.svg"
import orthodonticAppliance from "../../assets/svg/orthodonticAppliance.svg"
import beauty from "../../assets/svg/beauty.svg"
import endodontics from "../../assets/svg/endodontics.svg"
import physiotherapy from "../../assets/svg/physiotherapy.svg"

export function Specialties() {
    return (
        <section className={ styles.container }>
            <div className={ styles.title }>
                <p>Nossas Especialidades</p>
                <h2>Cuidado Completo para Toda a Família</h2>
            </div>
            <div className={styles.card}>
                <CardSpecialties img={tooth} title="Odontologia Geral" subtitle="Cuidados completos para sua saúde com técnicas modernas e atendimento humanizado" service1="Restauração" service2="Lipeza" service3="Extração" service4="Cirurgias odontológicas" cta="Agende Agora"/>

                <CardSpecialties img={dentalCrown} title="Implantes e Próteses" subtitle="Tratamentos personalizados para devolver o conforto e a estética do seu sorriso." service1="Implantes dentários" service2="Próteses fixas" service3="Próteses removíveis" service4="Tecnologia de ponta" cta="Agende Agora"/>

                <CardSpecialties img={child} title="Odontopediatria" subtitle="Atendimento infantil especializado, focado no cuidado, acolhimento e prevenção desde cedo." service1="Avaliação infantil" service2="Tratamento preventivo" service3="Acompanhamento periódico" service4="Atendimento especializado" cta="Agende Agora"/>

                <CardSpecialties img={orthodonticAppliance} title="Ortodontia (Aparelhos)" subtitle="Alinhamento dentário com segurança e estética, utilizando as técnicas mais eficazes." service1="Avaliação ortodôntica" service2="Aparelhos fixos e móveis" service3="Monitoramento do tratamento" service4="Manutenção" cta="Agende Agora"/>

                <CardSpecialties img={beauty} title="Clareamento e Estética" subtitle="Melhore sua autoestima com procedimentos estéticos modernos e resultados naturais." service1="Clareamento dental" service2="Harmonização facial" service3="Avaliação" service4="Especialistas " cta="Agende Agora"/>

                <CardSpecialties img={endodontics} title="Endodontia" subtitle="Tratamento de canal com segurança, conforto e precisão para preservar seus dentes." service1="Diagnóstico preciso" service2="Tratamento com anestesia local" service3="Acompanhamento" service4="Especialistas" cta="Agende Agora"/>

                <CardSpecialties img={physiotherapy} title="Fisioterapia Integrada" subtitle="Alinhamento dentário com segurança e estética, utilizando as técnicas mais eficazes." service1="Reabilitação" service2="Tratamento de dores musculares" service3="Alívio de tensões mandibulares" service4="Ventosa" cta="Agende Agora"/>
            </div>
            

        </section>
    )
}