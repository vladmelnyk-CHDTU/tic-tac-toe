import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import './index.css';
import TicTacToeProvider from './providers/TicTacToeProvider.tsx';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <TicTacToeProvider>
          <App />
        </TicTacToeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
