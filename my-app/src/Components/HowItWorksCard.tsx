import React from 'react'
import {Box, Button, styled, Typography, Container} from '@mui/material';
import { useTheme } from "@mui/system";
import { withTheme } from '@emotion/react';
import join_icon from '../images/join_icon.png'
import checkout_icon from '../images/join_icon.png'
import checkin_icon from '../images/join_icon.png'

interface HowItWorksCardProps {
    image: string;
    mainText: string;
    mainLink: string;
}

function HowItWorksCard(props: HowItWorksCardProps){
    console.log(props.image)
    return (
        <Container>
        <Box
            component="img"
            sx={{
                height: 48,
                width: 48,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={props.image}
            />
        <Typography sx={{
            fontSize: '20px',
            color: '#3B3C45',
            fontWeight: '400',
            paddingTop: '1rem'
        }}>
            {props.mainText}
        </Typography>
        <Typography sx={{
            fontSize: '14px',
            color: '#0689FF',
            fontWeight: '600'
        }}>
            {props.mainLink}
        </Typography>
        </Container>
    );
};

export default HowItWorksCard;