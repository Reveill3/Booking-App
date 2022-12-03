import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import styled from '@emotion/styled';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
const vehicle = {
  id: 1,
  make: 'Tesla',
  model: 'Model 3',
  year: 2021,
  dailyRate: 100,
  primaryImg:
    'https://res.cloudinary.com/dgplbptdj/image/upload/v1669926365/Booking%20App/Vehicles/Tesla_Creative_1_zzqhcj.jpg',
};

const reservation = {
  vehicle: 1,
  startDate: '2021-12-01 10:00:00',
  endDate: '2021-12-05 10:00:00',
};

const DateBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
});

const BookingSummary = () => {
  const days = differenceInCalendarDays(
    new Date(reservation.endDate),
    new Date(reservation.startDate)
  );
  console.log(days);
  return (
    <Stack marginTop={10} gap={2}>
      <Box textAlign='center'>
        <img src={vehicle.primaryImg} alt='' width='215px' height='137px' />
      </Box>
      <Typography variant='h5' fontWeight={700} textAlign='center'>
        {vehicle.make} {vehicle.model} {vehicle.year}
      </Typography>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <DateBox>
          <Typography variant='body1' fontWeight={700}>
            {format(new Date(reservation.startDate), 'EEE MMM dd, yyyy')}
          </Typography>
          <Typography variant='body2' fontWeight={300}>
            10:00 AM
          </Typography>
        </DateBox>
        <DoubleArrowIcon fontSize='medium' />
        <DateBox>
          <Typography variant='body1' fontWeight={700}>
            {format(new Date(reservation.endDate), 'EEE MMM dd, yyyy')}
          </Typography>
          <Typography variant='body2' fontWeight={300}>
            10:00 AM
          </Typography>
        </DateBox>
      </Box>
      <Typography variant='body1' fontWeight={700}>
        Delivery Location
      </Typography>
      <Box display='flex' alignItems='center' gap={3}>
        <FlightTakeoffIcon fontSize='large' />
        <Typography variant='body2' fontWeight={400}>
          DFW Airport
        </Typography>
      </Box>
    </Stack>
  );
};

export default BookingSummary;
