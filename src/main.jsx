import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Home from "./components/Home.jsx";
import SearchResults from "./components/SearchResults.jsx";
import Cocktail from "./components/Cocktail.jsx";
import Favs from "./components/Favs.jsx";

// we use provider to let our App know about the store
import { Provider } from "react-redux";

import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search/:i",
        element: <SearchResults />,
      },
      {
        path: "/cocktail/:i",
        element: <Cocktail />,
      },
      {
        path: "/favs",
        element: <Favs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
