import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Link } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import axios from 'axios'
// Import your background image (adjust the path accordingly)
import backgroundImage from './ProjectBG.jpg';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, seterror] = useState(null);
 
  const handleLogin= async ()=>
  {
    const apiUrl = `http://localhost:3001/data?username=${username}`;
    const response = await axios.get(apiUrl)

    // console.log(response.data[0])
    if(response.data.length !== 0  && response.data[0].username === username && response.data[0].password===password)
    {
      navigate('/')
    }
    else {
      
      seterror('Invalid username or password!')
      navigate('/LoginForm')
    }
  }

  return (
    <div className='Home' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Paper
          elevation={10}
          style={{
            padding: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: grey[5],
            borderRadius: 25,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
          }}
        >
          <Typography variant="h5" style={{ marginBottom: 20, color: blue[500] }}>
            <b>Login</b>
          </Typography>

          <form style={{ width: '100%', marginTop: 10 }}>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              InputProps={{ style: { color: grey[900], borderColor: grey[500] } }}
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{ style: { color: grey[9000], borderColor: grey[5000] } }}
            />
            {/* {errorMessage &&<Typography style={{color : red[400],alignItems:'center'}}>{errorMessage}</Typography>} */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 20, backgroundColor: blue[500], color: grey[50] }}
              onClick={handleLogin}
              href='/'
            >
              Sign In
            </Button>
            <Link href="#" style={{ marginTop: 10, color: blue[500], fontWeight: 'bold' }}>
              Forgot your password?
            </Link>
          </form>
          <Typography variant="body2" color="textSecondary" style={{ marginTop: 20 }}>
            Don't have an account? <Link href="/Register" style={{ color: blue[500], fontWeight: 'bold' }}>Sign Up</Link>
          </Typography>

        </Paper>
      </Container>
    </div>
  );
};

export default LoginForm;
