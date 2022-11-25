import styled from '@emotion/styled';
import { Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SpacedButton = styled(Button)(({ theme }) => ({
  marginRight: '10px',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
}));

const StyledLogo = styled('img')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const MobileMenu = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

const DesktopButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position='static'>
        <StyledToolbar>
          {/* Mobile Menu Button*/}
          <MobileMenu
            onClick={handleClick}
            sx={{ flex: 1, justifyContent: 'left' }}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </MobileMenu>
          <Typography variant='h4' sx={{ display: { sm: 'none' }, flex: 3 }}>
            Rev Rentals
          </Typography>
          <StyledLogo
            src='https://res.cloudinary.com/ddq3k3ntz/image/upload/v1669392582/White_logo_-_no_background_gbijh5.png'
            alt='logo'
            height={100}
            width={200}
          />

          <DesktopButtonGroup variant='contained'>
            <SpacedButton>Login</SpacedButton>
            <SpacedButton>Register</SpacedButton>
          </DesktopButtonGroup>
        </StyledToolbar>
      </AppBar>
      {/* Mobile Friendly Menu */}
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem>
          <SpacedButton sx={{ width: '100%' }}>Login</SpacedButton>
        </MenuItem>
        <MenuItem>
          <SpacedButton>Register</SpacedButton>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavBar;
