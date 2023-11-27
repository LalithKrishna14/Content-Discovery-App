import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton  from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button, Paper, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Teamspot2()
{
  return (
      <div>
        <div>
    <Paper elevation={12} style={{margin:"50px", background:"black"}}>
    <Stack direction="row" spacing={4}>

    <Card sx={{ width:"1500px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR3,0,140,209_AL_.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        3. The Godfather (1972)<br></br>
        R | 175 min | Crime, Drama<br></br>

       9.2  Rate 100 Metascore<br></br>
       Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>

    <Card sx={{ width:"1400px" }}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR3,0,140,209_AL_.jpg"

      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      The Godfather Part II <br></br>
        R | 175 min | Crime, Drama<br></br>

       9.2  Rate 100 Metascore<br></br>
       The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.        </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>
    <Card sx={{ width:"1400px" }}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      Batman Begins (2005)<br></br>
      Batman Begins (2005)<br></br>

       9.2  Rate 100 Metascore<br></br>
       After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.        </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>
    <Card sx={{ width:"1400px" }}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BMTc4NjEyODE1OV5BMl5BanBnXkFtZTcwMjYzNTkxNA@@._V1_UY209_CR0,0,140,209_AL_.jpg"

      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      Rango (2011) <br></br>
      PG | 107 min | Animation, Action, Adventure<br></br>

       9.2  Rate 100 Metascore<br></br>
       Rango is an ordinary chameleon who accidentally winds up in the town of Dirt, a lawless outpost in the Wild West in desperate need of a new sheriff.

</Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>
   
    </Stack>
    <br></br>
    <br></br>
    <Stack direction="row" spacing={4}>

    <Card sx={{ width:"1500px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BNWI1NjkxM2MtOTU4My00YzQ5LTliNGMtNmFlM2U5NWM3MDY1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_UY209_CR4,0,140,209_AL_.jpg"

      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      Transformers <br></br>
        R | 175 min | Crime, Drama<br></br>

       9.2  Rate 100 Metascore<br></br>
       An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.        </Typography>
        </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>

    <Card sx={{ width:"1400px" }}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BYjBkM2RjMzItM2M3Ni00N2NjLWE3NzMtMGY4MzE4MDAzMTRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY209_CR0,0,140,209_AL_.jpg"

      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      Up (2009)<br></br>
      PG | 96 min | Animation, Adventure, Comedy <br></br>

       9.2  Rate 100 Metascore<br></br>
       78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.  </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>
    <Card sx={{ width:"1400px" }}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BYmI3MmMzMGMtNzc4Ni00YWQ4LWFkMDYtNjVlOWU3ZGZiNjY1XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_UY209_CR0,0,140,209_AL_.jpg"

      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      Casino Royale (2006)<br></br>
      PG-13 | 144 min | Action, Adventure, Thriller<br></br>

       9.2  Rate 100 Metascore<br></br>
       After earning 00 status and a licence to kill, secret agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.        </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>
    <Card sx={{ width:"1400px" }}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg"

      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
        Back to the Future (1985)<br></br>
        R | 175 min | Crime, Drama<br></br>

       9.2  Rate 100 Metascore<br></br>
       Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown. </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>
   
    </Stack>
    <br></br>
    <br></br>
    <Stack direction="row" spacing={4}>

    <Card sx={{ width:"1500px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY209_CR0,0,140,209_AL_.jpg"
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      Pan's Labyrinth (2006) <br></br>
        R | 175 min | Crime, Drama<br></br>

       9.2  Rate 100 Metascore<br></br>
       In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.        </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>

    <Card sx={{ width:"1400px" }}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX140_CR0,0,140,209_AL_.jpg"

      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      Lock, Stock and Two Smoking Barrels (1998)<br></br>
        R | 175 min | Crime, Drama<br></br>

       9.2  Rate 100 Metascore<br></br>
       Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.

</Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>
    <Card sx={{ width:"1400px" }}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i1.wp.com/www.itsagoal.net/wp-content/uploads/2017/02/12x6-goalpost-pvc-itsagoal..jpg?resize=768%2C511&ssl=1"

      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      The Bourne Identity (2002)<br></br>
        R | 175 min | Crime, Drama<br></br>

       9.2  Rate 100 Metascore<br></br>
       A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.  </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>
    <Card sx={{ width:"1400px" }}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://m.media-amazon.com/images/M/MV5BZDMxOGZhNWYtMzRlYy00Mzk5LWJjMjEtNmQ4NDU4M2QxM2UzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY209_CR0,0,140,209_AL_.jpg"

      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      Blood Diamond (2006)<br></br>
        R | 175 min | Crime, Drama<br></br>

       9.2  Rate 100 Metascore<br></br>
       A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.  </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card>
   
    </Stack>
   
    </Paper>
    </div>
    <center>
      <Link to="/" >
      <Button variant="contained" style={{backgroundColor:"black"}}>Home</Button>
      </Link>
    </center>
    </div>
  );
}