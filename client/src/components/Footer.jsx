import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.light,
        height: '200px',
        marginTop: '50px',
      }}
    ></Box>
  );
};

export default Footer;
