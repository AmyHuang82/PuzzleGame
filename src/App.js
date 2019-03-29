import React from 'react';
import PlayerInput from './PlayerInput';
import GameCounter from './GameCounter';
import PuzzleBlock from './PuzzleBlock';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blocks: [1, 2, 3, 4, 5, 6, 7, 8, 0],
            count: 0,
            result: "",
            start: false,
            name: ""
        }

    }
    playerNameInput(e) {
        this.setState({ name: e.target.value });
    }
    shuffleNumber(e) {
        if (this.state.name === "") {
            alert("請輸入玩家名稱");
            return;
        }

        let temporaryValue;
        let randomIndex;
        let blocks = this.state.blocks.slice();

        for (let i = 0; i < blocks.length; i++) {
            // 讓random數字不超過陣列長度
            randomIndex = Math.floor(Math.random() * blocks.length);
            // 儲存現在陣列位置的值，將現在陣列的位置改到random的位置並把原本的值放進random的位置裡
            temporaryValue = blocks[i];
            blocks[i] = blocks[randomIndex];
            blocks[randomIndex] = temporaryValue;
        }

        // 把0換回右下角
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i] === 0) {
                blocks[i] = blocks[8];
                blocks[8] = 0;
            }
        }

        // 遊戲初始
        this.setState({
            name: this.state.name,
            start: true,
            blocks: blocks,
            result: "",
            count: 0
        });
    }
    exchangeNumber(index, e) {
        let count = this.state.count;

        // 交換數字並判斷數字可否交換
        let blocks = this.state.blocks.slice();
        let zeroIndex;
        // 先找到數字0的位置
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i] === 0) {
                zeroIndex = i;
            }
        }
        // 根據數字0的位置判斷目前的數字可否交換
        // 可以再想想XY跟乘三除三有關
        if (zeroIndex === 8) {
            if (index === 5 || index === 7) {
                blocks[zeroIndex] = blocks[index];
                blocks[index] = 0;
                // 計算步數
                count++;
                this.setState({ blocks: blocks });
                this.setState({ count: count });
            }
        } else if (zeroIndex === 7) {
            if (index === 4 || index === 6 || index === 8) {
                blocks[zeroIndex] = blocks[index];
                blocks[index] = 0;
                // 計算步數
                count++;
                this.setState({ blocks: blocks });
                this.setState({ count: count });
            }
        } else if (zeroIndex === 6) {
            if (index === 3 || index === 7) {
                blocks[zeroIndex] = blocks[index];
                blocks[index] = 0;
                // 計算步數
                count++;
                this.setState({ blocks: blocks });
                this.setState({ count: count });
            }
        } else if (zeroIndex === 5) {
            if (index === 2 || index === 4 || index === 8) {
                blocks[zeroIndex] = blocks[index];
                blocks[index] = 0;
                // 計算步數
                count++;
                this.setState({ blocks: blocks });
                this.setState({ count: count });
            }
        } else if (zeroIndex === 4) {
            if (index === 1 || index === 3 || index === 5 || index === 7) {
                blocks[zeroIndex] = blocks[index];
                blocks[index] = 0;
                // 計算步數
                count++;
                this.setState({ blocks: blocks });
                this.setState({ count: count });
            }
        } else if (zeroIndex === 3) {
            if (index === 0 || index === 4 || index === 6) {
                blocks[zeroIndex] = blocks[index];
                blocks[index] = 0;
                // 計算步數
                count++;
                this.setState({ blocks: blocks });
                this.setState({ count: count });
            }
        } else if (zeroIndex === 2) {
            if (index === 1 || index === 5) {
                blocks[zeroIndex] = blocks[index];
                blocks[index] = 0;
                // 計算步數
                count++;
                this.setState({ blocks: blocks });
                this.setState({ count: count });
            }
        } else if (zeroIndex === 1) {
            if (index === 0 || index === 2 || index === 4) {
                blocks[zeroIndex] = blocks[index];
                blocks[index] = 0;
                // 計算步數
                count++;
                this.setState({ blocks: blocks });
                this.setState({ count: count });
            }
        } else {
            if (index === 1 || index === 3) {
                blocks[zeroIndex] = blocks[index];
                blocks[index] = 0;
                // 計算步數
                count++;
                this.setState({ blocks: blocks });
                this.setState({ count: count });
            }
        }

        // 確認是否完成
        let result = false;
        let check = [1, 2, 3, 4, 5, 6, 7, 8, 0];
        for (let i = 0; i < blocks.length; i++) {
            if (check[i] === blocks[i]) {
                result = true;
            } else {
                return
            }
        }
        if (result) {
            let playerList = JSON.parse(localStorage.getItem('player')) || [];
            // 判斷排名
            let name = this.state.name;
            let rank = playerList.length + 1;
            let moves = this.state.count + 1;
            for (let i = 0; i < playerList.length; i++) {
                if (moves < playerList[i].moves) {
                    let currentName = name;
                    name = playerList[i].name;
                    playerList[i].name = currentName;

                    let currentRank = rank;
                    rank = playerList[i].rank;
                    playerList[i].rank = currentRank;

                    let currentMoves = moves;
                    moves = playerList[i].moves;
                    playerList[i].moves = currentMoves;

                } else if (moves === playerList[i].moves) {
                    rank = playerList[i].rank;
                }
            }

            let playRecord = { name: name, rank: rank, moves: moves };
            playerList.push(playRecord);
            localStorage.setItem('player', JSON.stringify(playerList));

            this.setState({
                result: `${this.state.name}恭喜！你用${moves}步完成了！`,
                start: false,
                name: ""
            });
        }
    }
    render() {
        return (
            <div>
                <PlayerInput shuffleNumber={this.shuffleNumber.bind(this)} playerNameInput={this.playerNameInput.bind(this)} value={this.state.name} />
                <GameCounter count={this.state.count} />
                <div className="puzzle">
                    {
                        this.state.blocks.map((block, index) => {
                            return <PuzzleBlock
                                number={block}
                                key={index}
                                index={index}
                                exchangeNumber={this.exchangeNumber.bind(this, index)}
                                start={this.state.start} />
                        })
                    }
                </div>
                <div>{this.state.result}</div>
            </div>
        );
    }
}

export default App;