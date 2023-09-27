import { Height } from "@mui/icons-material";
import { Container, Button, Typography, Grid, Box, Stack, TextField} from "@mui/material";
import login_image from '../images/login_image.png'



function LoginPage() {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Grid container sx={{ padding: '0 0 0 0' }} style={{ flex: '1' }}>
          <Grid item lg={5} md={5}>
            <Box sx={{ bgcolor: '#1C1D21', height: '100%'}}>
                <Stack direction='column' sx={{
                    paddingLeft: '10rem',
                    width: '60%',
                    height: '100%',
                    justifyContent: 'center',
                }}>
                    <Typography variant="h1" sx={{
                        color: 'white',
                        fontSize: '48px',
                        fontWeight: '800'
                    }}>
                        Login
                    </Typography>
                    <Typography variant="h5" sx={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '400',
                        paddingTop: '24px'
                    }}>
                        Enter your account details
                    </Typography>
                    <Stack sx={{
                        paddingTop: '24px'
                    }}>
                        <TextField id="standard-basic" label="Username" variant="standard" />
                        <TextField id="standard-basic" label="Password" variant="standard" />
                    </Stack>
                    <Typography sx={{
                        color: '#ffffff50',
                        fontSize: '16px',
                        fontWeight: '400',
                        paddingTop: '16px'
                    }}>Forgot Password?
                    </Typography>
                    <Button variant="contained" sx={{
                        bgcolor: '#9C6FE4',
                        color: 'white',
                        borderRadius: '12px',
                        marginTop: '32px',
                    }}>Login</Button>
                    <Stack direction='row' justifyContent='space-between' marginTop='20px'>
                        <Typography variant="h5" sx={{
                            color: '#ffffff50',
                            fontSize: '16px',
                            fontWeight: '400'
                        }}>
                            Don't have an account?
                        </Typography>
                        <Button variant="contained" sx={{
                            bgcolor: '#333437',
                            color: 'white',
                            borderRadius: '8px',
                        }}>Sign Up</Button>
                    </Stack>
                </Stack>
            </Box>
          </Grid>
          <Grid item lg={7} md={7}>
            <Box sx={{ bgcolor: '#925FE2', height: '100%', display:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
              <Stack>
                <Stack>
                    <Typography sx={{
                        color: '#EEEEEE',
                        fontSize: '80px',
                        fontWeight: 800,
                        lineHeight: '80px'
                    }}>
                        Welcome to
                    </Typography>
                    <Typography sx={{
                        color: '#EEEEEE',
                        fontSize: '80px',
                        fontWeight: 500,
                        lineHeight: '80px'
                    }}> 
                        tools portal
                    </Typography>
                    <Typography sx={{
                        color: '#EEEEEE',
                        fontSize: '16px',
                        fontWeight: 500,
                        paddingTop: '10px'
                    }}>
                        Login to access your account
                    </Typography>
                </Stack>
                <Box
                        component="img"
                        sx={{
                            height: 650,
                            width: 600,
                            maxHeight: { xs: 233, md: 650},
                            maxWidth: { xs: 350, md: 575 },
                        }}
                            alt="some people"
                            src={login_image}
                    />
              </Stack>
            </Box>
          </Grid>
          
        </Grid>
      </div>
    );
  }
export default LoginPage;
