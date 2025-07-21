type Props = React.ComponentProps<"button"> & {
    name: string
    onClick?: () => void
}

export function ButtonPrimary({ name, ...rest }: Props) {
    function scrollToSection() {
        const section = document.getElementById("contact"); // ID da seção alvo
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <button { ...rest } type="button" onClick={scrollToSection}>{name}</button>
    )
}