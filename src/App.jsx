// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import LoginSeller from './pages/seller/pageSeller/LoginSeller';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
}
