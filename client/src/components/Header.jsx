import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { DateRangePicker, DateRange } from 'mui-daterange-picker';
import { useState } from 'react';
import { FormGroup } from '@mui/material';
import { format } from 'date-fns';
import './header.css';
import { useNavigate } from 'react-router-dom';

const StyledVideo = styled('video')({
  width: '100%',
});

const SearchBarPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  border: '5px solid #000000',
  width: '60vw',
  height: '95px',
  borderRadius: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '90vw',
    height: '165px',
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '0',
  },
}));

const SearchStack = styled(Stack)(({ theme }) => ({
  position: 'relative',
  marginLeft: '0px !important',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    flexDirection: 'column',

    padding: '0 20px',
  },
}));

const StyledSelect = styled(Select)({
  width: '100%',
});

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  console.log(dateRange);
  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        height: '100%',
        backgroundColor: theme.palette.secondary.dark,
      }}
    >
      <StyledVideo
        src='https://res.cloudinary.com/ddq3k3ntz/video/upload/v1669230118/Pexels_Videos_1437396_zafgx1.mp4'
        autoPlay
        loop
        muted
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '-120px', md: '-25px' },
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <SearchStack direction='row'>
          <SearchBarPaper>
            <FormGroup sx={{ width: '90%' }}>
              <StyledFormControl>
                <InputLabel id='locationLabel'>
                  Pickup/Return Location
                </InputLabel>
                <StyledSelect
                  labelId='locationLabel'
                  id='location'
                  sx={{ flex: 1 }}
                  label='Pickup/Return Location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <MenuItem value='DFW'>DFW Airport</MenuItem>
                  <MenuItem value='STOVALL'>Stovall Park Arlington</MenuItem>
                </StyledSelect>
                <Box>
                  <Typography variant='h6' color={theme.palette.primary.main}>
                    Rental Dates
                  </Typography>
                  <Typography
                    color={theme.palette.primary.main}
                    variant='body1'
                    sx={{ flex: 1, border: '1px solid #000', padding: '5px' }}
                    onClick={() => setOpen(!open)}
                  >
                    {`${format(dateRange.startDate, 'MM/dd/yyyy')} to
                  ${format(dateRange.endDate, 'MM/dd/yyyy')}`}
                  </Typography>
                </Box>
              </StyledFormControl>
            </FormGroup>
          </SearchBarPaper>
          <Box
            sx={{
              position: 'absolute',
              right: { xs: '50px', md: '100px' },
              top: { xs: '-100px', sm: '0' },
            }}
          >
            <DateRangePicker
              open={open}
              toggle={() => setOpen(!open)}
              onChange={(dates) => setDateRange(dates)}
              closeOnClickOutside={true}
            />
          </Box>
          <Button variant='contained' onClick={() => navigate('/cars')}>
            Check Availability
          </Button>
        </SearchStack>
      </Box>
    </Box>
  );
};

export default Header;
