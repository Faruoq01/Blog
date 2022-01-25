import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './styles.scss';
import refresh from '../../assests/refresh.png';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TipTap from '../../tiptap/tiptap';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 250 },
    { field: 'category', headerName: 'Category', width: 200 },
    { field: 'image', headerName: 'Image', width: 200 },
    { field: 'created', headerName: 'Created', width: 200 },
    { field: 'modified', headerName: 'Modified', width: 200 },
  ];
  
  const rows = [
    { id:'1', title: 'Learn python programming', category: 'Programming', image: 'dog.png', created: '35/12/23', modified:'35/12/23' },
    { id:'2', title: 'Learn python programming', category: 'Programming', image: 'dog.png', created: '35/12/23', modified:'35/12/23' },
    { id:'3', title: 'Learn python programming', category: 'Programming', image: 'dog.png', created: '35/12/23', modified:'35/12/23' },
  ];

const Articles = ({history}) => {
    const [closeArticle, setCloseArticle] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(false);
    const anchor = 'bottom';
    const matches = useMediaQuery("(max-width:900px)");
    const createArticle = () => {
        setCloseArticle(true);
    }
    const closeEditor = () => {
        setCloseArticle(false);
    }
    const closeMenu = () => {
        setAnchorEl(!anchorEl)
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      );
    return(
        <React.Fragment>
            <Box sx={matches?container2:container}>
                <Box sx={matches?header2:header}>
                    {matches&&<IconButton aria-label="share">
                        <MenuIcon onClick={toggleDrawer(anchor, true)} sx={{width:'30px', height:'30px', color:'#fff'}} />
                    </IconButton>}
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}>
                        {list(anchor)}
                    </SwipeableDrawer>
                    <Typography sx={matches?headerText2:headerText} variant="h5" component="div">
                        Articles
                    </Typography>
                </Box>
                <Box sx={matches?section2:section}>
                    <Stack sx={stack} direction="row">
                        <Typography sx={{fontWeight:'bold', color:'#000'}} variant="h6" component="div">
                            List of articles
                        </Typography>
                        {!closeArticle?
                            <Button sx={button} onClick={createArticle} variant="contained">New Article</Button>:
                            <Button sx={button} onClick={closeEditor} variant="contained">Close Editor</Button>
                        }
                    </Stack>
                    <div id='table-caption2'>
                        <div id='search-container'>
                            {!anchorEl&&<IconButton aria-label="share">
                                <SearchIcon />
                            </IconButton>}
                            <input type="text" placeholder={'Filter or search by name'} />
                        </div>
                        <button id='refresh-button'><img id='reload' src={refresh} alt='icon' /></button>
                        <button id='refresh-button2'>Search</button>
                    </div>
                    {closeArticle?
                        <TipTap />:
                        <div style={{width:'100%', marginTop:'30px'}}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                                autoHeight
                            />
                        </div>
                    }
                </Box>
            </Box>
        </React.Fragment>
    )
}

const container = {
    width:"92%", 
    marginLeft:'78px', 
    display:'flex', 
    flexDirection:'column', 
    alignItems:'center'
}

const container2 = {
    width:"98%", 
    marginLeft:'0px', 
    display:'flex', 
    flexDirection:'column', 
    alignItems:'center'
}

const header = {
    width:'100%',
    height:'50px',
    display:'flex',
    flexDirection:'row', 
    justifyContent:'flex-start'
}

const header2 = {
    width:'100%',
    display:'flex',
    flexDirection:'row', 
    justifyContent:'flex-start',
    alignItems:'center',
    bgcolor:'#1d445b',
    height:'50px',
    boxShadow:'0px 0px 8px #ccc',
    position:'fixed'

}

const headerText = {
    fontWeight:'bold',
    marginLeft:'1%', 
    marginTop:'20px', 
    color:'#fff'
}

const headerText2 = {
    fontWeight:'bold',
    marginLeft:'2px', 
    color:'#fff',
    fontSize:'18px'
}

const section = {
    width:'98%',
    marginTop:'20px',
    borderRadius:'5px', 
    bgcolor:'#fff',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}

const section2 = {
    width:'98%',
    marginTop:'65px',
    borderRadius:'5px', 
    bgcolor:'#fff',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}

const stack = {
    width:'96%',
    display:'flex', 
    justifyContent:'space-between', 
    alignItems:'center',
    marginTop:'20px'
}

const button = {
    fontSize:'12px', 
    bgcolor:'#1d445b',
    fontSize:'11px',
    '&:hover': {
        backgroundColor: '#1d445b',
        color: '#fff'
    },
}

const tableHeader = {
    width:'100%', 
    height:'50px', 
    bgcolor:'#222222',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
}

const tableRow = {
    width:'100%', 
    height:'50px', 
    bgcolor:'#fff',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    border:'1px solid #ccc',
    borderLeft:'transparent',
    borderRight:'transparent',
    borderTop:'transparent'
}

export default Articles;