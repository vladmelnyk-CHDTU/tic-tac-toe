import { WINNING_COMBINATIONS } from '@/constants/Combinations';
import { useEffect, useState } from 'react';

export type Players = 'X' | 'O';
export type Cell = Players | null;
export type Result = Players | 'Draw' | null;
export type Mode = 'player' | 'bot';

const initialScore: { [key in Players]: number } = { X: 0, O: 0 };

const useTicTacToe = () => {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [mode, setMode] = useState<Mode>('bot');
  const [winner, setWinner] = useState<Result>(null);
  const [score, setScore] = useState(initialScore);
  const [winningCombination, setWinningCombination] = useState<number[]>([]);

  useEffect(() => {
    if (mode === 'bot' && !isXNext && !winner) {
      const emptyCells = board
        .map((cell, idx) => (cell === null ? idx : null))
        .filter(idx => idx !== null);
      if (emptyCells.length > 0) {
        const randomMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        handleMove(randomMove);
      }
    }
  }, [isXNext, mode, winner]);

  function checkWinner(newBoard: Cell[]) {
    for (const [a, b, c] of WINNING_COMBINATIONS) {
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinningCombination([a, b, c]);
        return newBoard[a];
      }
    }
    return newBoard.includes(null) ? null : 'Draw';
  }

  function handleMove(index: number) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    setIsXNext(!isXNext);

    const currentWinner = checkWinner(newBoard);
    setWinner(currentWinner);
    if (currentWinner && currentWinner !== 'Draw') {
      incrementScore(currentWinner);
    }
  }

  function resetBoard() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningCombination([]);
  }

  function resetGame() {
    resetBoard();
    resetScore();
  }

  function incrementScore(player: Players) {
    setScore(prevScore => {
      return {
        ...prevScore,
        [player]: prevScore[player] + 1
      };
    });
  }
  function resetScore() {
    setScore(initialScore);
  }

  function changeMode(mode: Mode) {
    setMode(mode);
    resetGame();
  }

  return {
    board,
    mode,
    isXNext,
    winner,
    score,
    handleMove,
    resetGame,
    changeMode,
    resetBoard,
    winningCombination
  };
};

export default useTicTacToe;
