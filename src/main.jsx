import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster position='top-right' reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);
