import { useState } from "react";
import AreaHelper from "./AreaHelper";
import Expandable from "../Expandable";
import "../../styles/bullets.css";

const Bullet = function ({ isLocked, data, handleChange, uuid }) {
  if (isLocked) {
    return <>{data[uuid]}</>;
  } else {
    return (
      <form className="exempt">
        <AreaHelper
          id={uuid}
          rows="2"
          labelText="Bullet"
          hidden={true}
          data={data}
          handleChange={handleChange}
        />
      </form>
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
