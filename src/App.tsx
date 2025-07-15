import {} from "./global.css"
import styles from "./app.module.css"

import { Nav } from "./components/Nav"

export function App() {
  return (
    <div className={styles.container}>
      <Nav/>
    </div>
  )
}