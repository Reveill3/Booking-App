import { Container } from '@mui/system';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import About from './About';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const theme = useTheme();
  return (
    <div>
      <NavBar />
      <Header />
      <Box
        sx={{ backgroundColor: theme.palette.primary.light, height: '100vh' }}
      >
        <Container>
          <About />
        </Container>
      </Box>
    </div>
  );
};

export default Home;
