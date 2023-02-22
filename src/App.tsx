import BattleScore from './pages/BattleScore';
import { queryClient } from './queryClient';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import battleScore from './pages/BattleScore';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: 'battleScore',
    element: <BattleScore />,
    children: [
      {
        path: ':id',
        element: <BattleScore />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
