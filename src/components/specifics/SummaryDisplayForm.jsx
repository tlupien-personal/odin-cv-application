const SummaryDisplayForm = function ({ isLocked, data, handleChange }) {
  if (isLocked) {
    return (
      <div>
        <p>{data.summary}</p>
      </div>
    );
  } else {
    return (
      <form className="exempt">
        <div>
          <label htmlFor="summary">Summary: </label>
          <textarea
            id="summary"
            name="summary"
            rows="5"
            cols="60"
            onChange={handleChange}
            value={data.summary}
          ></textarea>
        </div>
      </form>
    );
  }
};

export default SummaryDisplayForm;
