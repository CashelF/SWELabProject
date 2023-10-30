import React from 'react'
import { Container, Button, Typography, Grid, Box, Stack, TextField} from "@mui/material";
import Navbar from '../Components/Navbar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Create() {
    const [projectId, setProjectId] = useState('');
  
    const handleJoinProject = () => {
      console.log(`Joining project with ID: ${projectId}`);
    };
  
    return (
        <Container
        sx={{
          display: 'flex',
          bgcolor: '#E6F0FF',
          width: '100%',
          height: '80%',
          justifyContent: 'center',
          padding: '10%',
        }}
      >
        <Stack direction='column'  sx={{
                    width: '80%',
                    height: '80%',
                    justifyContent: 'center',
                }}>
                    <Typography variant="h1" sx={{
                        color: '#0F1B4C',
                        fontSize:  {xl: '48px', lg: '48px', md: '32px', sm: '32px', xs: '32px'},
                        fontWeight: '800',
                        marginBottom: '10%',
                    }}>
                        Create a New Project
                    </Typography>

                    <TextField id="standard-basic" label="Project Name" variant="standard" sx={{
                        input: {color: '#0F1B4C'},
                        label: {color: '#0F1B4C'},
                        marginBottom: '3%',
                        '& .MuiInput-underline:before': { borderBottomColor: '#0F1B4C' }}}/>
                    <TextField id="standard-basic" label="Project Description" variant="standard" sx={{
                    input: {color: '#0F1B4C'},
                    label: {color: '#0F1B4C'},
                    marginBottom: '3%',
                    '& .MuiInput-underline:before': { borderBottomColor: '#0F1B4C' }}}/>
                    <TextField id="standard-basic" label="Project ID" variant="standard" sx={{
                    input: {color: '#0F1B4C'},
                    label: {color: '#0F1B4C'},
                    marginBottom: '3%',
                    '& .MuiInput-underline:before': { borderBottomColor: '#0F1B4C' }}}/>
                    <Stack>
                        <Link to="/projects">
                        <Button variant="contained" sx={{
                            bgcolor: '#0F1B4C',
                            color: 'white',
                            borderRadius: '12px',
                            marginTop: '32px',
                            fontSize: {xl: '16px', lg: '16px', md: '12px', sm: '12px', xs: '12px'},
                            '&:hover': {
                                backgroundColor: '#333437',
                                boxShadow: 'none',
                            }
                        }}>Create
                        </Button>
                        </Link>
                    </Stack>
                </Stack>
      </Container>
    );
  }

function CreateNewProject() {
    return (
        <Container>
            <Navbar/>
            <Create/>
       </Container>
    );
}
export default CreateNewProject;