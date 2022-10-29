import styled from "styled-components"
import { Button } from "@material-ui/core"

export const Main = styled.div`
padding: 10px;
width: 100%;
height: 100vh;
display: flex; 
background-color: #43CD80;
flex-direction: column;
align-items: center;
`

export const Header = styled.header`
background-color: #06D6A0;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
margin: auto;
`

export const Titulo = styled.h1`
font-family: 'Bebas Neue', cursive;
display: flex; 
align-items: center;
`
export const PaperStyles = {
    padding: 40,
    width: 286,
    margin:"30px auto",
}


export const PositionButton = styled.div`
margin: auto;
`

export const ButtonHome = styled(Button)`
background-color:#8B0000;
color: white;
width: 200px;
`
export const FontButton = styled.div`
font-family: 'Bebas Neue', cursive;
`