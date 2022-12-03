import { Container, Stack } from '@mui/material';
import BookingSummary from '../components/BookingSummary';

const Checkout = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Stack justifyContent='space-between' direction='row'>
          <h1>Checkout</h1>
          <BookingSummary />
        </Stack>
      </Container>
    </>
  );
};

export default Checkout;
