import {
  Typography,
  Box,
  createTheme,
  responsiveFontSizes,
  TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import EditIcon from '../../assets/user-pencil-write-ui-education_2023-03-09/user-pencil-write-ui-education@2x.png';

import React, { useState } from 'react';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const InlineEdit = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      id="standard-basic"
      variant="standard"
      type="text"
      placeholder="Enter a title"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

export default function Title() {
  const [value, setValue] = useState();
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
        <InlineEdit
          value={value}
          variant="h4"
          theme={theme}
          setValue={setValue}
        />
        <img src={EditIcon}></img>
      </Typography>
    </Box>
  );
}

InlineEdit.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
