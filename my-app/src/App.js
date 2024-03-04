import React from 'react';
import './App.css';
import DropdownMenu from './DropdownMenu';
import DialogBox from './DialogBox';
import Box from './Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="background-container-1">
        <DropdownMenu />
        </div>
        <div className="background-container-2">
        <DialogBox />
        </div>
        <Box />
      </header>
    </div>
  );
}

export default App;