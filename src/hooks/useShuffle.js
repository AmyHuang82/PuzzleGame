import { useState } from 'react';

const useShuffle = initialArray => {
  const [array, setArray] = useState(initialArray);
  let isSovable = null;

  const checkSovable = arr => {
    let inversion = 0;
    const exceptZeroLength = arr.length - 1;

    for (let i = 0; i < exceptZeroLength; i++) {
      for (let j = 1; j < exceptZeroLength - i; j++) {
        if (arr[i] > arr[i + j]) inversion++;
      }
    }

    // inversion must be even
    if (inversion % 2 === 0) isSovable = true;
    else isSovable = false;
  };

  const shuffle = () => {
    let temporaryValue;
    let randomIndex;
    const shuffleArray = array.slice();

    // random shuffle
    for (let i = 0; i < shuffleArray.length; i++) {
      randomIndex = Math.floor(Math.random() * shuffleArray.length);
      temporaryValue = shuffleArray[i];
      shuffleArray[i] = shuffleArray[randomIndex];
      shuffleArray[randomIndex] = temporaryValue;
    }

    // make 0 to lower right
    for (let i = 0; i < shuffleArray.length; i++) {
      if (shuffleArray[i] === 0) {
        shuffleArray[i] = shuffleArray[8];
        shuffleArray[8] = 0;
      }
    }

    setArray(shuffleArray);
    checkSovable(shuffleArray);
  };

  const shuffleToSovableArray = () => {
    while (!isSovable) shuffle();
  };

  return [array, shuffleToSovableArray];
};

export default useShuffle;
