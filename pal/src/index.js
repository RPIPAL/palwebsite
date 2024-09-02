import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Newsletter from "./pages/Newsletter.tsx";
import Socials from "./pages/Socials.tsx";
import Events from "./pages/Events.tsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({ reducer: rootReducer });
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/newsletter",
    element: <Newsletter />,
  },
  {
    path: "/social",
    element: <Socials />,
  },
  {
    path: "/events",
    element: <Events />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById("root")
);
