import React from 'react';

function GameCounter(props) {
    return (
        <div className="counter">Total Moves：<span>{props.count}</span></div>
    );
}


export default GameCounter;