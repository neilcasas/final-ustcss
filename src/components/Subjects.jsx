import Button from "./Button";
import Subject from "./Subject";

const subjectDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut`;

const Subjects = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto my-auto">
      <div className="text-center">
        <h3>Subjects</h3>
        <h6>{subjectDescription}</h6>
        <div className="flex justify-center space-x-2">
          <Button text="Data Science" />
          <Button text="Core Science" />
          <Button text="Game Development" />
        </div>
      </div>
      <div className="subjects-container">
        <Subject subjectName="CS" />
        <Subject subjectName="CS" />
        <Subject subjectName="CS" />
        <Subject subjectName="CS" />
        <Subject subjectName="CS" />
        <Subject subjectName="CS" />
      </div>
    </div>
  );
};

export default Subjects;
