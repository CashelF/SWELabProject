import React, { useState, useEffect } from 'react';
import { Typography, Button, Container, TextField, Stack} from '@mui/material';
import HardwareSet from './HardwareSet';
import { useUser } from '../UserContext';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, useNavigate} from 'react-router-dom';



interface ProjectProps {
  name: string;
  projectID: string;
  description: string;
  usedSet1: number;
  usedSet2: number;
  capacity: number;
}

const Project: React.FC<ProjectProps> = (props) => {
  const {username} = useUser(); 
  const navigate = useNavigate();
  const [isProjectVisible, setIsProjectVisible] = useState(true);

  const handleLeave = async () => {
    //function should remove user from project and remove project from My Project
    setIsProjectVisible(false);
    console.log("Leave clicked")
        console.log(username)
        console.log(props.projectID)
        const url = `http://localhost:5000/leaveProject/${username}/${props.projectID}`;
        const res = await axios.post(url)
        .then(res => {
            console.log(res.data);
            if (res.data.success === true) {
                console.log("Leave successful")
            }
        })
  };

  return isProjectVisible ? (
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
      <Button sx={{ height: '49%', bgcolor: '#0F1B4C', marginRight: '0.5rem', "&:hover": {bgcolor: "#7398F7"}}} variant="contained" onClick={handleLeave}>
          Leave
      </Button>
    </Container>
  ): null;
};

export default Project;
