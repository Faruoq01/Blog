import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';
import './Home.scss';
import Stack from '@mui/material/Stack';

const ContentPage = ({history}) => {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const matches = useMediaQuery("(max-width:900px)");
    const matches2 = useMediaQuery("(max-width:1000px)");

    const handleClose = () => {
        setAnchorEl(!anchorEl);
    }
    const backToList = () => {
        history.push('/');
    }
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box>
                    {/* the header starts here*/}
                    <Box pt={2} pb={1} sx={header}>
                        <Box>
                            <Typography sx={{fontWeight:'bold', color:'#fff'}} variant="h5" component="div">
                                Blog CMS
                            </Typography>
                        </Box>
                        {!matches2?
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
                            </Box>:
                            <div>
                                <IconButton aria-label="share">
                                    <MenuIcon onClick={handleClose} sx={{width:'30px', height:'30px', color:'#fff'}} />
                                </IconButton>
                                {anchorEl&&
                                    <Box sx={{width:'200px', zIndex:'20', borderRadius:'10px', position:'absolute', right:'30px', bgcolor:'#fff'}}>
                                        <List sx={{ width: '100%', fontSize:'12px', padding:'0px', marginTop:'20px'}}>
                                            <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                                <ListItemText
                                                sx={{fontSize:'12px'}}
                                                primary="Programming"
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                                <ListItemText
                                                sx={{fontSize:'12px'}}
                                                primary="Astronomy"
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                                <ListItemText
                                                sx={{fontSize:'12px'}}
                                                primary="Sports"
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                                <ListItemText
                                                sx={{fontSize:'12px'}}
                                                primary="Education"
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                                <ListItemText
                                                sx={{fontSize:'12px'}}
                                                primary="Photography"
                                                />
                                            </ListItem>
                                            <Divider />
                                        </List>
                                    </Box>
                                }
                            </div>  
                        }
                    </Box>

                    {/* the blog card starts here*/}
                    <Box mt={3} sx={matches?main2:main}>
                        <Box sx={matches?cardContainer2:cardContainer1}>
                            <Card sx={matches?card2:card1}>
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
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica Lizards are a 
                                            widespread group of squamate reptiles, with over 6,000 species, ranging 
                                            across all continents except Antarctica all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button onClick={backToList} sx={buttons} size="small" color="primary">
                                        Back to list
                                    </Button>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                            <Box sx={{...reply, marginBottom:'20px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                                <Box sx={{...recentHeader, width:'94%'}}>
                                    <Typography sx={{
                                        fontSize:'14px', 
                                        fontWeight:'bold', 
                                        color:'#000'}} variant="subtitle1" component="div">
                                        Leave a reply
                                    </Typography>
                                </Box>
                                <Box sx={textArea}>
                                    <textarea id="textArea" placeholder={'Comment'} style={replyText} />
                                    <Stack sx={{width:'94%', height:'40px', marginBottom:'30px', marginTop:'20px'}} direction="row" spacing={2}>
                                        <input placeholder={'Name'} style={inputText} />
                                        <input placeholder={'Email'} style={inputText} />
                                    </Stack>
                                </Box>
                                <Box sx={{width:'94%'}}>
                                    <Button onClick={backToList} sx={{width:'170px', marginBottom:'30px', fontSize:'11px', height:'40px', color:'#fff', borderRadius:'50px', bgcolor:'green'}} size="small" color="primary">
                                        Post Comments
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={matches?sideBar2:sideBar}>
                            <Box sx={{bgcolor:'#fff', paddingLeft:'20px', paddingRight:'20px', height:'270px', borderRadius:'5px'}}>
                                <Box sx={recentHeader}>
                                    <Typography sx={{
                                        fontSize:'14px', 
                                        fontWeight:'bold', 
                                        color:'#000'}} variant="subtitle1" component="div">
                                        Categories
                                    </Typography>
                                </Box>
                                <List sx={{ width: '100%', fontSize:'12px', padding:'0px', marginTop:'20px'}}>
                                    <ListItem sx={{margin:'0px', marginBottom:'8px', padding:'0px'}} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={hero} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Oct 11, 2021"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize:'12px' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    React.js course 2021
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <ListItem sx={{margin:'0px', marginBottom:'8px', padding:'0px'}} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={hero} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Oct 11, 2021"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize:'12px' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    React.js course 2021
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <ListItem sx={{margin:'0px', marginBottom:'8px', padding:'0px'}} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src={hero} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Oct 11, 2021"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline', fontSize:'12px' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    React.js course 2021
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box sx={{bgcolor:'#fff', marginTop:'20px', paddingLeft:'20px', paddingRight:'20px', height:'300px', borderRadius:'5px'}}>
                                <Box sx={recentHeader}>
                                    <Typography sx={{
                                        fontSize:'14px', 
                                        fontWeight:'bold', 
                                        color:'#000'}} variant="subtitle1" component="div">
                                        Recent Posts
                                    </Typography>
                                </Box>
                                <List sx={{ width: '100%', fontSize:'12px', padding:'0px', marginTop:'20px'}}>
                                    <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                        <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Programming"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                        <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Astronomy"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                        <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Sports"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                        <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Education"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                        <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Photography"
                                        />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:'100%', height:'50px', bgcolor:'black', marginBottom:'20px'}}></Box>
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

const main = {
    width:'100%',
    height:'100%', 
    display:'flex', 
    flexDirection:'row',
    justifyContent:'space-between'
}

const main2 = {
    width:'100%',
    height:'100%', 
    display:'flex', 
    flexDirection:'column',
    justifyContent:'space-between',
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

const reply = {
    width:'100%', 
    bgcolor:'#fff',
    borderRadius:'5px', 
}

const sideBar = {
    width:'28%', 
    borderRadius:'5px', 
}

const sideBar2 = {
    width:'100%', 
    borderRadius:'5px', 
}

const recentHeader = {
    height:'50px', 
    paddingTop:'20px',
    border:'1px solid #ccc',
    borderLeft:'none', 
    borderRight:'none',
    borderTop:'none',
}

const card1 = {
    padding:'10px', 
    marginBottom:'20px'
}

const card2 = {
    width:'100%',
    padding:'10px', 
    marginBottom:'20px'
}

const cardContainer1 = {
    width:'70%', 
}

const cardContainer2 = {
    width:'100%', 
}

const textArea = {
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}

const replyText = {
    width:'94%',
    height:'200px',
    border:'none',
    backgroundColor:'#f7f7f7',
    marginTop:'25px',
    borderRadius:'5px',
    padding:'10px',
}

const inputText = {
    flex:1,
    border:'none',
    backgroundColor:'#f7f7f7',
    paddingLeft:'10px',
    borderRadius:'5px'
}

export default ContentPage;