import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';

import Template from './app/template';
import Home from './app/routes/home/Home';
import Portfolio from './app/routes/portfolio/Portfolio';
import Servicios from './app/routes/servicios/Servicios';
import Product from './app/routes/product/Product';
import Nosotros from './app/routes/nosotros/Nosotros';
import Cotizar from './app/routes/cotizar/Cotizar';

const route = element => <Template>{element}</Template>

const router = createBrowserRouter([
  { path: '/', element: route(<Home />)},
  { path: '/portfolio', element: route(<Portfolio />)},
  { path: '/servicios', element: route(<Servicios />)},
  { path: '/product/:id', element: route(<Product />)},
  { path: '/nosotros', element: route(<Nosotros />)},
  { path: '/cotizar', element: route(<Cotizar />)},
  { path: '*', element: route('404')},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


