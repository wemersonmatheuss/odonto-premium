import {} from "./global.css"
import styles from "./app.module.css"

import { Nav } from "./components/Nav"
import { Main } from "./components/Main-initial"
import { Need } from "./components/Need"
import { VideoSection } from "./components/VideoSection"
import { Cta } from "./components/Cta"
import { Specialties } from "./components/Specialties"
import { Team } from "./components/Team"

import video from "../public/videos/video.mp4"

export function App() {
  return (
    <div className={styles.container}>
      <Main/>
      <Nav/>
      <Need />
      <VideoSection altText="Vídeo Institucional" videoSrc={video}/>
      <Cta title="Avaliação Gratuita Somente Hoje"/>
      <Specialties/>
      <VideoSection altText="Vídeo Institucional" videoSrc={video}/>
      <Team/>
    </div>
  )
}