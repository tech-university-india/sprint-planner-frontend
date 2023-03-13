import Button from '@mui/material/Button';
import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ handleOpen, children }) => (
  <Button
    sx={{
      ':hover': {
        bgcolor: 'white',
        color: 'black',
        border: '1px solid black',
        fontWeight: 600,
      },
      fontSize: 15,
      boxShadow: 1,
      border: '1px solid lightgrey',
      bgcolor: 'white',
      color: 'black',
      fontWeight: 500,
    }}
    variant="outlined"
    onClick={handleOpen}
    fullWidth={true}
  >
    {children}
  </Button>
);

Tile.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Tile;
