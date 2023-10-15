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
                    How it works ?
                </Typography>
                <Typography sx={{
                    fontSize: '16px',
                    color: '#5A6473',
                    fontWeight: '400'
                }}>
                    Everything you need to know when you're looking to buy, <br/> rent, or sell - all in one place
                </Typography>
            </Container>
            <Container sx={{
                paddingTop: '3rem',
                display: 'flex'
            }}>
                <HowItWorksCard image={join_icon} mainText='Join Guide' mainLink='How to join'/>
                <HowItWorksCard image={checkout_icon} mainText='Checkout Guides' mainLink='How to Checkout'/>
                <HowItWorksCard image={checkin_icon} mainText='Checkin Guides' mainLink='How to Checkin'/>
            </Container>
        </Container>
    );
}

export default HowItWorks;