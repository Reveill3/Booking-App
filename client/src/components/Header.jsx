import { Box, Button, Typography } from '@mui/material';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const StyledVideo = styled('video')({
  width: '100%',
});

const SearchBarPaper = styled(Paper)({
  width: '60vw',
  height: '70px',
  borderRadius: '40px',
  display: 'flex',
  alignItems: 'center',
});

const Header = () => {
  return (
    <Box sx={{ width: '100vw', position: 'relative' }}>
      <StyledVideo
        src='https://res.cloudinary.com/ddq3k3ntz/video/upload/v1669230118/Pexels_Videos_1437396_zafgx1.mp4'
        autoPlay
        loop
        muted
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '-25px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack direction='row' spacing={2}>
          <SearchBarPaper>
            <Typography variant='h5'>Reservation Bar</Typography>
          </SearchBarPaper>
          <Button variant='contained'>Check Availability</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
