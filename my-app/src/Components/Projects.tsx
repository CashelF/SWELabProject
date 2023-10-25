import React, { useState } from 'react';
import { Typography, Button, Container, TextField  } from '@mui/material';
import Project from './Project';
function Projects(){
    return (
        <Container>
            <Project name="1" users="David" usedSet1={50} usedSet2={0} capacity={100}/>
            <Project name="2" users="John" usedSet1={50} usedSet2={0} capacity={100}/>
            <Project name="3" users="Kyle" usedSet1={0} usedSet2={0} capacity={100}/>
        </Container>
    );
};

export default Projects;