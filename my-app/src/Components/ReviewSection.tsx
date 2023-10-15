import React from 'react'
import {Box, Button, styled, Typography, Container, Rating} from '@mui/material';
import { useTheme } from "@mui/system";
import { withTheme } from '@emotion/react';
import join_icon from '../images/join_icon.png'
import checkout_icon from '../images/join_icon.png'
import checkin_icon from '../images/join_icon.png'
import trusted1 from '../images/trusted_companies_folder/trusted1.png'
import trusted2 from '../images/trusted_companies_folder/trusted2.png'
import trusted3 from '../images/trusted_companies_folder/trusted3.png'
import trusted4 from '../images/trusted_companies_folder/trusted4.png'
import trusted5 from '../images/trusted_companies_folder/trusted5.png'


function ReviewSection(){
    return (
       <Container sx={{
            minHeight: '30vh',
       }}>
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '3rem',
                paddingBottom: '0',
            }}>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <Typography sx={{
                        color: '#101010',
                        fontSize: '30px',
                        fontWeight: '800'
                    }}>
                        Pindepo
                    </Typography>
                    <Typography sx={{
                        fontSize: '16px',
                        color: '#7D8589'
                    }}>
                        More Than 45,000+ customers trust Pindepo
                    </Typography>
                </Container>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end'
                }}>
                <Rating name="half-rating" defaultValue={5.0} precision={0.5} />
                    <Typography sx={{
                        paddingTop: '1rem',
                        fontSize: '16px',
                        color: '#7D8589'
                    }}>
                        5 Star Rating (2k+ Reviews)
                    </Typography>
                </Container>
        </Container>
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '5rem',
                alignItems: {xs: 'center', sm: 'center'},
                flexDirection: {xl: 'row', lg: 'row', md: 'row', sm: 'column', xs: 'column'}
            }}>
                <Box
                    component="img"
                    sx={{
                        height: 35,
                        width: 145,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={trusted1}
                />
                <Box
                    component="img"
                    sx={{
                        height: 40,
                        width: 117,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={trusted2}
                />
                <Box
                    component="img"
                    sx={{
                        height: 36,
                        width: 120,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={trusted3}
                />
                
                
                <Box
                    component="img"
                    sx={{
                        height: 32,
                        width: 157,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={trusted4}
                />
                <Box
                    component="img"
                    sx={{
                        height: 33,
                        width: 154,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={trusted5}
                />
                </Container>
       </Container>
    );
}

export default ReviewSection;