import MenuLateral from "./MenuLateral"

interface LayoutProps {
    titulo: string
    subtitulo: string
    childen?: any
}

export default function Layout(props: LayoutProps) {

    return (
        <>
            <MenuLateral />


        </>
    )
}