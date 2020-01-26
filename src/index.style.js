import styled, { createGlobalStyle } from 'styled-components';
import { NavLink as OrigNavLink } from 'react-router-dom';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  div {
    text-align: center;
  }
`;

export const NavLink = styled(OrigNavLink).attrs({
  activeStyle: {
    backgroundColor: 'rgb(165, 165, 165)',
    color: 'white',
  },
})`
  display: inline-block;
  width: 50%;
  margin-bottom: 50px;
  border: 1px solid rgb(165, 165, 165);
  border-top: none;
  cursor: pointer;
  font-size: 20px;
  border-radius: 0 0 5px 5px;
  color: gray;
  outline: none;
  text-decoration: none;
  padding: 10px 0;
`;
