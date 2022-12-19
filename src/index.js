import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Quotes from "./routes/Quotes";
import Index from "./routes/Index";
import Root from "./routes/Root";
import List from "./routes/List";
//import App from "./App";
import { deleteComment, fetchComments, fetchLists } from "./api";
import { toast } from "react-toastify";
import About from "./routes/About";
import Incomplete from "./routes/Incomplete";
import Completed from "./routes/Completed";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
        loader({ params }) {
          return fetchLists();
        },
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/quote",
        element: <Quotes />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/list",
        element: <List />,
        children: [
          {
            path: "/list/incomplete",
            element: <Incomplete />,
          },
          {
            path: "/list/completed",
            element: <Completed />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
