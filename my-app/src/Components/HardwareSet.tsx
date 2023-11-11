import React, { useState, ChangeEvent, useEffect } from 'react';
import { Typography, Button, Container, TextField, Stack } from '@mui/material';
import axios from 'axios';
interface HardwareSetProps {
  usedSet1: number;
  usedSet2: number;
  capacity: number;
  hwSet1Id: string;
  hwSet2Id: string;
}

function HardwareSet(props: HardwareSetProps) {
  const [availability1, setAvailability1] = useState(0);
  const [availability2, setAvailability2] = useState(0);
  const [capacity1, setCapacity1] = useState(0);
  const [capacity2, setCapacity2] = useState(0);
  const [checkedOut1, setCheckedOut1] = useState(props.usedSet1);
  const [checkedOut2, setCheckedOut2] = useState(props.usedSet2);
  const [inputValue, setInputValue] = useState('');
  const [currAvailability1, setCurrentAvailability1] = useState(0);
  const globalHWSet1Id = '1';
  const globalHWSet2Id = '2';
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(props.usedSet1)
    setInputValue(e.target.value);
  };

   
  const getGlobalHWSetInfo = async () => {
    
      const url = `http://localhost:5000/globalHWSets`
      const res = await axios.get(url)
          .then(res => {
              setCapacity1(res.data.HWSet1["capacity"])
              setAvailability1(res.data.HWSet1["availability"])
              setCapacity2(res.data.HWSet2["capacity"])
              setAvailability2(res.data.HWSet2["availability"])
          })
          .catch(error => {
              console.error("There was an error!", error)
          });
  };

  useEffect(() => {
    getGlobalHWSetInfo()
  }, []);

  // Check-in
  const handleCheckIn1 = async () => {
    console.log(props.hwSet1Id)
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability1 + quantityToAdd <= props.capacity) {
      // project hwset api call
      const url = `http://localhost:5000/checkOut/${props.hwSet1Id}/${quantityToAdd}`;
            const res = await axios.post(url)
            .then(res => {
                console.log(res.data);
                if (res.data.success === true) {
                  setCheckedOut1(checkedOut1 - quantityToAdd)
                  setAvailability1(availability1 + quantityToAdd)
                }
            })
      // global hwset api call
      const url2 = `http://localhost:5000/checkIn/${globalHWSet1Id}/${quantityToAdd}`;
            const res2 = await axios.post(url2)
            .then(res2 => {
                console.log(res2.data);
                if (res2.data.success === true) {
                }
            })
    } else {
      alert("ERROR: invalid quantity");
    }

  };

  const handleCheckIn2 = async () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability2 + quantityToAdd <= props.capacity) {
      const url = `http://localhost:5000/checkIn/${props.hwSet2Id}/${quantityToAdd}`;
            const res = await axios.post(url)
            .then(res => {
                console.log(res.data);
                if (res.data.success === true) {
                  setCheckedOut2(checkedOut2 - quantityToAdd)
                  setAvailability1(availability1 + quantityToAdd)
                }
            })
            const url2 = `http://localhost:5000/checkIn/${globalHWSet2Id}/${quantityToAdd}`;
            const res2 = await axios.post(url2)
            .then(res2 => {
                console.log(res2.data);
                if (res2.data.success === true) {
                }
            })
    } else {
      alert("ERROR: invalid quantity");
    }
  };

  // Check-out
  const handleCheckOut1 = async () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability1 - quantityToAdd >= 0) {
      const quantityToAdd = parseInt(inputValue, 10);
        const url = `http://localhost:5000/checkIn/${props.hwSet1Id}/${quantityToAdd}`;
        console.log(url)
              const res = await axios.post(url)
              .then(res => {
                  console.log(res.data);
                  if (res.data.success === true) {
                    setCheckedOut1(checkedOut1 + quantityToAdd)
                    setAvailability1(availability1 - quantityToAdd)
                  }
              })
              const url2 = `http://localhost:5000/checkOut/${globalHWSet1Id}/${quantityToAdd}`;
              const res2 = await axios.post(url2)
              .then(res2 => {
                  console.log(res2.data);
                  if (res2.data.success === true) {
                  }
              })
            }
            else {
              alert("ERROR: invalid quantity");
            }

    };

  const handleCheckOut2 = async () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability2 + quantityToAdd <= props.capacity) {
      const url = `http://localhost:5000/checkIn/${props.hwSet1Id}/${quantityToAdd}`;
            const res = await axios.post(url)
            .then(res => {
                console.log(res.data);
                if (res.data.success === true) {
                    setCheckedOut2(checkedOut2 + quantityToAdd)
                    setAvailability1(availability1 - quantityToAdd)
                }
            })
            const url2 = `http://localhost:5000/checkOut/${globalHWSet2Id}/${quantityToAdd}`;
            const res2 = await axios.post(url2)
            .then(res2 => {
                console.log(res2.data);
                if (res2.data.success === true) {
                }
            })
    }
    else {
      alert("ERROR: invalid quantity");
    }
  };

  return (
    <Container sx={{ display: 'flex', 
                alignItems: 'center',
                padding: '10px',
                flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'}
     }}>
      <Stack sx={{alignItems: 'center',}}>
          <Typography 
            sx={{
              fontWeight: 'bold'
            }} 
              variant="h6">
            Hardware Set 1
          </Typography>
            <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Stack>
              <Typography>
                Available: {availability1}/{capacity1}
              </Typography>
              <Typography>
                Checked Out: {checkedOut1}
              </Typography>
            </Stack>
            <Stack>
              <Container>
                <TextField sx={{marginBottom: "0.5rem", marginTop: "0.5rem", borderWidth: '4px'}} id="outlined-basic" label="Enter Qty" variant="outlined" onChange={handleInputChange} />
              </Container>
              <Container sx={{ display: 'flex',
              }}>
                <Button sx={{ height: '49%', bgcolor: '#0F1B4C', marginRight: '0.5rem', "&:hover": {bgcolor: "#7398F7"}}} variant="contained" onClick={handleCheckIn1}>
                  Check In
                </Button>
                <Button sx={{ height: '49%',  bgcolor: '#0F1B4C', "&:hover": {bgcolor: "#7398F7"}}} variant="contained" onClick={handleCheckOut1}>
                  Check Out
                </Button>
              </Container>
            </Stack>
        </Container>
      </Stack>

      <Stack sx={{alignItems: 'center',}}>
          <Typography 
            sx={{
              fontWeight: 'bold'
            }}
            variant="h6">
            Hardware Set 2
          </Typography>
            <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Stack>
              <Typography>
                Available: {availability2}/{capacity2}
              </Typography>
              <Typography>
                Checked Out: {checkedOut2}
              </Typography>
            </Stack>
            <Stack>
              <Container>
                <TextField sx={{marginBottom: "0.5rem", marginTop: "0.5rem", borderWidth: '4px'}} id="outlined-basic" label="Enter Qty" variant="outlined" onChange={handleInputChange} />
              </Container>
              <Container sx={{ display: 'flex',
              }}>
                <Button sx={{ height: '49%', bgcolor: '#0F1B4C', marginRight: '0.5rem', "&:hover": {bgcolor: "#7398F7"}}} variant="contained" onClick={handleCheckIn2}>
                  Check In
                </Button>
                <Button sx={{ height: '49%',  bgcolor: '#0F1B4C', "&:hover": {bgcolor: "#7398F7"}}} variant="contained" onClick={getGlobalHWSetInfo}>
                  Check Out
                </Button>
              </Container>
            </Stack>
        </Container>
      </Stack>
    </Container>
  );
}

export default HardwareSet;
