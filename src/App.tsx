import {} from "./global.css"
import styles from "./app.module.css"

import { Nav } from "./components/Nav"
import { Main } from "./components/Main-initial"
import { Need } from "./components/Need"
import { VideoSection } from "./components/VideoSection"

export function App() {
  return (
    <div className={styles.container}>
      <Main/>
      <Nav/>
      <Need />
      <VideoSection altText="Vídeo Institucional" videoSrc="/videos/video.mp4"/>
    </div>
  )
}