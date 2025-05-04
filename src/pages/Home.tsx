import Board from '@/components/Board';
import { useTicTacToeContext } from '@/providers/TicTacToeProvider';

function Home() {
  const context = useTicTacToeContext();

  // if (!context) {
  //   throw new Error('useContext(TicTacToeContext) must be used within a TicTacToeProvider');
  // }

  const { board, handleMove, resetGame, winner, score, resetBoard, winningCombination } = context;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex gap-4">
        {/* <button
          className={mode === 'player' ? 'text-green-500' : ''}
          onClick={() => changeMode('player')}
        >
          Грати з другом
        </button>
        <button
          className={mode === 'bot' ? 'text-green-400' : ''}
          onClick={() => changeMode('bot')}
        >
          Грати з ботом
        </button>
        <div className="border border-white" /> */}
        <button className=" text-white" onClick={resetGame}>
          Нова гра
        </button>
      </div>

      <div className="flex gap-4">
        <p className={winner === 'X' ? 'text-green-500' : ''}>Крести: {score.X}</p>
        <p className={winner === 'O' ? 'text-green-500' : ''}>Нулі: {score.O}</p>
      </div>

      <Board board={board} handleMove={handleMove} winningCombination={winningCombination} />

      {winner && (
        <div className="flex gap-4 items-center">
          <button onClick={resetBoard}>Продовжити</button>
          <p className="text-lg font-bold ">
            {winner === 'Draw' ? 'Нічия!' : `Переміг: ${winner}`}
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
