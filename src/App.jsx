import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, Footer } from './Components';
import GlobalContextProvider from './Contexts';
import { ErrorScreen, Home, GanttChart } from './Pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:projectId" element={<Home />} />
            <Route path="/:projectId/gantt" element={<GanttChart />} />
            <Route path="error/:errorCode?" element={<ErrorScreen />} />
          </Routes>
        </Router>
      </GlobalContextProvider>
      <Footer />
    </div>
  );
}

export default App;
