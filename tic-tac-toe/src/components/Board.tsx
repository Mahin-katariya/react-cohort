import * as React from 'react'
import type { SquareValue} from '../types';
import { Square } from './Square';
import './components.css'

function calculateWinner(squares: SquareValue[]): SquareValue{
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontals
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticals
        [0, 4, 8], [2, 4, 6]             // diagonals
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }


export const Board = () => {
    const [squares, setSquares] = React.useState<SquareValue[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = React.useState<boolean>(true);

    const handleSquareClick = (index: number) => {
      if(squares[index] || calculateWinner(squares) ) return; // if the square is already filled, do nothing.
      const copySquares = [...squares];

      // xIsNext ? copySquares[position] = 'X' : copySquares[position] = "O";
      // cleaner way to write the above ternary statement:
      copySquares[index] = xIsNext ? "X" : "O";
      setSquares(copySquares)
      setXIsNext(!xIsNext)
    }

    const handleResetGame = () => {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
    }

    let status: string;
    const winner = calculateWinner(squares);
    if(winner){
        status = `Winner is ${winner}`;
      }else if(!squares.includes(null)){
        status = "It's a draw!";
      }else{
        status = `Player is ${xIsNext ? "X" : "O"}`;
      }
  return (
    <div className="game-container">
      <div className="status">{status}</div>
      <div className="board-grid">
        {squares.map((square, index) => (
          <Square 
            key={index} 
            value={square} 
            onSquareClick={() => handleSquareClick(index)} 
          />
        ))}
      </div>
      <button className='reset-btn' onClick={handleResetGame}>Reset Game</button>
    </div>
  );
}
