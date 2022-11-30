import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Cars from './pages/Cars';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reservation from './pages/Reservation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Hour 2 Start
const theme = createTheme({
  palette: {
    primary: {
      main: '#37474f',
      light: '#62727b',
      dark: '#1c313a',
    },
    secondary: {
      main: '#e0e0e0',
      light: '#ffffff',
      dark: '#aeaeae',
    },
  },
});

const Layout = () => {
  return (
    <div className='app'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cars', element: <Cars /> },
      { path: '/reservation', element: <Reservation /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
