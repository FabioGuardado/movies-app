import { ProvideAuth } from './context/authContext';
import AppRouter from './routes/AppRouter';
function App() {
  return (
    <ProvideAuth>
      <AppRouter />
    </ProvideAuth>
  );
}

export default App;
