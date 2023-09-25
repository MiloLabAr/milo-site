import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';

import Template from './app/template';
import Home from './app/routes/home/Home';

const route = element => <Template>{element}</Template>

const router = createBrowserRouter([
  { path: '/', element: route(<Home />)},
  { path: '*', element: route('404')},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


