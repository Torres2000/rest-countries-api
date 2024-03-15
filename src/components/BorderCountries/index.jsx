function BorderCountries({ borderCountri, darkMode }) {
  //console.log("Border Countri", borderCountri);

  function formatObjectVal(params) {
    const objectValue = Object.values(params);
    //console.log(objectValue);
    return objectValue;
  }
  return (
    <>
      <div className="flex gap-4 mt-9 lg:m-0">
        {borderCountri && borderCountri.length > 0 ? (
          formatObjectVal(borderCountri).map((border, i) => (
            <span
              key={i}
              className={` text-f24  shadow-pre text-center py-1 px-2 lg:py-2 lg:px-4 lg:text-base ${
                darkMode ? "bg-DarkBlue  " : "bg-VeryLightGray "
              }`}
            >
              {border}
            </span>
          ))
        ) : (
          <span
            className={` text-f24  shadow-pre text-center py-1 px-2 lg:py-2 lg:px-4 lg:text-base ${
              darkMode ? "bg-DarkBlue  " : "bg-VeryLightGray "
            }`}
          >
            No tiene fronteras
          </span>
        )}
      </div>
    </>
  );
}

export default BorderCountries;
