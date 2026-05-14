# Tic-Tac-Toe

## Core Logic Flow

The game operates on a unidirectional data flow, ensuring the UI stays perfectly in sync with the game state:

1.  **State Representation**: The board is modeled as a linear array of 9 elements (`SquareValue[]`), allowing for simple mapping and index-based lookups.
2.  **Move Validation (Guardrails)**:
    *   **Occupancy Check**: Prevents overwriting a square that already contains 'X' or 'O'.
    *   **Conclusion Check**: Freezes the board once a winner is declared or a draw is reached, preventing post-game modifications.
3.  **Derived Logic**: Instead of storing the winner in the state, the game calculates the winner and game status dynamically on **every render**. This ensures the "Source of Truth" remains the `squares` array.
4.  **Winning Algorithm**: Uses a predefined list of winning coordinate patterns (rows, columns, and diagonals) to evaluate the board state.

## Technical Stack

*   **React**: Functional components and Hooks (`useState`).
*   **TypeScript**: Custom types and interfaces for strict type safety (`SquareValue`, `SquareProps`).
*   **CSS Grid**: Utilized for a responsive, 3x3 layout with gray-shaded column gaps instead of traditional borders.

## Project Structure

```text
src/
├── components/
│   ├── Board.tsx   # Manages game logic, turn state, and win conditions
│   └── Square.tsx  # Pure UI component for individual board tiles
├── types/
│   └── index.ts    # Shared SquareValue ('X' | 'O' | null)
└── App.css         # Minimalist black & white styling

