import React from 'react';

class RankingShow extends React.Component {
    constructor(props) {
        super(props);

        let playerList = JSON.parse(localStorage.getItem('player')) || [];

        this.state = {
            players: playerList
        }

    }
    updateLocalStorage() {
        let playerList = JSON.parse(localStorage.getItem('player')) || [];
        this.setState({ players: playerList });
    }
    render() {
        return (
            <div onLoad={this.updateLocalStorage.bind(this)}>
                <h1>Ranking</h1>
                <div className="ranking-table">
                    <p className="title">Rank</p>
                    <p className="title">Name</p>
                    <p className="title">Moves</p>
                    {
                        this.state.players.map((player, index) => {
                            return (
                                <div className="ranking-table" key={index}>
                                    <p>{player.rank}</p>
                                    <p>{player.name}</p>
                                    <p>{player.moves}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default RankingShow;