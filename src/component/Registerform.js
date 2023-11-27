// import React from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import { styled } from '@mui/system';

// const StyledContainer = styled(Container)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 2rem;
//   background-color: white;
//   padding: 2rem;
//   border-radius: 16px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;
// const StyledAvatar = styled(Avatar)`
//   background-color: #1976d2;
// `;

// const StyledForm = styled('form')`
//   width: 100%;
//   margin-top: 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   & > * {
//     margin-top: 1rem;
//   }
// `;

// const StyledButton = styled(Button)`
//   margin-top: 2rem;
//   background-color: #1976d2;
//   color: #fff;
//   padding: 0.8rem 2rem;
//   border-radius: 8px;

//   &:hover {
//     background-color: blue;
//   }
// `;

// const RegisterForm = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
    
//     <StyledContainer component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>

//       <StyledAvatar>
//         {/* <LockOutlinedIcon /> */}
//       </StyledAvatar>
//       <Typography component="h1" variant="h5" style={{ marginBottom: '', color: '333' }}>
//         Sign up
//       </Typography>
//       <StyledForm onSubmit={handleSubmit}>
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           id="username"
//           label="Username"
//           name="username"
//           autoFocus
//           InputProps={{
//             style: { borderRadius: 8 },
//           }}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           id="email"
//           label="Email Address"
//           name="email"
//           type="email"
//           InputProps={{
//             style: { borderRadius: 8 },
//           }}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           InputProps={{
//             style: { borderRadius: 8 },
//           }}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           name="confirmPassword"
//           label="Confirm Paassword"
//           type="password"
//           InputProps={{
//             style: { borderRadius: 8 },
//           }}
//         />
//         <StyledButton  href="/Loginform" type="submit" fullWidth variant="contained">
//           Register
//         </StyledButton>
//       </StyledForm>
//     </StyledContainer>
//   );
// };

// export default RegisterForm;
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from './ProjectBG.jpg';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const defaultTheme = createTheme();

export default function SignUp() {
  // const a = React.useState
  const navaigate = useNavigate()
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = () => {
        const api = "http://localhost:3001/data"
      axios.post(api,
            {
                username:username,
                password:password
            })
      .then(res => console.log(res.data))
      .catch(error => console.log(error))

      navaigate("/")
    }

  return (
    <div className='total' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className='Container' style={{
          paddingTop:"100px"
        }} >
          <CssBaseline />
          <Box
             sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               backgroundColor: 'rgba(255, 255, 255, 0.8)',
               borderRadius: 5,
               padding: '30px',
               marginTop: '0%', // Center the box vertically
             }}
          >

          
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label=" Name"
                    autoFocus
                    value={username}
          onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Hereby I allow to send updates via email"
                    name="allowExtraEmails"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/Loginform" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
