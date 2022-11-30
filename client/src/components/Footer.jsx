import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.light,
        height: '200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link to='/privacy'>Privacy Policy</Link>
      <Link to='/privacy'>Privacy Policy</Link>
      <Link to='/privacy'>Privacy Policy</Link>
      <Link to='/privacy'>Privacy Policy</Link>
    </Box>
  );
};

export default Footer;
