import Typography from "@mui/material/Typography";
interface TitulobashProps {
    titulo: string;
    subtitulo: string;
    children?: React.ReactNode;
}


export default function Titulobash(props: TitulobashProps) {

    return (
        <>
            <Typography component="h1" variant="h1" color="primary" gutterBottom>
                {props.titulo}
            </Typography>
            <Typography component="h1" variant="h2" color="primary" gutterBottom>
                {props.subtitulo}
            </Typography>
        </>
    )
}