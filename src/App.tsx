import {} from "./global.css"
import styles from "./app.module.css"

import { Nav } from "./components/Nav"
import { Main } from "./components/Main-initial"

export function App() {
  return (
    <div className={styles.container}>
      <Main/>
      <Nav/>
    </div>
  )
}