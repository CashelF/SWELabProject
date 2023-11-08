import React from 'react'
import {Box, Button, styled, Typography, Container} from '@mui/material';
import { useTheme } from "@mui/system";
import { withTheme } from '@emotion/react';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks'
import ReviewSection from '../Components/ReviewSection';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects'
import axios from 'axios';


const ProjectsPage = () => {
    const getProjects = () => {
        console.log("Getting projects")
        axios.get('http://localhost:5000/projects')
        .then(function (res) {
            console.log(res.data.projects);
            return res.data.projects;
        })
    }
    
    return (
       <Container>
            <Navbar/>
            <Projects projects={getProjects()}/>
       </Container>
    );
};

export default ProjectsPage;