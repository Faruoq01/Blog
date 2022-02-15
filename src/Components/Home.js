import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import facebook from '../assests/facebook.png';
import instagram from '../assests/instagram.png';
import twitter from '../assests/twitter.png';
import tiktok from '../assests/tiktok.png';
import youtube from '../assests/youtube.png';
import whatsapp from '../assests/whatsapp.png';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';
import AffiliateMarketting from './Categories.js/AffiliateMarketting';
import {Link} from 'react-router-dom';

const Home = ({history}) => {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const matches2 = useMediaQuery("(max-width:1000px)");
    const [navigateCategories, setNavigateCategories] = useState({
        first:'1', 
        second:'0', 
        third:'0', 
        fourth:'0',
        fifth:'0'
    });

    const handleClose = () => {
        setAnchorEl(!anchorEl);
    }

    const AMData = {
        pageHistory: history,
        image: 'https://media.istockphoto.com/photos/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-picture-id1319479588?b=1&k=20&m=1319479588&s=170667a&w=0&h=bunblYyTDA_vnXu-nY4x4oa7ke6aiiZKntZ5mfr-4aM=',
        cards: [
            {
                title:'Everything you need to know to get started with Affiliate Marketting.', 
                firstCategory:'Marketting',
                secondCategory:'Affiliate Marketing',
                image:'https://media.istockphoto.com/photos/business-meeting-on-video-call-during-covid19-lockdown-picture-id1300311961?b=1&k=20&m=1300311961&s=170667a&w=0&h=NQ5Y3kvY_nBro1M1pNMzaV3l9oohkeg5o6qEtcFSD-A=',
                caption:`Affiliate marketing is a strategic  processes involved in 
                promoting another person's or company's products to earn a commission. 
                Affiliate marketing is a PROVEN business model that has life changing 
                benefits both online and offline.`
            },
            {
                title:'How i made $1000 getting started with Affiliate Marketting.', 
                firstCategory:'Marketting',
                secondCategory:'Affiliate Marketing',
                image:'https://media.istockphoto.com/photos/live-internet-streaming-of-business-conference-meetingonline-webinar-picture-id1318224799?b=1&k=20&m=1318224799&s=170667a&w=0&h=IFrKareX-EUv35GsKdMxmcvjGeqaTNpadpHN_qWINug=',
                caption:`Affiliate marketing is a strategic  processes involved in 
                promoting another person's or company's products to earn a commission. 
                Affiliate marketing is a PROVEN business model that has life changing 
                benefits both online and offline.`
            }
        ]
    }

    const Science = {
        pageHistory: history,
        image: 'https://media.istockphoto.com/photos/red-carpet-entrance-picture-id1066484598?b=1&k=20&m=1066484598&s=170667a&w=0&h=a7f2EfxEAYx_C0pb3r0UTkwsvstFbG9UDEaMLqvy5KU=',
        cards: []
    }

    const PublicHealth = {
        pageHistory: history,
        image: 'https://media.istockphoto.com/photos/large-group-of-business-people-in-convention-centre-picture-id1281724535?b=1&k=20&m=1281724535&s=170667a&w=0&h=RV0k68y2VPMDnP6QlW_7kErXhbLcqjYVgNmwc3kMMLo=',
        cards: []
    }

    const Education = {
        pageHistory: history,
        image: 'https://media.istockphoto.com/photos/futuristic-office-picture-id1187179171?b=1&k=20&m=1187179171&s=170667a&w=0&h=4utIg-YgJP2aJIFWHkdeemBDguO6XJwjSImh9sKxmbI=',
        cards: []
    }

    const Photography = {
        pageHistory: history,
        image: 'https://images.unsplash.com/photo-1548088615-0795daa548c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        cards: []
    }

    const firstNav = () => {
        const data = {
            first:'1', 
            second:'0', 
            third:'0', 
            fourth:'0',
            fifth:'0'
        }
        setNavigateCategories(data);
        setAnchorEl(!anchorEl);
    }
    const secondNav = () => {
        const data = {
            first:'0', 
            second:'1', 
            third:'0', 
            fourth:'0',
            fifth:'0'
        }
        setNavigateCategories(data);
        setAnchorEl(!anchorEl);
    }
    const thirdNav = () => {
        const data = {
            first:'0', 
            second:'0', 
            third:'1', 
            fourth:'0',
            fifth:'0'
        }
        setNavigateCategories(data);
        setAnchorEl(!anchorEl);
    }
    const fourthNav = () => {
        const data = {
            first:'0', 
            second:'0', 
            third:'0', 
            fourth:'1',
            fifth:'0'
        }
        setNavigateCategories(data);
        setAnchorEl(!anchorEl);
    }
    const fifthNav = () => {
        const data = {
            first:'0', 
            second:'0', 
            third:'0', 
            fourth:'0',
            fifth:'1'
        }
        setNavigateCategories(data);
        setAnchorEl(!anchorEl);
    }
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box>
                    {/* the header starts here*/}
                    <Box pt={2} pb={1} sx={header}>
                        <Box>
                            <Link style={{textDecoration:'none'}} to="/login">
                                <Typography sx={{fontWeight:'bold', color:'#fff'}} variant="h5" component="div">
                                    Blog CMS
                                </Typography>
                            </Link>
                        </Box>
                        {!matches2?
                            <Box sx={{width:'52%'}}>
                                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                    <Typography onClick={firstNav} sx={{fontWeight:'bold', color:'#fff'}} variant="subtitle1" component="div">
                                        Affiliate Marketting
                                    </Typography>
                                    <Typography onClick={secondNav} sx={{fontWeight:'bold', color:'#fff'}} variant="subtitle1" component="div">
                                        Science
                                    </Typography>
                                    <Typography onClick={thirdNav} sx={{fontWeight:'bold', color:'#fff'}} variant="subtitle1" component="div">
                                        Public Health
                                    </Typography>
                                    <Typography onClick={fourthNav} sx={{fontWeight:'bold', color:'#fff'}} variant="subtitle1" component="div">
                                        Education
                                    </Typography>
                                    <Typography onClick={fifthNav} sx={{fontWeight:'bold', color:'#fff'}} variant="subtitle1" component="div">
                                        Photography
                                    </Typography>
                                </Box>
                            </Box>:
                            <div>
                                <IconButton onClick={(e) => handleClose(e, "clicked")} aria-label="share">
                                    <MenuIcon sx={{width:'30px', height:'30px', color:'#fff'}} />
                                </IconButton>
                                {anchorEl&&
                                    <Box sx={{width:'200px', borderRadius:'10px', position:'absolute', right:'30px', bgcolor:'#fff'}}>
                                        <List sx={{ width: '100%', fontSize:'12px', padding:'0px', marginTop:'20px'}}>
                                            <ListItem onClick={firstNav} sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                                <ListItemText
                                                sx={{fontSize:'12px'}}
                                                primary="Affiliate Marketting"
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem onClick={secondNav} sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                                <ListItemText
                                                sx={{fontSize:'12px'}}
                                                primary="Science"
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem onClick={thirdNav} sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                                <ListItemText
                                                sx={{fontSize:'12px'}}
                                                primary="Public Health"
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem onClick={fourthNav} sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                                <ListItemText
                                                sx={{fontSize:'12px'}}
                                                primary="Education"
                                                />
                                            </ListItem>
                                            <Divider />
                                            <ListItem onClick={fifthNav} sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
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

                    {/* the hero starts here*/}
                    <Box mt={3} mb={1} sx={social}>
                        <Box sx={{width:'230px', display:'flex', justifyContent:'space-between'}}>
                            <a href='https://m.facebook.com/ummayman.umita#!/photo.php?fbid=1166775844068683&id=100022088340625&set=a.121847258561552&source=48&refid=17&_ft_=mf_story_key.1166775890735345%3Atop_level_post_id.1166775890735345%3Atl_objid.1166775890735345%3Acontent_owner_id_new.100022088340625%3Athrowback_story_fbid.1166775890735345%3Astory_location.4%3Astory_attachment_style.photo%3Athid.100022088340625%3A306061129499414%3A2%3A0%3A1646121599%3A-3763917111927816124%3A%3A&__tn__=EH-R'>
                                <img style={{width:'30px', height:'30px'}} alt={'icon'} src={facebook} />
                            </a>
                            <a href="https://twitter.com/Sharifa844?t=B_vba4ADC8gJgsaifdiwMg&s=08">
                                <img style={{width:'30px', height:'30px'}} alt={'icon'} src={twitter} />
                            </a>
                            <a href="http://www.sashbloomingcollections.com/">
                                <img style={{width:'30px', height:'30px'}} alt={'icon'} src={instagram} />
                            </a>
                            <a href="https://www.youtube.com">
                                <img style={{width:'30px', height:'30px'}} alt={'icon'} src={youtube} />
                            </a>
                            <a href="https://www.tiktok.com">
                                <img style={{width:'30px', height:'30px'}} alt={'icon'} src={tiktok} />
                            </a>
                            <a href="https://wa.link/0ofsu7">
                                <img style={{width:'30px', height:'30px'}} alt={'icon'} src={whatsapp} />
                            </a>
                        </Box>
                    </Box>
                    {
                        navigateCategories.first==='1'&& <AffiliateMarketting data={AMData} />
                    }
                    {
                        navigateCategories.second==='1'&& <AffiliateMarketting data={Science} />
                    }
                    {
                        navigateCategories.third==='1'&& <AffiliateMarketting data={PublicHealth} />
                    }
                    {
                        navigateCategories.fourth==='1'&& <AffiliateMarketting data={Education} />
                    }
                    {
                        navigateCategories.fifth==='1'&& <AffiliateMarketting data={Photography} />
                    }
                </Box>
                <Box mb={10} sx={footer}>
                    <Typography sx={{marginLeft:'8px', fontSize:'12px', marginTop:'1px', color:'#fff'}} variant="subtitle1" component="div">
                        c 2009
                    </Typography>
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

const footer = {
    width:'100%', 
    height:'50px', 
    bgcolor:'black', 
    marginTop:'20px', 
    display:'flex',
    alignItems:'flex-end'
}

export default Home;