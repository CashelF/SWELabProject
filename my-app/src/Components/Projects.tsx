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

//function Projects({projects: initialProjects}: {projects: any[]}){
    function Projects({projects} : {projects: any[]}){
    const [currentProjects, setCurrentProjects] = useState<newProject[]>([]);
    const [projectComponents, setProjectComponents] = useState<JSX.Element[]>([]);
    
    useEffect(() => {
        const createAllProjectComponents = async () => {
            const components = await Promise.all(projects.map(project => createReactObject(project)));
            setProjectComponents(components);
        };

        createAllProjectComponents();
    }, [projects]);   

    
    const createReactObject = async (project: newProject) => {
        let availability1 = 0;
        let availability2 = 0;
        console.log(project.hwSets["1"])
        try {
            // hw set1
            const url1 = `http://localhost:5000/queryAvailability/${project.hwSets["1"]}`;
            const response1 = await axios.get(url1);
            console.log("Response 1", response1.data)
            if (response1.data.success) {
                console.log("The response is " + response1.data.availability)
                availability1 = response1.data.availability;
            }
    
            // hw set2
            const url2 = `http://localhost:5000/queryAvailability/${project.hwSets["2"]}`;
            const response2 = await axios.get(url2);
            if (response2.data.success) {
                console.log("The response is " + response2.data.availability)
                availability2 = response2.data.availability;
            }
        } catch (error) {
            console.error("There was an error!", error);
        }
        console.log("Availability 1 ", availability1)
        console.log("Availability 2 ", availability2)
        return (
            <Project
                key={project["id"]}
                hwSet1Id={project.hwSets["1"]}
                hwSet2Id={project.hwSets["2"]}
                name={project["name"]}
                projectID={project["id"]}
                description={project["description"]}
                usedSet1={availability1}
                usedSet2={availability2}
                capacity={500}
            />
        );
    };
    
    return (
        <Container sx={{marginBottom: '4rem'}}>
            {projectComponents}
        </Container>
    );
};

export default Projects;