import React, { useEffect, useState } from 'react'
import { ButtonHome, FontButton, Form, PositionButton } from './styled'
import TextField from "@material-ui/core/TextField"
import { InputLabel, MenuItem,  Select } from '@material-ui/core'
import axios from "axios"
import { URL_COUTRY, URL_CTY } from './apis'
import UseForm from './hooks/useForm'
import Alert from './Alert'
const CadastroForm = () => {
    const [form, onChange, clear] = UseForm({nome:"", email:"", telefone:"", cpf:"", country:"", city:null})
    const [country, setCountry] = useState([])
    const [city, setCity] = useState([])

    const countryChoice = () => {
        axios.get(URL_COUTRY)
            .then((res) => {
                setCountry(res.data)
                clear()
            })

            .catch((err) => {
                console.log(err)
                clear()
            })
    }

   const cityChoice = () => {
        axios.get(URL_CTY)
            .then((res) => {
                console.log(res.data)
                setCity(res.data)
                clear()
            })

            .catch((err) => {
                console.log(err)
                clear()
            })
    }

    const cpfMask = (index) => {
        return index
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1")
    }

    const onSubmitForm = (event) => {
        event.preventDefault()    
        alert("Aplicação realizada com sucesso!")
        clear()
}
console.log(form)
console.log(form.country)
// const filter = city.filter((p) =>{
//     return p.country_code == form.country
// })
// console.log(filter)
    useEffect(() => {
        countryChoice()
        cityChoice()
    }, [])
  return (
                 <Form onSubmit={onSubmitForm}>
                        <TextField
                            label="Nome"
                            name={"nome"}
                            value={form.nome}
                            onChange={onChange}
                            type={"text"}
                            fullWidth
                            margin='normal'
                            required
                            variant="standard"
                            color='default'
                        />
                        <TextField
                            label="Email"
                            name={"email"}
                            type={"email"}
                            value={form.email}
                            onChange={onChange}
                            fullWidth
                            margin='normal'
                            required
                            variant="standard"
                            color='default'
                        />
                        <TextField
                             label="Telefone"
                             name={"telefone"}
                             type={"text"}
                             value={form.telefone}
                             onChange={onChange}
                             fullWidth
                             margin='normal'
                             required
                             variant="standard"
                             color='default'
                        />
                        <TextField
                             label="CPF"
                             name={"cpf"}
                             type={"text"}
                             value={cpfMask(form.cpf)}
                             onChange={onChange}
                             fullWidth
                             margin='normal'
                             required
                             variant="standard"
                             color='default'
                        />
                        <br />
                        <InputLabel key={country.id}>País</InputLabel>
                        <Select
                            variant='standard'
                            name={"country"}
                            onChange={onChange}
                            required
                            >
                            {country.map((countries) => {
                                return <MenuItem value={countries.code}>{countries.name_ptbr}</MenuItem>
                            })}
                        </Select>
                        <br />
                        <InputLabel key={city.id}>Cidade</InputLabel>
                        <Select variant='standard'
                            name={"city"}
                            onChange={onChange}
                            required

                            >{city.map((p) => {
                                if(p.country_code === form.country){
                                    return <MenuItem  value={p.id} >{p.name_ptbr}</MenuItem>
                                }   
                                })}
                        </Select>
                        <br />
                        <PositionButton>
                            <ButtonHome variant='contained' color='inherit' type='submit'><FontButton>Enviar</FontButton></ButtonHome>
                        </PositionButton>
                    </Form>
  )
}

export default CadastroForm