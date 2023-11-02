import { Height } from "@mui/icons-material";
import { Container, Button, Typography, Grid, Box, Stack, TextField} from "@mui/material";
import login_image from '../images/login_image.png'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };

    return (
        <div style={{ display: 'flex', height: '100vh'}}>
        <Grid container sx={{ padding: '0 0 0 0' ,
                flex: '1', 
        }}>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box sx={{ bgcolor: '#925FE2', height: '100%', display:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
              <Stack>
                <Stack sx={{
                    paddingLeft: {md: '2rem', sm: '2rem', xs: '2rem'},
                }}>
                    <Typography sx={{
                        color: '#EEEEEE',
                        fontSize: {xl: '80px', lg: '80px', md: '50px', sm: '50px', xs: '50px'},
                        fontWeight: 800,
                        lineHeight: {xl: '80px', lg: '80px', md: '50px', sm: '50px', xs: '50px'},
                    }}>
                        Welcome to
                    </Typography>
                    <Typography sx={{
                        color: '#EEEEEE',
                        fontSize: {xl: '80px', lg: '80px', md: '50px', sm: '50px', xs: '50px'},
                        fontWeight: 500,
                        lineHeight: {xl: '80px', lg: '80px', md: '50px', sm: '50px', xs: '50px'},
                    }}> 
                        tools portal
                    </Typography>
                    <Typography sx={{
                        color: '#EEEEEE',
                        fontSize: {xl: '16px', lg: '16px', md: '12px', sm: '12px', xs: '12px'},
                        fontWeight: 500,
                        paddingTop: '10px'
                    }}>
                        Login to access your account
                    </Typography>
                </Stack>
                <Box
                        component="img"
                        sx={{
                            height: {xl: 650, lg: 650, md: 450},
                            width: {xl: 600, lg: 600, md: 400},
                            maxHeight: { xs: 233, md: 650},
                            maxWidth: { xs: 350, md: 575 },
                        }}
                            alt="some people"
                            src={login_image}
                    />
              </Stack>
            </Box>
          </Grid>
            
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box sx={{ bgcolor: '#1C1D21', height: '100%'}}>
                <Stack direction='column'  sx={{
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    width: '60%',
                    height: '100%',
                    justifyContent: 'center',
                }}>
                    <Typography variant="h1" sx={{
                        color: 'white',
                        fontSize:  {xl: '48px', lg: '48px', md: '32px', sm: '32px', xs: '32px'},
                        fontWeight: '800',
                    }}>
                        Login
                    </Typography>
                    <Typography variant="h5" sx={{
                        color: 'white',
                        fontSize: {xl: '16px', lg: '16px', md: '12px', sm: '12px', xs: '12px'},
                        fontWeight: '400',
                        paddingTop: '24px'
                    }}>
                        Enter your account details
                    </Typography>
                    <Stack sx={{
                        paddingTop: '24px'
                    }}>
                        <TextField id="standard-basic" label="Username" variant="standard" sx={{
                        input: {color: '#ffffff50'},
                        label: {color: '#ffffff50'},
                        '& .MuiInput-underline:before': { borderBottomColor: '#ffffff50' }}}/>
                         <FormControl variant="standard" 
                            sx={{input: {color: '#ffffff50'},
                                label: {color: '#ffffff50'},
                                '& .MuiInput-underline:before': { borderBottomColor: '#ffffff50' }}}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        sx={{
                                            color: '#ffffff50'
                                        }}
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </Stack>
                    <Typography sx={{
                        color: '#ffffff50',
                        fontSize: {xl: '16px', lg: '16px', md: '12px', sm: '12px', xs: '12px'},
                        fontWeight: '400',
                        paddingTop: '16px'
                    }}>Forgot Password?
                    </Typography>
                    <Link to="/homepage">
                        <Button variant="contained" sx={{
                            bgcolor: '#9C6FE4',
                            color: 'white',
                            width: '100%',
                            borderRadius: '12px',
                            marginTop: '32px',
                            fontSize: {xl: '16px', lg: '16px', md: '12px', sm: '12px', xs: '12px'},
                            '&:hover': {
                                backgroundColor: '#333437',
                                boxShadow: 'none',
                            }
                        }}>Login</Button>
                    </Link>
                    <Stack direction='row' justifyContent='space-between' marginTop='20px'>
                        <Typography variant="h5" sx={{
                            color: '#ffffff50',
                            fontSize: {xl: '16px', lg: '16px', md: '12px', sm: '12px', xs: '12px'},
                            fontWeight: '400'
                        }}>
                            Don't have an account?
                        </Typography>
                    <Link to="/signup">
                        <Button variant="contained" sx={{
                            bgcolor: '#333437',
                            color: 'white',
                            fontSize: {xl: '16px', lg: '16px', md: '12px', sm: '12px', xs: '12px'},
                            borderRadius: '8px',
                            '&:hover': {
                                backgroundColor: '#925FE2',
                                boxShadow: 'none',
                            }
                        }}>Sign Up</Button>
                    </Link>
                    </Stack>
                </Stack>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
export default LoginPage;
