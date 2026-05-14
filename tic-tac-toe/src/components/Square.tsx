import * as React from 'react'
import './components.css'

export type SquareValue = 'X' | 'O' | null;    
interface SquareProps{
    value: SquareValue;
    // a function type signature looks like this: (arguments) => ReturnType
    onSquareClick: () => void
}


export const Square: React.FC<SquareProps> = ({value, onSquareClick}) => {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}
