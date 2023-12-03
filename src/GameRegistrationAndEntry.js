import React, { useState } from 'react';
import Player from './Player';


function GameRegistrationAndEntry() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [playerState, setPlayerState] = useState({
    name: '',
    score: 0,
    moves: 0,
    averagePositions: 0,
    status: true,
    winners: 0,
  });
  const [addNewPlayer, setAddNewPlayer] = useState(
    JSON.parse(localStorage.getItem('historyPlayers')) || []
  );
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [chooseStartGame, setChooseStartGame] = useState(false);

  const handleRegistration = () => {
    const existingUser = addNewPlayer.some((player) => player.name === userName);

    if (!userName || !password) {
      setShowError(true);
      setErrorMessage('נא להזין גם שם משתמש וגם סיסמה');
      return;
    }

    else if (existingUser) {
      setShowError(true);
      setErrorMessage('השם כבר קיים');
      return;
    }
    else{
        setErrorMessage(' התחל משחק נרשמת בהצלחה');
    }

    playerState.name = userName;
    setAddNewPlayer((prevPlayers) => [...prevPlayers, playerState]);
    localStorage.setItem('historyPlayers', JSON.stringify([...addNewPlayer, playerState]));

    setUserName('');
    setPassword('');
    setChooseStartGame(true);
  };

  return (
    <div className="game-registration-and-entry">
      <h1>Welcome to the game</h1>
      <h1>Get to 100</h1>

      {showError && <p className="error-message">{errorMessage}</p>}

      <div className="login">
        <label>
          שם משתמש:
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <br />
        <label>
          סיסמה:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button onClick={handleRegistration}>הירשם</button>
      </div>

      {/* {chooseStartGame && <Player playerState={playerState} />} */}
    </div>
  );
}

export default GameRegistrationAndEntry;
