const Row = function ({ type, id, labelText, data, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={data[id] || ""}
        onChange={handleChange}
      ></input>
    </div>
  );
};

const FormHelper = function ({ fields, data, handleChange }) {
  return (
    <form>
      {fields.map((field) => {
        return (
          <Row
            type={field.type}
            id={field.id}
            labelText={field.labelText}
            data={data}
            handleChange={handleChange}
          />
        );
      })}
    </form>
  );
};

export default FormHelper;
