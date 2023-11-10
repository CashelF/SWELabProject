import React from 'react'
import { Container, Button, Typography, Grid, Box, Stack, TextField} from "@mui/material";
import Navbar from '../Components/Navbar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate} from 'react-router-dom';
import create_project_img from '../images/create_project_img.png'
import Footer from '../Components/Footer';
import { Height } from '@mui/icons-material';
import axios from 'axios';
import { useUser } from '../UserContext';



function Create() {
    const [projectId, setProjectId] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectName, setProjectName] = useState('');
    const {username} = useUser();
    const navigate = useNavigate();
    const handleCreateProject = () => {
        console.log(projectDescription)
        console.log(projectName)
        console.log(projectId)
        console.log(username)
        const url = `http://localhost:5000/createProject/${projectId}/${projectName}/${projectDescription}`;
        axios.post(url)
        .then(res => {
            console.log(res.data);
            if (res.data.success === true) {
                console.log("Create Project successful")
                const url = `/projects`
                navigate(url);
            }
        })
    };

    const updateProjectName = (event: any) => {
        setProjectName(event.target.value)
    };
    const updateProjectId = (event: any) => {
        setProjectId(event.target.value)
    };
    const updateProjectDescription = (event: any) => {
        setProjectDescription(event.target.value)
    };


   
  
    return (
        <div style={{ display: 'flex', height: '80vh'}}>
        <Grid container sx={{ padding: '0 0 0 0' ,
                flex: '1', 
        }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ bgcolor: '#E6F0FF', height: '100%', display:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <Stack sx={{paddingLeft: {md: '2rem', sm: '2rem', xs: '2rem'},}}>
                <Box
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%'
                        }}
                            alt="some people"
                            src={create_project_img}
                    />
                </Stack>
            </Box>
          </Grid>
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
                        Create a New Project
                        </Typography>
                        <Typography variant="h5" sx={{
                            color: '#757575',
                            fontSize: {xl: '14px', lg: '14px', md: '12px', sm: '12px', xs: '12px'},
                            fontWeight: '700',
                            paddingTop: '25px'
                        }}>
                            Project Name
                        </Typography>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            variant="filled"
                            label="Enter the Project Name"
                            onChange={updateProjectName}
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: '#ffffff50' }
                            }}
                        />
                        <Typography variant="h5" sx={{
                            color: '#757575',
                            fontSize: {xl: '14px', lg: '14px', md: '12px', sm: '12px', xs: '12px'},
                            fontWeight: '700',
                            paddingTop: '25px'
                        }}>
                            Project Description
                        </Typography>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            variant="filled"
                            onChange={updateProjectDescription}
                            label="Enter the Project Description"
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: '#ffffff50' }
                            }}
                        />
                        <Typography variant="h5" sx={{
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
                            onChange={updateProjectId}
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: '#ffffff50' }
                            }}
                        />
                        <Button variant="contained" onClick={handleCreateProject} sx={{
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
                        }}>Create</Button>
                </Stack>
            </Box>
          </Grid>
          </Grid>
      </div>
    );
  }

function CreateNewProject() {
    return (
        <>
        <Container>
            <Navbar/>
        </Container>
            <Create/>
        </>
       
    );
}
export default CreateNewProject;