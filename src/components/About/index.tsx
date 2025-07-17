import styles from "./styles.module.css"

import img from "../../assets/imgGisele.jpg"

export function About() {
    return (
        <section className={styles.container}>
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>

            <div className={styles.description}>
                <h3>Quem é Dra. Daniela?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo, aut maxime error itaque doloremque dolor, minus ad quia nemo voluptas ducimus, libero labore laudantium quam odit est consectetur modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore similique hic nihil at tempora. Harum voluptatibus sed cumque aliquam omnis a, quisquam veniam sequi sint voluptates dolorum eaque nisi labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus enim culpa nobis, necessitatibus reprehenderit saepe consequatur quae quisquam doloremque vitae minus architecto sequi incidunt accusantium? Non veniam quo modi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit officiis, reprehenderit nobis eum adipisci, dignissimos modi ipsa optio veritatis quibusdam pariatur ex autem officia quam beatae error est consequuntur saepe! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis iure nemo veritatis explicabo delectus, aliquam ratione odio recusandae consequatur animi quo possimus, nulla quidem rerum eos sapiente. Voluptates, accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam at deleniti eaque molestiae, voluptas id necessitatibus harum repellat dolor beatae sequi ab nulla, tenetur cum cumque est adipisci! Nihil, eius!</p>
            </div>
        </section>
    )
}