import FormHelper from "./FormHelper";
import "../../styles/skillDisplayForm.css";

const SkillDisplayForm = function ({ isLocked, data, handleChange }) {
  if (isLocked) {
    return <p>{data.skill}</p>;
  } else {
    return (
      <form>
        <FormHelper
          fields={[{ id: "skill", labelText: "Skill", type: "text" }]}
          data={data}
          handleChange={handleChange}
        />
      </form>
    );
  }
};

export default SkillDisplayForm;
