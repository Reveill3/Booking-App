import { Container } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import About from './About';
import { Box } from '@mui/material';

const Home = () => {
  const theme = useTheme();
  return (
    <div>
      <NavBar />
      <Header />
      <Box sx={{ backgroundColor: 'lightgrey', height: '100vh' }}>
        <Container>
          <About />
        </Container>
      </Box>
    </div>
  );
};

export default Home;
