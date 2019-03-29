import React from 'react';

function PlayerInput(props) {
    return (
        <div>
            <input placeholder="Enter Your Name" onChange={props.playerNameInput} value={props.value} />
            <button onClick={props.shuffleNumber}>Start</button>
        </div>
    );
}


export default PlayerInput;