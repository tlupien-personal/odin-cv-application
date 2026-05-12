import FormHelper from "./FormHelper.jsx";

const ContactInfoDisplayForm = function ({ isLocked, data, handleChange }) {
  if (isLocked) {
    return (
      <div>
        <h1>
          {data.firstName} {data.lastName}
        </h1>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.city && data.state ? `${data.city}, ${data.state}` : null}</p>
      </div>
    );
  } else {
    return (
      <form>
        <FormHelper
          fields={[
            { id: "firstName", labelText: "First Name", type: "text" },
            { id: "lastName", labelText: "Last Name", type: "text" },
            { id: "email", labelText: "Email", type: "email" },
            { id: "phone", labelText: "Phone", type: "tel" },
            { id: "city", labelText: "City", type: "text" },
            { id: "state", labelText: "State", type: "text" },
          ]}
          data={data}
          handleChange={handleChange}
        />
      </form>
    );
  }
};

export default ContactInfoDisplayForm;
