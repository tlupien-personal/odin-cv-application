import Container from "./Container";
import Expandable from "./Expandable.jsx";
import FormDisplay from "./FormDisplay";
import Lockable from "./Lockable.jsx";

const Resume = function () {
  const renderFormDisplay = (isLocked) => <FormDisplay isLocked={isLocked} />;
  return (
    <>
      <Container className="red" leafType="1" heading="Type 1 Section">
        <Lockable renderItem={renderFormDisplay} />
      </Container>
      <Container className="blue" leafType="2" heading="Type 2 Section">
        <Lockable
          renderItem={(isLocked) => (
            <Expandable isLocked={isLocked} renderItem={renderFormDisplay} />
          )}
        />
      </Container>
    </>
  );
};

export default Resume;
