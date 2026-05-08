import { useContext, useState } from "react";
import { SectionContext } from "./SectionContext";
import ContactInfoDisplayForm from "./specifics/ContactInfoDisplayForm";
import SummaryDisplayForm from "./specifics/SummaryDisplayForm";

const FormDisplay = function ({ isLocked }) {
  const leafType = useContext(SectionContext);
  const [data, setData] = useState({});

  const handleChange = function (e) {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  switch (leafType) {
    case "contactInfo":
      return (
        <ContactInfoDisplayForm
          isLocked={isLocked}
          data={data}
          handleChange={handleChange}
        />
      );
    case "summary":
      return (
        <SummaryDisplayForm
          isLocked={isLocked}
          data={data}
          handleChange={handleChange}
        />
      );
    default:
      return null;
  }
};

export default FormDisplay;
