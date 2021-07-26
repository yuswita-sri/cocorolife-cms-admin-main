import { Link as RouterLink } from 'react-router-dom';
// material
import Box from '@material-ui/core/Box';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
// layouts
// import AuthLayout from '../layouts/AuthLayout';
// components
import Logo from '../components/Logo';
import Page from '../components/Page';
import { LoginForm } from '../components/authentication/loginAdmin';

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
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login Cocoro Superadmin">
      <Container maxWidth="sm">
        <ContentStyle>
          <Box border={8} p={10} borderRadius={3} borderColor="#AA3E89">
            <Logo />
            <LoginForm />
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
