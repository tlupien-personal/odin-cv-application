import { useContext, useState } from "react";
import IconButton from "./IconButton";
import "../styles/lockable.css";
import { PrintContext } from "./PrintContext";

const Lockable = function ({ renderItem }) {
  const [isLocked, setIsLocked] = useState(false);
  const printOverride = useContext(PrintContext);

  return (
    <div className="lockable">
      {renderItem(printOverride || isLocked)}
      <IconButton
        className="lockable-btn"
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
