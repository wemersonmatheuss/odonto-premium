import {} from "../global.css"
import styles from "../app.module.css"

import { Nav } from "../components/Nav"
import { Main } from "../components/Main-initial"
import { Need } from "../components/Need"
import { VideoSection } from "../components/VideoSection"
import { Cta } from "../components/Cta"
import { Specialties } from "../components/Specialties"
import { Team } from "../components/Team"
import { InfoContact } from "../components/InfoContact"
import { SectionPhotos } from "../components/SectionPhotos"
import { About } from "../components/About"
import { Map } from "../components/Map"
import { Footer } from "../components/Footer"

import video from "../../public/videos/video.mp4"

export function Home() {

  function redirectToWhatsApp() {
    const message = encodeURIComponent("Olá, gostaria de ser atendido");
    const phoneNumber = "5581983144661"; // Ex: 5581999999999
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  }



  function scrollToSection() {
        const section = document.getElementById("contact"); // ID da seção alvo
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
  }

  return (

    

    <div className={styles.container}>
      <Main onClick={scrollToSection}/>
      <Nav onClick={scrollToSection}/>
      <Need />
      <VideoSection altText="Vídeo Institucional" videoSrc={video}/>
      <Cta title="Agende sua avaliação gratuita" onClick={redirectToWhatsApp}/>
      <Specialties/>
      <VideoSection altText="Vídeo Institucional" videoSrc={video}/>
      <Team/>
      <InfoContact/>
      <SectionPhotos/>
      <About/>
      <Cta title="Agende sua avaliação gratuita" onClick={redirectToWhatsApp}/>
      <Map/>
      <Footer link="/politica" link2="/termos"/>
    </div>
  )
}