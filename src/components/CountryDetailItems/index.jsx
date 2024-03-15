function CountryDetailItem({ content }) {
  //console.log(content);

  function formatObjectVal(params) {
    const objectValue = Object.values(params);
    //console.log(objectValue);
    return objectValue;
  }
  return (
    <>
      <span>
        {formatObjectVal(content).map((lng, index) => {
          return (
            <span key={index}>
              {lng}
              {", "}
            </span>
          );
        })}
      </span>
    </>
  );
}

export default CountryDetailItem;
