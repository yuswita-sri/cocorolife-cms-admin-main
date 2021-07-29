import Box from '@material-ui/core/Box';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import LogoSuksesSeller from '../../../components/LogoSuksesSeller';
import Logo from '../../../components/Logo';
import Page from '../../../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 450,
  margin: 'auto',
  display: 'flex',
  minHeight: '90vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(2, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login Cocoro Seller">
      <Container maxWidth="sm">
        <ContentStyle>
          <Box border={8} p={2} borderRadius={3} borderColor="#AA3E89">
            <Logo />
            <LogoSuksesSeller />
            <Box justifyContent="center">Anda berhasil melakukan Login!</Box>
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
