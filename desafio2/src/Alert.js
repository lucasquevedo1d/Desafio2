// import { useState } from "react";
// import { Box, Alert, IconButton, Collapse, Button } from "@mui/material"
// import { Close } from "@mui/"

// const Alert = () =>{
//     const [open, setOpen] = useState(false)

//     return(
//         <Box sx={ {width:"100%"}} >
//             <Collapse in={open}>
//                 <Alert 
//                 style={{backgroundColor: '#00BFFF'}}
//                 action={
//                     <IconButton
//                     aria-label="close"
//                     color="inherit"
//                     size="small"
//                     onClick={() => {
//                         setOpen(false)
//                     }}
//                     >
//                         <Close fontSize="inherit"/>
//                     </IconButton>
//                     // sx={{mb: 2}}
//                 }
//                 >
//                     Cadastro realizado com sucesso!
//                 </Alert>
//             </Collapse>
            
//         </Box>
//     )
// }

// export default Alert