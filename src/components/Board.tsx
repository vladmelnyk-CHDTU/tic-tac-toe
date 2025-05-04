import { Cell } from '@/hooks/useTicTacToe';

interface BoardProps {
  board: Cell[];
  handleMove: (index: number) => void;
  winningCombination: number[];
}

const Board = ({ board, handleMove, winningCombination }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((cell, index) => {
        if (winningCombination.includes(index)) {
          return (
            <button
              key={index}
              className="w-16 h-16 border text-xl flex items-center justify-center !border-green-500"
              onClick={() => handleMove(index)}
            >
              {cell}
            </button>
          );
        }

        return (
          <button
            key={index}
            className="w-16 h-16 border text-xl flex items-center justify-center"
            onClick={() => handleMove(index)}
          >
            {cell}
          </button>
        );
      })}
    </div>
  );
};

export default Board;
