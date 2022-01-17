import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PaidIcon from '@mui/icons-material/Paid';
import CollectionsIcon from '@mui/icons-material/Collections';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import user from '../../assests/user.png';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Setup from '../management/Setup';
import Articles from '../management/Articles';
import Comments from '../management/Comments';
import Contacts from '../management/Contacts';
import MailList from '../management/MailList';
import Dashboard from '../management/Dashboard';

const Management = () => {
    return(
        <React.Fragment>
            <Router>
                <Box sx={container}>
                    <Box sx={{width:'80px', position:'fixed', height:'100vh', bgcolor:'#07a3b2'}}>
                        <Stack sx={icons} direction="column" spacing={4}>
                            <Link style={link} to='/'>
                                <HomeIcon sx={{width:'35px', height:'35px', color:'white', marginTop:'20px'}}/>
                            </Link>
                            <Link style={link} to='/management/setup'>
                                <PermContactCalendarIcon sx={{width:'30px', height:'45px', color:'white', marginTop:'20px'}}/>
                            </Link>
                            <Link style={link} to='/management/articles'>
                                <PaidIcon sx={{width:'30px', height:'30px', color:'white', marginTop:'20px'}}/>
                            </Link>
                            <Link style={link} to='/management/comments'>
                                <CollectionsIcon sx={{width:'30px', height:'35px', color:'white', marginTop:'20px'}}/>
                            </Link>
                            <Link style={link} to='/management/contacts'>
                                <MeetingRoomIcon sx={{width:'30px', height:'35px', color:'white', marginTop:'20px'}}/>
                            </Link>
                            <Link style={link} to='/management/mail-list'>
                                <MyLocationIcon sx={{width:'30px', height:'35px', color:'white', marginTop:'20px'}}/>
                            </Link>
                        </Stack>  
                        <Box sx={{height:'10vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Box sx={avatar}>
                                <img alt={'icon'} style={{width:'40px', height:'40px', resize:'cover'}} src={user} />
                            </Box>
                        </Box>
                    </Box>
                
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route  path='/management/setup' component={Setup}/>
                        <Route  path='/management/articles' component={Articles}/>
                        <Route  path='/management/comments' component={Comments}/>
                        <Route  path='/management/contacts' component={Contacts}/>
                        <Route  path='/management/mail-list' component={MailList}/>
                    </Switch>
                </Box>
            </Router>
        </React.Fragment>
    )
}

const container = {
    height:'100vh', 
    display:'flex',
    flexDirection:'row',
    padding:"0px"
}

const icons = {
    width:'100%', 
    height:'90vh', 
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}

const avatar = {
    width:'40px', 
    height:'40px', 
    borderRadius:'40px', 
    overflow:'hidden'
}

const link = {
    height:'40px',
    width:'100%',
    marginLeft:'40px'
}

export default Management;