import "../../styles/areaHelper.css"

const AreaHelper = function ({ id, rows, labelText, hidden, data, handleChange }) {
  return (
    <div>
      <label htmlFor="summary" className={hidden && "sr-only"}>{labelText}</label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        onChange={handleChange}
        value={data[id]}
      ></textarea>
    </div>
  );
};

export default AreaHelper;
