class TicTacToe {
    constructor() {
      this.gameField = [];
      for (let i=0;i<3;i++) {
        this.gameField[i] = ['-','-','-'];
      }
      this.current = 'x';
      //console.log(this.gameField);
      //console.log(this.current);
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    changeCur() {
      if (this.current == 'x')
        { this.current = 'o';}
        else  { this.current = 'x';}
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.gameField[rowIndex][columnIndex]=='-') {
        this.gameField[rowIndex][columnIndex] = this.current;
        this.changeCur();
      }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
      let count = 0;
      for (let i=0;i<3;i++) {
        for (let j=0;j<3;j++) {
          if (this.gameField[i][j]!='-')
           count++;
        }
      } 
      return (count==9) ?  true : false;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
      if (this.gameField[rowIndex][colIndex]!='-') {
        return this.gameField[rowIndex][colIndex];
      } else {
        return null;
      }
    }
}

module.exports = TicTacToe;
