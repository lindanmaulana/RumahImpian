import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePages from "./Pages/HomePages.jsx";
import ErrorPage from "./404.jsx";
import App from "./App.jsx";
import LoginPages from "./Pages/Auth/LoginPages.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import RegisterPages from "./Pages/Auth/RegisterPages.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/register",
    element: <RegisterPages />
  },
  {
    path: "/contoh",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
