import React, {useState} from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ShareIcon from '@mui/icons-material/Share';
import { Button, CardActionArea, CardActions } from '@mui/material';
import hero from '../../assests/hero.jpeg';
import code from '../../assests/code.png';
import coding from '../../assests/coding.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchBar from "material-ui-search-bar";

const AffiliateMarketting = (props) => {
    const matches = useMediaQuery("(max-width:900px)");
    const [search, setSearch] = useState('');
    const doSomethingWith = () => {

    }

    const ContunueReading = () => {
        props.data.pageHistory.push('/content-page')
    }

    const Empty = () => {
        return(
            <Box sx={empty}>
                <Typography sx={{marginLeft:'8px', fontSize:'12px', marginTop:'1px', color:'#000'}} variant="subtitle1" component="div">
                    No articles has been published in this category!
                </Typography>
            </Box>
        )
    }

    const ArticleCards = (props) => {
        return(
            <Card sx={matches?card2:card1}>
                        <CardActionArea sx={{display:'flex', flexDirection:'column'}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={props.details.image}
                                alt="green iguana"
                                sx={{
                                    width:'100%',
                                }}
                            />
                            <CardContent>
                                <Typography gutterBottom sx={{fontWeight:'bold'}} variant="h6" component="div">
                                    {props.details.title}
                                </Typography>
                                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                        <img style={{width:'15px', height:'15px'}} alt={'icon'} src={code} />
                                        <Typography sx={{marginLeft:'8px', fontSize:'12px', marginTop:'1px', color:'#000'}} variant="subtitle1" component="div">
                                            {props.details.firstCategory}
                                        </Typography>
                                    </Box>
                                    <Box sx={{marginLeft:'20px', display:'flex', flexDirection:'row', alignItems:'center'}}>
                                    <img style={{width:'15px', height:'15px'}} alt={'icon'} src={coding} />
                                    <Typography sx={{marginLeft:'8px', fontSize:'12px', marginTop:'1px', color:'#000'}} variant="subtitle1" component="div">
                                        {props.details.secondCategory}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography mt={2} variant="body2" color="text.secondary">
                                {props.details.caption}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={(e) => ContunueReading(e, "clicked")} sx={buttons} size="small" color="primary">
                                Continue Reading
                            </Button>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
        )
    }
    return(
        <React.Fragment>
            <Box sx={matches?hero2:hero1}>
                <img style={{width:'100%', height:'100%', color:'#fff'}} alt={'category image here'} src={props.data.image} />
            </Box>

            <SearchBar
                style={{marginTop:'20px'}}
                value={search}
                onChange={(newValue) => setSearch(newValue)}
                onRequestSearch={() => doSomethingWith()}
            />
            {/* the blog card starts here*/}
            <Box mt={3} sx={matches?main2:main}>
                <Box sx={matches?cardContainer2:cardContainer1}>
                    {
                        props.data.cards.length == 0? <Empty />:
                        props.data.cards.map((data, index) => <ArticleCards details={data} key={index} />)
                    }
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
                                primary="Affiliate Marketting"
                                />
                            </ListItem>
                            <Divider />
                            <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                <ListItemText
                                sx={{fontSize:'12px'}}
                                primary="Science"
                                />
                            </ListItem>
                            <Divider />
                            <ListItem sx={{margin:'0px',marginTop:'10px', padding:'0px'}} alignItems="flex-start">
                                <ListItemText
                                sx={{fontSize:'12px'}}
                                primary="Public Health"
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
        </React.Fragment>
    )
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
    marginBottom:'20px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
}

const card2 = {
    width:'100%',
    padding:'10px', 
    marginBottom:'20px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
}

const cardContainer1 = {
    width:'70%', 
}

const cardContainer2 = {
    width:'100%', 
}

const hero2 = {
    height:'300px', 
    bgcolor:'#000',
    border: '2px solid black'
}

const hero1 = {
    height:'350px', 
    bgcolor:'#000',
    border: '2px solid black'
}

const empty = {
    width:'100%', 
    height:'200px', 
    bgcolor:'#fff', 
    marginBottom:'20px', 
    borderRadius:'5px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'14px',
    fontWeight:'bold'
}

export default AffiliateMarketting;