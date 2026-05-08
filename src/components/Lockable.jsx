import { useState } from "react";
import IconButton from "./IconButton";

const Lockable = function ({ renderItem }) {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div>
      {renderItem(isLocked)}
      <IconButton
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
