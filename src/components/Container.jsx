import { SectionContext } from "./SectionContext";

const Container = function ({ heading, leafType, className, children }) {
  return (
    <div className="container">
      <h2>{heading}</h2>
      <div className={className}>
        <SectionContext value={leafType}>{children}</SectionContext>
      </div>
    </div>
  );
};

export default Container;
