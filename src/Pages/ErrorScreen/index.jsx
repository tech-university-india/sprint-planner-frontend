import React from 'react';
import { useParams } from 'react-router-dom';

const ErrorScreen = () => {
  const { errorCode } = useParams();
  return (
    <div className="errorScreen">
      <h1>Something seems Wrong here</h1>
      {errorCode ? <h2>Error Code: {errorCode}</h2> : null}
    </div>
  );
};

export default ErrorScreen;
