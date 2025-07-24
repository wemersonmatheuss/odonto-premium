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
  return (
    <div className={styles.container}>
      <Main/>
      <Nav/>
      <Need />
      <VideoSection altText="Vídeo Institucional" videoSrc={video}/>
      <Cta title="Agende sua avaliação gratuita"/>
      <Specialties/>
      <VideoSection altText="Vídeo Institucional" videoSrc={video}/>
      <Team/>
      <InfoContact/>
      <SectionPhotos/>
      <About/>
      <Cta title="Agende sua avaliação gratuita"/>
      <Map/>
      <Footer link="/politica" link2="/termos"/>
    </div>
  )
}