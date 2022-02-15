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
                                <IconButton onClick={handleClose} aria-label="share">
                                    <MenuIcon sx={{width:'30px', height:'30px', color:'#fff'}} />
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
                                <CardActionArea sx={{display:'flex', flexDirection:'column'}}>
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
                                            What is Affiliate Marketing?

                                            Affiliate marketing is the sum total of  processes involved in promoting another person's or company's products to earn a commission. 

                                            Affiliate marketing is a PROVEN business model that has life changing benefits both online and offline.

                                            It has been in existence since the 1989.

                                            Affiliate marketing business is so lucrative that it made the second richest man alive RICH. It made Jeff Bezos the world’s richest man in 2018 till recently. 

                                            Imagine yourself doing the SAME business as the second richest man in the world🤤


                                            Some examples of common  affiliate marketing programs are

                                            ✔️ Clickbank
                                            ✔️ JvZoo
                                            ✔️ Commission Junction 
                                            ✔️ WarriorPlus
                                            ✔️ Amazon Associates 
                                            ✔️ Jumia Force 
                                            ✔️ Piggyvest has a popular affiliate/referral program too.
                                            ✔️ EXPERTNAIRE my favorite

                                            Now u would Wana know why expertnaire is my favorite, this is because it has a high commission between 30-50%, and you're been paid weekly (Fridays)


                                            Now let me tell you what Affiliate marketing is NOT:

                                            ❌ It is not MLM - Multi Level Marketing 

                                            ❌ You don’t need to rent a shop or office

                                            ❌ You don't need to create, own or import any products

                                            ❌ There are no monthly fees

                                            ❌ It does not require HUGE startup capital

                                            ❌ It is NOT a scam

                                            ❌ It is NOT a ponzi/get rich quick and does NOT work for lazy people who want others to do the work for them.

                                            Please read this part again because it needs to sink in and correct any misconceptions you may have.

                                            Oya let's solve some maths! 

                                            📌 Typical LIVE Example of How to Bank up N400,000 Per Month

                                            Let’s assume you chose this hot product called The Profitable Facebook Ads System from
                                            expertnaire to sell. 

                                            This product sells paid to you per sale.


                                            And the best part of it is????👇👇👇
                                            Using the two powerful methods inside the 72IG Implementation program, you use your phone or computer to make sales. 

                                            All purely online, without leaving your house.

                                            You then make 8 sales per week.

                                            This means you earned 8 X N12,500 commissions = N100,000 per week
                                            Imagine that... Let it sink.

                                            NOW YOU'RE READY TO GET STARTED WITH YOUR AFFILIATE ONLINE BUSINESS ????
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
                <Box sx={{width:'100%', height:'50px', bgcolor:'black',marginTop:'20px', marginBottom:'20px'}}></Box>
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