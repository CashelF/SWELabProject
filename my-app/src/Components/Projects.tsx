import React, { useState, useEffect } from 'react';
import { Typography, Button, Container, TextField  } from '@mui/material';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import Project from './Project';
import axios from 'axios';

interface newProject {
    id: string;
    name: string;
    hwSets: string
    description: string;
}

function Projects({projects: initialProjects}: {projects: any[]}){
    const [currentProjects, setCurrentProjects] = useState<newProject[]>([]);
    const [projectComponents, setProjectComponents] = useState<JSX.Element[]>([]);
    // useEffect(() => {
    //     setProjects(initialProjects);
    //     console.log(projects)
    // }, [initialProjects]);
    // const handleGetUserProject = () => {
    //     console.log("Login clicked")
    //     console.log(state.username)
    //     let username = state.username
    //     const url = `http://localhost:5000/joinProject/${state.username}/${projectId}`;
    //     axios.post(url)
    //     .then(res => {
    //         console.log(res.data);
    //         if (res.data.success === true) {
    //             console.log("Join su")
    //             const url = `/projects`
    //         }
    //     })
    // }
    useEffect(() => {
        // Function to check if a project already exists in currentProjects
        const projectExists = (newProject: newProject) => {
            return currentProjects.some(project => project.name === newProject.name);
        };

        initialProjects.forEach(newProject => {
            if (!projectExists(newProject)) {
                const projectComponent = createReactObject(newProject)
                setCurrentProjects(prevProjects => [...prevProjects, newProject]);
                setProjectComponents(prevComponents => [...prevComponents, projectComponent]);
            }
        });
    }, [initialProjects]);

    const printProjects = () => {
        console.log(currentProjects)
    }

    const createReactObject = (project: newProject) => {
        console.log(project)
        console.log(project["name"])
        console.log(project.hwSets["1"])
        console.log(project.hwSets["2"])
        let availability1 = 0
        let availability2 = 0
        // hw set1
        const url = `http://localhost:5000/queryAvailability/${project.hwSets["1"]}`
        axios.get(url)
            .then(res => {
                console.log(res.data.availability)
                if (res.data.success == true) {
                    availability1 = res.data.availability
                    console.log(availability1)
                }
            })
            .catch(error => {
                console.error("There was an error!", error)
            });
        //hwset2
        const url2 = `http://localhost:5000/queryAvailability/${project.hwSets["2"]}`
        axios.get(url2)
            .then(res => {
                console.log(res.data)
                if (res.data.success == true) {
                    availability2 = res.data.availability
                    console.log(availability2)
                }
            })
            .catch(error => {
                console.error("There was an error!", error)
           });
            return <Project name={project["name"]} projectID={project["id"]} description={project["description"]} usedSet1={availability1} usedSet2={availability2} capacity={500}/>

    }
   

        // // Function to fetch availability for each project
        // const fetchAvailability = async (hwSet1Id: string) => {
        //     console.log(hwSet1Id)
        //     try {
        //         const response = await axios.post(`http://localhost:5000/queryAvailability/${hwSet1Id}`);
        //         if (response.data.success) {
        //             // Return the availability data and include it in the project object
        //             console.log(response.data)
        //             return response.data.availability;
        //         } else {
        //             // Handle the case where success is not true
        //             return 0;
        //         }
        //     } catch (error) {
        //         console.error(error);
        //         // Handle the error case
        //         return 0;
        //     }
        // };

    

    // const project = props.projects.map((proj: any) => {
    //      console.log(props.projects)
    //      //return <Project name={proj['name']} projectID={proj['id']} description={proj['description']} usedSet1={0} usedSet2={0} capacity={100}/>
    //  });
    

    
    return (
        <Container sx={{marginBottom: '4rem'}}>
            {projectComponents}
        </Container>
    );
};

export default Projects;