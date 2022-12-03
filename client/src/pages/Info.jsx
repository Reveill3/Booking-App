import {
  Container,
  TextField,
  Box,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton } from '@mui/material';
import ReservationTimeline from '../components/Timeline';
import { useState } from 'react';

const Info = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [insurance, setInsurance] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  console.log(insurance);
  return (
    <Container maxWidth='lg'>
      <Box sx={{ display: 'flex', marginTop: '50px', marginBottom: '50px' }}>
        <Box sx={{ flex: 1 }}>
          <ReservationTimeline />
        </Box>
        <Stack sx={{ flex: 2 }} gap={5}>
          <Box gap={5} display='flex'>
            <TextField
              name='firstName'
              label='First Name'
              variant='outlined'
              onChange={handleChange}
            />
            <TextField
              name='lastName'
              label='Last Name'
              variant='outlined'
              onChange={handleChange}
            />
          </Box>
          <TextField
            name='email'
            label='Email'
            variant='outlined'
            onChange={handleChange}
          />
          <TextField
            name='phone'
            label='Phone'
            variant='outlined'
            onChange={handleChange}
          />
          <TextField
            name='address'
            label='Address'
            variant='outlined'
            onChange={handleChange}
          />
          <Box sx={{ display: 'flex' }}>
            <input
              type='file'
              id='insurance'
              style={{ display: 'none' }}
              onChange={(e) =>
                setInsurance(URL.createObjectURL(e.target.files[0]))
              }
            />
            <label htmlFor='insurance' style={{ cursor: 'pointer' }}>
              <AttachFileIcon sx={{ width: '35px', height: '35px' }} />
            </label>
            <Typography variant='subtitle1'>Upload Insurance Card</Typography>
          </Box>
          <Button variant='contained'>Continue To Payment</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Info;
