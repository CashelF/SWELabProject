import {Box, Button, styled, Typography} from '@mui/material';
import { useTheme } from "@mui/system";
import {Container} from '@mui/material';
import React from 'react'
import Navbar from './Navbar'
import hero_img from '../images/hero_img.png'
import { ThemeContext } from '@emotion/react';
import CustomButton from './CustomButton';

const Hero = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
      }));
    
      const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
          fontSize: "40px",
        },
      }));
    
      return (
        <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
          <Container>
            <Navbar />
            <CustomBox>
              <Box sx={{ flex: "1" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "18px",
                    color: "#687690",
                    fontWeight: "500",
                    mt: 10,
                    mb: 4,
                  }}
                >
                  Welcome to Pindepo
                </Typography>
                <Title variant="h1">
                  Checkout and checkin various tools
                </Title>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                >
                  Tools for all your needs. Create new projects or join projects! 
                  Whatever you decide.
                </Typography>
                <CustomButton
                  backgroundColor="#0F1B4C"
                  color="#fff"
                  buttonText="Search Projects"
                  heroBtn={true}
                />
              </Box>
    
              <Box sx={{ flex: "1.25" }}>
                <img
                  src={hero_img}
                  alt="heroImg"
                  style={{ maxWidth: "100%", marginBottom: "2rem" }}
                />
              </Box>
            </CustomBox>
          </Container>
        </Box>
      )
};

export default Hero;

