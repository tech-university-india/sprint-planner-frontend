import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Developer from '../DeveloperOutput/Developer.jsx';
import Sprint from '../SprintOutput/Sprint.jsx';
import List from '../List/List.jsx';
import { DataContext } from '../../Contexts/DataContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '75%',
  bgcolor: '#fafafa',
  border: '2px solid lightgrey',
  boxShadow: 4,
};

const ListView = () => {
  const { sprints } = useContext(DataContext);
  const developerIdMapping = {};
  const storiesPerDeveloper = sprints.reduce((acc, sprint) => {
    sprint.forEach((story) => {
      story.developers.forEach((developer) => {
        developerIdMapping[developer.id] = developer.name;
        if (!acc[developer.id]) {
          acc[developer.id] = [];
        }
        if (!acc[developer.id].find((exist) => story.id === exist.id))
          acc[developer.id].push(story);
      });
    });
    return acc;
  }, []);

  return (
    <Box
      p={5}
      sx={{
        ...style,
        display: 'flex',
        justifyContent: 'space-around',
        borderRadius: 10,
      }}
    >
      <List
        heading="Sprints"
        contents={sprints}
        developerIdMapping={developerIdMapping}
      >
        <Sprint />
      </List>

      <List
        heading="Developers"
        contents={storiesPerDeveloper}
        developerIdMapping={developerIdMapping}
      >
        <Developer />
      </List>
    </Box>
  );
};

export default ListView;
