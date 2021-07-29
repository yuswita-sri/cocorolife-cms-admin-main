import PropTypes from 'prop-types';
// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

LogoSuksesSeller.propTypes = {
  sx: PropTypes.object
};

export default function LogoSuksesSeller({ sx }) {
  return (
    <Box
      component="img"
      src="/static/sukses.svg"
      sx={{ width: 300, height: 150, mt: 8, mb: 15, ml: 6 }}
    />
  );
}
