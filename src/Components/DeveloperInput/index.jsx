import { Box, Input, Fab, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DeveloperEntry from '../DeveloperEntry';
import './DeveloperInput.css';

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
        alignSelf: 'center',
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

export default function DeveloperInput({
  developerList,
  setDeveloperList,
  deleteCheck,
}) {
  const [id, setId] = useState(
    developerList[developerList.length - 1].id + 1 || 0,
  );
  const [developer, setDeveloper] = useState('');
  const [sprintCapacity, setSprintCapacity] = useState(null);
  const [capacity, setCapacity] = useState(null);

  const removeItem = (id) => {
    let newDeveloperList = developerList.filter(
      (developer) => developer.id !== id,
    );
    setDeveloperList(newDeveloperList);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && developer && capacity && sprintCapacity) {
      const newDeveloper = { id, developer, sprintCapacity, capacity };
      setDeveloperList((developerList) => {
        return [...developerList, newDeveloper];
      });
      setId(id + 1);
      setDeveloper('');
    }
  };
  console.log(developerList.length);
  return (
    <div className="dev-container">
      <div>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr repeat(3, 1fr)',
            p: 1,
            m: 1,
            justifyContent: 'space-between',
            textAlign: 'center',
            bgcolor: 'background.white',
            borderRadius: 1,
            gap: '0 1rem',
          }}
        >
          <Item sx={{ width: '95%' }}>Id</Item>
          <Item sx={{ width: '95%' }}>Developers</Item>
          <Item sx={{ width: '95%' }}>Sprint Capacity</Item>
          <Item sx={{ width: '95%' }}>Capacity</Item>
        </Box>
        <div className="dev-list">
          {developerList.length === 0 ? (
            <h1>No Developers</h1>
          ) : (
            developerList.map((developerInfo) => {
              return (
                <DeveloperEntry
                  key={developerInfo.id}
                  developerInfo={developerInfo}
                  removeItem={removeItem}
                  deleteCheck={deleteCheck}
                />
              );
            })
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: '0 2',
            m: '0 4',
            justifyContent: 'space-around',
            bgcolor: '#345eeb40',
            borderRadius: 6,
            boxShadow: 1,
            alignContent: 'center',
          }}
        >
          <Item>
            <Input
              placeholder="Id"
              type="number"
              name="id"
              // defaultValue={id}
              value={id}
              // onChange={(e) => setDeveloper(e.target.value)}
            />
          </Item>
          <Item>
            <Input
              placeholder="Developer Name"
              type="text"
              name="developer"
              defaultValue="Disabled"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />
          </Item>
          <Item>
            <Input
              placeholder="Sprint Capacity"
              type="number"
              name="sprintCapacity"
              value={sprintCapacity}
              onChange={(e) => setSprintCapacity(e.target.value)}
            />
          </Item>
          <Item>
            <Input
              placeholder="capacity"
              type="number"
              name="capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </Item>
          <Tooltip title="Add Developer" aria-label="add">
            <Fab color="primary" type="submit" aria-label="add">
              +
            </Fab>
          </Tooltip>
        </Box>

        {/* <Button
          sx={{ borderRadius: 6, m: 0 }}
          variant='contained'
          style={{ margin: '0 auto', display: 'flex' }}
          type='submit'
        >
          Add Developer
        </Button> */}
      </form>
    </div>
  );
}

DeveloperInput.propTypes = {
  developerList: PropTypes.array,
  setDeveloperList: PropTypes.func,
  deleteCheck: PropTypes.func,
};
