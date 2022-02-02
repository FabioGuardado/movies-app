import { AuthProvider } from './context/authContext';
import { AlertProvider } from './context/alertContext';

import AppRouter from './routes/AppRouter';
import Alert from './components/UI/Alert/Alert';
import { ModalProvider } from './context/modalContext';
import MainModal from './components/UI/Modals/MainModal/MainModal';

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <AlertProvider>
          <AppRouter />
          <Alert />
          <MainModal />
        </AlertProvider>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
