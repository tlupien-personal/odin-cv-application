import { useContext, useState } from "react";
import { SectionContext } from "./SectionContext";
import "../styles/formDisplay.css";
import ContactInfoDisplayForm from "./specifics/ContactInfoDisplayForm";
import SummaryDisplayForm from "./specifics/SummaryDisplayForm";
import PortfolioDisplayForm from "./specifics/PortfolioDisplayForm";

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
    case "portfolio":
      return (
        <PortfolioDisplayForm
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
