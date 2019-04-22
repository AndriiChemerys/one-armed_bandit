class Game {
    constructor() {
        this.stats = new Statistics();
        this.wallet = new Wallet(100);
        document.getElementById('start').addEventListener('click', this.startGame);
        this.spanWallet = document.querySelcetor('.panel span.wallet');
        this.boards = document.querySelector('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

    }
    render() {

    }

    startGame() {

    }
}