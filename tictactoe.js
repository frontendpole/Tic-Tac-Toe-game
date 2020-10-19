import GameTable from './GameTable.js';
import Header from "./Header.js";
import NewGameButton from "./NewGameButton.js";
import ResultTable from "./ResultTable.js";

class TicTacToe {
    constructor() {
        this.welcomeHeader = new Header();
        this.newGameBtn = new NewGameButton();
        this.gameTable = new GameTable();
        this.resultTable = new ResultTable();
        document.querySelector('button').addEventListener('click', this.newGameHandler.bind(this));
    }

    newGameHandler() {
        this.gameTable.resetGame();
    };
}

const game = new TicTacToe();