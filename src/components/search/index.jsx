"use client";
import React, { useContext } from "react";
import { useState } from "react";
import { DataContext } from "@/context";
import Image from "next/image";
import buscar from "@/img/buscar.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import down from "@/img/down.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const navigation = [
  { name: "Africa", href: "#inicio", current: true, region: "region/africa" },
  {
    name: "America",
    href: "#sobreMi",
    current: false,
    region: "region/america",
  },
  { name: "Asia", href: "#habilidades", current: false, region: "region/asia" },
  {
    name: "Europe",
    href: "#curriculum",
    current: false,
    region: "region/europe",
  },
  {
    name: "Oceania",
    href: "#portfolio",
    current: false,
    region: "region/oceania",
  },
];

function Search({ darkMode }) {
  const { setBuscar } = useContext(DataContext);
  const [textoInput, setTextoInput] = useState("");
  const valorInput = (event) => {
    // Actualiza el estado con el valor del input
    setTextoInput(event.target.value);
    // MOstramos por consola el valor de lo que escribimos en el input
    //console.log(textoInput);
  };
  const busacarPais = () => {
    //console.log("hiciste click en la lupa");
    setBuscar("name/" + textoInput);
  };

  return (
    <section className="lg:flex justify-between ">
      <section
        className={` flex  px-4 py-7 rounded-xl shadow  lg:px-7 lg:py-4 lg:w-2/5 ${
          darkMode ? "bg-DarkGray  " : "bg-VeryLightGray "
        }`}
      >
        <Image
          src={buscar}
          priority
          alt="Buscar"
          width={40}
          className="w-7 cursor-pointer"
          onClick={() => busacarPais()}
        />
        <input
          type="text"
          placeholder="Search for a country..."
          className={`w-full ml-1 sm:ml-12 lg:ml-4 text-base sm:text-f24 lg:text-sm focus:outline-none ${
            darkMode ? "bg-DarkGray text-White " : "bg-VeryLightGray "
          }`}
          onChange={valorInput}
        />
      </section>
      <Menu
        as="div"
        className="relative inline-block text-left mt-20 lg:mt-0 w-full sm:w-96 lg:w-48 "
      >
        <div>
          <Menu.Button
            className={` flex justify-between items-center w-full gap-x-1.5 lg:py-4 p-4 lg:px-4 lg:text-sm rounded-md  sm:px-12 sm:py-7 sm:text-f24 font-semibold text-gray-900 shadow  hover:bg-gray-50 ${
              darkMode ? "bg-DarkBlue text-White  " : "bg-VeryLightGray "
            }`}
          >
            Filter by Region
            <Image src={down} alt="Icon" width={32} className="w-4" priority />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute w-full right-0 z-10 mt-2 px-4 sm:px-12 origin-top-right rounded-md  shadow  focus:outline-none lg:py-4 lg:px-4 ${
              darkMode ? "bg-DarkBlue text-White  " : "bg-VeryLightGray "
            }`}
          >
            {navigation.map((item, index) => (
              <div
                className="flex flex-col gap-3 lg:gap-1.5 py-2 sm:py-6 lg:py-0"
                key={index}
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => setBuscar(item.region)}
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900 " : "text-gray-700",
                        "block  sm:text-f24 lg:text-base"
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </section>
  );
}
export default Search;
