import React, { useState } from 'react';
import { Typography, Button, Container, TextField  } from '@mui/material';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import Project from './Project';
import axios from 'axios';


function Projects(props: any){

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


    // const project = props.projects.map((proj: any) => {
    //     console.log(props.projects)
    //     return <Project name={proj['name']} projectID={proj['id']} description={proj['description']} usedSet1={0} usedSet2={0} capacity={100}/>
    // });
    

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
            <h1>CRY</h1>
        </Container>
    );
};

export default Projects;