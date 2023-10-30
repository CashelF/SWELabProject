import React, { useState, ChangeEvent } from 'react';
import { Typography, Button, Container, TextField } from '@mui/material';

interface HardwareSetProps {
  usedSet1: number;
  usedSet2: number;
  capacity: number;
}

function HardwareSet(props: HardwareSetProps) {
  const [availability1, setAvailability1] = useState(props.usedSet1);
  const [availability2, setAvailability2] = useState(props.usedSet2);
  const [capacity, setCapacity] = useState(props.capacity);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Check-in
  const handleCheckIn1 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability1 + quantityToAdd <= props.capacity) {
      setAvailability1(availability1 + quantityToAdd);
    }
  };

  const handleCheckIn2 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability2 + quantityToAdd <= props.capacity) {
      setAvailability2(availability2 + quantityToAdd);
    }
  };

  // Check-out
  const handleCheckOut1 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability1 - quantityToAdd >= 0) {
      setAvailability1(availability1 - quantityToAdd);
    }
  };

  const handleCheckOut2 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability2 - quantityToAdd >= 0) {
      setAvailability2(availability2 - quantityToAdd);
    }
  };

  return (
    <Container sx={{ display: 'flex', 
                alignItems: 'center',
                flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'}
     }}>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography>
          HWSet1: {availability1}/{props.capacity}
        </Typography>
        <Typography>
          HWSet2: {availability2}/{props.capacity}
        </Typography>
      </Container>
      <Container>
        <TextField id="outlined-basic" label="Enter Qty" variant="outlined" onChange={handleInputChange} />
        <TextField id="outlined-basic" label="Enter Qty" variant="outlined" onChange={handleInputChange} />
      </Container>
      <Container sx={{ display: 'flex',
        }}>
        <Container sx={{
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'column'}
        }}>
          <Button sx={{ height: '49%', bgcolor: '#0F1B4C' }} variant="contained" onClick={handleCheckIn1}>
            Check In.
          </Button>
          <Button sx={{ height: '49%', marginTop: '2%',  bgcolor: '#0F1B4C' }} variant="contained" onClick={handleCheckIn2}>
            Check In.
          </Button>
        </Container>
        <Container sx={{
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'column'}
        }}>
          <Button sx={{ height: '49%',  bgcolor: '#0F1B4C' }} variant="contained" onClick={handleCheckOut1}>
            Check Out
          </Button>
          <Button sx={{ height: '49%', marginTop: '2%',  bgcolor: '#0F1B4C' }} variant="contained" onClick={handleCheckOut2}>
            Check Out
          </Button>
        </Container>
      </Container>
      {/*<Button sx={{ height: '49%', marginTop: '2%',  bgcolor: '#0F1B4C' }} variant="contained" onClick={handleCheckOut2}>
            Sign In 
      </Button>*/}
    </Container>
  );
}

export default HardwareSet;
