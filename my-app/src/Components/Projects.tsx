import React, { useState } from 'react';
import { Typography, Button, Container, TextField  } from '@mui/material';
import Project from './Project';
function Projects(){
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