import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton  from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {  Button, Paper, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import './cards.css'
export default function Teamspot()
{
  return (
      <div className='body'>
        <div>
    <Stack direction="row" spacing={4} border="4px" background="black" padding={2}>
    
    <Card sx={{ width:"650px" }} component={Link} to={'/card1'} className='cards2' >
      
      <CardMedia component="img"
       height="400px" 
       image="https://wegotthiscovered.com/wp-content/uploads/2022/08/Marvel-Cinematic-Universe-MCU-1.jpg"
       />
      <CardContent style={{color:"black"}}>
      <Typography variant="h5" fontSize= "120">
     
      Marvel Movies(MCU)<br></br>
       </Typography>
      </CardContent>
      <CardActions className='bord'>
        <IconButton aria-label="share" className='share'>
         <ListIcon/>
        </IconButton>
        <CardContent>
          <Typography variant="body5">playlist</Typography>
        </CardContent>
      </CardActions>
    
    </Card>
    <Card sx={{ width:"650px" }} component={Link} to={'/card2'} className='cards2' >
      
      <CardMedia component="img"
       height="400px" 
       image="https://www.exchange4media.com/news-photo/94139-webmain.jpg"
       />
      <CardContent style={{color:"black"}}>
      <Typography variant="h5" fontSize= "120">
     
      Web Series<br></br>
       </Typography>
      </CardContent>
      <CardActions className='bord'>
        <IconButton aria-label="share" className='share'>
         <ListIcon/>
        </IconButton>
        <CardContent>
          <Typography variant="body5">playlist</Typography>
        </CardContent>
      </CardActions>
    
    </Card>
    <Card sx={{ width:"650px" }} component={Link} to={'/card3'} className='cards2' >
      
      <CardMedia component="img"
       height="400px" 
       image="https://images.squarespace-cdn.com/content/v1/5bfff88170e802806d993220/56245f24-f874-4709-93bf-6702b54e5d13/image-asset.png"
       />
      <CardContent style={{color:"black"}}>
      <Typography variant="h5" fontSize= "120">
     
      Popular Movies<br></br>
       </Typography>
      </CardContent>
      <CardActions className='bord'>
        <IconButton aria-label="share" className='share'>
         <ListIcon/>
        </IconButton>
        <CardContent>
          <Typography variant="body5">playlist</Typography>
        </CardContent>
      </CardActions>
    
    </Card>
   
    
    </Stack>
    <Stack direction="row" spacing={4} border="4px" background="black" padding={2}>
    
    <Card sx={{ width:"650px" }} component={Link} to={'/card4'} className='cards2' >
      
      <CardMedia component="img"
       height="400px" 
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Es27gXLM0-NT83ZLlE7Z85YoWOLrqVaikA&usqp=CAU"
       />
      <CardContent style={{color:"black"}}>
      <Typography variant="h5" fontSize= "120">
     
      Classic content<br></br>
       </Typography>
      </CardContent>
      <CardActions className='bord'>
        <IconButton aria-label="share" className='share'>
         <ListIcon/>
        </IconButton>
        <CardContent>
          <Typography variant="body5">playlist</Typography>
        </CardContent>
      </CardActions>
    
    </Card>
    <Card sx={{ width:"650px" }} component={Link} to={'/card5'} className='cards2' >
      
      <CardMedia component="img"
       height="400px" 
       image="https://i.cbc.ca/1.4946237.1544802342!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/films-collage.jpg"
       />
      <CardContent style={{color:"black"}}>
      <Typography variant="h5" fontSize= "120">
     
      Iconic Movies<br></br>
       </Typography>
      </CardContent>
      <CardActions className='bord'>
        <IconButton aria-label="share" className='share'>
         <ListIcon/>
        </IconButton>
        <CardContent>
          <Typography variant="body5">playlist</Typography>
        </CardContent>
      </CardActions>
    
    </Card>
    <Card sx={{ width:"650px" }} component={Link} to={'/card6'} className='cards2' >
      
      <CardMedia component="img"
       height="400px" 
       image="https://www.pinkvilla.com/english/images/2023/07/1198723768_best-historical-movies_1280*720.jpg"
       />
      <CardContent style={{color:"black"}}>
      <Typography variant="h5" fontSize= "120">
     
      Historical<br></br>
       </Typography>
      </CardContent>
      <CardActions className='bord'>
        <IconButton aria-label="share" className='share'>
         <ListIcon/>
        </IconButton>
        <CardContent>
          <Typography variant="body5">playlist</Typography>
        </CardContent>
      </CardActions>
    
    </Card>
   
    
    </Stack>
    {/* </Paper> */}
    </div>
    <center>
      <Link to="/" >
      <Button variant="contained" style={{backgroundColor:"black"}}>Home</Button>
      </Link>
    </center>
    </div>
  );
}