import React, { createContext, useState } from 'react'; // , useEffect
import PropTypes from 'prop-types';

const GlobalContext = createContext({});

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <GlobalContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContextProvider;
