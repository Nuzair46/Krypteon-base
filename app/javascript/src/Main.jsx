import React from "react";
import Dashboard from "components/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = () => {
  const router = createBrowserRouter([{ path: "/", element: <Dashboard /> }]);

  return <RouterProvider router={router} />;
};

export default Main;
