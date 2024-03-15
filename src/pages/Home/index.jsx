"use client";
import Search from "../../components/search/index";
import Banderas from "../../components/banderas/index";

function Home({ darkMode }) {
  return (
    <>
      <main
        className={` flex justify-center  w-full  ${
          darkMode ? "bg-VeryDarkBlueBG  " : "bg-VeryLightGray "
        }`}
      >
        <section className="px-8 py-8 lg:px-20 xl:m-3 xl:px-0 max-w-screen-xl ">
          <Search darkMode={darkMode} />
          <Banderas darkMode={darkMode} />
        </section>
      </main>
    </>
  );
}
export default Home;
