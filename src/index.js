import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, IndexRoute } from 'react-router-dom';
import App from './App';
import RankingShow from './RankingShow';

class Main extends React.Component {
    render() {
        return (
            // 加上＃可以讓網頁不會重新導入到其他頁面重刷就不會出錯
            <Router basename={"/PuzzleGame/#/"}>
                <NavLink to="/" exact className="category" activeStyle={{ backgroundColor: "rgb(165, 165, 165)", color: "white" }}>Game</NavLink>
                <NavLink to="/ranking" exact className="category" activeStyle={{ backgroundColor: "rgb(165, 165, 165)", color: "white" }}>Rank</NavLink>

                <IndexRoute render={
                    () => {
                        return (<App />);
                    }
                } />

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