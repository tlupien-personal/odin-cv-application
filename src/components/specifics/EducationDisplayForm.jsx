/*
Now, the learned reviewer might say to themselves,

"Gee Tim, this is literally an exact copy/paste of WorkExperienceDisplayForm.jsx
with 2 fields renamed. Why not make a component that you can re-use in both?"

To which I respond that I considered it and attributed the similarity of these
components to my own design choices about resumes. In anticipation of hypothetical
situations like lack of creative control or change in requirements (be it from
management, a client, what have you), I chose to leave the components decoupled.
*/

import FormHelper from "./FormHelper";
import Bullets from "./Bullets";
import "../../styles/educationDisplayForm.css";

const formatDate = function (date) {
  return new Date(date).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const EducationDisplayForm = function ({ isLocked, data, handleChange }) {
  let top;
  if (isLocked) {
    top = (
      <>
        <div className="subitem-header">
          <h3>{data.university}</h3>
          <p>
            {data.startDate && data.endDate
              ? `${formatDate(data.startDate)} - ${formatDate(data.endDate)}`
              : null}
          </p>
        </div>
        <p>{data.major}</p>
      </>
    );
  } else {
    top = (
      <form>
        <FormHelper
          fields={[
            { id: "university", labelText: "University", type: "text" },
            { id: "startDate", labelText: "Start Date", type: "date" },
            { id: "endDate", labelText: "End Date", type: "date" },
            { id: "major", labelText: "Major", type: "text" },
          ]}
          data={data}
          handleChange={handleChange}
        />
      </form>
    );
  }

  return (
    <div className="education-item">
      {top}
      <Bullets isLocked={isLocked} />
    </div>
  );
};

export default EducationDisplayForm;
