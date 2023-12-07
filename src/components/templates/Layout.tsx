import MenuLateral from "./MenuLateral"
import Appbar from "./AppbarCabecalho"

interface LayoutProps {
    titulo?: string
    subtitulo?: string
    childen?: any
}

export default function Layout(props: LayoutProps) {

    return (
        <>
            <MenuLateral />

            <Appbar />
            


        </>
    )
}