import React, { useContext } from 'react';
import Header from '../Components/Header';
import ListView from '../Components/ListView/ListView';
import { DataContext } from '../Contexts/DataContext';

export default function OutputList() {
  const { sprints } = useContext(DataContext);
  return (
    <div>
      {sprints.length ? (
        <React.Fragment>
          <Header />
          <ListView />
        </React.Fragment>
      ) : null}
    </div>
  );
}
