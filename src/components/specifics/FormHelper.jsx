const Row = function ({ type, id, labelText, data, handleChange }) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={data[id] || ""}
        onChange={handleChange}
      ></input>
    </>
  );
};

const FormHelper = function ({ fields, data, handleChange }) {
  return (
    <>
      {fields.map((field) => {
        return (
          <Row
            key={field.id}
            type={field.type}
            id={field.id}
            labelText={field.labelText}
            data={data}
            handleChange={handleChange}
          />
        );
      })}
    </>
  );
};

export default FormHelper;
