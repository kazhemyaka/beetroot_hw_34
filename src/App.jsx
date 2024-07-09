import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sales from "./pages/Sales/Sales";
import Catalog from "./pages/Catalog/Catalog";
import Customers from "./pages/Customers/Customers";
import Reviews from "./pages/Reviews/Reviews";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "sales", element: <Sales /> },
        { path: "catalog", element: <Catalog /> },
        { path: "customers", element: <Customers /> },
        { path: "reviews", element: <Reviews /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename: "/beetroot_hw_34" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
