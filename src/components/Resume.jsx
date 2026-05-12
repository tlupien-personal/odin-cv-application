import Container from "./Container";
import Expandable from "./Expandable.jsx";
import FormDisplay from "./FormDisplay";
import Lockable from "./Lockable.jsx";
import { PrintContext } from "./PrintContext.js";
import { useState, useEffect } from "react";
import "../styles/print.css";
import Blurb from "./Blurb.jsx";

const Resume = function () {
  const renderFormDisplay = (isLocked) => <FormDisplay isLocked={isLocked} />;

  const [printOverride, setPrintOverride] = useState(false);

  useEffect(() => {
    const onBefore = () => setPrintOverride(true);
    const onAfter = () => setPrintOverride(false);

    window.addEventListener("beforeprint", onBefore);
    window.addEventListener("afterprint", onAfter);

    return () => {
      window.removeEventListener("beforeprint", onBefore);
      window.removeEventListener("afterprint", onAfter);
    };
  }, []);

  return (
    <PrintContext value={printOverride}>
      <Blurb />
      <Container
        className="contact-info"
        leafType="contactInfo"
        heading="Contact Info"
      >
        <Lockable renderItem={renderFormDisplay} />
      </Container>
      <Container className="summary" leafType="summary" heading="Summary">
        <Lockable renderItem={renderFormDisplay} />
      </Container>
      <Container className="portfolio" leafType="portfolio" heading="Portfolio">
        <Lockable
          renderItem={(isLocked) => (
            <Expandable isLocked={isLocked} renderItem={renderFormDisplay} />
          )}
        />
      </Container>
      <Container
        className="work-experience"
        leafType="workExperience"
        heading="Work Experience"
      >
        <Lockable
          renderItem={(isLocked) => (
            <Expandable isLocked={isLocked} renderItem={renderFormDisplay} />
          )}
        />
      </Container>
      <Container className="education" leafType="education" heading="Education">
        <Lockable
          renderItem={(isLocked) => (
            <Expandable isLocked={isLocked} renderItem={renderFormDisplay} />
          )}
        />
      </Container>
      <Container className="skills" leafType="skills" heading="Skills">
        <Lockable
          renderItem={(isLocked) => (
            <Expandable isLocked={isLocked} renderItem={renderFormDisplay} />
          )}
        />
      </Container>
    </PrintContext>
  );
};

export default Resume;
