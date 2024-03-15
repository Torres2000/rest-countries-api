"use client";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import { DataProvider } from "../context/index";
import Navbar from "../components/navbar";
import Principal from "../pages/Home";
import Details from "../pages/Details";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Principal darkMode={darkMode} /> },
      { path: "/details/:id", element: <Details darkMode={darkMode} /> },
    ]);
    return routes;
  };
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AppRoutes />
      </BrowserRouter>
    </DataProvider>
  );
}
