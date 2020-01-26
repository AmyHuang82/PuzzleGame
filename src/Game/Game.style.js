import styled, { css } from 'styled-components';

// colors
const BLOCK_COLOR = '#A6E6FF';
const BORDER_COLOR = '#08358A';
const TRANSLUCENT = ' rgba(0, 0, 0,0.5)';
const WHITE = 'white';

const BORDER_SIZE = 300;

export const Container = styled.div`
  width: ${BORDER_SIZE}px;
  margin: 0 auto;
  font-size: 20px;
`;

export const Counter = styled.div`
  margin-bottom: 10px;
`;

export const BlocksBox = styled.div`
  position: relative;
  height: ${BORDER_SIZE}px;
  display: flex;
  flex-flow: row wrap;
  border: 1px solid ${BORDER_COLOR};
`;

const invisibleStyle = css`
  font-size: 0;
  background-color: ${WHITE};
`;

const visibleStyle = css`
  background-color: ${BLOCK_COLOR};
`;

export const Block = styled.div`
  width: 33.333%;
  height: 33.333%;
  border: 1px solid ${BORDER_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${BORDER_COLOR};

  ${({ number }) => (number === 0 ? invisibleStyle : visibleStyle)}
`;

export const StartModal = styled.div`
  display: ${({ isStart }) => (isStart ? 'none' : 'flex')};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${TRANSLUCENT};
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: inherit;
  text-align: center;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50px;
`;
