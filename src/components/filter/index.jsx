"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

import down from "../img/down.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const navigation = [
  { name: "Africa", href: "#inicio", current: true },
  { name: "America", href: "#sobreMi", current: false },
  { name: "Asia", href: "#habilidades", current: false },
  { name: "Europe", href: "#curriculum", current: false },
  { name: "Oceania", href: "#portfolio", current: false },
];
function FilterRegion() {
  return (
    <Menu as="div" className="relative inline-block text-left mt-20 w-96">
      <div>
        <Menu.Button className=" flex justify-between items-center w-full gap-x-1.5 rounded-md bg-White px-12 py-7 text-f24 font-semibold text-gray-900 shadow  hover:bg-gray-50">
          Filter by Region
          <Image src={down} alt="down" width={32} priority />
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
        <Menu.Items className=" right-0 z-10 mt-2 px-12 origin-top-right rounded-md bg-White shadow  focus:outline-none">
          <div className="flex flex-col gap-3 py-6">
            {navigation.map((item, index) => (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900 " : "text-gray-700",
                      "block  text-f24"
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
export default FilterRegion;
