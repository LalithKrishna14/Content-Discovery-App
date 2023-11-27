import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import './Supscription.css';
import backgroundImage from './imagered.jpg';



const logoUrl = 'https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P4V000011msraUAA';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://DiscoverMoviz.com/">
        DiscoverMoviz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
    {
      title: 'Free',
      price: '0',
      description: [
          'contains ADDs',
          'upto 720p',
          'Dolby 2.1 enabled',
          'Only Selected movies',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'contained',
      linkTo: '/loginform',
      // buttonVariant: 'outlined',
    },
    {
      title: 'PLUS+',
      subheader: 'Most popular',
      price: '999',
      description: [
        'ADDs free streaming',
        'upto 1080p',
        'Dolby 4.1 enabled',
        'Includes TV shows&webseries',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'PremiumPLUS+',
      price: '1999',
      description: [
          'ADDs free streaming',
          'upto 4K',
          'DolbyAtoms enabled',
          'Includes TV shows&webseries',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
  ];
  
  
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: '#333' }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <img src={logoUrl} alt="Logo" style={{ marginRight: '10px', height: '40px', width: 'auto' }} />

          <Typography variant="h6" color="white" noWrap sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            DiscoverMoviz
          </Typography>
          <Box>
            <Button href="./loginform" variant="outlined" sx={{ mx: 1.5, color: 'white' }}>
              Login
            </Button>
          <Link to="/">
          <Button href="/" variant="outlined" sx={{ mx: 1.5, color: 'white' }} className="home-button">Back</Button>
          </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero unit */}
      <marquee style={{ color: 'primary' }}>
  <h3>HURRY UP!!! DECEMBER SALE ON PREMIUMPLUS+ PACK, GRAB 10% OFF ON CHECKOUT WITH CODE: FLAT10+.</h3>
</marquee>
      <Container disableGutters maxWidth="sm"  component="main" sx={{ pt: 3, pb: 3 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="black"
          gutterBottom
        >
          Pricing plans
        </Typography>
        <Typography variant="h5" align="center" color="black" component="p">
          You can enjoy our latest Tv shows and web series in 4K DOLBY ATMOS audio 
          enabled with PremiumPLUS Plan.
        </Typography>
      </Container>

      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ₹{tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          
        </Grid>
      </Container>

      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="white" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
             {footer.description.map((item) => (
               <li key={item}>
                 <Link href="#" variant="subtitle1" color="primary"> 
                   {item}
                 </Link>
               </li>
             ))}
            </ul>

            </Grid>
          ))}
        </Grid>
       
          <Typography color="red" variant="h6" align="bottom" gutterBottom>
            
            
            
          </Typography>
          
          <Grid item xs={12}  sm={900} md={300} style={{ display: 'flex', justifyContent: 'space-evenly' }} >
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
       
      </Container>
      {/* End footer */}
    </ThemeProvider>
    </div>
  );
}
