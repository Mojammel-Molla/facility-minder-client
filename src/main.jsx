import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="md:max-w-screen-2xl mx-auto">
      <RouterProvider router={Router} />
    </div>
  </React.StrictMode>
);
