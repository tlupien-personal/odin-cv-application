const Container = function ({ heading, className, children }) {
  return (
    <div className="container">
      <h2>{heading}</h2>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Container;
