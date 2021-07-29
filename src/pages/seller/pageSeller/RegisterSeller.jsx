import Box from '@material-ui/core/Box';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Logo from '../../../components/Logo';
import Page from '../../../components/Page';
import RegisterSellerForm from './RegisterSellerForm';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(5, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Register Cocoro Seller">
      <Container maxWidth="sm">
        <ContentStyle>
          <Box border={8} p={2} borderRadius={3} borderColor="#AA3E89">
            <Logo />
            <RegisterSellerForm />
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
