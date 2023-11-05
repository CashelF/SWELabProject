import React from 'react'
import {Box, Button, styled, Typography, Container} from '@mui/material';
import { useTheme } from "@mui/system";
import { withTheme } from '@emotion/react';
import join_icon from '../images/join_icon.png'
import checkout_icon from '../images/checkout_icon.png'
import checkin_icon from '../images/checkin_icon.png'
import HowItWorksCard from './HowItWorksCard';

function HowItWorks() {
    return (
        <Container sx={{
            bgcolor: 'white',
            minHeight: '40vh',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
        }}>
            <Container sx={{
               paddingTop: '3rem'
            }}>
                <Typography sx={{
                    fontSize: '35px',
                    color: '#000339',
                    fontWeight: '700'
                }}>
                    How it works?
                </Typography>
                <Typography sx={{
                    fontSize: '16px',
                    color: '#5A6473',
                    fontWeight: '400'
                }}>
                   Join projects. Checkout and check-in tools.<br/> All in one location.
                </Typography>
            </Container>
            <Container sx={{
                paddingTop: '3rem',
                display: 'flex'
            }}>
                <HowItWorksCard image={join_icon} mainText='Join' mainLink='Join Projects'/>
                <HowItWorksCard image={checkout_icon} mainText='Checkout' mainLink='Checkout From Projects'/>
                <HowItWorksCard image={checkin_icon} mainText='Checkin' mainLink='Checkin To Projects'/>
            </Container>
        </Container>
    );
}

export default HowItWorks;