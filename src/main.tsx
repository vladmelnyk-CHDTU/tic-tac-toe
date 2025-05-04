import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx';
import './index.css';
import TicTacToeProvider from './providers/TicTacToeProvider.tsx';
import { persistor, store } from './store/store.ts';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TicTacToeProvider>
            <App />
          </TicTacToeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
