import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './styles.scss';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';

const Setup = (props) => {
    const matches = useMediaQuery("(max-width:900px)");
    const drawer = () => {
        props.toggleDrawer();
    }
    return(
        <React.Fragment>
            <Box sx={matches?container2:container}>
                <Box sx={matches?header2:header}>
                    {matches&&<IconButton aria-label="share">
                        <MenuIcon onClick={drawer} sx={{width:'30px', height:'30px', color:'#fff'}} />
                    </IconButton>}
                    
                    <Typography sx={matches?headerText2:headerText} variant="h5" component="div">
                        Configuration Setup
                    </Typography>
                </Box>
                <Box sx={matches?section2:section}>
                    <Stack sx={stack} direction="row">
                        <Typography sx={{fontWeight:'bold', color:'#000'}} variant="h6" component="div">
                            Profile
                        </Typography>
                        <Button></Button>
                    </Stack>
                    <Box sx={{width:'100%'}}>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'30px'}} direction="row" spacing={2}>
                            <input placeholder={'First Name'} style={inputText} />
                            <input placeholder={'Last Name'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'Middle Name'} style={inputText} />
                            <input placeholder={'Occupation'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'Profile picture'} style={inputText} />
                            <input placeholder={'Interest'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'Email'} style={inputText} />
                        </Stack>
                        <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
                            <Button sx={button} variant="contained">Update profile</Button>
                        </Box>
                    </Box>
                </Box>

                <Box sx={matches?section3:section}>
                    <Stack sx={stack} direction="row">
                        <Typography sx={{fontWeight:'bold', color:'#000'}} variant="h6" component="div">
                            Categories
                        </Typography>
                        <Button></Button>
                    </Stack>
                    <Box sx={{width:'100%'}}>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'30px'}} direction="row" spacing={2}>
                            <input placeholder={'Category one'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'Category Two'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'Category Three'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'Category Four'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'Category Five'} style={inputText} />
                        </Stack>
                        <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
                            <Button sx={button} variant="contained">Update Category</Button>
                        </Box>
                    </Box>
                </Box>

                <Box sx={matches?section3:section}>
                    <Stack sx={stack} direction="row">
                        <Typography sx={{fontWeight:'bold', color:'#000'}} variant="h6" component="div">
                            Social
                        </Typography>
                        <Button></Button>
                    </Stack>
                    <Box sx={{width:'100%'}}>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'30px'}} direction="row" spacing={2}>
                            <input placeholder={'Facebook'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'Twitter'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'Instagram'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'TikTok'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'LinkedIn'} style={inputText} />
                        </Stack>
                        <Stack ml={1} mr={1} sx={{width:'98%', height:'40px', marginBottom:'10px', marginTop:'10px'}} direction="row" spacing={2}>
                            <input placeholder={'Pinterest'} style={inputText} />
                        </Stack>
                        <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
                            <Button sx={button} variant="contained">Update Social Media</Button>
                        </Box>
                    </Box>
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
    alignItems:'center',
    marginBottom:'60px'
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

const section3 = {
    width:'98%',
    marginTop:'20px',
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
    bgcolor:'#1d445b',
    fontSize:'11px',
    marginTop:'30px',
    marginBottom:'20px',
    '&:hover': {
        backgroundColor: '#1d445b',
        color: '#fff'
    },
    marginRight:'20px'
}

const inputText = {
    flex:1,
    border:'none',
    backgroundColor:'#f7f7f7',
    paddingLeft:'10px',
    borderRadius:'5px'
}

export default Setup;