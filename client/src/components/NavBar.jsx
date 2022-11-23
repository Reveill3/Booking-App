import styled from '@emotion/styled';
import { Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import ButtonGroup from '@mui/material/ButtonGroup';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SpacedButton = styled(Button)({
  marginRight: '10px',
});

const NavBar = () => {
  return (
    <div>
      <AppBar position='static'>
        <StyledToolbar>
          <img
            src='https://res.cloudinary.com/ddq3k3ntz/image/upload/v1669229163/White_logo_-_no_background_oecant.png'
            alt='logo'
            height={100}
            width={200}
          />
          <ButtonGroup variant='contained' color='secondary'>
            <SpacedButton>Login</SpacedButton>
            <SpacedButton>Register</SpacedButton>
          </ButtonGroup>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
