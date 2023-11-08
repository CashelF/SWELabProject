import React, { useState } from 'react';
import { Typography, Button, Container, TextField  } from '@mui/material';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import Project from './Project';
import axios from 'axios';
interface LocationState {
    username: string;
}

function Projects(){

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

    const location = useLocation()
    const state = location.state as LocationState
    return (
        <Container sx={{marginBottom: '4rem'}}>
            <Project name="MyProj 1" projectID="pp1" description="<description>" usedSet1={0} usedSet2={0} capacity={100}/>
            <Project name="MyProj 2" projectID="pp2" description="<description>" usedSet1={0} usedSet2={0} capacity={100}/>
            <Project name="MyProj 3" projectID="pp3" description="<description>" usedSet1={0} usedSet2={0} capacity={100}/>
            <Project name="MyProj 4" projectID="pp4" description="<description>" usedSet1={0} usedSet2={0} capacity={100}/>
        </Container>
    );
};

export default Projects;