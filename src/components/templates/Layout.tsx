
interface LayoutProps {
    titulo: string
    subtitulo: string
    childen?: any
}

export default function Layout(props: LayoutProps) {

    return (
        <div>
            <h1>Layout</h1>
        </div>
    )
}