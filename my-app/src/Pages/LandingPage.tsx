import React from 'react'
import {Box, Button, styled, Typography, Container} from '@mui/material';
import { useTheme } from "@mui/system";
import { withTheme } from '@emotion/react';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks'
import ReviewSection from '../Components/ReviewSection';
import Footer from '../Components/Footer'
import { BrowserRouter, Routes, Route, Link, useParams, useLocation} from 'react-router-dom'

interface LocationState {
    username: string;
}

const LandingPage = () => {
   
    const location = useLocation()
    const state = location.state as LocationState

    return (
        <>
        <Hero user={state.username}/>
        <ReviewSection/>
        <HowItWorks/>
        <Footer/>
        </>
    );
};

export default LandingPage;