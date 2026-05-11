import AreaHelper from "./AreaHelper";

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
        <AreaHelper
          id="summary"
          rows="5"
          labelText="Summary"
          hidden={true}
          data={data}
          handleChange={handleChange}
        />
      </form>
    );
  }
};

export default SummaryDisplayForm;
