import React, { useContext } from "react";
import { DataContext } from "../../context/index";
import Image from "next/image";
import { Link } from "react-router-dom";
import Details from "@/pages/Details";

const MyComponent = ({ darkMode }) => {
  const { data } = useContext(DataContext);
  return (
    <section className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-x-11 items-center xl:justify-between ">
      {data.map((item, index) => (
        <Link key={index} to={`/details/${item.name.common}`}>
          <div
            key={index}
            className={` mt-12  rounded-lg pb-1 w-11/12 md:w-64 shadow cursor-pointe ${
              darkMode ? "bg-DarkBlue text-White  " : "bg-VeryLightGray "
            }`}
          >
            <Image
              src={item.flags.svg}
              alt={"Bandera de " + item.name.common}
              priority
              width={0}
              height={0}
              className="object-cover rounded-t-lg w-full md:h-40 max-h-80"
            />
            <div
              className={` ml-8 my-8 sm:mt-12 sm:ml-12 sm:mb-24 md:mt-4 md:ml-4 md:mb-12 ${
                darkMode ? " text-White  " : "bg-VeryLightGray "
              }`}
            >
              <h2 className="mb-4 text-xl sm:text-xl font-bold">
                {item.name.common}
              </h2>
              <div>
                <div>
                  <strong className="text-base sm:text-1xl lg:text-base font-semibold">
                    Population:{" "}
                  </strong>
                  <span className="text-base sm:text-1xl lg:text-base">
                    {item.population}
                  </span>
                </div>
                <div>
                  <strong className="text-base sm:text-1xl lg:text-base font-semibold">
                    Región:{" "}
                  </strong>
                  <span className="text-base sm:text-1xl lg:text-base">
                    {item.region}
                  </span>
                </div>
                <div>
                  <strong className="text-base sm:text-1xl lg:text-base font-semibold">
                    Capital:{" "}
                  </strong>
                  <span className="text-base sm:text-1xl lg:text-base">
                    {item.capital}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default MyComponent;
