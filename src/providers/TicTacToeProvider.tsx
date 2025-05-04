import useTicTacToe from '@/hooks/useTicTacToe';
import React, { useContext } from 'react';

const initialValue = {
  board: [],
  isXNext: false,
  handleMove: () => {},
  changeMode: () => {},
  resetGame: () => {},
  winner: null,
  score: { X: 0, O: 0 },
  resetBoard: () => {},
  winningCombination: [],
  mode: 'player'
} satisfies ReturnType<typeof useTicTacToe>;

const TicTacToeContext = React.createContext<ReturnType<typeof useTicTacToe>>(initialValue);

const TicTacToeProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    board,
    handleMove,
    changeMode,
    resetGame,
    winner,
    score,
    resetBoard,
    winningCombination,
    mode,
    isXNext
  } = useTicTacToe();

  const value = {
    board,
    isXNext,
    handleMove,
    changeMode,
    resetGame,
    winner,
    score,
    resetBoard,
    winningCombination,
    mode
  };

  return <TicTacToeContext.Provider value={value}>{children}</TicTacToeContext.Provider>;
};

const useTicTacToeContext = () => {
  const ctx = useContext(TicTacToeContext);

  return ctx;
};

export { TicTacToeProvider, useTicTacToeContext };

export default TicTacToeProvider;
