const Row = function ({ type, id, labelText, data, handleChange, idx }) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={data[id] || ""}
        onChange={handleChange}
        // to go to first field on keyboard use of add button
        autoFocus={idx === 0}
      ></input>
    </>
  );
};

const FormHelper = function ({ fields, data, handleChange }) {
  return (
    <>
      {fields.map((field, idx) => {
        return (
          <Row
            key={field.id}
            type={field.type}
            id={field.id}
            labelText={field.labelText}
            data={data}
            handleChange={handleChange}
            idx={idx}
          />
        );
      })}
    </>
  );
};

export default FormHelper;
