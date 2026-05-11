import { useState } from "react";
import IconButton from "./IconButton";
import "../styles/expandable.css";

const Expandable = function ({ isLocked, renderItem }) {
  const [items, setItems] = useState([crypto.randomUUID()]);

  const addItem = function () {
    setItems([...items, crypto.randomUUID()]);
  };

  return (
    <div className="expandable">
      {items.map((item) => (
        <div className="expandable-row" key={item}>
          {renderItem(isLocked)}
          {!isLocked && (
            <IconButton
              className="delete-btn"
              iconName="delete"
              handleClick={() => setItems(items.filter((i) => i !== item))}
            />
          )}
        </div>
      ))}
      {!isLocked && (
        <IconButton
          className="add-btn"
          iconName="add"
          handleClick={() => addItem()}
        />
      )}
    </div>
  );
};

export default Expandable;
