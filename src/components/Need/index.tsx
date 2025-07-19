import styles from "./styles.module.css"

import img from "../../assets/image-need.jpg"

export function Need() {
    return (
        <section className={styles.container} id="need">
            <h1>Por que você precisa da gente</h1>

            <div className={styles.containerChild}>
                <div className={styles.needs}>

                    <div className={styles.need}>

                        <div className={styles.img}></div>

                        <div className={styles.description}>
                            <h3>Necessidade 1</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dolores ipsum vel incidunt, voluptas earum amet laboriosam sint. Voluptates in veniam minima repudiandae mollitia facilis consequuntur quisquam! Odio, perspiciatis reprehenderit.</p>
                        </div>

                    </div>

                    <div className={styles.need}>

                        <div className={styles.img}></div>

                        <div className={styles.description}>
                            <h3>Necessidade 2</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dolores ipsum vel incidunt, voluptas earum amet laboriosam sint. Voluptates in veniam minima repudiandae mollitia facilis consequuntur quisquam! Odio, perspiciatis reprehenderit.</p>
                        </div>

                    </div>

                    <div className={styles.need}>

                        <div className={styles.img}></div>

                        <div className={styles.description}>
                            <h3>Necessidade 3</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dolores ipsum vel incidunt, voluptas earum amet laboriosam sint. Voluptates in veniam minima repudiandae mollitia facilis consequuntur quisquam! Odio, perspiciatis reprehenderit.</p>
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