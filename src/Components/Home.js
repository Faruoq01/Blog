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
import book from '../assests/book.jpg';
import code from '../assests/code.png';
import coding from '../assests/coding.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import { Button, CardActionArea, CardActions } from '@mui/material';

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
                        <Box sx={{width:'70%', height:'100%', bgcolor:'green'}}>
                            <Card sx={{height:'500px', padding:'10px'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={book}
                                        alt="green iguana"
                                        sx={{
                                            width:'100%',
                                        }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom sx={{fontWeight:'bold'}} variant="h6" component="div">
                                            Useful Chrome Extensions that you shouldn't Miss Out
                                        </Typography>
                                        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                                <img style={{width:'15px', height:'15px'}} alt={'icon'} src={code} />
                                                <Typography sx={{marginLeft:'8px', fontSize:'12px', marginTop:'1px', color:'#000'}} variant="subtitle1" component="div">
                                                    Development
                                                </Typography>
                                            </Box>
                                            <Box sx={{marginLeft:'20px', display:'flex', flexDirection:'row', alignItems:'center'}}>
                                                <img style={{width:'15px', height:'15px'}} alt={'icon'} src={coding} />
                                                <Typography sx={{marginLeft:'8px', fontSize:'12px', marginTop:'1px', color:'#000'}} variant="subtitle1" component="div">
                                                    Programming
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography mt={2} variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button sx={buttons} size="small" color="primary">
                                        Continue Reading
                                    </Button>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Box>
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

const buttons = {
    bgcolor:'red',
    height:'35px',
    width:'150px', 
    color:'#fff', 
    fontSize:'11px', 
    fontWeight:'bold',
    '&:hover': {
        backgroundColor: 'red',
        color: '#fff'
    },
}

export default Home;