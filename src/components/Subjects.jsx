import Button from "./Button";
import Subject from "./Subject";

const subjectDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut`;

const Subjects = () => {
  return (
    <div className="main-container flex flex-col items-center justify-center mx-auto my-auto">
      <div className="upper-container text-center m-32">
        <h3>Subjects</h3>
        <h6 className="w-[524px]">{subjectDescription}</h6>
        <div className="button-container flex justify-center gap-[15px]">
          <Button text="Data Science" />
          <Button text="Core Science" />
          <Button text="Game Development" />
        </div>
      </div>
      <div className="subjects-container grid grid-cols-3 gap-[40px]">
        <Subject subjectCode="CS26111" subjectName="Theory of Automata" />
        <Subject subjectCode="CS26111" subjectName="Theory of Automata" />
        <Subject subjectCode="CS26111" subjectName="Theory of Automata" />
        <Subject subjectCode="CS26111" subjectName="Theory of Automata" />
        <Subject subjectCode="CS26111" subjectName="Theory of Automata" />
        <Subject subjectCode="CS26111" subjectName="Theory of Automata" />
      </div>
    </div>
  );
};

export default Subjects;
