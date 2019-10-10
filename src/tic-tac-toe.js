class TicTacToe {
    constructor() {
      this.gameField = [];
      for (let i=0;i<3;i++) {
        this.gameField[i] = ['-','-','-'];
      }
      this.current = 'x';
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
      if (this.getWinner()||this.isDraw())
        return true;
        else return false;
    }

    getWinner() {
        if (this.checkWin(this.gameField[0][0],this.gameField[0][1],this.gameField[0][2]))
          return this.gameField[0][0];
          else if (this.checkWin(this.gameField[1][0],this.gameField[1][1],this.gameField[1][2]))
            return this.gameField[1][0];
            else if (this.checkWin(this.gameField[2][0],this.gameField[2][1],this.gameField[2][2]))
              return this.gameField[2][0];
              else if (this.checkWin(this.gameField[0][0],this.gameField[1][0],this.gameField[2][0]))
                return this.gameField[0][0];
                else if (this.checkWin(this.gameField[0][1],this.gameField[1][1],this.gameField[2][1]))
                  return this.gameField[0][1];
                  else if (this.checkWin(this.gameField[0][2],this.gameField[1][2],this.gameField[2][2]))
                    return this.gameField[0][2];
                    else if (this.checkWin(this.gameField[0][0],this.gameField[1][1],this.gameField[2][2]))
                      return this.gameField[0][0];
                      else if (this.checkWin(this.gameField[2][0],this.gameField[1][1],this.gameField[0][2]))
                        return this.gameField[2][0];
                        else return  null;
    }

    checkWin(A,B,C) {
      if ((A==B)&&(B==C)&&(A!='-'))
        return true;
        else return false;
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
        if (this.noMoreTurns()&&(!this.getWinner()))
          return true;
          else return false;
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
