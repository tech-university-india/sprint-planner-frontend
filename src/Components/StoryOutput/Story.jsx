import React from 'react';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Tile from '../Tile/Tile';

const Story = ({ id, dependencies, startDay, endDay, developers }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const theme = {
  //   spacing: [0, 2, 3, 5, 8],
  // };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid lightgrey',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <React.Fragment>
      <Tile handleOpen={handleOpen}>STORY {id}</Tile>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Card sx={{ ...style, maxWidth: 250, p: 2 }} variant="outlined">
          <CardHeader
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 0,
              marginLeft: 0.3,
              paddingBottom: 1.5,
            }}
            avatar={
              <Avatar
                sx={{ bgcolor: red[500], height: 50, width: 50 }}
                aria-label="recipe"
              >
                Story
              </Avatar>
            }
          />
          <Divider variant="middle" />

          <p>Story ID: {id}</p>
          <p>
            Dependencies:{' '}
            {dependencies.map((dependency, index) => (
              <li key={index}>{dependency}</li>
            ))}
          </p>
          <p>Start Day: {startDay}</p>
          <p>End Day: {endDay}</p>
          <p>
            All Developers:
            {developers.map((developers, index) => (
              <li key={index}>{developers.name}</li>
            ))}
          </p>
        </Card>
      </Modal>
    </React.Fragment>
  );
};
Story.propTypes = {
  id: PropTypes.number.isRequired,
  dependencies: PropTypes.array.isRequired,
  startDay: PropTypes.number.isRequired,
  endDay: PropTypes.number.isRequired,
  developers: PropTypes.array.isRequired,
};
export default Story;
