import { SectionContext } from "./SectionContext";
import "../styles/container.css";

const Container = function ({ heading, leafType, className, children }) {
  return (
    <div className={`container ${className}`}>
      <h2>{heading}</h2>
      <div className={`section ${className}`}>
        <SectionContext value={leafType}>{children}</SectionContext>
      </div>
    </div>
  );
};

export default Container;
