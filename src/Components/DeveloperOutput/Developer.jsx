import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Story from '../StoryOutput/Story';
import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Tile from '../Tile/Tile';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const Developer = (props) => {
  const { content, developerName } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#eeeeee',
    border: '2px solid lightgrey',
    pt: 2,
    px: 4,
    pb: 3,
  };
  let theme = createTheme({
    typography: {
      fontSize: 13,
      fontWeightBold: 300,
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <React.Fragment>
      <Tile handleOpen={handleOpen}> Developer ({developerName})</Tile>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box width={2 / 3} p={3} sx={{ ...style, borderRadius: 2 }}>
          <Box
            display="flex"
            sx={{
              bgcolor: 'lightblue',
              color: 'white',
              width: '100%',
              borderRadius: 2,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderBottom: '5px solid white',
              // borderTopRightRadius: 5,
              height: 50,
            }}
          >
            <Typography variant="h4" theme={theme} m="auto">
              DEVELOPER ({developerName})
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {content.map((story, index) => (
              <Grid item xs={12} key={index}>
                <Story
                  id={story.id}
                  dependencies={story.dependencies}
                  startDay={story.startDay}
                  endDay={story.endDay}
                  developers={story.developers}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
Developer.propTypes = {
  developerName: PropTypes.string,
  content: PropTypes.array,
};
export default Developer;
