import { useState } from "react"

const UseForm = (initialState) =>{
    const [form, setForm] = useState(initialState)

   const handleIputChange = (event) =>{
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

   const clear = () =>{
        setForm(initialState)
    }

    return [form, handleIputChange, clear]
}

export default UseForm