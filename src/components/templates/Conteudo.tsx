import { Box } from "@mui/material"

interface ConteudoProps {
    children?: any

}


export default function Conteudo(props: ConteudoProps) {

    return (
        <>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {props.children}
        </Box>
        </>
    )


}