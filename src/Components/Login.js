import React, {useState} from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/auth';

const Login = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const matches = useMediaQuery("(max-width:600px)");
    const dispatch = useDispatch();
    const loginToHome = () => {
        dispatch(login({ email, password }, history)).then(() => {
            //setLoading(false);
        })
        //history.push('/management')
    }
    return(
        <div style={{width:'100vw', height:'100vh'}}>
            <Box sx={container} fixed>
                    <Box sx={matches?login2:loginStyle}>
                        <Typography sx={{marginBottom:'20px'}} variant="h6" gutterBottom component="div">
                            Sign in
                        </Typography>
                        <Stack sx={{width:'90%'}} direction="column" spacing={5}>
                            <TextField
                                className="outlined-number"
                                label="Email"
                                type="text"
                                size="small"
                                sx={inputs}
                                onChange={(text) => setEmail(text.target.value)}
                            />
                            <TextField
                                className="outlined-number"
                                label="Password"
                                type="password"
                                size="small"
                                sx={inputs}
                                onChange={(text) => setPassword(text.target.value)}
                            />
                            <button style={button} onClick={loginToHome}>Sign in</button>
                            <Stack sx={{width:'100%', display:'flex', justifyContent:'space-between'}} direction="row">
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                        history.push('/account');
                                    }}
                                    >
                                    Do you have an account?
                                </Link>
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                        history.push('/forgot-password');
                                    }}
                                    >
                                    Forgot Password?
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
        </div>
    )
}

const container = { 
    width:'100%',
    background: 'linear-gradient(#07a3b2, #d9ecc7)', 
    height: '100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}

const loginStyle = {
    width:'500px', 
    height:'60vh', 
    bgcolor:'#fff',
    padding:'10px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'10px'
}

const login2 = {
    width:'90%', 
    height:'60vh', 
    bgcolor:'#fff',
    padding:'10px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'10px'
}

const inputs = {
    height:'30px',
    fontSize:'10px'
}

const button = {
    width:'100%',
    height:'35px',
    color:'#fff',
    backgroundColor:'#07a3b2'
}

export default Login;