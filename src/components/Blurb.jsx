const Blurb = function () {
  return (
    <div className="blurb container">
      <h1>Resume Builder</h1>
      <p>Welcome to the resume builder tool!</p>
      <p>
        This is a highly opinionated resume template built to take in and
        display information in a standardized format. For best results, complete
        at least one sub-item in each section. It does not save any data.
      </p>
      <p>Usage is simple:</p>
      <ul>
        <li>Enter your information</li>
        <li>Add / remove sub-items as needed</li>
        <li>Preview with a section's lock / unlock button</li>
        <li>Print to PDF to get a usable document</li>
      </ul>
      <p>
        Also works on mobile and entirely via keyboard navigation, try it out!
      </p>
    </div>
  );
};

export default Blurb;
