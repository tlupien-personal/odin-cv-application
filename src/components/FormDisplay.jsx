import { useContext, useState } from "react";
import { SectionContext } from "./SectionContext";

const TestType1 = function ({ isLocked, data, handleChange }) {
  if (isLocked) {
    return (
      <div>
        <p>data (1): {data}</p>
      </div>
    );
  } else {
    return (
      <form>
        <label htmlFor="temp">Temp (1): </label>
        <input
          type="text"
          name="temp"
          id="temp"
          value={data}
          onChange={handleChange}
        ></input>
      </form>
    );
  }
};
const TestType2 = function ({ isLocked, data, handleChange }) {
  if (isLocked) {
    return (
      <div>
        <p>data (2): {data}</p>
      </div>
    );
  } else {
    return (
      <form>
        <label htmlFor="temp">Temp (2): </label>
        <input
          type="text"
          name="temp"
          id="temp"
          value={data}
          onChange={handleChange}
        ></input>
      </form>
    );
  }
};

const FormDisplay = function ({ isLocked }) {
  const leafType = useContext(SectionContext);
  const [data, setData] = useState("");
  // at some point, this will be an object, and each
  // field will get a version of handleChange that directs
  // it to the appropriate key

  const handleChange = function (e) {
    setData(e.target.value);
  };

  switch (leafType) {
    case "1":
      return (
        <TestType1
          isLocked={isLocked}
          data={data}
          handleChange={handleChange}
        />
      );
    case "2":
      return (
        <TestType2
          isLocked={isLocked}
          data={data}
          handleChange={handleChange}
        />
      );
    default:
      return null;
  }
};

export default FormDisplay;
