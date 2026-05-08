import { useState } from "react";
import IconButton from "./IconButton";

const Lockable = function ({ leafType, renderItem }) {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div>
      {renderItem(leafType, isLocked)}
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
