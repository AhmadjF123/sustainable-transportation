import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import SupportPage from "./Pages/SupportPage";
import MainLayout from "./Layouts/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/support", element: <SupportPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
