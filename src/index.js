import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import RankingShow from './RankingShow';

class Main extends React.Component {
    render() {
        return (
            <Router>
                <Link to="/PuzzleGame/" className="category">Game</Link>
                <Link to="/PuzzleGame/ranking" className="category">Rank</Link>


                <Route path="/" exact render={
                    () => {
                        return (<App />);
                    }
                } />

                <Route path="/ranking" exact render={
                    () => {
                        return (<RankingShow />);
                    }
                } />
            </Router>
        );
    }
}

window.addEventListener('load', () => {
    ReactDOM.render(<Main />, document.getElementById('root'));
});