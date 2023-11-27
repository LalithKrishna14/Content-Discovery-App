import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from './imagered.jpg';
const logoUrl = 'https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P4V000011msraUAA';

function Copyright() {
  return (
    <Typography  variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        DiscoverMoviz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>

      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="static" sx={{ backgroundColor: '#333' }}>
          <Toolbar>
            <img src={logoUrl} alt="Logo" style={{ marginRight: '10px', height: '40px', width: 'auto' }} />
            <Typography variant="h6" color="error" noWrap sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              DiscoverMoviz
            </Typography>
            <Box>
              <Button href="./loginform" variant="outlined" sx={{ mx: 1.5, color: 'white', backgroundColor: '#1976D2' }}>
                Login
              </Button>
              <Link to="/">
                <Button href="/" variant="outlined" sx={{ mx: 1.5, color: 'white', backgroundColor: '#1976D2' }} className="home-button">
                  Back
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <main>
          <Box
            sx={{
              bgcolor: 'Black',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h5"
                variant="h4"
                align="center"
                color="white"
                gutterBottom
              >
                OUR TOP MOVIES !!
              </Typography>
              <Typography variant="h6" align="center" color="white" paragraph>
                Embark on an exhilarating cinematic journey with our carefully curated selection of top movies. Immerse yourself in a world where storytelling meets brilliance, as each frame unfolds a captivating narrative"
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              />
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: '57.25%',
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                      
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Movie
                      </Typography>
                      <Typography>
                       Synopsis of the movie.....
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Movie Info</Button>
                      <Button size="small">Rating</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
          </Container>
        </main>
        <Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
          <Typography color="white" variant="h6" align="center" gutterBottom>
            Find us on !
          </Typography>
          
          <Grid item xs={12}  sm={800} md={300} style={{ display: 'flex', justifyContent: 'space-evenly' }} >
                <Typography variant="body1" color="white">
                   <div className='sec'>
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                   </div>
                </Typography>
            </Grid>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
           
          </Typography>
          <Copyright />
        </Box>
      </ThemeProvider>
    </div>
  );
}
