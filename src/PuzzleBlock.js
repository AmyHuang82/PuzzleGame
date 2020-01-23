import React from 'react';

function PuzzleBlock(props) {
  const number = props.number;

  // 如果number是0就不顯示字且不可被點擊
  let className;
  let enableClick;
  if (number === 0) {
    className = 'puzzle-block blank';
    enableClick = function() {};
  } else {
    className = 'puzzle-block';
    // 遊戲者尚未點選start前不可讓數字被點擊
    if (props.start) {
      enableClick = props.exchangeNumber;
    }
  }

  return (
    <div className={className} onClick={enableClick}>
      {number}
    </div>
  );
}

export default PuzzleBlock;
