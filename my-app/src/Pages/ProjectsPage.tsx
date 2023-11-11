import React, {useState, useEffect} from 'react'
import {Box, Button, styled, Typography, Container} from '@mui/material';
import { useTheme } from "@mui/system";
import { withTheme } from '@emotion/react';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks'
import ReviewSection from '../Components/ReviewSection';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../UserContext';

export const useProjectsState = () => {
    const [projects, setProjects] = useState([]);
    return { projects, setProjects };
  };


const ProjectsPage = () => {

    const {username} = useUser();
    let [projects, setProjects] = useState([]);
    //const { projects, setProjects } = useProjectsState();
    //let projects = [];


    // useEffect(() => {
    //     const getProjects = async () => {
    //         console.log(username);
    //         const url = `http://localhost:5000/userProjects/${username}`;
    //         const res = await axios.get(url)
    //         .then(function (res) {
    //             console.log(res.data.projects);
    //             setProjects(Array.isArray(res.data.projects) ? res.data.projects : []);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             setProjects([])
    //         });
    //     };

    //     if (username) {
    //         getProjects();
    //     }
    // }, [username, projects]);

    // const getProjects = () => {
        
    //     console.log(username)
    //     const url = `http://localhost:5000/userProjects/${username}`;
    //     axios.get(url)
    //     .then(function (res) {
    //         console.log(res.data.projects);
    //         setProjects = res.data.projects;
    //     })
    //     .catch(function (error) {
    //         // Handle error here
    //         console.error('Error fetching projects:', error);
    //     });
    // }

    useEffect(() => {
    const getProjects = () => {
            console.log(username);
            const url = `http://localhost:5000/userProjects/${username}`;
            axios.get(url)
                .then(function (res) {
                    console.log(res.data.projects);
                    setProjects(res.data.projects); // Update state with fetched data
                })
                .catch(function (error) {
                    console.error('Error fetching projects:', error);
                });
               
        }
        getProjects();
    }, [username]);
    

   

//Projects projects={projects}/> 
    
    return (
       <Container>
            <Navbar/>
            <Projects projects={projects}/>
       </Container>
    );
};

export default ProjectsPage;