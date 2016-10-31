function Gomoku() {
    this.chessboardSize = 15;// 棋盘大小
 
    this.chessState = [];// 保存落子情况，二维数组，i表示行，j表示列
    this.gameover = false;
    this.round = 0;
    this.chessCount = 0;
    this.gameResult = '';
    this.operationLog = [];  
    this.chess = ['', 'black', 'white'];
    this.role = {
        human: 1, // 'black'
        AI: 2 //'white'
    };
 
    this.turn = this.role.human;
    this.chessClass = {
        white: 'white-chess',
        black: 'black-chess',
        last: 'last-chess'
    };
    this.locale = {};
}