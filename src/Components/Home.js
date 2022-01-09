import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import facebook from '../assests/facebook.png';
import instagram from '../assests/instagram.png';
import twitter from '../assests/twitter.png';
import tiktok from '../assests/tiktok.png';
import youtube from '../assests/youtube.png';
import pinterest from '../assests/pinterest.png';
import hero from '../assests/hero.jpeg';

const Home = () => {
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ height: '100vh' }} >

                    {/* the header starts here*/}
                    <Box pt={2} pb={1} sx={header}>
                        <Box>
                            <Typography sx={{fontWeight:'bold', color:'#fff'}} variant="h5" component="div">
                                Blog CMS
                            </Typography>
                        </Box>
                        <Box sx={{width:'45%'}}>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                <Typography sx={{fontWeight:'bold', color:'#fff'}} variant="subtitle1" component="div">
                                    Programming
                                </Typography>
                                <Typography sx={{fontWeight:'bold', color:'#fff'}} variant="subtitle1" component="div">
                                    Astronomy
                                </Typography>
                                <Typography sx={{fontWeight:'bold', color:'#fff'}} variant="subtitle1" component="div">
                                    Sports
                                </Typography>
                                <Typography sx={{fontWeight:'bold', color:'#fff'}} variant="subtitle1" component="div">
                                    Education
                                </Typography>
                                <Typography sx={{fontWeight:'bold', color:'#fff'}} variant="subtitle1" component="div">
                                    Photography
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* the hero starts here*/}
                    <Box mt={3} mb={1} sx={social}>
                        <Box sx={{width:'230px', display:'flex', justifyContent:'space-between'}}>
                            <img style={{width:'30px', height:'30px'}} alt={'icon'} src={facebook} />
                            <img style={{width:'30px', height:'30px'}} alt={'icon'} src={twitter} />
                            <img style={{width:'30px', height:'30px'}} alt={'icon'} src={instagram} />
                            <img style={{width:'30px', height:'30px'}} alt={'icon'} src={youtube} />
                            <img style={{width:'30px', height:'30px'}} alt={'icon'} src={tiktok} />
                            <img style={{width:'30px', height:'30px'}} alt={'icon'} src={pinterest} />
                        </Box>
                    </Box>
                    <Box sx={{height:'350px', bgcolor:'red'}}>
                        <img style={{width:'100%', height:'100%'}} alt={'icon'} src={hero} />
                    </Box>

                    {/* the hero starts here*/}
                    <Box mt={3} sx={{height:'100%', display:'flex', justifyContent:'space-between'}}>
                        <Box sx={{width:'70%', height:'100%', bgcolor:'green'}}></Box>
                        <Box sx={{width:'28%', height:'100%', bgcolor:'yellow'}}></Box>
                    </Box>
                </Box>

            </Container>
        </React.Fragment>
    )
}

const header = { 
    marginTop:'30px', 
    display:'flex', 
    justifyContent:'space-between', 
    border:'1px solid #fff',
    borderLeft: 'none',
    borderTop: 'none',
    borderRight: 'none'
}

const social = {
    height:'30px', 
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
}

export default Home;