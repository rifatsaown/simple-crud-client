import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Users from "./Components/Users.jsx";
import "./index.css";
import Update from "./Components/Update.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/user/:id",
    element: <Update />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/user/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
