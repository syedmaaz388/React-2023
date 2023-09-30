import { TextField,Box,Button,Typography,Slider,Checkbox  } from '@mui/material';
import './App.css';
import { useState,useCallback, useEffect } from 'react';


function App() {

  // useRef hook

  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed,setCharAlllowed] = useState(false);
  const [password,setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx"
if(numberAllowed) str += "0123456789"
if(charAllowed) str += "!@#$%^&*+=[]{}~`"
for(let i = 1; i < length;i++){
  let char = Math.floor(Math.random() * str.length + 1)
  pass += str.charAt(char)
}
setPassword(pass)
  }, [length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard = useCallback(() => {
   window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
PasswordGenerator()
},[length,numberAllowed,charAllowed,PasswordGenerator])

  return (
    <div className="App">
    <Box className="box" >
    <Typography gutterBottom variant='h5' >Password Generator</Typography>

    <TextField
    value={password}
    sx={{width:"100%"}}
    variant="outlined" 
    placeholder='Password'
     ></TextField>
    <Button onClick={copyPasswordToClipboard}  variant='outlined'>Copy Password</Button>
   <Typography variant='h6'>
Length: {length}
   </Typography>
    <Slider sx={{cursor:"Pointer"}}
        aria-labelledby="range-slider"
        valueLabelDisplay="auto" // Display labels for the selected value
        min={8}
        max={100} 
        value={length}
        onChange={(e) => {setLength(e.target.value)}}
      />
      <Box className="downButton" >
      <Typography variant='h6'>Number: </Typography>
      <Checkbox  onChange={() => {setNumberAllowed((prev) => !prev)}} defaultChecked={numberAllowed} />
      
      <Typography variant='h6'>Character: </Typography>
      <Checkbox  onChange={() => {setCharAlllowed((prev) => !prev)}} defaultChecked={charAllowed} />

      </Box>
    </Box>
   
    
   
   
    
  </div>
  );
}

export default App;
