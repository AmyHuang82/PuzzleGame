import React from 'react';

function PlayerInput(props) {
  return (
    <div className="player-input">
      <input
        placeholder="Enter Your Name"
        onChange={props.playerNameInput}
        value={props.value}
      />
      <button onClick={props.shuffleNumber}>Start</button>
    </div>
  );
}

export default PlayerInput;
