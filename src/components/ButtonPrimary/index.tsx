type Props = React.ComponentProps<"button"> & {
    name: string
    onClick?: () => void
}

export function ButtonPrimary({ name, onClick, ...rest }: Props) {
    
    return (
        <button { ...rest } type="button" onClick={onClick}>{name}</button>
    )
}