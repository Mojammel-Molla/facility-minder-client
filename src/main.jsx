import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';
import AuthProvider from './providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <div className=" md:mx-5">
            <RouterProvider router={Router} />
          </div>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
