import React from 'react'
import { Main, PaperStyles, Titulo } from './styled'
import { Grid, Paper } from '@material-ui/core'
import CadastroForm from './CadastroForm'

 const Cadastro = () => {
 

    return (
        <Main>
            <Grid>
                <Paper elevation={14} style={PaperStyles}>
                    <Titulo>Aplicar para Destino</Titulo>
                        <CadastroForm></CadastroForm>
                </Paper>
            </Grid>
        </Main>
    )
}

export default Cadastro 