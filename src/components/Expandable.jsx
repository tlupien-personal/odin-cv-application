import { useState } from "react";
import IconButton from "./IconButton";

const Expandable = function ({ isLocked, renderItem }) {
  const [items, setItems] = useState([crypto.randomUUID()]);

  const addItem = function () {
    setItems([...items, crypto.randomUUID()]);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item}>
          {renderItem(isLocked)}
          {!isLocked && (
            <IconButton
              iconName="delete"
              handleClick={() => setItems(items.filter((i) => i !== item))}
            />
          )}
        </div>
      ))}
      {!isLocked && <IconButton iconName="add" handleClick={() => addItem()} />}
    </div>
  );
};

export default Expandable;
