"use client";
import React, { createContext, useState, useEffect } from "react";

import Image from "next/image";
import ArrowBack from "@/img/ArrowBack.svg";
import Country from "@/components/CountryDetailItems";
import Border from "@/components/BorderCountries";
import { Link } from "react-router-dom";

function Details({ darkMode }) {
  const currentPath = window.location.pathname;
  let nombreRecibido = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  //console.log(nombreRecibido);
  const [datos, setDatos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/name/" + nombreRecibido
      );
      if (!response.ok) {
        throw new Error("Pais No Encontrado"); // Lanza un error si la respuesta no es exitosa
      }
      const jsonData = await response.json();
      if (jsonData) {
        //console.log("Si paso");
        setDatos(jsonData);
      }
    } catch (error) {
      alert(error.message); // Muestra una alerta con el mensaje de error
    }
  };

  useEffect(() => {
    fetchData();
  }, [nombreRecibido]);
  //console.log("Use state Buscar: " + nombreRecibido);
  const datose = datos[0];
  //console.log(datose);
  let nativeName = "";
  let currencies = "";
  let lenguajes;
  let border = "";
  if (datose) {
    nativeName = Object.values(datose.name.nativeName)[0].common;
    currencies = Object.values(datose.currencies)[0].name;
    lenguajes = datose.languages;
    border = datose.borders;
    console.log("border", border);
  }

  return (
    <section
      className={` w-full flex justify-center h-screen ${
        darkMode ? "bg-VeryDarkBlueBG  " : "bg-VeryLightGray "
      }`}
    >
      <section className="max-w-screen-xl lg:mx-20">
        <Link to="/" className=" block w-28">
          <button
            className={` flex items-center gap-5 rounded lg:ml-0 lg:py-2 lg:pl-7 lg:pr-11 lg:gap-2 lg:text-base shadow-pre mt-20 ml-14 px-12 py-2 text-f28 ${
              darkMode ? "bg-VeryDarkBlueBG text-White " : "bg-VeryLightGray "
            }`}
          >
            <Image
              src={ArrowBack}
              width={32}
              alt="Back"
              className={` lg:w-5 ${darkMode ? "invert  " : " "}`}
              priority
            />
            Back
          </button>
        </Link>
        {datos.map((items, index) => (
          <section
            key={index}
            className="mx-12 my-32 lg:grid grid-cols-2 lg:mx-0  lg:my-20 lg:gap-24 *:"
          >
            <div>
              <Image
                src={items.flags.svg}
                priority
                alt="Bandera"
                width={100}
                height={100}
                className="w-full "
              />
            </div>
            <div
              className={` my-16 lg:m-0 lg:flex lg:flex-col lg:justify-center ${
                darkMode ? " text-White " : " "
              }`}
            >
              <h3 className="text-5xl font-bold lg:text-f28">
                {items.name.common}
              </h3>
              <div className=" flex flex-col lg:flex-row lg:justify-between lg:gap-4">
                <div className="flex flex-col gap-4 lg:gap-2 mt-8 mb-8">
                  <span className="text-f28 lg:text-base">
                    <strong className="font-semibold">Name Native: </strong>
                    {nativeName}
                  </span>
                  <span className="text-f28 lg:text-base">
                    <strong className="font-semibold">Population: </strong>
                    {items.population}
                  </span>
                  <span className="text-f28 lg:text-base">
                    <strong className="font-semibold">Region: </strong>
                    {items.region}
                  </span>
                  <span className="text-f28 lg:text-base">
                    <strong className="font-semibold">Sub Region: </strong>
                    {items.subregion}
                  </span>
                  <span className="text-f28 lg:text-base">
                    <strong className="font-semibold">Capital: </strong>
                    {items.capital}
                  </span>
                </div>
                <div className="flex flex-col gap-4 lg:gap-2 mt-8 mb-8">
                  <span className="text-f28 lg:text-base">
                    <strong className="font-semibold">
                      Top Level Domain:{" "}
                    </strong>
                    {items.tld}
                  </span>
                  <span className="text-f28 lg:text-base">
                    <strong className="font-semibold">Currencies: </strong>
                    {currencies}
                  </span>
                  <span className="text-f28 lg:text-base">
                    <strong className="font-semibold">Languages: </strong>
                    <Country content={lenguajes} />
                  </span>
                </div>
              </div>
              <div className="mt-8 mb-8 lg:flex lg:items-center lg:gap-3">
                <h4 className="text-3xl font-semibold lg:text-xl ">
                  Border Countries
                </h4>

                <Border borderCountri={border} darkMode={darkMode} />
              </div>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}
export default Details;
