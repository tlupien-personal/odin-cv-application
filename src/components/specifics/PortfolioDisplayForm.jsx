import FormHelper from "./FormHelper.jsx";

const PortfolioDisplayForm = function ({ isLocked, data, handleChange }) {
  if (isLocked) {
    return (
      <div>
        <p>
          <a href={data.link}>{data.text}</a>
        </p>
        <p>{data.description}</p>
      </div>
    );
  } else {
    return (
      <form>
        <FormHelper
          fields={[
            { id: "text", labelText: "Name", type: "text" },
            { id: "link", labelText: "Link", type: "url" },
            { id: "description", labelText: "Description", type: "text" },
          ]}
          data={data}
          handleChange={handleChange}
        />
      </form>
    );
  }
};

export default PortfolioDisplayForm;
