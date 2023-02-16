import { QueryClientProvider } from 'react-query';
import BattleScore from './pages/BattleScore';
import { queryClient } from './queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BattleScore />
    </QueryClientProvider>
  );
}

export default App;
