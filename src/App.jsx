import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OutputList from './Pages/outputList';
import DataProvider from './Contexts/DataContext';
import './App.css';
import Home from './Pages/InputPage';
import { ErrorScreen, GanttChart } from './Pages';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<OutputList />} />
            <Route path="/create" element={<Home />} />
            <Route path="/:projectId/gantt" element={<GanttChart />} />
            <Route path="error/:errorCode?" element={<ErrorScreen />} />
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
