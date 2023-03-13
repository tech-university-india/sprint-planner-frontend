import { Button, Box, Input, Fab } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './StoryInput.css';
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        width: 200,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function StoryInput({ storyList, setStoryList }) {
  const [stories, setStories] = useState('');
  const [dependencies, setDependencies] = useState([]);
  const [developer, setDeveloper] = useState([]);
  const [storyPoints, setStoryPoints] = useState(0);
  const removeItem = (id) => {
    let newStoryList = storyList.filter((story) => story.id !== id);
    setStoryList(newStoryList);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (stories && storyPoints) {
      const newStory = { stories, dependencies, developer, storyPoints };
      const myArray = newStory.dependencies.split(',');
      const myNewArray = myArray.map((item) => {
        return parseInt(item);
      });
      // console.log(myNewArray)
      // console.log(typeof myNewArray)
      newStory.dependencies = myNewArray;
      setStoryList((storyList) => {
        return [...storyList, newStory];
      });
    }
  };
  return (
    <>
      <div className="story-container">
        <Box mx="auto">
          <div>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 2fr) 1fr 1fr',
                ml: 6,
                p: 1,
              }}
            >
              <Item>Stories</Item>
              <Item>Dependencies</Item>
              <Item>Developer</Item>
              <Item>Story Points</Item>
            </Box>
            <div className="story-list">
              {storyList.length === 0 ? (
                <h1>No Stories</h1>
              ) : (
                storyList.map((story) => {
                  const { id, stories, dependencies, developer, storyPoints } =
                    story;
                  return (
                    <>
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(4, 2fr) 1fr 1fr',
                          backgroundColor: 'white',
                          borderRadius: '10px',
                          ml: 6,
                          mt: 1,
                          p: 1,
                        }}
                      >
                        <Item>{stories}</Item>
                        <Item>{dependencies.toString()}</Item>
                        <Item>{developer}</Item>
                        <Item>{storyPoints}</Item>
                        <Fab
                          color="primary"
                          onClick={() => removeItem(id)}
                          aria-label="add"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Fab>
                        <Fab>
                          <FontAwesomeIcon icon={faEdit} />
                        </Fab>
                        {/* // <Button  onClick={() => removeItem(id)}>Remove</Button> */}
                      </Box>
                    </>
                  );
                })
              )}
            </div>
          </div>
          <form className="story-container-form" onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 2fr) 1fr 1fr',
                ml: 6,
                p: 1,
              }}
            >
              <Item>
                <Input
                  type="text"
                  name="story"
                  defaultValue="Disabled"
                  value={stories}
                  placeholder="Enter Story Title"
                  onChange={(e) => setStories(e.target.value)}
                />
              </Item>
              <Item>
                <Input
                  type="text"
                  name="dependencies"
                  value={dependencies}
                  placeholder="Enter Dependencies"
                  onChange={(e) => setDependencies(e.target.value)}
                />
              </Item>
              <Item>
                <Input
                  type="text"
                  name="developers"
                  value={developer}
                  placeholder="Enter Developer"
                  onChange={(e) => setDeveloper(e.target.value)}
                />
              </Item>
              <Item>
                <Input
                  type="text"
                  name="storyPoints"
                  value={storyPoints}
                  placeholder="Enter Story Points"
                  onChange={(e) => setStoryPoints(e.target.value)}
                />
              </Item>
              <div></div>
              <Fab
                variant="contained"
                style={{ margin: '0 auto', display: 'flex' }}
                type="submit"
              >
                +
              </Fab>
            </Box>
          </form>
        </Box>
      </div>
    </>
  );
}

StoryInput.propTypes = {
  storyList: PropTypes.array,
  setStoryList: PropTypes.func,
};
