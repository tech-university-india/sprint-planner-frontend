import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const DataContext = createContext({});
import PropTypes from 'prop-types';

const DataProvider = ({ children }) => {
  const [sprints, setSprints] = useState([]);
  const [apiResponse, setApiResponse] = useState({});
  useEffect(() => {
    let url =
      'http://localhost:8000/api/projects/2a5ba7e2-c073-452b-8d5a-52759ede9b05';
    axios.get(url).then((res) => {
      setApiResponse(res.data.data);
      setSprints(res.data.data.sprints);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        sprints,
        setSprints,
        apiResponse,
        setApiResponse,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DataProvider;
