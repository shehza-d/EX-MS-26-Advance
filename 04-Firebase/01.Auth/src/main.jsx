import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { protectedRoutes, unProtectedRoutes } from "./routes/AppRouter.jsx";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store/store.js";

const isLoggedIn = false; // Replace with your authentication logic
const routes = isLoggedIn ? protectedRoutes : unProtectedRoutes;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
    ,
  </Provider>
);
