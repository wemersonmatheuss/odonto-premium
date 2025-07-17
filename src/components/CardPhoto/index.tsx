import styles from "./styles.module.css"

type Props = {
    img: string
    space: string
}
export function CardPhoto({ img, space }: Props) {
    return (
        <div className={styles.container}>
            <img src={img} alt="" />
            <p>{space}</p>
        </div>
    )
}