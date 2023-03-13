import {
  Typography,
  Box,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';

import React from 'react';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Title() {
  return (
    <Box
      component="span"
      mx="auto"
      display="flex"
      sx={{ mt: 2 }}
      width={300}
      height={60}
      bgcolor="lightblue"
    >
      <Typography variant="h4" theme={theme} m="auto" gutterBottom>
        Project Title
      </Typography>
    </Box>
  );
}
