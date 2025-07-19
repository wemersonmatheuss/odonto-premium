type Props = React.ComponentProps<"button"> & {
    name: string
}

export function ButtonPrimary({ name, ...rest }: Props) {
    return (
        <button { ...rest } type="button">{name}</button>
    )
}