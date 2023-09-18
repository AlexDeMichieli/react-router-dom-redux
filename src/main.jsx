import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import Home from './components/Home.jsx';
import SearchResults from './components/SearchResults.jsx';
import Cocktail from './components/Cocktail.jsx';
import Favs from './components/Favs.jsx';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/search/:i',
        element: <SearchResults />,
      },
      {
        path: '/cocktail/:i',
        element: <Cocktail />,
      },
      {
        path: '/favs',
        element: <Favs />,
      },

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
