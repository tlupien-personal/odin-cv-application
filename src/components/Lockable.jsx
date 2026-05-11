import { useState } from "react";
import IconButton from "./IconButton";
import "../styles/lockable.css";

const Lockable = function ({ renderItem }) {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div className="lockable">
      {renderItem(isLocked)}
      <IconButton
        className="lockable"
        iconName={isLocked ? "unlock" : "lock"}
        handleClick={(e) => {
          e.preventDefault();
          setIsLocked(!isLocked);
        }}
      />
    </div>
  );
};

export default Lockable;
