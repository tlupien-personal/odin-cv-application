const SummaryDisplayForm = function ({ isLocked, data, handleChange }) {
  if (isLocked) {
    return (
      <div>
        <p>{data.summary}</p>
      </div>
    );
  } else {
    return (
      <div>
        <label for="summary">Summary: </label>
        <textarea
          id="summary"
          name="summary"
          rows="5"
          cols="60"
          onChange={handleChange}
        >
          {data.summary}
        </textarea>
      </div>
    );
  }
};

export default SummaryDisplayForm;
