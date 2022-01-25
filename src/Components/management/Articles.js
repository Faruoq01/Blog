import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './styles.scss';
import refresh from '../../assests/refresh.png';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TipTap from '../../tiptap/tiptap';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Articles = ({history}) => {
    const [closeArticle, setCloseArticle] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(false);
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
    return(
        <React.Fragment>
            <Box sx={matches?container2:container}>
                <Box sx={matches?header2:header}>
                    {matches&&<IconButton aria-label="share">
                        <MenuIcon onClick={closeMenu} sx={{width:'30px', height:'30px', color:'#fff'}} />
                    </IconButton>}
                    {anchorEl&&
                        <Box sx={{width:'200px', boxShadow:'0px 0px 8px #000', borderRadius:'10px', position:'absolute', marginLeft:'5px', marginTop:'290px', bgcolor:'#fff'}}>
                            <List sx={{ width: '100%', fontSize:'12px', padding:'0px', marginTop:'20px'}}>
                                <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                    <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Profile"
                                        onClick={()=>{history.push('/login')}}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                    <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Dashboard"
                                        onClick={()=>{history.push('/management/articles')}}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                    <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Article"
                                        onClick={()=>{history.push('/management/comments')}}
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                    <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Comments"
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                    <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Contacts"
                                    />
                                </ListItem>
                                <Divider />
                            </List>
                        </Box>
                    }
                    <Typography sx={matches?headerText2:headerText} variant="h5" component="div">
                        Photography
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
                        <Box sx={{width:'100%', marginTop:'30px'}}>
                            <Box sx={tableHeader}>
                                <Box sx={{width:'25%'}}>
                                    <Typography sx={{marginLeft:'10px',fontWeight:'bold',fontSize:'14px', color:'#fff'}} variant="subtitle1" component="div">
                                        Title
                                    </Typography>
                                </Box>
                                <Box sx={{width:'15%'}}>
                                    <Typography sx={{fontWeight:'bold',fontSize:'14px', color:'#fff'}} variant="subtitle1" component="div">
                                        Category
                                    </Typography>
                                </Box>
                                <Box sx={{width:'20%'}}>
                                    <Typography sx={{fontWeight:'bold',fontSize:'14px', color:'#fff'}} variant="subtitle1" component="div">
                                        Image
                                    </Typography>
                                </Box>
                                <Box sx={{width:'15%'}}>
                                    <Typography sx={{fontWeight:'bold',fontSize:'14px', color:'#fff'}} variant="subtitle1" component="div">
                                        Created
                                    </Typography>
                                </Box>
                                <Box sx={{width:'15%'}}>
                                    <Typography sx={{fontWeight:'bold',fontSize:'14px', color:'#fff'}} variant="subtitle1" component="div">
                                        Modified
                                    </Typography>
                                </Box>
                                <Box sx={{width:'10%'}}>
                                    <Typography sx={{marginRight:'10px',fontSize:'14px', color:'#fff'}} variant="subtitle1" component="div">
                                        Actions
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={tableRow}>
                                <Box sx={{width:'25%'}}>
                                    <Typography sx={{marginLeft:'10px', fontSize:'14px', color:'#000'}} variant="subtitle1" component="div">
                                        Learn Python Programming
                                    </Typography>
                                </Box>
                                <Box sx={{width:'15%'}}>
                                    <Typography sx={{fontSize:'14px', color:'#000'}} variant="subtitle1" component="div">
                                        Category
                                    </Typography>
                                </Box>
                                <Box sx={{width:'20%'}}>
                                    <Typography sx={{fontSize:'14px', color:'#000'}} variant="subtitle1" component="div">
                                        Image
                                    </Typography>
                                </Box>
                                <Box sx={{width:'15%'}}>
                                    <Typography sx={{fontSize:'14px', color:'#000'}} variant="subtitle1" component="div">
                                        Created
                                    </Typography>
                                </Box>
                                <Box sx={{width:'15%'}}>
                                    <Typography sx={{fontSize:'14px', color:'#000'}} variant="subtitle1" component="div">
                                        Modified
                                    </Typography>
                                </Box>
                                <Box sx={{width:'10%'}}>
                                    <IconButton aria-label="share">
                                        <EditIcon sx={{color:'green'}} />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <DeleteForeverIcon sx={{color:'red'}} />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={tableRow}>
                                <Box sx={{width:'25%'}}>
                                    <Typography sx={{marginLeft:'10px', fontSize:'14px', color:'#000'}} variant="subtitle1" component="div">
                                        Learn Python Programming
                                    </Typography>
                                </Box>
                                <Box sx={{width:'15%'}}>
                                    <Typography sx={{fontSize:'14px', color:'#000'}} variant="subtitle1" component="div">
                                        Category
                                    </Typography>
                                </Box>
                                <Box sx={{width:'20%'}}>
                                    <Typography sx={{fontSize:'14px', color:'#000'}} variant="subtitle1" component="div">
                                        Image
                                    </Typography>
                                </Box>
                                <Box sx={{width:'15%'}}>
                                    <Typography sx={{fontSize:'14px', color:'#000'}} variant="subtitle1" component="div">
                                        Created
                                    </Typography>
                                </Box>
                                <Box sx={{width:'15%'}}>
                                    <Typography sx={{fontSize:'14px', color:'#000'}} variant="subtitle1" component="div">
                                        Modified
                                    </Typography>
                                </Box>
                                <Box sx={{width:'10%'}}>
                                    <IconButton aria-label="share">
                                        <EditIcon sx={{color:'green'}} />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <DeleteForeverIcon sx={{color:'red'}} />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{width:'100%', height:'50px', bgcolor:'#fff', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px'}}></Box>
                        </Box>
                    }
                </Box>
            </Box>
        </React.Fragment>
    )
}

const container = {
    width:"100%", 
    marginLeft:'78px', 
    display:'flex', 
    flexDirection:'column', 
    alignItems:'center'
}

const container2 = {
    width:"100%", 
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