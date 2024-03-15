"use client";
import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [buscar, setBuscar] = useState("all");

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/" + buscar);
      if (!response.ok) {
        throw new Error("Pais No Encontrado"); // Lanza un error si la respuesta no es exitosa
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      alert(error.message); // Muestra una alerta con el mensaje de error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  ////console.log("Use state Buscar: " + buscar);

  return (
    <DataContext.Provider value={{ data, setData, buscar, setBuscar }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
