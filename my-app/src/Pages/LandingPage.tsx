import React from 'react'
import {Box, Button, styled, Typography, Container} from '@mui/material';
import { useTheme } from "@mui/system";
import { withTheme } from '@emotion/react';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks'
import ReviewSection from '../Components/ReviewSection';
import Footer from '../Components/Footer'
const LandingPage = () => {
    return (
        <>
        <Hero/>
        <ReviewSection/>
        <HowItWorks/>
        <Footer/>
        </>
    );
};

export default LandingPage;