import * as React from 'react'
import './components.css'
import type { SquareValue } from '../types';
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
