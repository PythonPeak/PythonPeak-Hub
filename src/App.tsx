import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { AnimatedRoutes } from './components/AnimatedRoutes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
