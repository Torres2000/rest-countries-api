"use client";
import Search from "../search/index";
import Banderas from "../banderas/index";

function Contenido() {
  return (
    <>
      <main className=" bg-VeryLightGray  px-8 py-8 lg:px-6 xl:m-3 xl:px-0 max-w-screen-xl w-full ">
        <Search />
        <Banderas />
      </main>
    </>
  );
}
export default Contenido;
