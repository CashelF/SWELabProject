import React from 'react'
import {Box, Button, styled, Typography, Stack, Container, TextField} from '@mui/material';
import { useTheme } from "@mui/system";
import { withTheme } from '@emotion/react';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks'
import ReviewSection from '../Components/ReviewSection';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Join() {
    const [projectId, setProjectId] = useState('');
  
    const handleJoinProject = () => {
      console.log(`Joining project with ID: ${projectId}`);
    };
  
    return (
        <Container
        sx={{
          display: 'flex',
          bgcolor: '#E6F0FF',
          width: '50%',
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
                        marginBottom: '20%',
                    }}>
                        Join an Existing Project
                    </Typography>

                    <TextField id="standard-basic" label="Project ID" variant="standard" sx={{
                        input: {color: '#0F1B4C'},
                        label: {color: '#0F1B4C'},
                        '& .MuiInput-underline:before': { borderBottomColor: '#0F1B4C' }}}/>
                    <div>
                        <Link to="/projects">
                            <Button variant="contained" sx={{
                                bgcolor: '#0F1B4C',
                                color: 'white',
                                borderRadius: '12px',
                                marginTop: '32px',
                                fontSize: {xl: '16px', lg: '16px', md: '12px', sm: '12px', xs: '12px'},
                                '&:hover': {
                                    backgroundColor: '#7398F7',
                                    boxShadow: 'none',
                                }
                            }}>Join
                            </Button>
                        </Link>
                    </div>
                </Stack>
      </Container>
    );
  }

function JoinProject() {
    return (
        <Container>
            <Navbar/>
            <Join />
       </Container>
    );
}

export default JoinProject;