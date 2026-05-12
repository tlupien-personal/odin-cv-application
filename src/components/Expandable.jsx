import { useState } from "react";
import IconButton from "./IconButton";
import "../styles/expandable.css";

const Expandable = function ({ isLocked, renderItem }) {
  const [items, setItems] = useState([crypto.randomUUID()]);

  const addItem = function () {
    setItems([...items, crypto.randomUUID()]);
  };

  return (
    <ul className={`expandable ${isLocked ? "locked" : "unlocked"}`}>
      {items.map((item) => (
        <li
          className={`expandable-row ${isLocked ? "locked" : "unlocked"}`}
          key={item}
        >
          {renderItem(isLocked, item)}
          {!isLocked && (
            <IconButton
              className="delete-btn"
              iconName="delete"
              handleClick={() => setItems(items.filter((i) => i !== item))}
            />
          )}
        </li>
      ))}
      {!isLocked && (
        <IconButton
          className="add-btn"
          iconName="add"
          handleClick={() => addItem()}
        />
      )}
    </ul>
  );
};

export default Expandable;
