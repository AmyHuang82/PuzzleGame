import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import GlobalStyle, { NavLink } from './index.style';
import Game from './Game';
// import Rank from './Rank';

const Main = () => (
  <HashRouter basename="/puzzle-game/">
    <NavLink to="/" exact>
      Game
    </NavLink>
    <NavLink to="/rank" exact>
      Rank
    </NavLink>

    <Route path="/" exact component={Game} />
    <Route path="/rank" exact rnder={() => <div>Rank</div>} />
    <GlobalStyle />
  </HashRouter>
);

window.addEventListener('load', () => {
  ReactDOM.render(<Main />, document.getElementById('root'));
});
