import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from './routes';


const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
     
       <RouterProvider router={routes}/>
    
    </QueryClientProvider>
  );
};

export default App;