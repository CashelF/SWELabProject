import React, { useState } from 'react';
import { Typography, Button, Container, TextField  } from '@mui/material';
import Project from './Project';


function Projects(props: any){
    const project = props.projects.map((proj: any) => {
        console.log(props.projects)
        return <Project name={proj['name']} projectID={proj['id']} description={proj['description']} usedSet1={0} usedSet2={0} capacity={100}/>
    });
    
    return (
        <Container sx={{marginBottom: '4rem'}}>
            {project}
        </Container>
    );
};

export default Projects;