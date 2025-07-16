import styles from "./styles.module.css"

type Props = {
    videoSrc: string
    altText: string
}

export function VideoSection({ videoSrc, altText }: Props) {
    return (
        <section className={ styles.container }>
            <video 
            className={ styles.video }
            src={ videoSrc }
            controls
            aria-label={altText}>

            </video>
        </section>
    )
}