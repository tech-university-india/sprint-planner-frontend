import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { Navbar, Footer } from './Components';
import GlobalContextProvider from './Contexts';
import { ErrorScreen, InputPage } from './Pages';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <GlobalContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<InputPage />} />
            <Route path="error/:errorCode?" element={<ErrorScreen />} />
          </Routes>
        </Router>
      </GlobalContextProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
