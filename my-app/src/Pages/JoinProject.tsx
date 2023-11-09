import React from 'react'
import { Container, Button, Typography, Grid, Box, Stack, TextField} from "@mui/material";
import { useTheme } from "@mui/system";
import { withTheme } from '@emotion/react';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks'
import ReviewSection from '../Components/ReviewSection';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import LoginPage from './LoginPage';
import { useUser } from '../UserContext';
import join_project_img from '../images/join_project_img.png'


function Join() {
    const [projectId, setProjectId] = useState('');
    const {username} = useUser();
    const handleChangeProjectId = (event: any) => {
        setProjectId(event.target.value)
    }
    const navigate = useNavigate();
    const handleJoinProject = () => {
        console.log("Login clicked")
        console.log(username)
        console.log(projectId)
        const url = `http://localhost:5000/joinProject/${username}/${projectId}`;
        axios.post(url)
        .then(res => {
            console.log(res.data);
            if (res.data.success === true) {
                console.log("Join successful")
                const url = `/projects`
                navigate(url);
            }
        })
    }


  
    return (
        <div style={{ display: 'flex', height: '80vh'}}>
        <Grid container sx={{ padding: '0 0 0 0' ,
                flex: '1', 
        }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{height: '100%',
            }}>
                <Stack direction='column'  sx={{
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    width: '60%',
                    height: '100%',
                    justifyContent: 'center',
                }}>
                   <Typography variant="h5" sx={{
                        color: '#757575',
                        fontSize: {xl: '16px', lg: '16px', md: '12px', sm: '12px', xs: '12px'},
                        fontWeight: '400',
                        paddingTop: '24px'
                    }}>
                        Welcome!
                    </Typography>
                    <Typography variant="h1" sx={{
                        color: '#333333',
                        fontSize:  {xl: '48px', lg: '48px', md: '32px', sm: '32px', xs: '32px'},
                        fontWeight: '800',
                    }}>
                        Join an Existing Project
                    </Typography>
                    <Typography variant="h5" onChange={handleChangeProjectId} sx={{
                            color: '#757575',
                            fontSize: {xl: '14px', lg: '14px', md: '12px', sm: '12px', xs: '12px'},
                            fontWeight: '700',
                            paddingTop: '25px'
                        }}>
                            Project ID
                        </Typography>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            variant="filled"
                            label="Enter the Project ID"
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: '#ffffff50' }
                            }}
                        />
                            <Button variant="contained" onClick={handleJoinProject} sx={{
                                bgcolor: '#0F1B4C',
                                color: 'white',
                                marginTop: '25px',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                                fontSize: {xl: '16px', lg: '16px', md: '12px', sm: '12px', xs: '12px'},
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: '#7398F7',
                                    boxShadow: 'none',
                                }
                            }}>Join
                            </Button>
                    </Stack>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ bgcolor: '#E6F0FF', height: '100%', display:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <Stack>
                <Box
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%'
                        }}
                            alt="some people"
                            src={join_project_img}
                    />
                </Stack>
            </Box>
          </Grid>
          </Grid>
      </div>
    );
  }
//<Link to="/projects">
function JoinProject() {
    return (
        <>
        <Container>
            <Navbar/>
        </Container>
            <Join />
       </>
    );
}

export default JoinProject;