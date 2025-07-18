import styles from "./styles.module.css"

type Props = React.ComponentProps<"button"> & {
    name: string
}

export function ButtonPrimary({ name, ...rest }: Props) {
    return (
        <button className={styles.button} { ...rest } type="button">{name}</button>
    )
}