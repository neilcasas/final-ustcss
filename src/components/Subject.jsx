import placeholder from "../assets/placeholder.png";
import Button from "./Button";

const Subject = (props) => {
  return (
    <div className="main-container bg-neutralltgray w-[413px] h-[473px] rounded-2xl">
      <img
        className="w-[413px] h-[313px] rounded-2xl"
        src={placeholder}
        alt={props.subjectCode}
      />
      <div className="interactive-container p-4">
        <div className="text-container">
          <h6 className="text-primary font-bold">{props.subjectCode}</h6>
          <h6>{props.subjectName.toUpperCase()}</h6>
        </div>
        <div className="flex place-content-end">
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default Subject;
