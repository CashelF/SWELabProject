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
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const ProjectsPage = () => {
    const { username } = useUser();
    const [projects, setProjects] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState('');
  
    useEffect(() => {
                const getProjects = async () => {
                    console.log(username);
                    const url = `http://localhost:5000/userProjects/${username}`;
                    const res = await axios.get(url)
                    .then(function (res) {
                        console.log(res.data.projects);
                        setProjects(Array.isArray(res.data.projects) ? res.data.projects : []);
                    })
                    .catch(function (error) {
                        console.log(error);
                        setProjects([])
                    });
                };        
                    getProjects();
                    console.log(projects)
            }, [username]);
  
    const handleSelectChange = (event: any) => {
      setSelectedProjectId(event.target.value);
    };
  
    return (
      <Container>
        <Navbar/>
        {/* <FormControl fullWidth>
          <InputLabel id="project-select-label">Project</InputLabel>
          <Select
            labelId="project-select-label"
            id="project-select"
            value={selectedProjectId}
            label="Project"
            onChange={handleSelectChange}
          >
            {projects.map((project) => (
              <MenuItem key={project.id} value={project.id}>
                {project.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
        {/* <Projects projects={projects.filter(p => p.id === selectedProjectId)} /> */}
      </Container>
    );
  };
  
  export default ProjectsPage;
  

// const ProjectsPage = () => {

//     const {username} = useUser();
//     let [projects, setProjects] = useState([]);
//     //let projects = [];


//     useEffect(() => {
//         const getProjects = async () => {
//             console.log(username);
//             const url = `http://localhost:5000/userProjects/${username}`;
//             const res = await axios.get(url)
//             .then(function (res) {
//                 console.log(res.data.projects);
//                 setProjects(Array.isArray(res.data.projects) ? res.data.projects : []);
//             })
//             .catch(function (error) {
//                 console.log(error);
//                 setProjects([])
//             });
//         };        
//             getProjects();
//     }, [username]);

//     // const getProjects = () => {
        
//     //     console.log(username)
//     //     const url = `http://localhost:5000/userProjects/${username}`;
//     //     axios.get(url)
//     //     .then(function (res) {
//     //         console.log(res.data.projects);
//     //         setProjects = res.data.projects;
//     //     })
//     //     .catch(function (error) {
//     //         // Handle error here
//     //         console.error('Error fetching projects:', error);
//     //     });
//     // }

//     // useEffect(() => {
//     //     const getProjects = async () => {
//     //         console.log(username);
//     //         const url = `http://localhost:5000/userProjects/${username}`;
    
//     //         try {
//     //             const response1 = await axios.get(url);
//     //             if (response1.data.success) {
//     //                 console.log(response1.data)
//     //                 setProjects(response1.data.projects);
//     //             }
//     //         } catch (error) {
//     //             console.error('Error fetching projects:', error);
//     //         }
//     //     };
    
//     //     getProjects();
//     // });
    
    

   

// //Projects projects={projects}/> 
    
//     return (
//        <Container>
//             <Navbar/>
//             <Projects projects={projects}/>
//        </Container>
//     );
// };

// export default ProjectsPage;