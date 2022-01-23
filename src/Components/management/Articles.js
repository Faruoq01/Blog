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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TipTap from '../../tiptap/tiptap';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const Articles = (props) => {
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
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                    <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Dashboard"
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem sx={{marginLeft:'10px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                    <ListItemText
                                        sx={{fontSize:'12px'}}
                                        primary="Article"
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
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700, marginTop:'30px', marginBottom:'30px', }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                    <StyledTableCell align="right">Calories</StyledTableCell>
                                    <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
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

export default Articles;