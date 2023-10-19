import { styled, SvgIcon, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{
        bgcolor: '#E6F0FF',
        py: 3
    }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#000336",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Pindepo
            </Typography>
          </Box>


          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#000336",
                fontWeight: "700",
                mb: 2,
              }}
            >
              @2023
            </Typography>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;