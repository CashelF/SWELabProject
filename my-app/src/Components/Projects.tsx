import React, { useState, useEffect } from 'react';
import { Typography, Button, Container, TextField  } from '@mui/material';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import Project from './Project';
import axios from 'axios';

function Projects({projects}: {projects: any[]}){

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

    const printProjects = () => {
        console.log(projects)
    };

        // Function to fetch availability for each project
        const fetchAvailability = async (hwSet1Id: string) => {
            console.log(hwSet1Id)
            try {
                const response = await axios.post(`http://localhost:5000/queryAvailability/${hwSet1Id}`);
                if (response.data.success) {
                    // Return the availability data and include it in the project object
                    console.log(response.data)
                    return response.data.availability;
                } else {
                    // Handle the case where success is not true
                    return 0;
                }
            } catch (error) {
                console.error(error);
                // Handle the error case
                return 0;
            }
        };

    const projectItems = projects.map((proj: any, index: number) => {
        let hwSet1Id = proj.hwSets[1]
        let hwSet2Id = proj.hwSets[2]
        console.log(hwSet1Id)
        let availability2 = 0
        let capacity = 0
        let availability1 = fetchAvailability(hwSet1Id)
        console.log(availability1)
        //hardwareset1 availability call
        // const url = `http://localhost:5000/queryAvailability/${hwSet1Id}`;
        // axios.post(url)
        // .then(res => {
        //     console.log(res.data);
        //     if (res.data.success === true) {
        //         availability1 = res.data
        //         console.log("Join su")
        //         const url = `/projects`
        //     }
        // })
        // hardwareset2 availability call
        // const url2 = `http://localhost:5000/queryAvailability/${hwSet2Id}`;
        // axios.post(url)
        // .then(res => {
        //     console.log(res.data);
        //     if (res.data.success === true) {
        //         console.log("Join su")
        //         const url = `/projects`
        //     }
        // })
        return <Project name={proj.name} projectID={proj.id} description={proj.description} usedSet1={0} usedSet2={0} capacity={100} />
        // Replace with your actual project component or rendering logic
    });

    // const project = props.projects.map((proj: any) => {
    //      console.log(props.projects)
    //      //return <Project name={proj['name']} projectID={proj['id']} description={proj['description']} usedSet1={0} usedSet2={0} capacity={100}/>
    //  });
    

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

    return (
        <Container sx={{marginBottom: '4rem'}}>
            <Button onClick={printProjects}>
                PAAAAAAAAIIIIIN
            </Button>
            {projectItems}
        </Container>
    );
};

export default Projects;