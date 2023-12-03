import React, { useState } from 'react';

function Player(props) {
  const [currentNumber, setNewPoint] = useState(Math.floor(Math.random() * 100));
  const [counterSteps, setCounterSteps] = useState(0);

  const handleAction = (action) => {
    if (action <= 100 && props.index === props.queueManage) {
      setNewPoint(action);
      setNewPoint((currentNumber) => Math.floor(currentNumber));

      setCounterSteps(counterSteps + 1);
      props.players.moves = counterSteps;
      props.handleAction1(props.index,action);
      if (currentNumber === 100) {
        alert(props.players.name + "ניצחתי")
      }
    } else {
      if (action > 100) alert("הפעולה אינה חוקית");
      if (props.index != props.queueManage) alert("זה לא תורך");
    }
  };

  return (
    <div className="player"
    // style={{ display: props.players.status ? "block" : "none" }}
    >
      <div className="playerDetails">שם השחקן:<p>{props.players.name}</p></div>
      <div className="playerDetails">המספר עומד על :<p>{currentNumber}</p></div>
      <div className="playerDetails">שלבים:<p>{counterSteps}</p></div>
      <input className="buttonActions" type="button" onClick={() => handleAction(currentNumber + 1)} value={"+1"}></input>
      <input className="buttonActions" type="button" onClick={() => handleAction(currentNumber - 1)} value={"-1"}></input>
      <input className="buttonActions" type="button" onClick={() => handleAction(currentNumber * 2)} value={"*2"}></input>
      <input className="buttonActions" type="button" onClick={() => handleAction(currentNumber / 2)} value={"/2"}></input>
      <div>
        <input className="startAgain" type="button" onClick={() => setNewPoint(currentNumber = Math.floor(Math.random() * 100))}
          value={"משחק חדש"} ></input>
      </div>
    </div>
  );
}

export default Player;