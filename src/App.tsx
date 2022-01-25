import { ProvideAuth } from './context/authContext';
import { AlertProvider } from './context/alertContext';

import AppRouter from './routes/AppRouter';
import Alert from './components/UI/Alert/Alert';
import { ModalProvider } from './context/modalContext';
import MainModal from './components/UI/Modals/MainModal/MainModal';

function App() {
  return (
    <ProvideAuth>
      <ModalProvider>
        <AlertProvider>
          <AppRouter />
          <Alert />
          <MainModal />
        </AlertProvider>
      </ModalProvider>
    </ProvideAuth>
  );
}

export default App;
