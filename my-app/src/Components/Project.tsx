import React from 'react';
import { Typography, Button, Container, TextField, Stack } from '@mui/material';
import HardwareSet from './HardwareSet';

interface ProjectProps {
  name: string;
  projectID: string;
  description: string;
  usedSet1: number;
  usedSet2: number;
  capacity: number;
}

const Project: React.FC<ProjectProps> = (props) => {
  return (
    <Container
      sx={{
        display: 'flex',
        bgcolor: '#E6F0FF',
        "&:hover": {bgcolor: "#cce0ff", boxShadow: '8px 8px'},
        width: '90%',
        alignItems: 'center',
        marginTop: '1rem',
        padding: '10px',
        flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'}
      }}
    >
      <Stack>
        <Typography 
          sx={{
            color: '#000228',
            fontWeight: '800',
            fontSize: '30px',
            marginBottom: '10px'}} 
            variant="h4">
         {props.name}
        </Typography>
        <Typography>
          ID: {props.projectID}
        </Typography>
        <Typography>
          Description: {props.description}
        </Typography>
      </Stack>
      <HardwareSet usedSet1={props.usedSet1} usedSet2={props.usedSet2} capacity={props.capacity} />
    </Container>
  );
};

export default Project;
