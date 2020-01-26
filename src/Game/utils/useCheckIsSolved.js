import { useState } from 'react';

const useCheckIsSolved = () => {
  const [isSolved, setIsSolved] = useState(false);

  const checkIsSolved = (initialArray, compareArray) => {
    let result = false;

    for (let i = 0; i < compareArray.length; i++) {
      if (initialArray[i] === compareArray[i]) {
        result = true;
      } else {
        result = false;
        break;
      }
    }

    if (result) {
      setIsSolved(true);
    }
  };

  return [isSolved, setIsSolved, checkIsSolved];
};

export default useCheckIsSolved;
