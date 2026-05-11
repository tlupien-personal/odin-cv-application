import FormHelper from "./FormHelper";
import Bullets from "./Bullets";

const formatDate = function (date) {
  // TODO: implement this
  return date;
};

const WorkExperienceDisplayForm = function ({ isLocked, data, handleChange }) {
  let top;
  if (isLocked) {
    top = (
      <>
        <h3>{data.title}</h3>
        <p>
          {data.startDate && data.endDate
            ? `${formatDate(data.startDate)}-${formatDate(data.endDate)}`
            : null}
        </p>
        <p>{data.company}</p>
      </>
    );
  } else {
    top = (
      <form>
        <FormHelper
          fields={[
            { id: "title", labelText: "Title", type: "text" },
            { id: "startDate", labelText: "Start Date", type: "date" },
            { id: "endDate", labelText: "End Date", type: "date" },
            { id: "company", labelText: "Company", type: "text" },
          ]}
          data={data}
          handleChange={handleChange}
        />
      </form>
    );
  }

  return (
    <div>
      {top}
      <Bullets isLocked={isLocked} />
    </div>
  );
};

export default WorkExperienceDisplayForm;
