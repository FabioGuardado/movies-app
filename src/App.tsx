import { ProvideAuth } from './context/authContext';
import { AlertProvider } from './context/alertContext';
import AppRouter from './routes/AppRouter';
import Alert from './components/UI/Alert/Alert';
function App() {
  return (
    <ProvideAuth>
      <AlertProvider>
        <AppRouter />
        <Alert />
      </AlertProvider>
    </ProvideAuth>
  );
}

export default App;
