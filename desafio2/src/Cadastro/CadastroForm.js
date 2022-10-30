import React, { useEffect, useState } from 'react'
import { Alert, ButtonHome, FontButton, Form, PositionButton } from './styled'
import TextField from "@material-ui/core/TextField"
import { InputLabel, MenuItem,  Select } from '@material-ui/core'
import axios from "axios"
import { URL_COUTRY, URL_CTY } from '../URL/Url'
import UseForm  from '../hooks/useForm'
import Swal from 'sweetalert2'

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
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Aplicação realizada com sucesso!'
          })
        clear()
}

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

                            >{city && city.map((p) => {
                                if(p.country_code === form.country){
                                    return <MenuItem  value={p.id} >{p.name_ptbr}</MenuItem>
                                }
                                })}
                        </Select>
                        <br />
                        <PositionButton>
                            <ButtonHome variant='contained' color='primary' type='submit'><FontButton>Enviar</FontButton></ButtonHome>
                        </PositionButton>
                    </Form>
  )
}

export default CadastroForm