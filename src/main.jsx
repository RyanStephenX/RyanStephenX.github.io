import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./components/Application/carts/cartApp.jsx";
import Checkout from "./components/Application/carts/checkout.jsx";
import UserLogin from "./userLog";

import { CheckoutFrame } from "./components/Application/checkOut/frames.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "userLog",
    element: <UserLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
