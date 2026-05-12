import FormHelper from "./FormHelper";
import Bullets from "./Bullets";
import "../../styles/workExperienceDisplayForm.css";

const formatDate = function (date) {
  return new Date(date + "T00:00").toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const WorkExperienceDisplayForm = function ({ isLocked, data, handleChange }) {
  let top;
  if (isLocked) {
    top = (
      <>
        <div className="subitem-header">
          <h3>{data.title}</h3>
          <p>
            {data.startDate && data.endDate
              ? `${formatDate(data.startDate)} - ${formatDate(data.endDate)}`
              : null}
          </p>
        </div>
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
    <div className="work-experience-item">
      {top}
      <Bullets isLocked={isLocked} />
    </div>
  );
};

export default WorkExperienceDisplayForm;
