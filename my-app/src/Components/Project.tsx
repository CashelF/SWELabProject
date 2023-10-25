import React from 'react';
import { Typography, Button, Container, TextField } from '@mui/material';
import HardwareSet from './HardwareSet';

interface ProjectProps {
  name: string;
  users: string;
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
        width: '100%',
        alignItems: 'center',
        marginTop: '1rem',
        padding: 0,
        flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'}
      }}
    >
      <Typography variant="h5" sx={{

      }}>
        Project Name {props.name}
      </Typography>
      <Typography sx={{
        marginRight: '4rem',
      }}>
        {props.users}
      </Typography>
      <HardwareSet usedSet1={props.usedSet1} usedSet2={props.usedSet2} capacity={props.capacity} />
    </Container>
  );
};

export default Project;
