
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import queryClient from 'services/queryClient';
import { Navigation } from 'shared/Navigation';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
