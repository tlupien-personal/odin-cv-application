import { useState } from "react";
import FormHelper from "./FormHelper";
import Expandable from "../Expandable";
import "../../styles/bullets.css";
import SummaryDisplayForm from "./SummaryDisplayForm";

const Bullet = function ({ isLocked, data, handleChange, uuid }) {
  if (isLocked) {
    return <p>{data[uuid]}</p>;
  } else {
    return (
      <FormHelper
        fields={[{ id: `${uuid}`, labelText: "", type: "text" }]}
        data={data}
        handleChange={handleChange}
      />
      // <SummaryDisplayForm
      //   isLocked={isLocked}
      //   data={data}
      //   handleChange={handleChange}
      // />
    );
  }
};

const Bullets = function ({ isLocked }) {
  const [data, setData] = useState({});

  const handleChange = function (e) {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="bullets">
      {!isLocked && <h4>Statements</h4>}
      <Expandable
        isLocked={isLocked}
        renderItem={(isLocked, uuid) => (
          <Bullet
            isLocked={isLocked}
            data={data}
            handleChange={handleChange}
            uuid={uuid}
          />
        )}
      />
    </div>
  );
};

export default Bullets;
