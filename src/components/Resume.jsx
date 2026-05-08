import Container from "./Container";
import Expandable from "./Expandable.jsx";
import FormDisplay from "./FormDisplay";
import Lockable from "./Lockable.jsx";

const Resume = function () {
  const renderLeaf = (leafType, isLocked) => (
    <FormDisplay leafType={leafType} isLocked={isLocked} />
  );
  return (
    <>
      <Container className="red" heading="Type 1 Section">
        <Lockable leafType="1" renderItem={renderLeaf} />
      </Container>
      <Container className="blue" heading="Type 2 Section">
        <Lockable
          leafType="2"
          renderItem={(leafType, isLocked) => (
            <Expandable
              leafType={leafType}
              isLocked={isLocked}
              renderItem={renderLeaf}
            />
          )}
        />
      </Container>
    </>
  );
};

export default Resume;
