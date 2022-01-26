import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import user from '../../assests/user.png';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Setup from '../management/Setup';
import Articles from '../management/Articles';
import Comments from '../management/Comments';
import Contacts from '../management/Contacts';
import MailList from '../management/MailList';
import Dashboard from '../management/Dashboard';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Management = ({history}) => {
    const matches = useMediaQuery("(max-width:900px)");
    const anchor = 'bottom';

    const goToDashboard = ()=>{
        history.push('/');
        window.location.reload();
    }
    const goToSetup = ()=>{
        history.push('/setup');
        window.location.reload();
    }
    const goToArticles = ()=>{
        history.push('/articles');
        window.location.reload();
    }
    const goToComments = ()=>{
        history.push('/comments');
        window.location.reload();
    }
    const goToContacts = ()=>{
        history.push('/contacts');
        window.location.reload();
    }
    const goToMailList = ()=>{
        history.push('/mail-list');
        window.location.reload();
    }

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px', display:'flex', alignItems:'center'}} alignItems="flex-start">
                    <DashboardIcon sx={{width:'20px', height:'20px', color:'#000',marginLeft:'5px', marginBottom:'2px'}}/>
                    <ListItemText
                        sx={{fontSize:'12px', marginLeft:'8px'}}
                        primary="Dashboard"
                        onClick={goToDashboard}
                    />
                </ListItem>
                <Divider />
                <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px', display:'flex', alignItems:'center'}} alignItems="flex-start">
                    <SettingsIcon sx={{width:'20px', height:'20px', color:'#000',marginLeft:'5px', marginBottom:'2px'}}/>
                    <ListItemText
                        sx={{fontSize:'12px', marginLeft:'8px'}}
                        primary="Setup"
                        onClick={goToSetup}
                    />
                </ListItem>
                <Divider />
                <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px', display:'flex', alignItems:'center'}} alignItems="flex-start">
                    <ArticleIcon sx={{width:'20px', height:'20px', color:'#000',marginLeft:'5px', marginBottom:'2px'}}/>
                    <ListItemText
                        sx={{fontSize:'12px', marginLeft:'8px'}}
                        primary="Articles"
                        onClick={goToArticles}
                    />
                </ListItem>
                <Divider />
                <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px', display:'flex', alignItems:'center'}} alignItems="flex-start">
                    <CommentIcon sx={{width:'20px', height:'20px', color:'#000',marginLeft:'5px', marginBottom:'2px'}}/>
                    <ListItemText
                        sx={{fontSize:'12px', marginLeft:'8px'}}
                        primary="Comments"
                        onClick={goToComments}
                    />
                </ListItem>
                <Divider />
                <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px', display:'flex', alignItems:'center'}} alignItems="flex-start">
                    <PermContactCalendarIcon sx={{width:'20px', height:'20px', color:'#000',marginLeft:'5px', marginBottom:'2px'}}/>
                    <ListItemText
                        sx={{fontSize:'12px', marginLeft:'8px'}}
                        primary="Contacts"
                        onClick={goToContacts}
                    />
                </ListItem>
                <Divider />
                <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px', display:'flex', alignItems:'center'}} alignItems="flex-start">
                    <ContactMailIcon sx={{width:'20px', height:'20px', color:'#000',marginLeft:'5px', marginBottom:'2px'}}/>
                    <ListItemText
                        sx={{fontSize:'12px', marginLeft:'8px'}}
                        primary="Mail List"
                        onClick={goToMailList}
                    />
                </ListItem>
                <Divider />
            </List>
        </Box>
      );

    return(
        <React.Fragment>
            <Router>
                <Box sx={container}>
                    {!matches&&
                        <Box sx={{width:'80px', position:'fixed', height:'100vh', bgcolor:'#1d445b'}}>
                            <Stack sx={icons} direction="column" spacing={4}>
                                <Link style={link} to='/'>
                                    <DashboardIcon sx={{width:'35px', height:'35px', color:'white', marginTop:'20px'}}/>
                                </Link>
                                <Link style={link} to='/setup'>
                                    <SettingsIcon sx={{width:'30px', height:'45px', color:'white', marginTop:'20px'}}/>
                                </Link>
                                <Link style={link} to='/articles'>
                                    <ArticleIcon sx={{width:'30px', height:'30px', color:'white', marginTop:'20px'}}/>
                                </Link>
                                <Link style={link} to='/comments'>
                                    <CommentIcon sx={{width:'30px', height:'35px', color:'white', marginTop:'20px'}}/>
                                </Link>
                                <Link style={link} to='/contacts'>
                                    <PermContactCalendarIcon sx={{width:'30px', height:'35px', color:'white', marginTop:'20px'}}/>
                                </Link>
                                <Link style={link} to='/mail-list'>
                                    <ContactMailIcon sx={{width:'30px', height:'35px', color:'white', marginTop:'20px'}}/>
                                </Link>
                            </Stack>  
                            <Box sx={{height:'10vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Box sx={avatar}>
                                    <img alt={'icon'} style={{width:'40px', height:'40px', resize:'cover'}} src={user} />
                                </Box>
                            </Box>
                        </Box>
                    }
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}>
                        {list(anchor)}
                    </SwipeableDrawer>
                    <Switch>
                        <Route exact path='/'>
                            <Dashboard toggleDrawer={toggleDrawer(anchor, true)}/>
                        </Route>
                        <Route path='/setup'>
                            <Setup toggleDrawer={toggleDrawer(anchor, true)}/>
                        </Route>
                        <Route path='/articles'>
                            <Articles toggleDrawer={toggleDrawer(anchor, true)} />
                        </Route>
                        <Route path='/comments'>
                            <Comments toggleDrawer={toggleDrawer(anchor, true)}/>
                        </Route>
                        <Route path='/contacts'>
                            <Contacts toggleDrawer={toggleDrawer(anchor, true)}/>
                        </Route>
                        <Route path='/mail-list'>
                            <MailList toggleDrawer={toggleDrawer(anchor, true)}/>
                        </Route>
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
    padding:"0px",
    bgcolor:'#1d445b'
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