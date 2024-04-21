import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Index from "./pages/Index.tsx";
import Product from "./pages/Product.tsx";
import Result from "./pages/Result.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route path="" element={<Index />} />
            <Route path="product" element={<Product />} />
            <Route path='/product/result' element={<Result />} />
          </Route>
        )
      )}
    />
  </React.StrictMode>
);
