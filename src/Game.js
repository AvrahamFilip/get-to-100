import React, { useState } from 'react';
import Player from './Player';

function Game() {
  const [selectPlayers, setSelectPlayers] = useState(
    JSON.parse(localStorage.getItem('historyPlayers')) || []
  );
  const [queueManage, setQueueManage] = useState(0);
  const [winner, setWinner] = useState(null);

  const updateSelectPlayers = () => {
    setSelectPlayers(
      JSON.parse(localStorage.getItem('historyPlayers')) || []
    );
  };

  const handleAction = (index, action) => {
    if (action > 100 || index !== queueManage) {
      alert(`הפעולה לא חוקית או שזה לא התור שלך`);
      return;
    }

    const player = selectPlayers[index];
    player.currentNumber = action;
    player.moves += 1;

    if (player.currentNumber === 100) {
      setWinner(player);
    } else {
      let nextQueue = queueManage + 1;
      while (nextQueue < selectPlayers.length && !selectPlayers[nextQueue].status) {
        nextQueue++;
        if (nextQueue === selectPlayers.length) {
          nextQueue =queueManage + 1;
        }
      }
      setQueueManage(nextQueue);
      updateSelectPlayers();
    }
  };

  return (
    <div className="game">
      <div className="divAllPlayer">
        {selectPlayers && selectPlayers.map((element, index) => (
          <Player
            key={index}
            name={element.name}
            index={index}
            players={element}
            queueManage={queueManage}
            changeQueueManage={setQueueManage}
            handleAction1={handleAction}
          />
        ))}
      </div>
      {winner && <p className="winner">{winner.name}:ניצחתי</p>}
    </div>
  );
}

export default Game;
