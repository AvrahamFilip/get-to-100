import React, { useState } from 'react';
import GameRegistrationAndEntry from './GameRegistrationAndEntry';
import Game from './Game';
import './App.css';

function App() {
  const [chooseComponent, setChooseComponent] = useState();
  const [selectPlayers, setSelectPlayers] = useState([]);

  const changeComponent = (action) => {
    setChooseComponent(action);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type='button' value={"כניסה"} onClick={() => changeComponent(<GameRegistrationAndEntry />)} />
        <input type='button' value={"משחק"} onClick={() => changeComponent(<Game selectPlayers={selectPlayers} />)} />
      </header>
      {chooseComponent}
    </div>
  );
}

export default App;

