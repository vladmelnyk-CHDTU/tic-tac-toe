import { useTicTacToeContext } from '@/providers/TicTacToeProvider';

const Settings = () => {
  const context = useTicTacToeContext();

  const { changeMode, mode } = context;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <button
        className={mode === 'player' ? 'text-green-500' : ''}
        onClick={() => changeMode('player')}
      >
        Грати з другом
      </button>
      <button className={mode === 'bot' ? 'text-green-400' : ''} onClick={() => changeMode('bot')}>
        Грати з ботом
      </button>
    </div>
  );
};

export default Settings;
