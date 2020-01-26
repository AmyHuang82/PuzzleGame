import React, { useState, useEffect } from 'react';
import shuffleToSovableArray from './utils/shuffleToSovableArray';
import useCheckIsSolved from './utils/useCheckIsSolved';
import {
  Container,
  Counter,
  BlocksBox,
  Block,
  StartModal,
  Button,
} from './Game.style';

const Game = () => {
  const initialBlocks = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  const [blocks, setBlocks] = useState(initialBlocks);
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isSolved, setIsSolved, checkIsSolved] = useCheckIsSolved();

  const startAndShuffle = () => {
    setCount(0);
    setBlocks(shuffleToSovableArray(blocks));
    setIsStart(true);
  };

  const getPosition = number => {
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i] === number)
        return {
          x: i % 3,
          y: Math.floor(i / 3),
          index: i,
        };
    }
  };

  const exchnageBlocks = number => {
    const zeroPosition = getPosition(0);
    const numberPosition = getPosition(number);
    const newBlocks = blocks.slice();

    if (
      (zeroPosition.x === numberPosition.x &&
        Math.abs(zeroPosition.y - numberPosition.y) === 1) ||
      (zeroPosition.y === numberPosition.y &&
        Math.abs(zeroPosition.x - numberPosition.x) === 1)
    ) {
      newBlocks[zeroPosition.index] = number;
      newBlocks[numberPosition.index] = 0;
      setBlocks(newBlocks);
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (isStart && blocks[blocks.length - 1] === 0) {
      checkIsSolved(initialBlocks, blocks);
    }

    if (isSolved) {
      setIsStart(false);
      setIsSolved(false);
    }
  }, [blocks, checkIsSolved, initialBlocks, isSolved, isStart, setIsSolved]);

  return (
    <Container>
      <Counter>Moves: {count}</Counter>
      <BlocksBox>
        {blocks.map(number => (
          <Block
            key={number}
            number={number}
            onClick={() => exchnageBlocks(number)}
          >
            {number}
          </Block>
        ))}
        <StartModal isStart={isStart}>
          <Button onClick={startAndShuffle}>Click To Start</Button>
        </StartModal>
      </BlocksBox>
    </Container>
  );
};

export default Game;
